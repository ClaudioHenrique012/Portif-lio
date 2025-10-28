// ===============================
// 🎯 CARROSSEL DE HARD SKILLS
// ===============================

const carousel = document.querySelector(".carousel");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const cards = document.querySelectorAll(".card-skill");

let index = 0;

function getCardWidth() {
  return cards[0].offsetWidth + 20;
}

nextBtn.addEventListener("click", () => {
  const cardWidth = getCardWidth();
  const maxIndex =
    cards.length - Math.floor(carousel.parentElement.offsetWidth / cardWidth);
  index = index < maxIndex ? index + 1 : 0;
  carousel.style.transform = `translateX(${-index * cardWidth}px)`;
});

prevBtn.addEventListener("click", () => {
  const cardWidth = getCardWidth();
  const maxIndex =
    cards.length - Math.floor(carousel.parentElement.offsetWidth / cardWidth);
  index = index > 0 ? index - 1 : maxIndex;
  carousel.style.transform = `translateX(${-index * cardWidth}px)`;
});

// ===============================
// 💼 CARROSSEL DE PROJETOS
// ===============================

const carouselProjetos = document.querySelector(".carousel-projetos");
const cardsProjetos = document.querySelectorAll(".card-projeto");
const prevProjeto = document.querySelector(".prev-projeto");
const nextProjeto = document.querySelector(".next-projeto");

let currentIndexProjetos = 0;

function showProjeto(index) {
  const offset = -index * 100;
  carouselProjetos.style.transform = `translateX(${offset}%)`;
}

prevProjeto.addEventListener("click", () => {
  currentIndexProjetos =
    (currentIndexProjetos - 1 + cardsProjetos.length) % cardsProjetos.length;
  showProjeto(currentIndexProjetos);
});

nextProjeto.addEventListener("click", () => {
  currentIndexProjetos = (currentIndexProjetos + 1) % cardsProjetos.length;
  showProjeto(currentIndexProjetos);
});

// ===============================
// ⭐ ATIVAÇÃO DOS NÍVEIS DE SOFT SKILLS
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const skillCards = document.querySelectorAll(".soft-skill-card");

  skillCards.forEach((card) => {
    const skillLevel = parseInt(card.dataset.skillLevel, 10);
    const segments = card.querySelectorAll(".skill-rating .segment");

    for (let i = 0; i < skillLevel; i++) {
      if (segments[i]) {
        segments[i].classList.add("active");
      }
    }
  });
});

// Animação das barras de progresso das soft skills
document.addEventListener("DOMContentLoaded", () => {
  const skillCards = document.querySelectorAll(".soft-skill-card-modern");

  skillCards.forEach((card) => {
    const level = card.dataset.skillLevel;
    const fill = card.querySelector(".progress-fill");
    fill.style.width = level + "%";
  });
});
