const carousel = document.querySelector(".carousel");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;
const cardWidth = 300; // largura aproximada do card + margem

nextBtn.addEventListener("click", () => {
  const maxScroll = -(carousel.scrollWidth - carousel.clientWidth);
  index -= cardWidth;
  if (index < maxScroll) {
    index = 0; // volta pro início
  }
  carousel.style.transform = `translateX(${index}px)`;
});

prevBtn.addEventListener("click", () => {
  const maxScroll = 0;
  index += cardWidth;
  if (index > maxScroll) {
    index = -(carousel.scrollWidth - carousel.clientWidth); // vai pro final
  }
  carousel.style.transform = `translateX(${index}px)`;
});
