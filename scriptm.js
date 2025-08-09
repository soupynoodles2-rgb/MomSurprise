// Reveal message + confetti
document.querySelectorAll('.reveal-btn').forEach(button => {
  button.addEventListener('click', () => {
    const message = button.nextElementSibling;
    message.style.display = 'block';

    // Confetti shower 🎊
    for (let i = 0; i < 30; i++) {
      createConfetti(button.parentElement);
    }

    // Disable the button after reveal
    button.disabled = true;
    button.style.opacity = 0.6;
    button.style.cursor = 'not-allowed';
  });
});

function createConfetti(parent) {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');

  const size = Math.random() * 6 + 4 + 'px';
  const color = ['#ff66a3', '#ff3399', '#ffb3d1', '#ffffff'][Math.floor(Math.random() * 4)];
  const left = Math.random() * 100 + '%';
  const animationDuration = Math.random() * 1 + 1.5 + 's';

  confetti.style.position = 'absolute';
  confetti.style.width = size;
  confetti.style.height = size;
  confetti.style.backgroundColor = color;
  confetti.style.left = left;
  confetti.style.top = '0';
  confetti.style.opacity = '0.9';
  confetti.style.borderRadius = '50%';
  confetti.style.animation = `fall ${animationDuration} ease-out forwards`;

  parent.appendChild(confetti);

  setTimeout(() => confetti.remove(), 2000);
}

// Confetti animation keyframes
const style = document.createElement('style');
style.textContent = `
@keyframes fall {
  to {
    transform: translateY(150px) rotate(360deg);
    opacity: 0;
  }
}
`;
document.head.appendChild(style);

// THEME TOGGLE (Clean Version)
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  // Switch emoji based on mode
  if (document.body.classList.contains('dark-theme')) {
    themeToggle.textContent = '🌞'; // Sun for dark mode
  } else {
    themeToggle.textContent = '🌙'; // Moon for light mode
  }
});

// Floating photos random positions
document.querySelectorAll('.float-photo').forEach(photo => {
  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight;
  const duration = 15 + Math.random() * 10; // 15–25s drift

  photo.style.top = `${startY}px`;
  photo.style.left = `${startX}px`;
  photo.style.animationDuration = `${duration}s`;
});
