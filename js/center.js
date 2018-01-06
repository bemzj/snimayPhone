$(function(){
	$('.selectChild').width($(window).width()/3.5);
	$('.home .selectBox').width($(window).width()/3.5*$('.home .selectBox').children('.selectChild').length+2*($('.home .selectBox').children('.selectChild').length-1));
});
