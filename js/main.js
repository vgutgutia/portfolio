'use strict';

function switchTab(name) {
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.tab === name);
  });
  document.querySelectorAll('.tab-content').forEach(c => {
    c.classList.toggle('active', c.id === 'tab-' + name);
  });
  window.scrollTo({ top: 0, behavior: 'instant' });
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

function copyClone(repo) {
  const cmd = `git clone https://github.com/SPB-AI-Data-Science-Club/${repo}.git`;
  navigator.clipboard.writeText(cmd).then(() => showToast('Clone command copied'));
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('animate-in'); observer.unobserve(e.target); }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.project-card, .position-card').forEach(el => observer.observe(el));
