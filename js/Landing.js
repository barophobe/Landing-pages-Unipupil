/*$(document).ready(function(){ 

//Code referenced from http://www.bootply.com/61730#
//carousel

	/*$('#myCarousel').carousel({
	  interval: 5000
	});

	$('#carousel-text').html($('#slide-content-0').html());

	


	// When the carousel slides, auto update the text
	$('#myCarousel').on('slid.bs.carousel', function (e) {
	  var id = $('.item.active').data('slide-number');
	  $('#carousel-text').html($('#slide-content-'+id).html());
	});*/

	/*$('#myCarousel').carousel({
	  interval: 5000
	});

	$('#carousel-text').html($('#slide-content-0').html());

	
	// When the carousel slides, auto update the text
	$('#myCarousel').on('slid.bs.carousel', function (e) {
	  var id = $('.item.active').data('slide-number');
	  $('#carousel-text').html($('#slide-content-'+id).html());
	});



	$('#myCarousel').carousel({
	  interval: 5000
	});

	$('#carousel-text').html($('#slide-content-0').html());

	//Handles the carousel thumbnails
	/*$('[id^=carousel-selector-]').click( function(){
	  var id_selector = $(this).attr("id");
	  var id = id_selector.substr(id_selector.length-1);
	  var id = parseInt(id);
	  $('#myCarousel').carousel(id);
	});*/


/*	// When the carousel slides, auto update the text
	$('#myCarousel').on('slid.bs.carousel', function (e) {
	  var id = $('.item.active').data('slide-number');
	  $('#carousel-text').html($('#slide-content-'+id).html());
	});

	});*/

$(document).ready(function(){ 


//carousel

	$('#myCarousel').carousel({
	  interval: 5000
	});

	$('#carousel-text').html($('#slide-content-0').html());

	//Handles the carousel thumbnails
	/*$('[id^=carousel-selector-]').click( function(){
	  var id_selector = $(this).attr("id");
	  var id = id_selector.substr(id_selector.length-1);
	  var id = parseInt(id);
	  $('#myCarousel').carousel(id);
	});*/


	// When the carousel slides, auto update the text
	$('#myCarousel').on('slid.bs.carousel', function (e) {
	  var id = $('.item.active').data('slide-number');
	  $('#carousel-text').html($('#slide-content-'+id).html());
	});

	});