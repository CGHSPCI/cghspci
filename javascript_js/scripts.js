  // Smooth scrolling function
  function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  // Listen for click events on anchor links
  document.addEventListener('click', function(event) {
    if (event.target.tagName === 'A' && event.target.getAttribute('href').startsWith('#')) {
      event.preventDefault();
      smoothScroll(event.target.getAttribute('href'));
    }
  });

  const slideshowContainers = document.querySelectorAll('.slideshow-container');

  slideshowContainers.forEach(container => {
      const slideshow = container.querySelector('.slideshow');
      const prevBtn = container.querySelector('.prev-btn');
      const nextBtn = container.querySelector('.next-btn');
  
      let isDragging = false;
      let startX = 0;
      let translateX = 0;
      let dragStartX = 0;
      let currentIndex = 0;
      let autoSlideInterval;
  
      function updateSlidePosition() {
          slideshow.style.transform = `translateX(${translateX}px)`;
      }
  
      function goToSlide(index) {
          currentIndex = index;
          translateX = -currentIndex * slideshow.offsetWidth;
          updateSlidePosition();
      }
  
      function nextSlide() {
          currentIndex = (currentIndex + 1) % slideshow.children.length;
          translateX = -currentIndex * slideshow.offsetWidth;
          updateSlidePosition();
      }
  
      function startAutoSlide() {
          autoSlideInterval = setInterval(nextSlide, 4000); // Auto slide every 2 seconds
      }
  
      function stopAutoSlide() {
          clearInterval(autoSlideInterval);
      }
  
      prevBtn.addEventListener('click', () => {
          stopAutoSlide();
          if (currentIndex === 0) {
              goToSlide(slideshow.children.length - 1);
          } else {
              goToSlide(currentIndex - 1);
          }
          startAutoSlide();
      });
  
      nextBtn.addEventListener('click', () => {
          stopAutoSlide();
          nextSlide();
          startAutoSlide();
      });
  
      slideshow.addEventListener('mousedown', e => {
          e.preventDefault();
          isDragging = true;
          startX = e.clientX;
          dragStartX = translateX;
          slideshow.style.cursor = 'grabbing';
          stopAutoSlide();
      });
  
      slideshow.addEventListener('mousemove', e => {
          if (!isDragging) return;
          const deltaX = e.clientX - startX;
          translateX = dragStartX + deltaX;
          updateSlidePosition();
      });
  
      slideshow.addEventListener('mouseup', () => {
          isDragging = false;
          const threshold = slideshow.offsetWidth / 3;
  
          if (Math.abs(translateX - (-currentIndex * slideshow.offsetWidth)) > threshold) {
              if (translateX > -currentIndex * slideshow.offsetWidth) {
                  currentIndex = Math.max(currentIndex - 1, 0);
              } else {
                  currentIndex = Math.min(currentIndex + 1, slideshow.children.length - 1);
              }
          }
  
          translateX = -currentIndex * slideshow.offsetWidth;
          updateSlidePosition();
          slideshow.style.cursor = 'grab';
          startAutoSlide();
      });
  
      slideshow.addEventListener('mouseleave', () => {
          if (isDragging) {
              isDragging = false;
              translateX = -currentIndex * slideshow.offsetWidth;
              updateSlidePosition();
              slideshow.style.cursor = 'grab';
              startAutoSlide();
          }
      });
  
      window.addEventListener('resize', () => {
          translateX = -currentIndex * slideshow.offsetWidth;
          updateSlidePosition();
      });
  
      startAutoSlide(); // Start auto sliding
  });
  
  
  document.addEventListener("DOMContentLoaded", function() {
    const navList = document.querySelector(".nav-list");
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelectorAll(".nav-list li a");

    hamburger.addEventListener("click", function() {
        navList.classList.toggle("show");
    });

    navLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            navList.classList.remove("show");
        });
    });
});
