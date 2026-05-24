import { chapters } from "./course-data.js";

const rootPath = document.body.dataset.root || "";
const chapterId = document.body.dataset.chapterId;
const chapter = chapters.find((item) => item.id === chapterId);
const content = document.querySelector("#chapterContent");

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
          <section class="chapter-block chapter-lede">
            <p class="section-label">${escapeHtml(chapter.lecture)}</p>
            <h2>이 장에서 다루는 질문</h2>
            <p>${escapeHtml(chapter.summary)}</p>
            <div class="question-grid">
              ${chapter.keyQuestions.map((question) => `<span>${escapeHtml(question)}</span>`).join("")}
            </div>
          </section>

          <section class="chapter-block">
            <p class="section-label">Learning goals</p>
            <h2>학습 목표</h2>
            ${list(chapter.goals)}
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

          <section class="chapter-block audit-block">
            <p class="section-label">Content audit</p>
            <h2>보강 audit</h2>
            <p>
              현재 상세 페이지는 기존 강의노트 초안을 그대로 붙여 넣는 대신,
              공개 강의 페이지에서 먼저 보여 줄 핵심 설명과 보강 방향을 정리한 serving layer입니다.
            </p>
            ${list(chapter.audit)}
          </section>

          <nav class="chapter-nav" aria-label="이전/다음 챕터">
            ${prevNext.prev ? `<a class="button button-ghost" href="${resolvePath(prevNext.prev.detailPath)}">이전: ${escapeHtml(prevNext.prev.title)}</a>` : "<span></span>"}
            ${prevNext.next ? `<a class="button" href="${resolvePath(prevNext.next.detailPath)}">다음: ${escapeHtml(prevNext.next.title)}</a>` : "<span></span>"}
          </nav>
        </article>
      </div>
    </section>
  `;
}

function getPrevNext(id) {
  const index = chapters.findIndex((item) => item.id === id);
  return {
    prev: index > 0 ? chapters[index - 1] : null,
    next: index >= 0 && index < chapters.length - 1 ? chapters[index + 1] : null
  };
}
