
  
  /*=============== SWIPER JS ===============*/
  let swiperCards = new Swiper(".card__content", {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      600: {
        slidesPerView: 2,
      },
      968: {
        slidesPerView: 3,
      },
    },
  });

  /*=============== PRE LOADER ===============*/
  var loader = document.getElementById("preloader");

  
  window.addEventListener("load", function(){
      
      loader.style.display = "block";
  
      
      function hidePreloader() {
          loader.style.opacity = 0; 
          setTimeout(function() {
              loader.style.display = "none"; 
          }, 500); 
      }
  
      
      loader.addEventListener("animationend", function(event) {
          if (event.animationName === "slideUp") {
              hidePreloader();
          }
      });
  
      
      setTimeout(function() {
          hidePreloader();
      }, 4500); 
  });

  
  /*=============== REVEAL ===============*/

  window.addEventListener("scroll", reveal);
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;
  
      if (revealtop < windowheight - revealpoint) {
        reveals[i].classList.add("active");
      }
    }
  }
  
    // Smooth scrolling when clicking on navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              // Get the height of the fixed header (if any)
              const headerHeight = document.querySelector('.header').offsetHeight;
              
              // Scroll to the target section with an offset to fit properly
              window.scrollTo({
                  top: target.offsetTop - headerHeight,
                  behavior: 'smooth'
              });
          }

          // Check if the menu toggle checkbox is checked (menu is open)
          const menuToggle = document.getElementById('menu-toggle');
          if (menuToggle.checked) {
              // Uncheck the menu toggle checkbox to close the menu
              menuToggle.checked = false;
          }
      });
  });