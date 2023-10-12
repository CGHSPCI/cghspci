
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
          autoSlideInterval = setInterval(nextSlide, 10000);  
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
  
  const subTitles = document.querySelectorAll('tr:nth-child(2) td');
  const contentRows = document.querySelectorAll('.content-row');
  
  subTitles.forEach((subTitle, index) => {
    subTitle.addEventListener('click', () => {
      // Hide all content rows
      contentRows.forEach((row) => {
        row.style.display = 'none';
      });
  
      // Show the content row that corresponds to the clicked sub-title
      const selectedSubtitle = subTitle.textContent;
      contentRows.forEach((row) => {
        if (row.getAttribute('data-subtitle') === selectedSubtitle) {
          row.style.display = 'table-row';
        }
      });
    });
  });
  
// main.js
function togglePasswordVisibility() {
  const passwordField = document.getElementById('passwordField');
  const toggleIcon = document.getElementById('toggleIcon');

  if (passwordField.type === 'password') {
      passwordField.type = 'text';
      toggleIcon.classList.remove('fa-eye');
      toggleIcon.classList.add('fa-eye');
  } else {
      passwordField.type = 'password';
      toggleIcon.classList.remove('fa-eye');
      toggleIcon.classList.add('fa-eye');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // Your code here, including the subTitles[0].click(); line if needed
});

var tables = document.getElementsByTagName('table');

document.getElementById('tableSelector').addEventListener('change', function () {
    var selectedTableId = this.value; // Get the selected option's value

    // Hide all tables
    for (var i = 0; i < tables.length; i++) {
        tables[i].style.display = 'none';
    }

    // Show the selected table
    document.getElementById(selectedTableId).style.display = 'table';
});

function showOptions() {
  const selectElement = document.getElementById('tableSelector');
  selectElement.size = 5; // Display 5 options when clicked
}

// Optionally, you can add an event listener to reset the size when an option is selected.
document.getElementById('tableSelector').addEventListener('change', function() {
  this.size = 1; // Reset size to 1 after an option is selected
});


