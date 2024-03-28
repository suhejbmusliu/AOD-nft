
  
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

 
  var loader = document.getElementById("preloader");

  // Show the preloader when the window loads
  window.addEventListener("load", function(){
      // Display the preloader
      loader.style.display = "block";
  
      // Function to hide the preloader
      function hidePreloader() {
          loader.style.opacity = 0; // Fade out the preloader
          setTimeout(function() {
              loader.style.display = "none"; // Hide the preloader after fading out
          }, 500); // Fading duration (0.5 seconds)
      }
  
      // Hide the preloader after animation finishes
      loader.addEventListener("animationend", function(event) {
          if (event.animationName === "slideUp") {
              hidePreloader();
          }
      });
  
      // Fallback for browsers that do not support CSS animations
      setTimeout(function() {
          hidePreloader();
      }, 4500); // Fallback timeout (slightly longer than animation duration)
  });
  