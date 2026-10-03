const hearts = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.textContent = Math.random() > .5 ? "♥" : "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (12 + Math.random() * 20) + "px";
  heart.style.animationDuration = (5 + Math.random() * 6) + "s";
  hearts.appendChild(heart);

  setTimeout(() => heart.remove(), 11000);
}

setInterval(createHeart, 650);

document.getElementById("startBtn").addEventListener("click", () => {
  document.querySelector(".letter").scrollIntoView({ behavior: "smooth" });
});

const modal = document.getElementById("modal");

document.getElementById("surpriseBtn").addEventListener("click", () => {
  modal.classList.add("show");

  for (let i = 0; i < 18; i++) {
    setTimeout(createHeart, i * 70);
  }
});

document.getElementById("closeBtn").addEventListener("click", () => {
  modal.classList.remove("show");
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("show");
  }
});

document.getElementById("musicBtn").addEventListener("click", () => {
  alert("Put your favorite song here ❤️");
});

// Lets you add your own photos without uploading them anywhere.
document.querySelectorAll(".add-photo input").forEach((input) => {
  input.addEventListener("change", () => {
    const photoBox = input.parentElement;
    const img = photoBox.querySelector("img");
    const text = photoBox.querySelector("span");
    const file = input.files[0];

    if (file) {
      img.src = URL.createObjectURL(file);
      img.style.display = "block";
      text.style.display = "none";
    }
  });
});


// Show the visitor how much of the love story they have explored.
const progress = document.getElementById("scrollProgress");
const scrollHint = document.getElementById("scrollHint");

function updateScrollProgress() {
  const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
  const percent = pageHeight > 0 ? (window.scrollY / pageHeight) * 100 : 0;
  progress.style.width = percent + "%";

  if (window.scrollY > 120) {
    scrollHint.style.opacity = "0";
    scrollHint.style.pointerEvents = "none";
  } else {
    scrollHint.style.opacity = "1";
    scrollHint.style.pointerEvents = "auto";
  }
}

window.addEventListener("scroll", updateScrollProgress);
window.addEventListener("resize", updateScrollProgress);
updateScrollProgress();

scrollHint.addEventListener("click", () => {
  document.querySelector(".letter").scrollIntoView({ behavior: "smooth" });
});
