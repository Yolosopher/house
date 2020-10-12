$(document).ready(function() {

  var swiperindex = new Swiper('.index-slider', {
    direction: 'vertical',
    slidesPerView: 1,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    loop: true,
    pagination: {
      el: '.swiper-pagination.swiper-pagination1',
      clickable: true,
    },
  });

  var product = new Swiper('.product-slider', {
    spaceBetween: 25,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.team-n',
      prevEl: '.team-p',
    },
    pagination: {
      el: '.swiper-pagination.swiper-pagination2',
      clickable: true,
    },
    
    breakpoints: {
      1024: {
        spaceBetween: 25,
        },

      320: {
          spaceBetween: 15,
          },
      },
  });


  var lastProduct = new Swiper('.last-product-slider', {
    spaceBetween: 25,
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination.swiper-pagination3',
      clickable: true,
    },
    // autoplay: {
    //   delay: 1000,
    //   disableOnInteraction: false,
    // },
    breakpoints: {
      1024: {
        spaceBetween: 25,
        },

      320: {
          spaceBetween: 15,
          },
      },
  });


  var swiper = new Swiper('.testimonial-scroll', {
    mousewheel: true,
    slidesPerView: 'auto',
    freeMode: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
    breakpoints: {
      600: {
        spaceBetween: 15,
        },
      },
  });




  var blogThumb = new Swiper('.b-thumb', {
    mousewheel: true,
    slidesPerView: 'auto',
    spaceBetween: 12,
  });
  var blogTop = new Swiper('.b-top', {
    spaceBetween: 10,
    thumbs: {
      swiper: blogThumb
    },
    breakpoints: {
      320: {
      slidesPerView: 'auto',
      },
      1024: {
        slidesPerView: 1,
        },
    },
  });
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2


$(document).on("click",".plus",function() {
  var count = $(this).parent().find("input").val();
if (count < 0) {
  count = 0;
}
 else {
  count++;
}
$(this).parent().find("input").val(count);
});

$(document).on("click",".minus",function() {
var count = $(this).parent().find("input").val();
if (count <= 0) {
  count = 0;
} else {
  count--;
}
$(this).parent().find("input").val(count);
});

$('.burger').on('click', function() {
  $(this).toggleClass("active");
  $('.header-up').toggleClass("active");
  $('body').toggleClass("shmactive");
});


$('.filter-btn').on('click', function() {
  $('.product-filter').toggleClass("active");
});



$('.pro-info').on('click', function() {
  $('.profil-item').removeClass("active");
  $('.profile-tabs').removeClass("active");
  $('.profile-info').addClass("active");
  $(this).addClass("active");
});

$('.pro-rec').on('click', function() {
  $('.profil-item').removeClass("active");
  $('.profile-tabs').removeClass("active");
  $('.profile-recovery').addClass("active");
  $(this).addClass("active");
});

$('.pro-ord').on('click', function() {
  $('.profil-item').removeClass("active");
  $('.profile-tabs').removeClass("active");
  $('.profile-order').addClass("active");
  $(this).addClass("active");
});


$('.order-up').on('click', function() {
  $(this).toggleClass("active");
  $(this).parent().toggleClass("active");
  $(this).next().slideToggle("slow");
  // $('.profile-tabs').removeClass("active");
});

$('.filter-ul li').on('click', function() {  
  $('.filter-ul li .drop-filter:visible').slideToggle("fast");
  $('.filter-ul li .drop-filter:visible').css('display', 'flex');
  $('.filter-ul li .drop-filter:visible').toggleClass('active')
  $(this).children('.drop-filter').slideToggle("fast");
  $(this).children('.drop-filter').css('display', 'flex');
  $(this).children('.drop-filter').toggleClass('active')
});

// var catmedia = window.matchMedia("(max-width: 1024px)")

//   if (catmedia.matches) { 

//   } else {

//   }

$('.lang li.active').on('click', function() {
  $('.lang').toggleClass("active");
});

$('.lang li.active a').click(function(e) {
  e.preventDefault();
});

$(".footer-scroll").click(function() {
  $('html, body').animate({
      scrollTop: $("body").offset().top
  }, 800);
});


  $('.srch-klik').on('click', function() {
    $('.search').addClass('active');
    $('.logo').addClass('srch');
  });

  $('.xx').on('click', function() {
    $('.search').removeClass('active');
    $('.logo').removeClass('srch');
  });


  $('.inner-cat').hide();
  
  $('.cat-down').on('click', function() {

      if($(this).hasClass('downn')){
        $('.cat-down').children('.inner-cat.active').hide();
        $('.cat-down').children('.inner-cat.active').removeClass('active');
        $('.cat-down').addClass('downn');
        $(this).removeClass('downn')
        $(this).children('.inner-cat').slideDown('fast');
        $(this).children('.inner-cat').addClass('active');
      }
      else{
        $(this).children('.inner-cat').slideUp('fast');
        $(this).children('.inner-cat').removeClass('active');
        $(this).addClass('downn')
      }

  });





$('.redinput').on('keyup', function() {
  let lng = $(this).val().length
  var widthInput
  if(lng < 4){
     widthInput = lng * 15
  }
  else if (lng < 8){
     widthInput = lng * 12
  }
  else {
    widthInput = lng * 12
  }
  console.log(widthInput)
  $(this).css('width', widthInput)
  $(this).addClass('active')
  $(this).next().addClass('active')
  $(this).prev().addClass('onhide')

});

$('.editt').on('click', function() {
  $(this).next().attr('readonly', false)
  $(this).next().val('')
  $(this).next().focus()
  $(this).addClass('active')
});

// submit
// $('.personal-data-btn').on('click', function() {
//   $(this).prev().attr('readonly', true);
//   $(this).prev().removeClass('active');
//   $(this).prev().attr('style', '');
//   $(this).prev().prev().removeClass('active');
//   $(this).removeClass('active');
//   return false;
// });
//  @@@@@@@@@@@@@@@@@@@@@
 
 



  var $cont = $('.name-number-field-container'),
      $qty = $('.product-quantity');

  function setCont(val){
      if(val === '0'){
          $cont.hide();
      } else {
          $cont.show();
      }
  }

  $('.input-shablon input').on('keyup',function(){ 
      if(this.value.length > 0){
        $(this).parent().addClass('active')
      }
      else{
        $(this).parent().removeClass('active')
      }

      if($(this).parent().hasClass('errorr')){
        $(this).parent().removeClass('errorr')
      }
  });

});


$( ".bin" ).click(function() {
  $(this).parent().fadeOut("fast");
});

$( ".clear" ).click(function() {
  $('.cart-item').fadeOut("fast");
});

// $(window).scroll(function (event) {
//   var height = $(window).scrollTop();
//   if(height  > 150) {
//   $('.header').addClass('del-up')
//   }
//   else{
//   $('.header').removeClass('del-up')
//   }
//   });


// last added
$(".product-in-slider img")
.on("mousemove", function (e) {
    var p = $(this).offset();
    var width = $(this).outerWidth();
    var height = $(this).outerHeight();
    var pl = e.pageX - p.left - width / 2;
    var pt = e.pageY - p.top - height / 2;

    var src = $(this).attr("src");

    var coverImage = $(".hoverZoomMovableImg-img");

    coverImage.parent().addClass("active");

    coverImage.attr("src", src);
    coverImage.css(
        "transform",
        `scale(2) translate(${-pl}px, ${-pt}px)`
    );
})
.on("mouseleave", function () {
    var coverImage = $(".hoverZoomMovableImg-img");

    coverImage.parent().removeClass("active");
});


    // start init map 
    function initMap() {
      // The location of location
      var location = {lat: 41.797486, lng: 44.819829};
      // The map, centered at location
      var map = new google.maps.Map(
          document.getElementById('map'), {
            zoom: 15,
            zoomControl: true,
            zoomControlOptions: {
              position: google.maps.ControlPosition.LEFT_CENTER,
            },
            mapTypeControl: true,
            mapTypeControlOptions: {
              style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            },
            controlSize: 26,
            streetViewControl: true,
            fullscreenControl: true,
            
            center: location
          });
      // The marker, positioned at location
      var marker = new google.maps.Marker({position: location, map: map});
      google.maps.event.addListener(
      marker,
      'click',
      (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0])
          infowindow.open(map, marker)
        }
      })(marker, i)
      )
    }

    // main map in contact
    function initMapSecond() {
      // The location of location
      var location = {lat: 41.797486, lng: 44.819829};
      // The map, centered at location
      var map = new google.maps.Map(
          document.getElementById('map2'), {
            zoom: 15,
            zoomControl: true,
            zoomControlOptions: {
              position: google.maps.ControlPosition.LEFT_CENTER,
            },
            mapTypeControl: true,
            mapTypeControlOptions: {
              style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            },
            controlSize: 26,
            streetViewControl: true,
            fullscreenControl: true,
            
            center: location
          });
      // The marker, positioned at location
      var marker = new google.maps.Marker({position: location, map: map});
      google.maps.event.addListener(
      marker,
      'click',
      (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0])
          infowindow.open(map, marker)
        }
      })(marker, i)
      )
    }

// end init map 


// card validation

if ($('.cart-header')[0]) {
  $(document).ready(function () {
    $("select").niceSelect();
  });
  $("#cart-select").change(function () {
    $(this).removeClass("errorr");
  });
  
  $(".open2").on("click", function () {
    $(".cart-tab").addClass("hiden");
    $(".cart2").removeClass("hiden");
    $(".line-div").removeClass("op1 op3");
    $(".ld1, .ld2").addClass("op2");
    $(".icon-div").removeClass("active");
    $(".open2").addClass("active");
  });
  $(".open1").on("click", function () {
    $(".cart-tab").addClass("hiden");
    $(".cart1").removeClass("hiden");
    $(".line-div").removeClass("op2 op3");
    $(".ld1").addClass("op1");
    $(".icon-div").removeClass("active");
    $(".open1").addClass("active");
  });
  $(".open3").on("click", function () {
    let selectDistrict = document.getElementById("cart-select");
  
    if (selectDistrict.value.length == 0) {
      selectDistrict.classList.add("errorr");
    } else {
      selectDistrict.classList.remove("errorr");
    }
  
    $("#exact-address,#tel-number").each(function () {
      if ($(this).val().length <= 0) {
        $(this).parent().addClass("errorr");
      } else {
        $(this).parent().removeClass("errorr");
      }
    });
  
    if ($(".errorr")[0]) {
      return;
    } else {
      $(".cart-tab").addClass("hiden");
      $(".cart3").removeClass("hiden");
      $(".line-div").removeClass("op1 op2");
      $(".ld2").addClass("op3");
      $(".icon-div").removeClass("active");
      $(".open3").addClass("active");
    }
  });
  
  $("#final-submit").on("click", function () {
    if (!document.getElementById("input3").checked) {
      return false;
    }
  });
}