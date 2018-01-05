$(function(){
	//手
	var pTime = 500;
	var pCount = 1;
	var phoneTween = setInterval(function(){
		$('ul li:nth-child(2) .tpBox .tpLeft .tpImg').css('background-image','url(img/serverPhone'+pCount+'.png)');
		pCount++;
		if(pCount==4)
		{
			pCount = 0;
		}
	},pTime);
	//三级联动
	!function () {
        var $target = $('#city');

        $target.citySelect();

        $target.on('click', function (event) {
            event.stopPropagation();
            $target.citySelect('open');
        });

        $target.on('done.ydui.cityselect', function (ret) {
            $(this).val(ret.provance + ' ' + ret.city + ' ' + ret.area);
        });
    }();
    $('#city').on('click',function(){
    	$(this).blur();
    });
    //加盟留言
    $('.jMesssge').on('click',function(){
    	$(this).find('.hand').remove();
    	$('#popWinJoin').show().stop().animate({'top':'0%','height':'100%'},500);
    	$('.redClose').on('click',function(){
    		$('#popWinJoin').show().stop().animate({'top':'50%','height':'0%'},500,function(){
    			$(this).hide();
    		});
    	});
    	$('.typeBox button').on('click',function(){
    		$('.typeBox button').removeClass('tyBtn');
    		$(this).addClass('tyBtn');
    	});
    });
});
var map = new AMap.Map('companyMap', {
    resizeEnable: true,
    zoom:15,
    center: [113.499548,22.951488]
});
var marker = new AMap.Marker({
    position: map.getCenter(),
    draggable: true,
    cursor: 'move',
    icon: "img/addressIcon.png"
});
marker.setMap(map);
// 设置点标记的动画效果，此处为弹跳效果
//marker.setAnimation('AMAP_ANIMATION_BOUNCE');
marker.setTitle('点击我，打开地图，广州诗尼曼家居股份有限公司欢迎您的到来！');
marker.on('click',function(e){
    marker.markOnAMAP({
    name:'广州诗尼曼家居股份有限公司',
    position:marker.getPosition()
    })
});