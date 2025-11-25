
$('.slick-area').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});




$(window).on('scroll', function () {
  $('.first').each(function () {
    const targetTop = $(this).offset().top;
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();

    // 画面内に入ったら発火
    if (scrollTop > targetTop - windowHeight + 100) {
      $(this).addClass('active');
    }
  });



  // $(".line").each(function () {

  //   var scroll = $(window).scrollTop();

  //   var target = $(this).offset().top;

  //   var windowHeight = $(window).height();

  //   if (scroll > target - windowHeight + $(this).outerHeight()) {
  //     // outerHeight()はpaddingを含めた高さを取得する
  //     $(this).addClass("line-in");
  //   }
  // });

  $(".inview-balloon").each(function () {

    var scroll = $(window).scrollTop();

    var target = $(this).offset().top;

    var windowHeight = $(window).height();

    if (scroll > target - windowHeight + $(this).outerHeight()) {
      // outerHeight()はpaddingを含めた高さを取得する
      $(this).addClass("balloon-in");
    }
  });


$(".fade").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 500) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });


  

  $('.shine').each(function () {
    const targetTop = $(this).offset().top;

    // 要素が画面内に入ったら発動
    if (scrollBottom > targetTop + 100) {
      $(this).addClass('shine-on');
    }
  });

});


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

  $(".nav-list").on("click", function () {
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
   worry 用
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


/* ================================
   reason 用
   ================================ */
function fadeReasonAnime() {
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
}

/* ================================
   flow 用
   ================================ */
function fadeFlowAnime() {
  $('.flipLeftTrigger').each(function () {
    var elemPos = $(this).offset().top - 10;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('flipLeft');
    } else {
      $(this).removeClass('flipLeft');
    }
  });
}
/* ================================
   price 用
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
  fadePriceAnime();
});

$(window).on('load', function () {
  fadeWorryAnime();
  fadeReasonAnime();
  fadeFlowAnime();
  fadePriceAnime();
});



// よくある質問

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

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {

  $("#splash-logo").delay(2000).fadeOut('slow');//ロゴを2秒でフェードアウトする記述 

  //=====ここからローディングエリア（splashエリア）を3秒でフェードアウトした後に動かしたいJSをまとめる

  $("#splash").delay(3000).fadeOut('slow', function () {//ローディングエリア（splashエリア）を3秒でフェードアウトする記述
    $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与

  });

  $('.splashbg1').on('animationend', function () {
    slideAnime();//印象編 8-2 テキストが流れるように出現（左から右）の関数を呼ぶ
  });
});
