$(function(){
	//返回上一页
	$('.backToPrev').on('click',function(){
		window.history.back();
	});
	$('.getMore').on('click',function(){
		$('.nav').css('background-color','#333333');
		$('.secondNav').slideDown(1000);
	});
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
