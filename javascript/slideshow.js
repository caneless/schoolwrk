// script.js
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentSlide = 0;

    // Function to show the current slide
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => (slide.style.display = "none"));
        // Show the current slide
        slides[index].style.display = "block";
    }

    // Show the first slide initially
    showSlide(currentSlide);

    // Event listeners for buttons
    prevBtn.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    nextBtn.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });
});
