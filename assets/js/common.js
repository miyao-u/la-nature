$(function () {

    //スムーススクロール
    $('a[href^="#"]').click(function () {

        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;

    });


    //stickey(nav固定)
    var navPos = $("nav").offset().top;

    $(window).scroll(function () {
        if ($(window).scrollTop() > navPos) {
            $("nav ul").css("position", "fixed");
        } else {
            $("nav ul").css("position", "absolute");
        }

    });

    //ハンバーガーメニュー
    $(".openbtn").click(function () {//ボタンがクリックされたら
        $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
        $("#g_nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    });

    $("#g_nav a").click(function () {//ナビゲーションのリンクがクリックされたら
        $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
        $("#g_nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
    });

});