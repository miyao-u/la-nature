/*news.js*/

//TOPページのリンクから飛んできたときの表示位置調整
$(window).on('load', function() {
  var headerHeight = 220; //ずらしたいheightを指定
  if (document.URL.match('#')) {
      var str = location.href;
      var cut_str = "#";
      var index = str.indexOf(cut_str);
      var href = str.slice(index);
      var target = href;
      var position = $(target).offset().top - headerHeight;
      $("html, body").scrollTop(position);
      return false;
  }
});

$(function () {

  // 動きのきっかけとなるアニメーションの名前を定義
  function fadeAnime() {

    // ふわっ
    $('.fadeUpTrigger').each(function () { //fadeUpTriggerというクラス名が
      var elemPos = $(this).offset().top + 150;//要素より、150px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
      } else {
        $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
      }
    });
  }


  //画面をスクロールをしたら動かしたい
  $(window).scroll(function () {
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

});










