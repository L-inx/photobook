// Photo slider
const photos = [
  "https://i.imgur.com/flfJQkm.jpeg",
  "https://i.imgur.com/5uW0VQP.jpeg",
  "https://i.imgur.com/dgsZpDt.jpeg",
  "https://i.imgur.com/jZ9ggA5.jpeg",
  "https://i.imgur.com/iscaJOg.jpeg",
  "https://i.imgur.com/AMAJVt0.jpeg",
  "https://i.imgur.com/nxTMuf3.jpeg",
  "https://i.imgur.com/JpBQx4S.jpeg",
  "https://i.imgur.com/ZQCmuwC.jpeg",
  "https://i.imgur.com/5TveIJg.jpeg",
  "https://i.imgur.com/3Woc5rH.jpeg"
];

let index = 0;
const img = document.getElementById("photo");

function showPhoto() {
  img.style.opacity = 0;
  setTimeout(() => {
    img.src = photos[index];
    img.style.opacity = 1;
  }, 300);
}

function nextPhoto() {
  index = (index + 1) % photos.length;
  showPhoto();
}

function prevPhoto() {
  index = (index - 1 + photos.length) % photos.length;
  showPhoto();
}

// Letter overlay
const openLetterBtn = document.getElementById("openLetter");
const closeLetterBtn = document.getElementById("closeLetter");
const letterOverlay = document.getElementById("letterOverlay");

openLetterBtn.addEventListener("click", () => {
  letterOverlay.style.display = "flex";
});

closeLetterBtn.addEventListener("click", () => {
  letterOverlay.style.display = "none";
});
