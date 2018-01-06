$(function(){
	setTimeout(function(){
		$('.zhanwei').height($('.meanP').height()+parseInt($('.meanP').css('margin-top'))+parseInt($('.meanP').css('padding-top'))*2);
	},200);
	//年份
	var years = [2013,2014,2015,2016,2017,2018];
	for(var i=0;i<years.length;i++)
	{
		if(i==0)
		{
			var html = "";
			html += '<div class="floatl long longActive"><div class="yearNumber"><img src="img/rcircle.png" /><p>'+years[i]+'</p></div></div>';
			$('.yearsBox').append(html);
		}else{
			var html = "";
			html += '<div class="floatl long"><div class="yearNumber"><img src="img/ccircle.png" /><p>'+years[i]+'</p></div></div>';
			$('.yearsBox').append(html);
		}
		
		if(i+1!=years.length)
		{
			for(var j=0;j<19;j++)
			{
				$('.yearsBox').append('<div class="floatl short"></div>');
			}
		}				
	}
	$('.yearsBox').width(years.length*5*20+1);
	$('.long').on('click',function(){
		$('.long').removeClass('longActive');
		$(this).addClass('longActive');
		$('.long').find('img').attr('src','img/ccircle.png');
		$(this).find('img').attr('src','img/rcircle.png')
	})
});
