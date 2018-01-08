$(function(){
	//控制出现活动块
	$('.selectChild').width($(window).width()/3.5);
	$('.home .selectBox').width($(window).width()/3.5*$('.home .selectBox').children('.selectChild').length+2*($('.home .selectBox').children('.selectChild').length-1));
	$('.littlehome .selectBox').width($(window).width()/3.5*$('.littlehome .selectBox').children('.selectChild').length+2*($('.littlehome .selectBox').children('.selectChild').length-1));
	$('.use .selectBox').width($(window).width()/3.5*$('.use .selectBox').children('.selectChild').length+2*($('.use .selectBox').children('.selectChild').length-1));
	var labelw = 0;
	for(var i=0;i<$('.home .labelBox').children('.labels').length;i++)
	{
		labelw += parseInt($('.home .labelBox').find('.labels').eq(i).width()+22);
	}
	$('.home .labelBox').width(labelw/3-2);
	var labelw1 = 0;
	for(var i=0;i<$('.littlehome .labelBox').children('.labels').length;i++)
	{
		labelw1 += parseInt($('.littlehome .labelBox').find('.labels').eq(i).width()+22);
	}
	$('.littlehome .labelBox').width(labelw1/3-2);
	var labelw2 = 0;
	for(var i=0;i<$('.use .labelBox').children('.labels').length;i++)
	{
		labelw2 += parseInt($('.use .labelBox').find('.labels').eq(i).width()+22);
	}
	$('.use .labelBox').width(labelw2/3-2);
	//选择
	$('.home button').on('click',function(){
		$('.home button').removeClass('selectActive');
		$(this).addClass('selectActive');
	});
	$('.littlehome button').on('click',function(){
		$('.littlehome button').removeClass('selectActive');
		$(this).addClass('selectActive');
	});
	$('.use button').on('click',function(){
		$('.use button').removeClass('selectActive');
		$(this).addClass('selectActive');
	});
	//三级联动
	!function () {
        var $target = $('#J_Address');

        $target.citySelect();

        $target.on('click', function (event) {
            event.stopPropagation();
            $target.citySelect('open');
        });

        $target.on('done.ydui.cityselect', function (ret) {
            $(this).val(ret.provance + ' ' + ret.city + ' ' + ret.area);
        });
    }();
    $('#J_Address').focus(function(){
    	$(this).blur();
    });
    //出现搜索按钮
//  $('.searchBox input').focusin(function(){
//  	$(this).next('.findBtn').stop().animate({'right':'0'},500);   	
//  });
    $('.searchBox input').on('input',function(){
		if($(this).val().length>0)
		{
			$(this).nextAll('.closeSearch').show();
		}else{
			$(this).siblings('.closeSearch').hide();
		}
	});
	$('.closeSearch').on('click',function(){
		$(this).prevAll('input').val("");
		$(this).hide();
	});
    //出现搜索按钮
//  $('.searchBox input').focusout(function(){
//  	$(this).next('.findBtn').animate({'right':'-1rem'},500);
//  });
});
