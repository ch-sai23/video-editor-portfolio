const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu?.addEventListener("click", () => {
  const open = nav.style.display === "flex";
  nav.style.display = open ? "" : "flex";
  if (!open) {
    nav.style.position = "absolute";
    nav.style.top = "72px";
    nav.style.left = "0";
    nav.style.right = "0";
    nav.style.padding = "18px 5%";
    nav.style.background = "#0b0b0b";
    nav.style.flexDirection = "column";
    nav.style.alignItems = "flex-start";
    nav.style.borderBottom = "1px solid #252525";
  }
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 800) nav.style.display = "";
  });
});
