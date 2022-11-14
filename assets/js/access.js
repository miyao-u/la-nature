$(function(){

    //ボタンをクリックしたら
    $(".photo_btn").click(function(){

        //body要素の最後にdiv.bgを追加
        $("body").append('<div class="bg">');

        //body要素の最後にdiv.shop_photoを追加
        $("body").append('<div class="shop_photo">');

        //それぞれ非表示にする
        $(".bg").hide();
        $(".shop_photo").hide();

        //.shop_photoの中にimg要素を追加
        $(".shop_photo").html("<img>");

        //img要素にsrc属性を設定
        $(".shop_photo img").attr("src", $(this).attr("href"));

        //img要素にwidth,height,alt属性を設定
        $(".shop_photo img").attr("width", 1000);
        $(".shop_photo img").attr("height", 400);
        $(".shop_photo img").attr("alt", "shopPhoto");

        //.bgと.shop_photoをフェードイン
        $(".bg").fadeIn();
        $(".shop_photo").fadeIn();

        //背景をクリック
        $(".bg").click(function(){

            //背景(自分自身)をフェードアウト、完了したら削除
            $(this).fadeOut(function(){
                $(this).remove();
            });

            //拡大画像をフェードアウト、完了したら削除
            $(".shop_photo").fadeOut(function(){
                $(this).remove();
            });
        });

        return false;
    });
});