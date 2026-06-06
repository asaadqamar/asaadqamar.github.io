const revealElements = document.querySelectorAll('.reveal');
const yearElement = document.getElementById('year');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.88;

  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < triggerBottom) {
      el.classList.add('is-visible');
    }
  });
}

function setCurrentYear() {
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', () => {
  setCurrentYear();
  revealOnScroll();
});
