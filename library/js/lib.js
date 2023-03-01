/*---------------------------------------
　ハンバーガーメニュー
  参考サイト：https://zero-plus.io/media/jquery-hamburger/
-----------------------------------------*/
$(function(){
    const hamMenu = $('#hamburger-menu'); //ハンバーガーメニュー
    const hamNav = $('#hamburger-nav');   //ナビゲーション
    hamMenu.on('click', function () {     // activeクラスを付け外し
        hamMenu.toggleClass('active');
        hamNav.toggleClass('active');
    });
});

/*---------------------------------------
　ページトップへ戻る
-----------------------------------------*/
$(function(){
    var showFlug = false;
    var topBtn = $('.p-footer__pagetop');
    topBtn.css('bottom', '-100px');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            if (showFlug == false) {
            showFlug = true;
            topBtn.stop().animate({'bottom' : '10px'}, 200);
            }
        } else {
            if (showFlug) {
            showFlug = false;
            topBtn.stop().animate({'bottom' : '-100px'}, 200);
            }
        }
    });
});

/*---------------------------------------
　ポップアップ
-----------------------------------------*/
$(function(){
    $('.p-popup__close').on('click',function(){
        $('.l-popup').fadeOut('slow');
    });
});

/*---------------------------------------
　よくある質問　アコーディオン
-----------------------------------------*/
$(function(){
    $('.p-faq__area>dt').click(function() {
      $(this).next('dd').slideToggle();
      $(this).toggleClass('selected');
      });
});