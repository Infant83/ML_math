(function () {
  const endpoint = "https://infant83-public-metrics.infant83.workers.dev";
  const siteKey = "ml-math";
  const siteBase = "/ML_math";
  const widget = document.querySelector("[data-public-metrics-widget]");
  const isHttp = location.protocol === "https:" || location.protocol === "http:";

  if (!widget || !isHttp) {
    return;
  }

  const pagePath = canonicalProjectPath(location.pathname);
  const shouldRecord = location.origin === "https://infant83.github.io" && pagePath.startsWith(siteBase + "/");

  widget.dataset.state = "loading";

  const summaryPromise = shouldRecord ? sendHitOnce().then(loadSummary) : loadSummary();
  summaryPromise
    .then(renderMetrics)
    .catch(function () {
      widget.dataset.state = "error";
    });

  if (shouldRecord) {
    startEngagementTracking();
  }

  function canonicalProjectPath(rawPath) {
    let path = String(rawPath || "").trim();

    if (/^https?:\/\//i.test(path)) {
      try {
        path = new URL(path).pathname;
      } catch {
        path = "/";
      }
    }

    if (!path.startsWith("/")) {
      path = "/" + path;
    }

    path = path.replace(/\/index\.html$/i, "/");

    if (path === "/" || path === "/index.html") {
      return siteBase + "/";
    }

    if (path === siteBase) {
      return siteBase + "/";
    }

    if (!path.startsWith(siteBase + "/")) {
      path = siteBase + path;
    }

    return path.replace(/\/index\.html$/i, "/");
  }

  async function sendHitOnce() {
    const key = siteKey + "-hit:" + pagePath;
    try {
      if (sessionStorage.getItem(key)) {
        return;
      }
      sessionStorage.setItem(key, "1");
    } catch {
      // Privacy modes may block sessionStorage; the public page load can still be counted.
    }
    await postJson("/hit", { path: pagePath });
  }

  async function loadSummary() {
    const url = new URL(endpoint + "/summary");
    url.searchParams.append("site", siteKey);
    url.searchParams.append("path", pagePath);
    const response = await fetch(url.toString(), { method: "GET", mode: "cors", cache: "no-store" });
    if (!response.ok) {
      throw new Error("metrics_summary_failed");
    }
    return response.json();
  }

  async function postJson(route, payload, keepalive) {
    const response = await fetch(endpoint + route, {
      method: "POST",
      mode: "cors",
      cache: "no-store",
      keepalive: Boolean(keepalive),
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error("metrics_post_failed");
    }
    return response.json();
  }

  function renderMetrics(summary) {
    const site = (summary.sites || {})[siteKey] || {};
    const page = (summary.pages || {})[pagePath] || {};
    const views = site.views ?? page.views ?? 0;
    const average = site.averageActiveSeconds ?? page.averageActiveSeconds ?? 0;

    widget.dataset.state = "ready";
    setText("views", formatNumber(views));
    setText("average", formatDuration(average));
  }

  function setText(field, value) {
    const target = widget.querySelector('[data-metric-field="' + field + '"]');
    if (target) {
      target.textContent = value;
    }
  }

  function startEngagementTracking() {
    let lastTick = performance.now();
    let activeMs = 0;
    let maxScrollPercent = getScrollPercent();

    const tick = function () {
      const now = performance.now();
      if (document.visibilityState === "visible") {
        activeMs += now - lastTick;
      }
      lastTick = now;
      maxScrollPercent = Math.max(maxScrollPercent, getScrollPercent());
    };

    const flush = function (keepalive) {
      tick();
      const activeSeconds = Math.floor(activeMs / 1000);
      const scroll = Math.round(maxScrollPercent);
      if (activeSeconds < 5 && scroll < 25) {
        return;
      }
      activeMs = 0;
      maxScrollPercent = getScrollPercent();

      const payload = { path: pagePath, activeSeconds, maxScrollPercent: scroll };
      if (keepalive && navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });
        navigator.sendBeacon(endpoint + "/engagement", blob);
        return;
      }
      postJson("/engagement", payload, keepalive).catch(function () {});
    };

    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "hidden") {
        flush(true);
      } else {
        lastTick = performance.now();
      }
    });
    window.addEventListener("pagehide", function () { flush(true); });
    window.addEventListener("scroll", function () {
      maxScrollPercent = Math.max(maxScrollPercent, getScrollPercent());
    }, { passive: true });
    window.setInterval(function () { flush(false); }, 15000);
  }

  function getScrollPercent() {
    const doc = document.documentElement;
    const body = document.body;
    const scrollTop = window.scrollY || doc.scrollTop || body.scrollTop || 0;
    const scrollHeight = Math.max(body.scrollHeight, doc.scrollHeight);
    const viewport = window.innerHeight || doc.clientHeight || 0;
    if (scrollHeight <= viewport) {
      return 100;
    }
    return Math.min(100, Math.max(0, ((scrollTop + viewport) / scrollHeight) * 100));
  }

  function formatNumber(value) {
    return new Intl.NumberFormat("ko-KR").format(Number(value || 0));
  }

  function formatDuration(seconds) {
    const value = Number(seconds || 0);
    if (value <= 0) {
      return "-";
    }
    if (value < 60) {
      return Math.round(value) + "초";
    }
    return Math.round(value / 60) + "분";
  }
})();
