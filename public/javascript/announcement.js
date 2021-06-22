jQuery("#announcement_registration_button").click(function () {
      if($("#announcement_registration_window").css("display") == "none"){
          jQuery('#announcement_registration_window').show();
      } else {
          jQuery('#announcement_registration_window').hide();
      }
  });

jQuery(".join_button").click(function () {
      if($("#join_registration").css("display") == "none"){
        jQuery('#join_registration').show();
       } else {
        jQuery('#join_registration').hide();
    }
});

function clickRegisterButton() {
    document.getElementById("user_id").value = sessionStorage.getItem('user');
    return true;
}

function onClickLogoutButton() {
    if(confirm("로그아웃 하시겠습니까?")) {
        sessionStorage.removeItem('user');
        window.location='./main_page.html';
    }
}
