$(function(){
  $("#accordion-wrapper dt").on("click", function() {
  $(this).next().slideToggle();
  });
  
});

var swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 55,
  centeredSlides: true,
  loopedSlides: (".swiper-container").length,
  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    reverseDirection: false
  }
});


  AOS.init();
  
  $(window).on('load',function(){
    var locUrl = location.href;
    var setHash = locUrl.split('#');
    //現在のページURLに#が含まれる場合はスクロール移動
    if(setHash[1]){
        hashMove("#"+setHash[1]);
    }
    //#pagetop
    $('#pagetop a').on('click',function() {
        var href = $(this).attr("href");
        var clkUrl = href.split('#');
        hashMove("#"+clkUrl[1]);
        return false;
    });
    //#から始まるリンクはスクロール
    $('a[href^="#"]').on('click',function() {
        var href = $(this).attr("href");
        var clkUrl = href.split('#');
        hashMove("#"+clkUrl[1]);
    });
    //#を含むリンクは、リンク先と現在のページのURLを比較して判断
    $('a[href*="#"]').on('click',function() {
        var href = $(this).attr("href");
        var pageURL = location.pathname;
        reg = new RegExp(pageURL);
        //ページ名が同じならスクロール移動
        if (href.match(reg)) {
            var clkUrl = href.split('#');
            hashMove("#"+clkUrl[1]);
        }
    });
 
    function hashMove(trg){
        var position = $(trg).offset().top;
        if($('body').hasClass('admin-bar')){
            position = position - 50;
        }else{
            position = position - 20;
        }
        if($('body').width() <= 980){
            position = position - 50; //見出しの文字が切れるのを防ぐ
        }else{
            position = position - 50; //見出しの文字が切れるのを防ぐ
        }
        $('body,html').animate({scrollTop:position}, '800', 'swing');
    }
});

$(document).ready(function () {

  const $submitBtn = $('#js-submit')
  $('#form input,#form textarea').on('change', function () {
    if (
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form input[type="checkbox"]').val() !== "" &&
      $('#form #privacyCheck').prop('checked') === true
    ) {
      $submitBtn.prop('disabled', false);

    } else {
      $submitBtn.prop('disabled', true);
    }
  });

});

(function () {
  $('#js-buttonHamburger').click(function () {

    if ($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', true);
      $('#js-global-menu').attr('area-hidden', false);
      $('#js-global-menu').css('visibility', 'visible');
      $(".sp-bg").fadeToggle(300);
      $(".sp-list").toggleClass('open');
    } else {
      $(this).attr('aria-expanded', false);
      $('#js-global-menu').attr('area-hidden', true);
      $('#js-global-menu').css('visibility', 'hidden');
      $(".sp-bg").fadeToggle(300);
      $(".sp-list").toggleClass('open');
    }
  });

  $('.sp-items').click(function () {
    if (window.matchMedia( '(max-width: 1100px)' ).matches) {
      if ($('#js-buttonHamburger').attr('aria-expanded') == 'false') {
        $('#js-buttonHamburger').attr('aria-expanded', true);
        $('#js-global-menu').attr('area-hidden', false);
        $('#js-global-menu').css('visibility', 'visible');
        $(".sp-bg").fadeToggle(300);
        $(".sp-list").toggleClass('open');
      } else {
        $('#js-buttonHamburger').attr('aria-expanded', false);
        $('#js-global-menu').attr('area-hidden', true);
        $('#js-global-menu').css('visibility', 'hidden');
        $(".sp-bg").fadeToggle(300);
        $(".sp-list").toggleClass('open');
      }
    };
  });
}) ();