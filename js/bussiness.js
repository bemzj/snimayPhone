$(function(){
	//选择
	$('.choice3 select').change(function(){
		$(this).prev('p').html($(this).children('option:selected').val());
	});
});
