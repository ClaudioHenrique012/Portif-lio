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
