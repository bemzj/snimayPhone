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
	//新闻详情
	$('#media .mediaBox').on('click',function(){
		$('#NewDetails').show().stop().animate({'left':'0'},400);
	});
	
	$('.closeNewDetails').on('click',function(){
		$('#NewDetails').show().stop().animate({'left':'100%'},400,function(){
			$(this).hide();
		});
	});
	//公司动态详情
	$('#company .mediaBox').on('click',function(){
		$('#companyDetails').show().stop().animate({'left':'0'},400);
	});
	
	$('.closeConpanyDetails').on('click',function(){
		$('#companyDetails').show().stop().animate({'left':'100%'},400,function(){
			$(this).hide();
		});
	});
	//播放视频
	var myPlayer1 = videojs('my-video1');
	videojs("my-video1").ready(function(){
		var myPlayer = this;
		$('#my-video1').next('.playVideo').click(function(){
			myPlayer1.play();
			$(this).hide();
		});
	});
	var myPlayer2 = videojs('my-video2');
	videojs("my-video2").ready(function(){
		var myPlayer = this;
		$('#my-video2').next('.playVideo').click(function(){
			myPlayer2.play();
			$(this).hide();
		});
	});
	//视频不在可视区域内停止播放
	
	$(window).scroll(function(){
		if($('#my-video1').offset().top-$(window).scrollTop()+$('#my-video1').height()<=0||$('#my-video1').offset().top-$(window).scrollTop()>=$(window).height())
		{
			myPlayer1.pause();
		}
		if($('#my-video2').offset().top-$(window).scrollTop()+$('#my-video2').height()<=0||$('#my-video2').offset().top-$(window).scrollTop()>=$(window).height())
		{
			myPlayer2.pause();
		}
	});
	//切换选择
	$('#fourChoice button').on('click',function(){
		$('#fourChoice button').removeClass('fbtn');
		$(this).addClass('fbtn');
		var index = parseInt($(this).attr('index'));
		switch(index){
			case 1:
				$('#company').show().addClass('animated bounceInUp');
				$('#media').hide();
				$('#videoCenter').hide();
				$('#press').hide();
				break;
			case 2:
				$('#company').hide();
				$('#media').show().addClass('animated bounceInUp');
				$('#videoCenter').hide();
				$('#press').hide();
				break;
			case 3:
				$('#company').hide();
				$('#media').hide();
				$('#videoCenter').show().addClass('animated bounceInUp');
				$('#press').hide();
				break;
			case 4:
				$('#company').hide();
				$('#media').hide();
				$('#videoCenter').hide();
				$('#press').show().addClass('animated bounceInUp');
				break;
		}
	});
});
