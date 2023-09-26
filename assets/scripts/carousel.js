document.addEventListener("DOMContentLoaded", function () {
    const carouselSlider = document.querySelector(".carousel-slider");
    const images = document.querySelectorAll(".carousel-slider img");
    const prevButton = document.querySelector(".carousel-control.prev");
    const nextButton = document.querySelector(".carousel-control.next");

    let currentIndex = 0;
    const interval = 4000; // 4 seconds

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider();
    }

    function updateSlider() {
        images.forEach((img, index) => {
            if (index === currentIndex) {
                img.classList.add("current");
            } else {
                img.classList.remove("current");
            }
        });

        const translateValue = -currentIndex * 100;
        carouselSlider.style.transform = `translateX(${translateValue}%)`;
    }

    setInterval(nextSlide, interval);

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);

    updateSlider();
});
