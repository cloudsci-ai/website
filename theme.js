(() => {
  const root = document.documentElement;
  const button = document.querySelector(".theme-toggle");
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const printButton = document.querySelector("[data-print]");

  printButton?.addEventListener("click", () => window.print());

  if (!button) return;

  const currentTheme = () => root.dataset.theme || "light";

  const render = () => {
    const dark = currentTheme() === "dark";
    button.dataset.mode = dark ? "dark" : "light";
    button.setAttribute("aria-pressed", String(dark));
    button.setAttribute(
      "aria-label",
      `Switch to ${dark ? "light" : "dark"} theme`,
    );
    button.title = `Switch to ${dark ? "light" : "dark"} theme`;
    themeColor?.setAttribute("content", dark ? "#111923" : "#f7f8fc");
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

  document.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", () =>
      link.closest("details").removeAttribute("open"),
    );
  });

  render();
})();
