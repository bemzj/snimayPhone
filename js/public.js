$(function(){
	//返回上一页
	$('.reToPrev').on('click',function(){
		window.history.back();
	});
	$('.getMore').on('click',function(){
		if($(this).attr('isOpen')=='false')
		{
			$(this).attr('isOpen',true);
			$('.secondNav').stop().slideDown(500);
			$('.getMore').css('margin-right','3.8%');
			$('.getMore').find('img').attr('src','img/closeNav.png');
			$('.navTitle').removeClass('ntBlack');
			$('.navTitle').addClass('ntWhite');	
			if(currentPage!=1)
			{
				$('.reToPrev').find('img').attr('src','img/backWhite.png');
			}
		}else{
			$(this).attr('isOpen',false);			
			$('.secondNav').stop().slideUp(500);
			$('.navMore').attr('isOpen',false);
			$('.navMore').next('ul').stop().slideUp(500);
			$('.navMore').css('background-image','url(img/add.png)');
			$('.getMore').css('margin-right','2.7%');
			if(currentPage==1)
			{
				$('.getMore').find('img').attr('src','img/white.png');
			}else{
				$('.getMore').find('img').attr('src','img/moreBlack.png');
				$('.reToPrev').find('img').attr('src','img/backBlack.png');
			}
			
			$('.navTitle').removeClass('ntWhite');
			$('.navTitle').addClass('ntBlack');	
		}
	});
	$('.navMore').on('click',function(){
		if($(this).attr('isOpen')=='false')
		{
			$(this).attr('isOpen',true);
			$(this).next('ul').stop().slideDown(500);
			$(this).css('background-image','url(img/none.png)');
		}else{
			$(this).attr('isOpen',false);			
			$(this).next('ul').stop().slideUp(500);
			$(this).css('background-image','url(img/add.png)');
		}
	});
	$('.navSearch input').on('input',function(){
		if($(this).val()=="")
		{
			$('.shBtn').stop().animate({'right':'-20%'},500);
		}else{
			$('.shBtn').stop().animate({'right':'0%'},500);
		}
	})
});
function alertWind(text){
	var html = "";
	html += '<div id="popWindows"><div class="popBoxes box"><img src="img/joinPop.png" /><a href="###" class="redClosed"><img src="img/redClose.png"/></a>';
	html += '<div class="mesBox"><div class="titles"><ul><li><p>信息提醒</p></li><li><p>Information to remind</p></li><li><span></span></li></ul>';
	html += '</div><div class="contentTip"><p>'+text+'</p></div><div class="closeTip"><p>弹窗将在<span>3</span>秒钟后自动关闭</p></div></div></div></div>';
	$('body').append(html);				
	$('.redClosed').on('click',function(){
		clearInterval(stween);
		$('#popWindows').stop().animate({"top":"50%","height":"0%"},500,function(){
			$(this).hide();
			$(this).css('top','0%');
			$(this).css('height','100%');
		})
	});
	var stime = 3;
	$('.closeTip p span').html(stime);
	var stween = setInterval(function(){
		stime--;
		$('.closeTip p span').html(stime);
		
		if(stime==-1)
		{
			clearInterval(stween);
			$('#popWindows').hide();
		}
	},1000);
				
					
		
}
