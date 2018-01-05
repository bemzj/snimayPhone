$(function(){
	$('.pressBox').on('click',function(){
		$('#details').show().stop().animate({'left':'0'},400);
		$('.paperBox').find('.handbox').show();
		$('.paperBox').height($('.paperBox img').height());
		$('.paperBox').each(function() {
			new RTP.PinchZoom($(this), {});
		});
	});
	$('.closeDetails').on('click',function(){
		$('#details').show().stop().animate({'left':'100%'},400,function(){
			$(this).hide();
		});
	});
	$('.paperBox').on('touchstart',function(){
		$(this).find('.handbox').hide();
	});
	touch.on('#details', 'swiperight', function(ev){
	    $('#details').stop().animate({'left':'100%'},500,function(){
			$(this).hide();
		});
	});
//	$('.paperBox img').each(function() {
//		new RTP.PinchZoom($(this), {});
//	});
});
