import { chapters } from "./course-data.js?v=20260525-summary";

const rootPath = document.body.dataset.root || "";
const chapterId = document.body.dataset.chapterId;
const chapter = chapters.find((item) => item.id === chapterId);
const content = document.querySelector("#chapterContent");
const loadedScripts = new Map();
let mathJaxPromise;

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const resolvePath = (path) => `${rootPath}${encodeURI(path).replaceAll("%2F", "/")}`;

function list(items) {
  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

if (!chapter) {
  content.innerHTML = `
    <section class="page-shell chapter-page">
      <a class="breadcrumb" href="${resolvePath("index.html#chapters")}">← 강의 목록으로</a>
      <div class="chapter-block">
        <h1>챕터를 찾을 수 없습니다</h1>
        <p>요청한 강의 페이지의 식별자가 현재 강의 데이터에 없습니다.</p>
      </div>
    </section>
  `;
} else {
  document.title = `${chapter.lecture} ${chapter.number}. ${chapter.title} | ML을 위한 기초 수학`;

  const sourceLinks = chapter.sourceLinks
    .map(([label, href]) => `<a class="source-pill" href="${resolvePath(href)}">${escapeHtml(label)}</a>`)
    .join("");

  const equations = chapter.equations
    .map(
      (equation) => `
        <article class="equation-card">
          <code>${escapeHtml(equation.formula)}</code>
          <p>${escapeHtml(equation.note)}</p>
        </article>
      `
    )
    .join("");

  const sections = chapter.sections
    .map(
      (section) => `
        <section class="chapter-block">
          <p class="section-label">Lecture note</p>
          <h2>${escapeHtml(section.heading)}</h2>
          <p>${escapeHtml(section.body)}</p>
        </section>
      `
    )
    .join("");

  const prevNext = getPrevNext(chapter.id);
  const htmlSource = chapter.sourceLinks.find(([label]) => label === "HTML");
  const introPoints = (chapter.introPoints || chapter.keyQuestions)
    .map((point) => `<span>${escapeHtml(point)}</span>`)
    .join("");
  const chapterVisual = chapter.visual
    ? `
      <figure class="chapter-intro-visual">
        <img src="${resolvePath(chapter.visual.src)}" alt="${escapeHtml(chapter.visual.alt)}" width="1280" height="720">
        <figcaption>${escapeHtml(chapter.visual.caption)}</figcaption>
      </figure>
    `
    : "";

  content.innerHTML = `
    <section class="page-shell chapter-page">
      <a class="breadcrumb" href="${resolvePath("index.html#chapters")}">← 강의 목록으로</a>
      <div class="chapter-hero">
        <aside class="chapter-side">
          <span class="topic-badge">${escapeHtml(chapter.category)}</span>
          <div class="chapter-number">${chapter.lecture.replace("Lecture ", "L")}-${chapter.number}</div>
          <h1>${escapeHtml(chapter.title)}</h1>
          <p>${escapeHtml(chapter.subtitle)}</p>
          <div class="mini-tags">
            ${chapter.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
          </div>
          <div class="source-links">${sourceLinks}</div>
        </aside>

        <article class="chapter-main">
          <section class="chapter-block chapter-intro">
            ${chapterVisual}
            <div class="chapter-intro-copy">
              <p class="section-label">${escapeHtml(chapter.lecture)} · 챕터 도입</p>
              <h2>${escapeHtml(chapter.introTitle || "이 장을 배우는 이유")}</h2>
              <p>${escapeHtml(chapter.intro || chapter.summary)}</p>
              <div class="intro-point-grid">
                ${introPoints}
              </div>
            </div>
          </section>

          <section class="chapter-block">
            <p class="section-label">Learning goals</p>
            <h2>학습 목표</h2>
            ${list(chapter.goals)}
          </section>

          <section class="chapter-block source-lecture-block">
            <div class="source-lecture-head">
              <div>
                <p class="section-label">Lecture note</p>
                <h2>강의노트 본문</h2>
              </div>
              ${htmlSource ? `<a class="text-link" href="${resolvePath(htmlSource[1])}">HTML 자료 열기</a>` : ""}
            </div>
            <p>
              이 장의 강의노트 본문입니다. 상단의 도입부와 학습 목표를 먼저 확인한 뒤,
              이어지는 본문에서 사례, 이론, 수식, 예제를 차례로 읽습니다.
            </p>
            <div class="reference-note-status" id="referenceNoteStatus">강의노트를 불러오는 중입니다.</div>
            <article class="reference-note-content" id="referenceNoteContent"></article>
          </section>

          ${sections}

          <section class="chapter-block">
            <p class="section-label">Mathematical core</p>
            <h2>핵심 수식과 해석</h2>
            <div class="equation-grid">${equations}</div>
          </section>

          <section class="chapter-block">
            <p class="section-label">Delivery plan</p>
            <h2>강의 진행 방식</h2>
            ${list(chapter.delivery)}
          </section>

          <section class="chapter-block next-steps-block">
            <p class="section-label">Further study</p>
            <h2>더 생각해 볼 지점</h2>
            <p>
              본문을 읽은 뒤에는 아래 질문으로 개념 사이의 연결을 다시 확인합니다.
              각 항목은 다음 장으로 넘어가기 전에 남겨 둘 작은 체크포인트입니다.
            </p>
            ${list(chapter.nextSteps)}
          </section>

          <nav class="chapter-nav" aria-label="이전/다음 챕터">
            ${prevNext.prev ? `<a class="button button-ghost" href="${resolvePath(prevNext.prev.detailPath)}">이전: ${escapeHtml(prevNext.prev.title)}</a>` : "<span></span>"}
            ${prevNext.next ? `<a class="button" href="${resolvePath(prevNext.next.detailPath)}">다음: ${escapeHtml(prevNext.next.title)}</a>` : "<span></span>"}
          </nav>
        </article>
      </div>
    </section>
  `;

  renderReferenceNote(chapter);
}

function getPrevNext(id) {
  const index = chapters.findIndex((item) => item.id === id);
  return {
    prev: index > 0 ? chapters[index - 1] : null,
    next: index >= 0 && index < chapters.length - 1 ? chapters[index + 1] : null
  };
}

async function renderReferenceNote(activeChapter) {
  const status = document.querySelector("#referenceNoteStatus");
  const mount = document.querySelector("#referenceNoteContent");
  const htmlSource = activeChapter.sourceLinks.find(([label]) => label === "HTML");

  if (!htmlSource) {
    status.textContent = "이 챕터에는 아직 연결된 강의노트 본문이 없습니다.";
    return;
  }

  const sourceUrl = resolvePath(htmlSource[1]);

  try {
    const response = await fetch(withFreshQuery(sourceUrl), { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const html = await response.text();
    const doc = new DOMParser().parseFromString(html, "text/html");
    const sourceContainer = doc.querySelector(".container") || doc.body;
    const clone = sourceContainer.cloneNode(true);

    clone.querySelectorAll("script, style").forEach((node) => node.remove());
    rewriteRelativeUrls(clone, new URL(sourceUrl, window.location.href));

    mount.innerHTML = clone.innerHTML;
    status.textContent = "강의노트를 불러왔습니다.";

    await loadAndRunSourceScripts(doc, sourceUrl);
    await typesetMath(mount);
  } catch (error) {
    status.textContent = `강의노트를 불러오지 못했습니다. 상단의 자료 링크에서 직접 확인해 주세요. (${error.message})`;
  }
}

function withFreshQuery(path) {
  const url = new URL(path, window.location.href);
  const pageVersion = new URLSearchParams(window.location.search).get("v");
  url.searchParams.set("v", pageVersion || Date.now().toString(36));
  return url.href;
}

function rewriteRelativeUrls(root, baseUrl) {
  root.querySelectorAll("[src]").forEach((node) => {
    const value = node.getAttribute("src");
    if (value && !isAbsoluteOrHash(value)) {
      node.setAttribute("src", new URL(value, baseUrl).href);
    }
  });

  root.querySelectorAll("a[href]").forEach((node) => {
    const value = node.getAttribute("href");
    if (!value) return;

    if (value.startsWith("#")) {
      return;
    }

    if (!isAbsoluteOrHash(value)) {
      node.setAttribute("href", new URL(value, baseUrl).href);
    }

    if (node.hostname && node.hostname !== window.location.hostname) {
      node.setAttribute("target", "_blank");
      node.setAttribute("rel", "noreferrer");
    }
  });
}

function isAbsoluteOrHash(value) {
  return /^(https?:|mailto:|tel:|#|data:)/i.test(value);
}

async function loadAndRunSourceScripts(doc, sourceUrl) {
  const scripts = [...doc.querySelectorAll("script")];

  for (const script of scripts) {
    const src = script.getAttribute("src");
    if (src) {
      const absoluteSrc = new URL(src, new URL(sourceUrl, window.location.href)).href;
      if (!shouldSkipSourceScript(absoluteSrc)) {
        await loadScriptOnce(absoluteSrc);
      }
    }
  }

  for (const script of scripts) {
    if (!script.getAttribute("src") && script.textContent.trim() && !shouldSkipSourceScript(script.textContent)) {
      runInlineScript(script.textContent);
    }
  }
}

function shouldSkipSourceScript(value) {
  return /mathjax/i.test(value);
}

function loadScriptOnce(src) {
  if (loadedScripts.has(src)) {
    return loadedScripts.get(src);
  }

  const promise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`script load failed: ${src}`));
    document.head.appendChild(script);
  });

  loadedScripts.set(src, promise);
  return promise;
}

function runInlineScript(code) {
  const originalAddEventListener = document.addEventListener.bind(document);

  document.addEventListener = (type, listener, options) => {
    if (type === "DOMContentLoaded") {
      window.setTimeout(() => listener.call(document, new Event("DOMContentLoaded")), 0);
      return undefined;
    }

    return originalAddEventListener(type, listener, options);
  };

  try {
    Function(code)();
  } finally {
    document.addEventListener = originalAddEventListener;
  }
}

async function typesetMath(root) {
  try {
    await ensureMathJax();
    if (window.MathJax?.typesetPromise) {
      await window.MathJax.typesetPromise([root]);
    }
  } catch {
    // MathJax is progressive enhancement; raw formulas remain readable if loading fails.
  }
}

function ensureMathJax() {
  if (window.MathJax?.typesetPromise) {
    return Promise.resolve(window.MathJax);
  }

  if (mathJaxPromise) {
    return mathJaxPromise;
  }

  window.MathJax = {
    tex: {
      inlineMath: [["$", "$"], ["\\(", "\\)"]],
      displayMath: [["$$", "$$"], ["\\[", "\\]"]]
    },
    svg: {
      fontCache: "global"
    }
  };

  mathJaxPromise = loadScriptOnce("https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js")
    .then(() => window.MathJax);

  return mathJaxPromise;
}
