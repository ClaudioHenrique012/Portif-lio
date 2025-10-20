const carousel = document.querySelector(".carousel");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

const cards = document.querySelectorAll(".card-skill");

function getCardWidth() {
  return cards[0].offsetWidth + 20; // largura do card + margem (ajuste se necessário)
}

nextBtn.addEventListener("click", () => {
  const cardWidth = getCardWidth();
  const maxIndex =
    cards.length - Math.floor(carousel.parentElement.offsetWidth / cardWidth);

  if (index < maxIndex) {
    index++;
  } else {
    index = 0;
  }

  carousel.style.transform = `translateX(${-index * cardWidth}px)`;
});

prevBtn.addEventListener("click", () => {
  const cardWidth = getCardWidth();
  const maxIndex =
    cards.length - Math.floor(carousel.parentElement.offsetWidth / cardWidth);

  if (index > 0) {
    index--;
  } else {
    index = maxIndex;
  }

  carousel.style.transform = `translateX(${-index * cardWidth}px)`;
});

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
