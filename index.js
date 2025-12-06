const Navbar = document.querySelector(".navbar");

// Animation d'apparition au chargement
window.addEventListener("DOMContentLoaded", () => {
  Motion.animate(
    Navbar,
    {
      y: [-100, 0],
      opacity: [0, 1],
    },
    {
      duration: 0.9,
      delay: 0.2,
      easing: [0.22, 1, 0.36, 1],
    }
  );
});

// Détection du sens du scroll
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  // Si on scroll vers le bas (et qu'on a scrollé plus de 50px)
  if (currentScrollY > lastScrollY && currentScrollY > 50) {
    // Cacher la navbar
    Motion.animate(
      Navbar,
      {
        y: [0, -100],
        opacity: [1, 0],
      },
      {
        duration: 0.3,
        easing: [0.22, 1, 0.36, 1],
      }
    );
  }
  // Si on scroll vers le haut
  else if (currentScrollY < lastScrollY) {
    // Montrer la navbar
    Motion.animate(
      Navbar,
      {
        y: [-100, 0],
        opacity: [0, 1],
      },
      {
        duration: 0.3,
        easing: [0.22, 1, 0.36, 1],
      }
    );
  }
  console.log(currentScrollY);
  console.log(lastScrollY);

  lastScrollY = currentScrollY;
});
