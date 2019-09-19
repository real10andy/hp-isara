$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
　
$(window).scroll(function (){
  $('.fadein').each(function(){
    
    var scroll = $(window).scrollTop(),
      elemPos = $(this).offset().top,
      windowHeight = window.innerHeight;
    if (scroll > elemPos - windowHeight + 100){
      $(this).addClass('scrollin');
      console.log("elemPos"+elemPos);
      console.log("scroll"+scroll);
      console.log("windowHeight"+windowHeight);
      console.log(elemPos-windowHeight);
    }
  });
});

/*モーダル関連*/
$(function(){
  var winScrollTop;
  $('.js-modal-open').each(function(){
    $(this).on('click',function(){
      //スクロール位置を取得
      winScrollTop = $(window).scrollTop();
      var target = $(this).data('target');
      var modal = document.getElementById(target);
      $(modal).fadeIn();
      return false;
    });
  });
  $('.js-modal-close').on('click',function(){
    $('.js-modal').fadeOut();
    $('body,html').stop().animate({scrollTop:winScrollTop}, 100);
    return false;
  }); 
});

