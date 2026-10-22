const dialog = document.querySelector("#choices");
const exploreButton = document.querySelector("#explore");
const closeButton = document.querySelector("#close");
const video = document.querySelector("video");
const videoError = document.querySelector("#video-error");

// Ouvrir la fenêtre des modèles.
exploreButton.addEventListener("click", () => {
  dialog.showModal();
});

// Fermer la fenêtre.
closeButton.addEventListener("click", () => {
  dialog.close();
});

// Fermer en cliquant à l'extérieur.
dialog.addEventListener("click", (event) => {
  if (event.target !== dialog) return;

  const bounds = dialog.getBoundingClientRect();

  const outside =
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom;

  if (outside) dialog.close();
});

// Afficher un lien de secours si la vidéo ne charge pas.
video.addEventListener(
  "error",
  () => {
    videoError.hidden = false;
  },
  true
);