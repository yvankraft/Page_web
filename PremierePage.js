alert("welcome");
const miniquiz = document.querySelector(".mini-quiz");
const gutAnswer = document.querySelector(".gutAnswer");
const option1 = document.querySelector(".answert1");
const option2 = document.querySelector(".answert2");
const option3 = document.querySelector(".answert3");
const commentaire = document.querySelector(".commentaire1");
const closecommentaire = document.querySelector(".close");
const barre = document.querySelector(".navbar");
const title = document.querySelector(".title-with-logo");
const li = document.getElementById("navabar-menu");
const not1 = document.querySelector(".double-click");
const videoP = document.getElementById("videoP");
const mouseMove = document.querySelector(".mousemove");
const AboutEffect = document.querySelector(".AboutEffect");
const bouttonAbout = document.getElementById("li2");
const grid2 = document.getElementById("gd2");
const grid3 = document.getElementById("gd3");
const grid4 = document.getElementById("gd4");

//quiz
document.addEventListener("click", (event) => {
  if (event.target === option1) {
    alert("You selected option 1: Zurich");
    gutAnswer.textContent = "the corect anwer is Berlin 😢";
    gutAnswer.classList.add("visible");
    gutAnswer.style.color = "red";
  } else if (event.target === option2) {
    alert("You selected option 2: Berlin");
    gutAnswer.textContent = "the corect anwer is Berlin 😃";
    gutAnswer.style.color = "green";
    gutAnswer.classList.add("visible");
  } else if (event.target === option3) {
    alert("You selected option 3: Paris");
    gutAnswer.textContent = "the corect anwer is Berlin 😢";
    gutAnswer.classList.add("visible");
    gutAnswer.style.color = "red";
  } else {
    gutAnswer.classList.remove("visible");
  }
});

//plubiciter

miniquiz.addEventListener("mouseover", () => {
  commentaire.style.visibility = "visible"; // Affiche la bulle de commentaire
  commentaire.style.transition = "0.3s";
});
commentaire.addEventListener("click", () => {
  window.location.href = "#"; // Remplace par l'URL de destination
});

// Empêcher la redirection si on clique sur le bouton de fermeture
closecommentaire.addEventListener("click", (event) => {
  event.stopPropagation(); // Empêche le clic sur la bulle
  commentaire.style.visibility = "hidden"; // Cache la bulle
});

//effet bar de navigation
document.addEventListener("scroll", () => {
  title.style.color = "black"; // Change la couleur du titre
  if (window.scrollY > 280) {
    console.log("ok");
    barre.classList.add("navbarH"); // Change la couleur de fond de la barre de navigation
  } else {
    title.style.color = "white"; // Change la couleur du titre
    barre.classList.add("navbar"); // Change la couleur de fond de la barre de navigation
    barre.classList.remove("navbarH"); // Change la couleur de fond de la barre de navigation
  }
});

//notification de double clic
document.addEventListener("dblclick", (event) => {
  not1.style.left = event.pageX + "px"; // Positionne le message à la position du clic
  not1.style.top = event.pageY + "px"; // Positionne le message à la position du clic
  //rendre l'element visible
  not1.style.transition = "visibility 0.5s"; // Ajoute une transition pour l'apparition
  not1.style.visibility = "visible"; // Affiche le message

  setTimeout(() => {
    not1.style.visibility = "hidden"; // Cache le message après 2 secondes
  }, 2000); // 2000 millisecondes = 2 secondes
});

document.addEventListener("offline", (event) => {
  alert("You are now offline. Please check your internet connection.");
});

document.addEventListener("online", (event) => {
  alert("You are back online. Welcome back!");
});

// Effet de suivi de la souris
window.addEventListener("mousemove", (event) => {
  mouseMove.style.left = event.pageX + "px";
  mouseMove.style.top = event.pageY + "px";
});

bouttonAbout.addEventListener("mouseover", (event) => {
  AboutEffect.style.left = event.pageX + "px";
  AboutEffect.style.top = event.pageY + "px";
  AboutEffect.style.transition = "visibility 0.3s"; // Ajoute une transition pour l'apparition
});

bouttonAbout.addEventListener("mouseout", () => {
  AboutEffect.style.visibility = "hidden"; // Cacher l'effet
});
