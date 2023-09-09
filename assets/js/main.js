
  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Get all anchor links that point to sections on the same page
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    // Add click event listener to each anchor link
    anchorLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default behavior of jumping to the anchor
        
        const targetId = this.getAttribute('href'); // Get the target section's ID
        const targetSection = document.querySelector(targetId); // Find the target section
        
        if (targetSection) {
          const offset = targetSection.offsetTop; // Get the target section's position from the top
          // Smoothly scroll to the target section
          window.scrollTo({
            top: offset,
            behavior: 'smooth'
          });
        }
      });
    });
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
          autoSlideInterval = setInterval(nextSlide, 10000); // Auto slide every 2 seconds
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
  
  const container = document.querySelector('.containertop');
  let isSticky = false;
  let lastScroll = 0;
  const scrollThreshold = 200; // Adjust this value to control when the container becomes sticky
  const maxScrollUp = 50; // Adjust this value to control when the container returns to its original position
  
  window.addEventListener('scroll', function () {
      const currentScroll = window.pageYOffset;
  
      if (currentScroll > scrollThreshold) {
          // Scrolling down
          if (!isSticky) {
              container.classList.add('sticky');
              isSticky = true;
          }
      } else {
          // Scrolling up
          if (currentScroll <= maxScrollUp) {
              container.classList.remove('sticky');
              isSticky = false;
          }
      }
  
      lastScroll = currentScroll;
  });
  
  // const images = [
  //   '../CGHSPCI4/image/event1.jpg',
  //   '../CGHSPCI4/image/event2.jpg',
  //   '../CGHSPCI4/image/event3.jpg'
  // ];
  // const imageElement = document.getElementById('changing-image');
  // let currentImageIndex = 0;
  
  // function changeImage() {
  //   // Set the new image source
  //   imageElement.src = images[currentImageIndex];
    
  //   // Set the desired width and height (e.g., 300px width and 200px height)
  //   imageElement.style.width = '150%';
  //   imageElement.style.height = '60vh';
    
  //   currentImageIndex = (currentImageIndex + 1) % images.length;
  // }
  
  // setInterval(changeImage, 3000); // Change image every 3 seconds
  

  document.addEventListener("DOMContentLoaded", function () {
    const contentContainer = document.querySelector(".content-container");
    const toggleContentLink = document.querySelector("#toggle-content");
    const hiddenContents = document.querySelectorAll(".content.hidden");
  
    toggleContentLink.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent the anchor from navigating
  
      if (contentContainer.classList.contains("expanded")) {
        contentContainer.classList.remove("expanded");
        toggleContentLink.textContent = "See More";
        hiddenContents.forEach((content) => content.classList.add("hidden"));
      } else {
        contentContainer.classList.add("expanded");
        toggleContentLink.textContent = "See Less";
        hiddenContents.forEach((content) => content.classList.remove("hidden"));
      }
    });
  });


  function arielclick(){

      console.log("pinindot ko to ");

  }
  
