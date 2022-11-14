$(function () {

  //alert一旦非表示
  $(".alert").hide();
  //送信btnクリック
  $(".form_btn").click(function () {

    var sendFlag = true;

    //radio
    //選択数
    var radioChk = $('input[name="shop"]:checked').length;

    if (radioChk == 0) {
      $("#radio_section .alert").show();
      sendFlag = false;
    } else {
      $("#radio_section .alert").hide();
    }


    //１行入力
    if (!$("#name").val()) {
      $("#name_section .alert").show();
      sendFlag = false;
    } else {
      $("#name_section .alert").hide();
    }

    if (!$("#kana").val()) {
      $("#kana_section .alert").show();
      sendFlag = false;
    } else {
      $("#kana_section .alert").hide();
    }

    if (!$("#tel").val()) {
      $("#tel_section .alert").show();
      sendFlag = false;
    } else {
      $("#tel_section .alert").hide();
    }

    if (!$("#email").val()) {
      $("#email_section .alert").show();
      sendFlag = false;
    } else {
      $("#email_section .alert").hide();
    }

    if (!$("#emailchk").val()) {
      $("#emailchk_section .alert").show();
      sendFlag = false;
    } else {
      $("#emailchk_section .alert").hide();
    }




    //選択ボタン
    if ($("select").val() == "選択してください") {
      $("#select_section .alert").show();
      sendFlag = false;
    } else {
      $("#select_section .alert").hide();
    }


    //自由（複数行）入力
    if (!$("textarea").val()) {
      $("#textarea_section .alert").show();
      sendFlag = false;
    } else {
      $("#textarea_section .alert").hide();
    }

    if (sendFlag == false) {
      return false;
    }

  });

  //telephone_logo
  $("main .telephone p").hover(function () {
    //hover-on
    $(this).children().attr("src", "../assets/images/contact/phone_on.png");

  }, function(){
    //hover-off
    $(this).children().attr("src", "../assets/images/contact/phone_off.png");

  });


});




