const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      480: {
        slidesPerView: 2,
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 3,
      }
    },
    

    pagination: {
      el: '.pagination',
      bullt 
    },
   
    navigation: {
      nextEl: '.carousel-button.next',
      prevEl: '.carousel-button.prev'
    }

  });