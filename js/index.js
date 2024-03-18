document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('scroll-video');
    var playPromise;
  
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function playVideo() {
      playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.then(_ => {
          // Video started playing
        }).catch(error => {
          console.error('Autoplay was prevented');
        });
      }
    }
  
    function pauseVideo() {
      video.pause();
    }
  
    function checkVideoInView() {
      if (isElementInViewport(video)) {
        playVideo();
      } else {
        pauseVideo();
      }
    }
  
   
    checkVideoInView();
  
    
    window.addEventListener('scroll', function() {
      checkVideoInView();
    });
  
    
    video.addEventListener('click', function() {
      if (video.paused) {
        playVideo();
      } else {
        pauseVideo();
      }
    });
  });
  
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

  



 