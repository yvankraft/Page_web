const Navbar = document.querySelector(".navbar");

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

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    Navbar.classList.add("scroll");
  } else {
    Navbar.classList.remove("scroll");
  }
});
