// Плавная анимация при скролле
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  section.classList.add("section-hidden");
  observer.observe(section);
});
