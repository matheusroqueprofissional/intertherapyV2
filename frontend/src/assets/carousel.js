const dots = document.querySelectorAll(".dot");
const images = document.querySelector(".carousel-images");
let currentIndex = 0;

function showSlide(index) {
    const slideWidth = images.children[0].clientWidth;
    images.style.transform = `translateX(${-index * slideWidth}px)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
    currentIndex = index;
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index));
});

// Slide automático (opcional)
setInterval(() => {
    const nextIndex = (currentIndex + 1) % dots.length;
    showSlide(nextIndex);
}, 3000); // Tempo em milissegundos entre os slides
