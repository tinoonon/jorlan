// === FAQ Accordion ===
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    if (!isActive) item.classList.add('active');
  });
});

// === Scroll Reveal Animations ===
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));


// === Countdown Timer ===
function startCountdown() {
  const timerEl = document.getElementById('countdown');
  if (!timerEl) return;

  const stored = sessionStorage.getItem('countdown_end');
  let endTime;
  if (stored) {
    endTime = parseInt(stored);
  } else {
    endTime = Date.now() + 15 * 60 * 1000; // 15 minutes
    sessionStorage.setItem('countdown_end', endTime);
  }

  function update() {
    const remaining = Math.max(0, endTime - Date.now());
    const minutes = Math.floor(remaining / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);
    timerEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    if (remaining <= 0) return;
    requestAnimationFrame(update);
  }
  update();
}
startCountdown();


