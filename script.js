function createStars() {
    const stars = document.querySelector('.stars');
    for (let i = 0; i < 200; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.width = Math.random() * 3 + 'px';
      star.style.height = star.style.width;
      star.style.setProperty('--duration', Math.random() * 3 + 2 + 's');
      stars.appendChild(star);
    }
  }

  function create3DHeart() {
    const heartContainer = document.getElementById('heart-3d');
    const numParticles = 200;
    const heartPoints = [];
    
    // Generate heart shape points
    for (let i = 0; i < numParticles; i++) {
      const angle = (i / numParticles) * 2 * Math.PI;
      const x = 16 * Math.pow(Math.sin(angle), 3);
      const y = -(13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle));
      const z = (Math.random() - 0.5) * 20;
      heartPoints.push({ x, y, z });
    }
    
    // Create particles
    heartPoints.forEach((point, index) => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.transform = `translate3d(${point.x * 5}px, ${point.y * 5}px, ${point.z}px)`;
      particle.style.animationDelay = `${index * 0.02}s`;
      heartContainer.appendChild(particle);
    });
  }

  function createConfetti() {
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
      confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 5000);
    }
  }

  // Enhanced "Maybe Later" button behavior
  const noButton = document.querySelector('.btn-no');
  let buttonPosition = { x: 0, y: 0 };
  let attempts = 0;

  noButton.addEventListener('mouseover', () => {
    attempts++;
    const maxDistance = Math.min(50 + (attempts * 10), 200);
    
    const randomAngle = Math.random() * Math.PI * 2;
    buttonPosition.x = Math.cos(randomAngle) * maxDistance;
    buttonPosition.y = Math.sin(randomAngle) * maxDistance;
    
    noButton.style.transform = `translate(${buttonPosition.x}px, ${buttonPosition.y}px)`;
  });

  noButton.addEventListener('click', (e) => {
    e.preventDefault();
    const newX = Math.random() < 0.5 ? -100 : 100;
    const newY = Math.random() < 0.5 ? -100 : 100;
    noButton.style.transform = `translate(${newX}px, ${newY}px)`;
  });

  // Yes button handler
  document.querySelector('.btn-yes').addEventListener('click', () => {
    createConfetti();
    document.body.style.opacity = '0';
    setTimeout(() => {
      window.location.href = 'card.html';
    }, 1000);
  });

  // Initialize
  document.addEventListener('DOMContentLoaded', () => {
    createStars();
    create3DHeart();
    
    setTimeout(() => {
      document.querySelector('.text').style.opacity = '1';
      document.querySelector('.text').style.transform = 'translateY(0)';
      document.querySelector('.buttons').style.opacity = '1';
      document.querySelector('.buttons').style.transform = 'translateY(0)';
    }, 1000);
  });