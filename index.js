const { motion } = require("motion/react");

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

  // Import dynamique de Motion pour les animations
  import("https://cdn.jsdelivr.net/npm/motion@12.23.24/+esm").then(
    ({ animate, scroll, press, hover }) => {
      // Progress bar representing gallery scroll
      scroll(animate(".progress", { scaleX: [0, 1] }, { ease: "linear" }));

      // Animation des images au scroll
      document.querySelectorAll(".img-container").forEach((section) => {
        const img = section.querySelector("img");
        if (img) {
          scroll(animate(img, { scale: [0.8, 1.05, 1] }), {
            target: section,
            offset: ["start end", "end end", "end start"],
          });
        }
      });

      // Gestion des gestes (press et hover)
      const gestureState = new WeakMap();
      const transition = { type: "spring", stiffness: 500, damping: 25 };
      const initialState = {
        scale: 1,
        rotate: 0,
      };

      document.querySelectorAll(".interactive-element").forEach((element) => {
        gestureState.set(element, { ...initialState });

        // Animation au hover
        hover(animate(element, { scale: 1.1 }, transition), {
          hover: animate(element, { scale: 1 }, transition),
        });

        // Animation au press
        press(animate(element, { scale: 0.95 }, transition), {
          release: animate(element, { scale: 1 }, transition),
        });
      });
    }
  );
});
