// JavaScript Document
function submitForm(){
	
	var name = document.getElementById("name").value;
	
	console.log(name);
	
	var email = document.getElementById("email").value;
	
	console.log(email);
	
	
	var tel = document.getElementById("tel").value;
	
	console.log(tel);
	
	var message = document.getElementById("message").value;
	
	console.log(message);
	
	var emailBody = message.replace(/<br\s*\/?>/mg,"%0D%0A");
	
	window.location.href = "mailto:notarealemail@lol.com?subject=MessageFromWebsite&body=Message%20From:%0D%0A"+name+"%0D%0A%0D%0AEmail:%0D%0A"+email+"%0D%0A%0D%0APhone%20Number%0D%0A"+tel+"%0D%0A%0D%0A%0D%0AMessage:"+emailBody;
	
}