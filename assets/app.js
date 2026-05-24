import { categories, chapters, checklistItems, routeStages } from "./course-data.js";

const $ = (selector) => document.querySelector(selector);
const rootPath = document.body.dataset.root || "";
let activeCategory = "전체";

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const resolvePath = (path) => `${rootPath}${encodeURI(path).replaceAll("%2F", "/")}`;

function renderHeroPanel() {
  const counts = chapters.reduce((acc, chapter) => {
    acc[chapter.category] = (acc[chapter.category] || 0) + 1;
    return acc;
  }, {});

  $("#courseMap").innerHTML = `
    <div class="panel-heading">
      <p class="section-label">강의 구성</p>
      <h2>11개 챕터</h2>
    </div>
    <p class="role-summary">
      Lecture 1은 판별모델의 수학적 기초를, Lecture 2는 확률과 정보이론의 해석을 담당합니다.
      각 챕터는 별도 상세 페이지와 원천 강의노트로 연결됩니다.
    </p>
    <div class="tag-row" aria-label="주제별 챕터 수">
      ${Object.entries(counts)
        .map(([category, count]) => `<span class="tag">${category} ${count}</span>`)
        .join("")}
    </div>
  `;
}

function renderRoute() {
  $("#routeGrid").innerHTML = routeStages
    .map(
      (stage) => `
        <article>
          <span class="route-number">${stage.number}</span>
          <h3>${escapeHtml(stage.title)}</h3>
          <p>${escapeHtml(stage.body)}</p>
        </article>
      `
    )
    .join("");
}

function renderCategoryTabs() {
  $("#categoryTabs").innerHTML = categories
    .map(
      (category) => `
        <button class="topic-tab ${category === activeCategory ? "active" : ""}" type="button" data-category="${category}">
          ${category}
        </button>
      `
    )
    .join("");
}

function renderChapters() {
  const visible = activeCategory === "전체"
    ? chapters
    : chapters.filter((chapter) => chapter.category === activeCategory);

  $("#chapterGrid").innerHTML = visible
    .map((chapter) => {
      const tags = chapter.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");
      const sources = chapter.sourceLinks
        .slice(0, 2)
        .map(([label, href]) => `<a class="mini-link" href="${resolvePath(href)}">${label}</a>`)
        .join("");

      return `
        <article class="chapter-card" id="${chapter.id}">
          <div class="chapter-card-head">
            <div class="chapter-number">${chapter.lecture.replace("Lecture ", "L")}-${chapter.number}</div>
            <span class="topic-badge">${escapeHtml(chapter.category)}</span>
          </div>
          <h3>${escapeHtml(chapter.title)}</h3>
          <p>${escapeHtml(chapter.summary)}</p>
          <div class="chapter-meta">
            <p>${escapeHtml(chapter.goals[0])}</p>
            <div class="mini-tags">${tags}</div>
          </div>
          <div class="chapter-links">
            <a class="mini-link primary-link" href="${resolvePath(chapter.detailPath)}">상세 강의 페이지</a>
            ${sources}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderChecklist() {
  $("#learnerChecklist").innerHTML = checklistItems
    .map(([title, copy], index) => {
      const key = `ml-math-check-${index}`;
      const checked = window.localStorage.getItem(key) === "done" ? "checked" : "";
      return `
        <label class="check-item">
          <input type="checkbox" data-check-key="${key}" ${checked}>
          <span>
            <strong>${escapeHtml(title)}</strong>
            <span>${escapeHtml(copy)}</span>
          </span>
        </label>
      `;
    })
    .join("");
}

function attachEvents() {
  $("#categoryTabs").addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    activeCategory = button.dataset.category;
    renderCategoryTabs();
    renderChapters();
  });

  $("#learnerChecklist").addEventListener("change", (event) => {
    const checkbox = event.target.closest("[data-check-key]");
    if (!checkbox) return;

    if (checkbox.checked) {
      window.localStorage.setItem(checkbox.dataset.checkKey, "done");
    } else {
      window.localStorage.removeItem(checkbox.dataset.checkKey);
    }
  });

  $("#resetChecklist").addEventListener("click", () => {
    checklistItems.forEach((_, index) => window.localStorage.removeItem(`ml-math-check-${index}`));
    renderChecklist();
  });
}

function activateNav() {
  const navLinks = [...document.querySelectorAll(".nav-links a")];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
      });
    },
    { rootMargin: "-30% 0px -55% 0px", threshold: [0.08, 0.18, 0.32] }
  );

  sections.forEach((section) => observer.observe(section));
}

renderHeroPanel();
renderRoute();
renderCategoryTabs();
renderChapters();
renderChecklist();
attachEvents();
activateNav();
