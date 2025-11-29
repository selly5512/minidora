$(function () {
  /*=================================================
  スムーススクロール
  ===================================================*/
  $('a[href^="#"]').click(function () {
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, 1000, "swing");
    return false;
  });

  $(".toggle-btn").on("click", function () {
    $("#header").toggleClass("open");
  });

  $(".nav-list a").on("click", function () {
    $("#header").toggleClass("open");
  });

  $("#mask").on("click", function () {
    $("header").removeClass("open");
  });

  $(".menu-header").on("click", function () {
    $("header").removeClass("open");
  });
});
/*=================================================
  スクロール時の画像フェード表示
  ===================================================*/
$(window).scroll(function () {
  $(".inview-balloon").each(function () {

    var scroll = $(window).scrollTop();

    var target = $(this).offset().top;

    var windowHeight = $(window).height();

    if (scroll > target - windowHeight + $(this).outerHeight()) {
      $(this).addClass("balloon");
    }
  });

});

/* ================================
   worry 
   ================================ */
function fadeWorryAnime() {
  $('.fadeInTrigger').each(function () {
    var elemPos = $(this).offset().top - 10;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeIn');
    } else {
      $(this).removeClass('fadeIn');
    }
  });

  $('.zoomInTrigger').each(function () {
    var elemPos = $(this).offset().top - 10;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('zoomIn');
    } else {
      $(this).removeClass('zoomIn');
    }
  });

  $('.fadeDownTrigger').each(function () {
    var elemPos = $(this).offset().top + 10;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeDown');
    } else {
      $(this).removeClass('fadeDown');
    }
  });
}


/* ================================
   reason 
   ================================ */
function fadeReasonAnime() {
  $('.fadeInTrigger').each(function () {
    var elemPos = $(this).offset().top + 10;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeIn');
    } else {
      $(this).removeClass('fadeIn');
    }
  });
}

/* ================================
   flow 
   ================================ */
function fadeFlowAnime() {
  $('.flipLeftTrigger').each(function () {
    var elemPos = $(this).offset().top - 20;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('flipLeft');
    } else {
      $(this).removeClass('flipLeft');
    }
  });
}

/*===========================================================*/
/* support*/
/*===========================================================*/


function fadeSupportAnime() {
  $('.fadeLeftTrigger').each(function () {
    var elemPos = $(this).offset().top - 10;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeLeft');
    } else {

      $(this).removeClass('fadeLeft');
    }
  });
  $('.fadeRightTrigger').each(function () {
    var elemPos = $(this).offset().top - 10;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeRight');
    } else {
      $(this).removeClass('fadeRight');
    }
  });
}

/* ================================
   metaleaf
   ================================ */
function fadeMetaLeafAnime() {

  let scroll = $(window).scrollTop();
  let windowHeight = $(window).height();
  let scrollBottom = scroll + windowHeight;

  $(".fade").each(function () {
    let target = $(this).offset().top;

    if (scroll > target - windowHeight - 10) {
      $(this).css("opacity", "1");
      $(this).css("transform", "translateY(0)");
    }
  });

  $('.shine').each(function () {
    const targetTop = $(this).offset().top;

    if (scrollBottom > targetTop + 100) {
      $(this).addClass('shine-on');
    }
  });
}



/*=================================================
result スライダー
===================================================*/
$(".slick-area").slick({
  arrows: false,
  centerMode: true,
  centerPadding: "100px",
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerPadding: "50px",
        slidesToShow: 1,
      },
    },
  ],
});


/* ================================
   price 
   ================================ */
function fadePriceAnime() {
  $('.fadeDownTrigger').each(function () {
    var elemPos = $(this).offset().top - 10;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeDown');
    } else {
      $(this).removeClass('fadeDown');
    }
  });
}


$(window).on('scroll', function () {
  fadeWorryAnime();
  fadeReasonAnime();
  fadeFlowAnime();
  fadeSupportAnime();
  fadeMetaLeafAnime();
  fadePriceAnime();
});

$(window).on('load', function () {
  fadeWorryAnime();
  fadeReasonAnime();
  fadeFlowAnime();
  fadeSupportAnime();
  fadeMetaLeafAnime();
  fadePriceAnime();
});


/* ================================
   question
   ================================ */

document.querySelectorAll('.faq-item').forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  const paddingTop = 16;
  const paddingBottom = 16;

  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    if (isActive) {
      answer.style.height = '0px';
      answer.style.opacity = '0';
      answer.style.paddingTop = '0px';
      answer.style.paddingBottom = '0px';
      item.classList.remove('active');
    } else {
      const contentHeight = answer.scrollHeight;
      answer.style.height = contentHeight + paddingTop + paddingBottom + 'px';
      answer.style.opacity = '1';
      answer.style.paddingTop = paddingTop + 'px';
      answer.style.paddingBottom = paddingBottom + 'px';
      item.classList.add('active');
    }
  });
});



function slideAnime() {
  $('.leftAnime').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("slideAnimeLeftRight");
      $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");
    } else {
      $(this).removeClass("slideAnimeLeftRight");
      $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");

    }
  });

  $('.rightAnime').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("slideAnimeRightLeft");
      $(this).children(".rightAnimeInner").addClass("slideAnimeLeftRight");
    } else {
      $(this).removeClass("slideAnimeRightLeft");
      $(this).children(".rightAnimeInner").removeClass("slideAnimeLeftRight");

    }
  });
}

$(window).on('load', function () {

  $("#splash-logo").delay(2000).fadeOut('slow');

  $("#splash").delay(3000).fadeOut('slow', function () {
    $('body').addClass('appear');

  });

  $('.splashbg1').on('animationend', function () {
    slideAnime();
  });
});