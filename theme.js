(() => {
  const root = document.documentElement;
  const button = document.querySelector(".theme-toggle");
  const header = document.querySelector(".site-header");
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

  if (!button) return;

  const currentTheme = () => root.dataset.theme || (systemTheme.matches ? "dark" : "light");

  const render = () => {
    const dark = currentTheme() === "dark";
    button.dataset.mode = dark ? "dark" : "light";
    button.setAttribute("aria-pressed", String(dark));
    button.setAttribute("aria-label", `Switch to ${dark ? "light" : "dark"} theme`);
    button.title = `Switch to ${dark ? "light" : "dark"} theme`;
    themeColor?.setAttribute("content", dark ? "#151412" : "#faf9f5");
  };

  button.addEventListener("click", () => {
    const nextTheme = currentTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    try {
      localStorage.setItem("cloudsci-theme", nextTheme);
    } catch (error) {
      // Theme switching still works when storage is unavailable.
    }
    render();
  });

  systemTheme.addEventListener("change", () => {
    if (!root.dataset.theme) render();
  });

  render();

  if (header) {
    let scrollFrame;
    const renderHeader = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 48);
      scrollFrame = undefined;
    };

    window.addEventListener("scroll", () => {
      if (scrollFrame) return;
      scrollFrame = window.requestAnimationFrame(renderHeader);
    }, { passive: true });

    renderHeader();
  }
})();
