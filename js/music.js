$(document).ready(function() {
	
	
	document.getElementById('song-1').volume = 0.2;
	document.getElementById('song-2').volume = 0.2;
	document.getElementById('song-3').volume = 0.2;
	document.getElementById('song-4').volume = 0.2;
	document.getElementById('song-5').volume = 0.2;
	document.getElementById('song-6').volume = 0.2;
	
})


$('#song-1-play').on('click', function() {
	$('.modal').modal({
		escapeClose: false,
		clickClose: true,
		showClose: false
	});
    document.getElementById('song-1').play();
	document.getElementById('song-2').pause();
	document.getElementById('song-3').pause();
	document.getElementById('song-4').pause();
	document.getElementById('song-5').pause();
	document.getElementById('song-6').pause();
});

$('#song-1-pause').on('click', function() {
    document.getElementById('song-1').pause();
});

$('#song-1').on('timeupdate', function() {
    $('#song-1-seekbar').attr("value", this.currentTime / this.duration);
});
$('#song-1-plus').on('click', function() {
    document.getElementById('song-1').volume = (document.getElementById('song-1').volume + 0.1)
});
$('#song-1-minus').on('click', function() {
    document.getElementById('song-1').volume = (document.getElementById('song-1').volume - 0.1)
});



$('#song-2-play').on('click', function() {
	$('.modal').modal({
		escapeClose: false,
		clickClose: true,
		showClose: false
	});
    document.getElementById('song-2').play();
	document.getElementById('song-1').pause();
	document.getElementById('song-3').pause();
	document.getElementById('song-4').pause();
	document.getElementById('song-5').pause();
	document.getElementById('song-6').pause();
});

$('#song-2-pause').on('click', function() {
    document.getElementById('song-2').pause();
});

$('#song-2').on('timeupdate', function() {
    $('#song-2-seekbar').attr("value", this.currentTime / this.duration);
});
$('#song-2-plus').on('click', function() {
    document.getElementById('song-2').volume = (document.getElementById('song-2').volume + 0.1)
});
$('#song-2-minus').on('click', function() {
    document.getElementById('song-2').volume = (document.getElementById('song-2').volume - 0.1)
});




$('#song-3-play').on('click', function() {
	$('.modal').modal({
		escapeClose: false,
		clickClose: true,
		showClose: false
	});
    document.getElementById('song-3').play();
	document.getElementById('song-1').pause();
	document.getElementById('song-2').pause();
	document.getElementById('song-4').pause();
	document.getElementById('song-5').pause();
	document.getElementById('song-6').pause();
});
$('#song-3-pause').on('click', function() {
    document.getElementById('song-3').pause();
});

$('#song-3').on('timeupdate', function() {
    $('#song-3-seekbar').attr("value", this.currentTime / this.duration);
});
$('#song-3-plus').on('click', function() {
    document.getElementById('song-3').volume = (document.getElementById('song-3').volume + 0.1)
});
$('#song-3-minus').on('click', function() {
    document.getElementById('song-3').volume = (document.getElementById('song-3').volume - 0.1)
});



$('#song-4-play').on('click', function() {
	$('.modal').modal({
		escapeClose: false,
		clickClose: true,
		showClose: false
	});
    document.getElementById('song-4').play();
	document.getElementById('song-1').pause();
	document.getElementById('song-2').pause();
	document.getElementById('song-3').pause();
	document.getElementById('song-5').pause();
	document.getElementById('song-6').pause();
});

$('#song-4-pause').on('click', function() {
    document.getElementById('song-4').pause();
});

$('#song-4').on('timeupdate', function() {
    $('#song-4-seekbar').attr("value", this.currentTime / this.duration);
});
$('#song-4-plus').on('click', function() {
    document.getElementById('song-4').volume = (document.getElementById('song-4').volume + 0.1)
});
$('#song-4-minus').on('click', function() {
    document.getElementById('song-4').volume = (document.getElementById('song-4').volume - 0.1)
});



$('#song-5-play').on('click', function() {
	$('.modal').modal({
		escapeClose: false,
		clickClose: true,
		showClose: false
	});
    document.getElementById('song-5').play();
	document.getElementById('song-1').pause();
	document.getElementById('song-2').pause();
	document.getElementById('song-3').pause();
	document.getElementById('song-4').pause();
	document.getElementById('song-6').pause();
});

$('#song-5-pause').on('click', function() {
    document.getElementById('song-5').pause();
});

$('#song-5').on('timeupdate', function() {
    $('#song-5-seekbar').attr("value", this.currentTime / this.duration);
});
$('#song-5-plus').on('click', function() {
    document.getElementById('song-5').volume = (document.getElementById('song-5').volume + 0.1)
});
$('#song-5-minus').on('click', function() {
    document.getElementById('song-5').volume = (document.getElementById('song-5').volume - 0.1)
});




$('#song-6-play').on('click', function() {
	$('.modal').modal({
		escapeClose: false,
		clickClose: true,
		showClose: false
	});
    document.getElementById('song-6').play();
	document.getElementById('song-1').pause();
	document.getElementById('song-2').pause();
	document.getElementById('song-3').pause();
	document.getElementById('song-4').pause();
	document.getElementById('song-5').pause();
});
$('#song-6-pause').on('click', function() {
    document.getElementById('song-6').pause();
});

$('#song-6').on('timeupdate', function() {
    $('#song-6-seekbar').attr("value", this.currentTime / this.duration);
});
$('#song-6-plus').on('click', function() {
    document.getElementById('song-6').volume = (document.getElementById('song-6').volume + 0.1)
});
$('#song-6-minus').on('click', function() {
    document.getElementById('song-6').volume = (document.getElementById('song-6').volume - 0.1)
});