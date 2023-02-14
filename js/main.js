$(function () {

  const hamburger = document.getElementById('menu__btn');
  const headerMenu = document.getElementById('menu__list');
  const menuLinks = document.querySelectorAll('.menu__link');

  hamburger.addEventListener('click', () => {
    headerMenu.classList.toggle('menu__list--active');
    hamburger.classList.toggle('menu__btn--open');
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      headerMenu.classList.remove('menu__list--active');
      hamburger.classList.remove('menu__btn--open');
    });

  });


  $('.ship__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/ship/prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/ship/next.svg" alt=""></button>',
    slidesToShow: 4,
    slidesToScroll: 1, 
    responsive: [
      {
        breakpoint: 1828,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1, 
          autoplay: false,  
        }
      },  
       
      {
        breakpoint: 1215,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1, 
          autoplay: false,  
        }
      },  
        
      {
        breakpoint: 874,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, 
          autoplay: false,  
        }
      },  
       
      {
        breakpoint: 431,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, 
          arrows: false,   
          dots: true, 
          fade:true, 
          autoplay: false, 
        }
      },  
       
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, 
          arrows: false, 
          autoplay: true,  
          dots: true,
        }
      }, 
    ] 

  })



  let $slider = $('.about-furniture__slider');

  if ($slider.length) {
    let currentSlide;
    let slidesCount;
    let sliderCounter = document.createElement('div');
    sliderCounter.classList.add('about-furniture__counter');

    let updateSliderCounter = function (slick, currentIndex) {
      currentSlide = slick.slickCurrentSlide() + 1;
      slidesCount = slick.slideCount;
      $(sliderCounter).text(currentSlide + '/' + slidesCount)
    };

    $slider.on('init', function (event, slick) {
      $slider.append(sliderCounter);
      updateSliderCounter(slick);
    });

    $slider.on('afterChange', function (event, slick, currentSlide) {
      updateSliderCounter(slick, currentSlide);
    });

    $slider.slick({
      prevArrow: '<button type="button" class="about-furniture-arrow about-furniture-prev"><img src="images/about-furniture/prev-arrow.svg" alt=""></button>',
      nextArrow: '<button type="button" class="about-furniture-arrow about-furniture-next"><img src="images/about-furniture/next-arrow.svg" alt=""></button>',
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  }



  $(".about-furniture__stars").rateYo({
    starWidth: "37px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
    starSvg: '<svg viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36.9068 12.5171L25.7491 10.8955L20.7613 0.783708C20.625 0.506852 20.4009 0.282731 20.1241 0.146501C19.4297 -0.196273 18.586 0.0893718 18.2388 0.783708L13.251 10.8955L2.09329 12.5171C1.78567 12.5611 1.50442 12.7061 1.28909 12.9258C1.02877 13.1934 0.885316 13.5533 0.89026 13.9266C0.895204 14.2999 1.04814 14.6559 1.31546 14.9165L9.38821 22.7871L7.48099 33.9009C7.43626 34.1594 7.46487 34.4253 7.56357 34.6684C7.66227 34.9115 7.82711 35.1221 8.03939 35.2763C8.25168 35.4305 8.50292 35.5221 8.76463 35.5407C9.02633 35.5594 9.28803 35.5044 9.52005 35.3819L19.5 30.1348L29.48 35.3819C29.7525 35.5269 30.0689 35.5752 30.3721 35.5225C31.1368 35.3906 31.6509 34.6655 31.5191 33.9009L29.6118 22.7871L37.6846 14.9165C37.9043 14.7012 38.0493 14.4199 38.0933 14.1123C38.2119 13.3433 37.6758 12.6314 36.9068 12.5171Z" fill="#DFC226"/></svg> '
  });


  var elem = document.querySelector('.collection__items');
  var iso = new Isotope(elem, {
    // options
    itemSelector: '.collection__item',
    layoutMode: 'fitRows',
    fitRows: {
      gutter: 25
    } 
      
    });
     
    var elem = document.querySelector('.collection__items-1');
    var iso = new Isotope(elem, {
      // options
      itemSelector: '.collection__item',
      layoutMode: 'fitRows',
      fitRows: {
        gutter: 25
      }


  }); 
   
  $('.footer__top-btn').on('click', function(e){ 
    e.preventDefault();
  })   

});