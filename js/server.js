$(function(){
	//搜说
	 $('.searchBox input').on('input',function(){
		if($(this).val().length>0)
		{
			$(this).siblings('.closeSearch').show();
		}else{
			$(this).siblings('.closeSearch').hide();
		}
	});
	$('.searchBox input').on('click',function(){
		if($(this).val().length>0)
		{
			$(this).siblings('.closeSearch').show();
		}else{
			$(this).siblings('.closeSearch').hide();
		}
	});
	$('.closeSearch').on('click',function(){
		$(this).prevAll('input').val("");
		$(this).hide();
	});
});
