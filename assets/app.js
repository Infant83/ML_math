const lectureOnePath = "Lecture-1%20%EC%84%A0%ED%98%95%EB%8C%80%EC%88%98,%20%EB%AF%B8%EC%A0%81%EB%B6%84,%20%ED%8C%90%EB%B3%84%EC%A0%81%EB%AA%A8%EB%8D%B8/";
const lectureTwoPath = "Lecture-2%20%EC%97%94%ED%8A%B8%EB%A1%9C%ED%94%BC,%20%EB%B2%A0%EC%9D%B4%EC%A7%80%EC%95%88,%20%EC%83%9D%EC%84%B1%EC%A0%81%EB%AA%A8%EB%8D%B8/";

const lenses = [
  {
    id: "geometry",
    name: "기하",
    summary: "데이터를 벡터 공간의 점과 방향으로 보고, 결정경계와 차원축소를 함께 읽습니다.",
    tags: ["feature space", "inner product", "PCA"],
    next: "Lecture 1의 1, 2, 6장을 먼저 읽으면 흐름이 가장 자연스럽습니다.",
    chapters: ["L1-1", "L1-2", "L1-6"],
    currentStep: 1
  },
  {
    id: "optimization",
    name: "최적화",
    summary: "모델 학습을 손실을 줄이는 반복 과정으로 보고, 그래디언트와 제약조건을 중심에 둡니다.",
    tags: ["gradient", "KKT", "regularization"],
    next: "Lecture 1의 3, 4, 5장을 이어서 읽으면 학습 알고리즘의 형태가 잡힙니다.",
    chapters: ["L1-3", "L1-4", "L1-5"],
    currentStep: 2
  },
  {
    id: "probability",
    name: "확률",
    summary: "예측값을 확률로 해석하고, 우도와 사전분포가 추정에 어떤 의미를 주는지 살핍니다.",
    tags: ["Bayes", "MLE", "MAP"],
    next: "Lecture 2의 1장을 읽은 뒤 Lecture 1의 로지스틱 회귀로 돌아오면 연결이 선명합니다.",
    chapters: ["L2-1", "L1-5"],
    currentStep: 3
  },
  {
    id: "information",
    name: "정보이론",
    summary: "엔트로피, 교차 엔트로피, KL divergence를 손실함수와 분포 차이의 언어로 다룹니다.",
    tags: ["entropy", "cross entropy", "KL"],
    next: "Lecture 2의 2장을 중심으로 로그손실과 분류 모델의 관계를 확인합니다.",
    chapters: ["L2-2", "L1-5"],
    currentStep: 3
  },
  {
    id: "decision",
    name: "의사결정",
    summary: "예측 확률을 실제 판단으로 바꾸기 위해 비용, 위험, 보정, 평가 기준을 함께 봅니다.",
    tags: ["Bayes risk", "GLM", "calibration"],
    next: "Lecture 2의 3장과 Lecture 1의 캡스톤을 함께 보면 평가와 해석으로 이어집니다.",
    chapters: ["L2-3", "L1-8"],
    currentStep: 4
  }
];

const workflow = [
  ["문제 설정", "X, y, 가설, 손실을 정합니다."],
  ["기하", "벡터와 행렬로 데이터 구조를 봅니다."],
  ["학습", "그래디언트로 손실을 줄입니다."],
  ["확률 판단", "예측 확률과 비용으로 결정합니다."]
];

const chapters = [
  {
    code: "L1-1",
    lecture: "Lecture 1",
    number: "1",
    title: "머신러닝의 기초와 판별 모형 소개",
    summary: "특성 공간, 가설 공간, 손실함수, 판별모형을 한 번에 정리합니다.",
    goal: "결정경계와 손실함수의 역할을 구분합니다.",
    links: [
      ["Markdown", `${lectureOnePath}chapter1_introduction_lecturenote.md`],
      ["HTML", `${lectureOnePath}chapter1_introduction_fixed.html`],
      ["PDF", `${lectureOnePath}chapter1_introduction_lecturenote.pdf`]
    ]
  },
  {
    code: "L1-2",
    lecture: "Lecture 1",
    number: "2",
    title: "선형대수 기초와 데이터 기하",
    summary: "벡터, 내적, 거리, 행렬, 고유분해, SVD를 데이터 구조 해석에 연결합니다.",
    goal: "행렬을 데이터 변환으로 설명합니다.",
    links: [
      ["Markdown", `${lectureOnePath}chapter2_linear_algebra_lecturenote.md`],
      ["HTML", `${lectureOnePath}chapter2_linear_algebra_revised.html`]
    ]
  },
  {
    code: "L1-3",
    lecture: "Lecture 1",
    number: "3",
    title: "미분, 최적화 기초",
    summary: "그래디언트, 야코비안, 헤시안과 경사하강법, 모멘텀, 뉴턴법을 다룹니다.",
    goal: "그래디언트를 손실 변화의 방향으로 해석합니다.",
    links: [
      ["Markdown", `${lectureOnePath}chapter3_optimization_lecturenote.md`],
      ["HTML", `${lectureOnePath}chapter3_optimization_lecturenote.html`],
      ["PDF", `${lectureOnePath}chapter3_optimization_lecturenote.pdf`]
    ]
  },
  {
    code: "L1-4",
    lecture: "Lecture 1",
    number: "4",
    title: "제약, 볼록최적화",
    summary: "라그랑주 승수, KKT, 투영 경사하강법, 볼록집합과 볼록함수를 정리합니다.",
    goal: "제약 최적화의 조건과 표준형을 설명합니다.",
    links: [
      ["Markdown", `${lectureOnePath}chapter4_Convex_Optimization_lecturenote.md`],
      ["HTML", `${lectureOnePath}chapter4_convex_optimization.html`]
    ]
  },
  {
    code: "L1-5",
    lecture: "Lecture 1",
    number: "5",
    title: "선형 모형과 분류, 회귀",
    summary: "선형회귀, 정규화, 로지스틱 회귀, 로짓과 평가 지표를 연결합니다.",
    goal: "로지스틱 회귀를 확률 예측 모델로 해석합니다.",
    links: [
      ["Markdown", `${lectureOnePath}chapter5_linear_models_lecturenote.md`],
      ["HTML", `${lectureOnePath}chapter5_linear_models.html`]
    ]
  },
  {
    code: "L1-6",
    lecture: "Lecture 1",
    number: "6",
    title: "차원축소와 데이터 구조 파악",
    summary: "PCA, 공분산, 투영과 재구성, SVD 관점의 저랭크 근사를 다룹니다.",
    goal: "주성분 방향과 재구성 오차를 설명합니다.",
    links: [
      ["Markdown", `${lectureOnePath}chapter6_dimensionality_reduction_lecturenote.md`],
      ["HTML", `${lectureOnePath}chapter6_dimensionality_reduction.html`]
    ]
  },
  {
    code: "L1-7",
    lecture: "Lecture 1",
    number: "7",
    title: "연쇄 미분과 신경망의 기초",
    summary: "계산 그래프, 순전파, 역전파, SGD, 미니배치, Adam의 개념을 설명합니다.",
    goal: "역전파를 연쇄법칙의 반복 적용으로 이해합니다.",
    links: [
      ["Markdown", `${lectureOnePath}chapter7_neural_networks_lecturenote.md`],
      ["HTML", `${lectureOnePath}chapter7_neural_networks.html`]
    ]
  },
  {
    code: "L1-8",
    lecture: "Lecture 1",
    number: "8",
    title: "Capstone: 날씨 데이터 로지스틱 회귀",
    summary: "전처리, 학습, ROC/AUC 평가, PCA 시각화를 하나의 실습 흐름으로 묶습니다.",
    goal: "분류 평가와 시각화를 함께 해석합니다.",
    links: [
      ["Markdown", `${lectureOnePath}chapter8_capstone_lecturenote.md`],
      ["HTML", `${lectureOnePath}chapter8_capstone.html`]
    ]
  },
  {
    code: "L2-1",
    lecture: "Lecture 2",
    number: "1",
    title: "확률의 기초와 베이즈적 사고",
    summary: "조건부 확률, 전확률정리, 베이즈 정리, MLE/MAP와 정규화를 연결합니다.",
    goal: "MAP와 L2 정규화의 연결을 설명합니다.",
    links: [
      ["Markdown", `${lectureTwoPath}chapter1_probability_bayesian_thinking_lecture_notes.md`],
      ["HTML", `${lectureTwoPath}chapter1_probability_bayesian_v2.html`],
      ["PDF", `${lectureTwoPath}chapter1_probability_bayesian_v2.pdf`]
    ]
  },
  {
    code: "L2-2",
    lecture: "Lecture 2",
    number: "2",
    title: "정보이론과 손실함수",
    summary: "정보량, 엔트로피, 교차 엔트로피, 로그우도, KL divergence를 다룹니다.",
    goal: "로그손실을 정보이론 관점에서 해석합니다.",
    links: [
      ["Markdown", `${lectureTwoPath}chapter2_information_theory_loss_functions_lecture_notes.md`],
      ["HTML", `${lectureTwoPath}chapter2_information_theory.html`],
      ["PDF", `${lectureTwoPath}chapter2_information_theory.pdf`]
    ]
  },
  {
    code: "L2-3",
    lecture: "Lecture 2",
    number: "3",
    title: "베이즈 의사결정과 판별",
    summary: "베이즈 위험, 비용민감 학습, GLM, calibration, 예측 확률 품질 평가를 다룹니다.",
    goal: "예측 확률의 calibration을 평가합니다.",
    links: [
      ["Markdown", `${lectureTwoPath}chapter3_bayesian_decision_lecture_notes.md`],
      ["HTML", `${lectureTwoPath}chapter3_bayesian_decision.html`],
      ["PDF", `${lectureTwoPath}chapter3_bayesian_decision.pdf`]
    ]
  }
];

const questions = [
  {
    id: "boundary",
    title: "결정경계는 어디에서 오나?",
    context: "선형대수의 내적과 로지스틱 회귀의 로짓은 같은 경계를 서로 다른 언어로 설명합니다.",
    choices: ["벡터와 내적을 먼저 확인한다", "바로 베이즈 위험으로 이동한다", "산출물 생성만 먼저 한다"],
    feedback: "좋습니다. Lecture 1의 2장과 5장을 연결하면 경계가 수식과 그림으로 동시에 보입니다."
  },
  {
    id: "loss",
    title: "왜 이 손실을 최소화하나?",
    context: "최적화 관점에서는 손실 표면을, 확률 관점에서는 음의 로그우도를 봅니다.",
    choices: ["그래디언트와 로그우도를 함께 본다", "평가지표만 외운다", "PCA부터 시작한다"],
    feedback: "핵심 연결입니다. Lecture 1의 3장, Lecture 2의 2장을 붙이면 손실의 의미가 또렷해집니다."
  },
  {
    id: "probability",
    title: "확률 예측은 언제 믿을 수 있나?",
    context: "정확도만으로는 예측 확률의 품질을 설명하기 어렵습니다. calibration과 비용을 봐야 합니다.",
    choices: ["보정과 베이즈 위험을 확인한다", "학습률만 바꿔본다", "벡터 norm만 비교한다"],
    feedback: "맞습니다. Lecture 2의 3장과 캡스톤을 연결하면 평가와 의사결정이 만납니다."
  }
];

const checklistItems = [
  ["특성 공간", "데이터를 벡터 공간의 점과 방향으로 설명할 수 있습니다."],
  ["손실과 학습", "그래디언트가 손실을 줄이는 업데이트로 이어지는 과정을 말할 수 있습니다."],
  ["확률 해석", "우도, 사전분포, MAP가 정규화와 연결되는 이유를 설명할 수 있습니다."],
  ["정보이론", "교차 엔트로피와 KL divergence가 분류 손실과 어떻게 연결되는지 이해합니다."],
  ["의사결정", "예측 확률을 비용, 위험, calibration 관점에서 점검할 수 있습니다."]
];

const $ = (selector) => document.querySelector(selector);

const currentLensName = $("#currentLensName");
const currentLensSummary = $("#currentLensSummary");
const currentLensTags = $("#currentLensTags");
const lensSwitcher = $("#lensSwitcher");
const heroLensSelect = $("#heroLensSelect");
const lensSelect = $("#lensSelect");
const chapterFocusSelect = $("#chapterFocusSelect");
const lensResult = $("#lensResult");
const workflowBoard = $("#workflowBoard");

let activeLens = lenses[0].id;

const getLens = () => lenses.find((lens) => lens.id === activeLens) || lenses[0];

function renderLensControls() {
  lensSwitcher.innerHTML = lenses
    .map((lens) => `<button class="lens-button" type="button" data-lens="${lens.id}">${lens.name}</button>`)
    .join("");

  const options = lenses.map((lens) => `<option value="${lens.id}">${lens.name}</option>`).join("");
  heroLensSelect.innerHTML = options;
  lensSelect.innerHTML = options;
  chapterFocusSelect.innerHTML = chapters
    .map((chapter) => `<option value="${chapter.code}">${chapter.code} ${chapter.title}</option>`)
    .join("");
}

function renderLens() {
  const lens = getLens();
  currentLensName.textContent = lens.name;
  currentLensSummary.textContent = lens.summary;
  currentLensTags.innerHTML = lens.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
  heroLensSelect.value = lens.id;
  lensSelect.value = lens.id;

  lensSwitcher.querySelectorAll(".lens-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lens === lens.id);
  });

  const firstChapter = chapters.find((chapter) => chapter.code === lens.chapters[0]) || chapters[0];
  chapterFocusSelect.value = firstChapter.code;
  lensResult.innerHTML = `
    <span class="result-status">${lens.name} 관점</span>
    <p class="result-copy">${lens.summary}</p>
    <p class="result-next">${lens.next}</p>
  `;

  workflowBoard.innerHTML = workflow
    .map(([title, copy], index) => `
      <li class="workflow-step ${index + 1 === lens.currentStep ? "current" : ""}">
        <strong>${title}</strong>
        <span>${copy}</span>
      </li>
    `)
    .join("");
}

function setLens(id) {
  activeLens = id;
  window.localStorage.setItem("ml-math-active-lens", id);
  renderLens();
}

function renderChapters() {
  $("#chapterGrid").innerHTML = chapters
    .map((chapter) => {
      const links = chapter.links
        .map(([label, href]) => `<a class="mini-link" href="${href}">${label}</a>`)
        .join("");

      return `
        <article class="chapter-card" id="${chapter.code.toLowerCase()}">
          <div class="chapter-number">${chapter.lecture.replace("Lecture ", "L")}-${chapter.number}</div>
          <h3>${chapter.title}</h3>
          <p>${chapter.summary}</p>
          <div class="chapter-meta">
            <p>${chapter.goal}</p>
            <span>${chapter.lecture}</span>
          </div>
          <div class="chapter-links">${links}</div>
        </article>
      `;
    })
    .join("");
}

function renderQuestions() {
  const questionSelect = $("#questionSelect");
  const focusTitle = $("#focusTitle");
  const focusContext = $("#focusContext");
  const focusChoices = $("#focusChoices");
  const focusFeedback = $("#focusFeedback");

  questionSelect.innerHTML = questions
    .map((question) => `<option value="${question.id}">${question.title}</option>`)
    .join("");

  const renderQuestion = () => {
    const question = questions.find((item) => item.id === questionSelect.value) || questions[0];
    focusTitle.textContent = question.title;
    focusContext.textContent = question.context;
    focusFeedback.textContent = "";
    focusChoices.innerHTML = question.choices
      .map((choice, index) => `<button class="choice-button" type="button" data-choice="${index}">${choice}</button>`)
      .join("");
  };

  questionSelect.addEventListener("change", renderQuestion);
  focusChoices.addEventListener("click", (event) => {
    const button = event.target.closest(".choice-button");
    if (!button) return;
    focusChoices.querySelectorAll(".choice-button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const question = questions.find((item) => item.id === questionSelect.value) || questions[0];
    focusFeedback.textContent = question.feedback;
  });

  renderQuestion();
}

function renderChecklist() {
  const container = $("#learnerChecklist");
  container.innerHTML = checklistItems
    .map(([title, copy], index) => {
      const key = `ml-math-check-${index}`;
      const checked = window.localStorage.getItem(key) === "done" ? "checked" : "";
      return `
        <label class="check-item">
          <input type="checkbox" data-check-key="${key}" ${checked}>
          <span>
            <strong>${title}</strong>
            <span>${copy}</span>
          </span>
        </label>
      `;
    })
    .join("");
}

function attachEvents() {
  lensSwitcher.addEventListener("click", (event) => {
    const button = event.target.closest("[data-lens]");
    if (button) setLens(button.dataset.lens);
  });

  [heroLensSelect, lensSelect].forEach((select) => {
    select.addEventListener("change", () => setLens(select.value));
  });

  chapterFocusSelect.addEventListener("change", () => {
    const chapter = chapters.find((item) => item.code === chapterFocusSelect.value);
    if (!chapter) return;
    lensResult.innerHTML = `
      <span class="result-status">${chapter.code}</span>
      <p class="result-copy">${chapter.title}</p>
      <p class="result-next">${chapter.goal}</p>
    `;
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

renderLensControls();
renderChapters();
renderQuestions();
renderChecklist();
attachEvents();
activateNav();

const savedLens = window.localStorage.getItem("ml-math-active-lens");
if (savedLens && lenses.some((lens) => lens.id === savedLens)) {
  activeLens = savedLens;
}
renderLens();
