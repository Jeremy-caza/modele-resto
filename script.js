// === SCROLL FLUIDE ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function(e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute("href"));
if (target) {
target.scrollIntoView({
behavior: "smooth"
});
}
});
});

// === MENU STICKY ===
window.addEventListener("scroll", function () {
const header = document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 50);
});
