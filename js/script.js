// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Solid nav background once scrolled past the hero
function updateHeaderBg() {
  document.querySelector('.site-header').classList.toggle('is-scrolled', window.scrollY > 40);
}
window.addEventListener('scroll', updateHeaderBg);
updateHeaderBg();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const siteHeader = document.querySelector('.site-header');

navToggle.addEventListener('click', () => {
  siteHeader.classList.toggle('nav-open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => siteHeader.classList.remove('nav-open'));
});

// Subscribe form placeholder (no backend wired up yet)
const subscribeForm = document.getElementById('subscribeForm');
subscribeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('[Hook this form up to your email list provider — e.g. Mailchimp, ConvertKit — when ready.]');
  subscribeForm.reset();
});
