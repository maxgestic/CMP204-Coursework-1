// JavaScript Document

var countDate = new Date("Nov 1, 2020 16:00:00");

window.onload = function()
{
	//this function is called when the web page is loaded
	//1 second increments
	setCountdown();
	setInterval("setCountdown()", 1000);
}

function setCountdown()
{

	//date and time functions you might want to look at- getHours etc.
	
	var today = new Date();
	//console.log(today);
	
	var difference = countDate - today;
	
	//console.log(difference);
	
	var days = Math.floor(difference / (1000 * 60 * 60 * 24));
	var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((difference % (1000 * 60)) / 1000);
	
	
	document.getElementById("countdown").innerHTML ="Days: " + days + ", Hours: " + hours + ", Minutes: " + minutes + ", Seconds: " +seconds;
	
}