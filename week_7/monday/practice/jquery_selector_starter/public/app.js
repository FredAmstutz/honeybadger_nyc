$(function(){
	const asideAwesome = document.getElementById('awesome');
	const $awesomeAside = $('#awesome');

	const vanillaYay = document.getElementsByClassName('yay');
	const $yay = $('.yay');

	//jQuery has shorter syntax, adds "magic" to the element

	const $newLi = $('<li class="whaever>');

	$('body').append($newLi);

	const $header = $('.container h1');
	console.log($header.html);
	$header.html('WAHHHOOOOOO');

	const $googLink = $('.google');
	$googLink.text('Go to google');

	const $linkHolder = $('.link-holder');
	$linkHolder.html($googLink);

	const $h1 = $('<h1>THIS IS THE VALUE</h1>');
	$('body').append($h1);
	$h1.appendTo('body');

	$('body').prepend($h1);
	$h1.prependTo('body');

	$h1.remove();
	//$('.second').empty();

	const $secondUl = $('.second');

	$linkHolder.append($secondUl);

	$('.container').append($linkHolder);

	const $emptyAsides = $('.asides');
	const $allAsides = $('aside');

	$emptyAsides.empty();
	
	const $circle = $('.circle');

	$circle.children();
	console.log($circle.children().find('asides'));

	
});