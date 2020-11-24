$(document).ready(function() {

  var productIn = new Swiper('.product-in-slider', {
    mousewheel: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
    breakpoints: {
      801: {
        direction: 'horizontal',
        spaceBetween: 20,
        slidesPerView: 4,
      },
      320: {
      direction: 'horizontal',
        spaceBetween: 15,
        slidesPerView: 'auto',
        },
    },
    navigation: {
      prevEl: '.product-in-slider-prev',
      nextEl: '.product-in-slider-next',
    }
  });
  var mainImage = new Swiper('.product-in-main-img-slider', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    thumbs: {
      swiper: productIn
    },
    navigation: {
      nextEl: '.pro-n-new',
      prevEl: '.pro-p-new',
  },
  });

  var gThu = new Swiper('.g-thumb', {
    mousewheel: true,
    direction: 'vertical',
    slidesPerView: 'auto',
    spaceBetween: 12,
    breakpoints: {
      1101: {
      direction: 'vertical',
      },
      320: {
        direction: 'horizontal',
      },
    },
    navigation: {
        nextEl: '.pro-n',
        prevEl: '.pro-p',
    },
  });
  var gTop = new Swiper('.g-topp', {
    spaceBetween: 10,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    thumbs: {
      swiper: gThu
    }
  });

  var ind;
  $('.product-in-slider .swiper-slide').on('click', function() {
    // console.log($(this).index());
    ind = $(this).index()
    
    if($(this).hasClass('swiper-slide-active')){
      gThu.slideTo(ind)
      gTop.slideTo(ind)
    }
    // productIn.slideTo(ind);
    $('.swiper-slide-active').removeClass('swiper-slide-active');
    $(this).addClass('swiper-slide-active');
  });
  // added by me
  $('.product-in-main-img-slider img').on('click', function() {
    $('.prod-pop').addClass('active')
  });

  $('.xxxx, .bckk').on('click', function() {
    $('.prod-pop').removeClass('active')
  });
  
$('.color-change-box button').on('click', function() {
  productIn.slideTo(0)
  $('.color-change-box button').removeClass('active')
  $(this).addClass('active')
  $('.swiper-container.product-in-slider .swiper-slide:nth-child(1) img').attr('src', $(this).attr('url'))
  $('.swiper-container.g-thumb .swiper-slide:nth-child(1) img').attr('src', $(this).attr('url'))
  $('.swiper-container.g-topp .swiper-slide:nth-child(1) img').attr('src', $(this).attr('url'))
});

  });