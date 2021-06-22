
function checkValidation() {
	var regex_id = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // password 양식
	var regex_psw = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
	
	if(regex_id.test(document.getElementById("id_").value) && regex_psw.test(document.getElementById("psw_").value)) {
        if(document.getElementById("psw_").value !== document.getElementById("psw2_").value) {
            alert("비밀번호가 일치하지 않습니다.");
            return false;
        }
	} else {
		alert("입력 양식을 맞춰주시기 바랍니다.");
		return false;
	}
	alert("회원 가입이 완료되었습니다!");
	return true;
}