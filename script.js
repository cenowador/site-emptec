document.getElementById("year").textContent = new Date().getFullYear();

const nav = document.getElementById("mainNav");
window.addEventListener("scroll", () =>
  nav.classList.toggle("scrolled", window.scrollY > 12),
);

document.querySelectorAll(".navbar-collapse .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const collapse = bootstrap.Collapse.getInstance(
      document.getElementById("navbarContent"),
    );
    if (collapse) collapse.hide();
  });
});
