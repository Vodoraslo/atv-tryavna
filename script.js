// Lightbox със слайдшоу
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const close = document.querySelector(".close");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
  
    let currentIndex = 0;
  
    function showImage(index) {
      if (index >= images.length) index = 0;
      if (index < 0) index = images.length - 1;
      currentIndex = index;
      lightboxImg.src = images[currentIndex].src;
    }
  
    images.forEach((img, i) => {
      img.addEventListener("click", () => {
        lightbox.style.display = "block";
        showImage(i);
      });
    });
  
    close.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  
    prev.addEventListener("click", () => {
      showImage(currentIndex - 1);
    });
  
    next.addEventListener("click", () => {
      showImage(currentIndex + 1);
    });
  
    window.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    });
  
    // Навигация със стрелки от клавиатурата
    document.addEventListener("keydown", (e) => {
      if (lightbox.style.display === "block") {
        if (e.key === "ArrowLeft") showImage(currentIndex - 1);
        if (e.key === "ArrowRight") showImage(currentIndex + 1);
        if (e.key === "Escape") lightbox.style.display = "none";
      }
    })

  });

  document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navbar = document.querySelector('.navbar');

  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active'); // превключва клас за показване на менюто
  });
});

  