var swiperMain = new Swiper('.main-container', {
    navigation: {
      nextEl: '.arrow-next',
      prevEl: '.arrow-prev',
    },
    pagination: {
      el: '.orange-pagination',
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});

var productSlider = new Swiper('.product-container', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  loop: false,
  navigation: {
    nextEl: '.product-arrow-next',
    prevEl: '.product-arrow-prev',
  },
});


$('.add-to-cart').on('click', function() {
  $(this).toggleClass('addedToCart');
    var main = $(this);
    $(this).find('.add-to-cart_text').fadeOut(function(){
      $(main).css({'width': 62 + "px"})
      .find($(main).hasClass('addedToCart') ? '.cart-img' : '.added');
      if($(main).hasClass('addedToCart')){
        $(main).find('.cart-img').css({'transform': 'rotateZ('+(-30)+'deg)'})
      }
      $(main).find($(main).hasClass('addedToCart') ? '.cart-img' : '.added').animate({'left':70+'px'}).fadeOut(function(){
        $(main).find($(main).hasClass('addedToCart') ? '.added' : '.cart-img').fadeIn(function(){
          $(main).find('.add-to-cart_text').text($(main).hasClass('addedToCart') ? 'დამატებულია' : 'დამატება').fadeIn();
          $(main).css({'width': 196 + "px"});
          $(main).find($(main).hasClass('addedToCart') ? '.added' : '.cart-img').css({'left': 20+'px'});
          if($(main).hasClass('addedToCart')){
            $(main).find('.cart-img').css({'transform': 'rotateZ('+0+'deg)'});
          }
        });
      })
    });
});

$('.burger-menu').on('click', function() {
  $(this).toggleClass('makeCross');
})




