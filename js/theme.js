// JavaScript Document

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

$(document).ready(function() {
	
	
	var cookie = getCookie("theme_sel");
	console.log(cookie);
	
	if (cookie == "Random"){
	
		var theme_int = getRandomInt(3);
		console.log("cookie random");
	}
	else if (cookie == null){
	
		var theme_int = getRandomInt(3);
		console.log("cookie empty");
	}
	else{
		
		var theme_int = cookie;
		console.log("cookie found");
		
	}


		if (theme_int == 0){

			document.getElementById("banner-img0").id = "banner-img1";
			document.documentElement.style.setProperty('--t1-colour', '#fcd303');

		}

		else if(theme_int == 1){

			document.getElementById("banner-img0").id = "banner-img2";
			document.documentElement.style.setProperty('--t1-colour', '#c542f5');

		}

		else{

			document.getElementById("banner-img0").id = "banner-img3";
			document.documentElement.style.setProperty('--t1-colour', '#38cdeb');

		}
		
	
	
});

$(function () {
        $("#theme").change(function () {
            var selectedValue = $(this).val();
            document.cookie = "theme_sel="+selectedValue;
			
			location.reload();
        });
    });