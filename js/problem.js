$(function(){
	//选择地区
	$('.select select').change(function(){
		$('.typeP').html($(this).children('option:selected').html());
	});
	$('#city1').on('click',function(){
    	$(this).blur();
    });
    $('#city2').on('click',function(){
    	$(this).blur();
    });
    $('#city3').on('click',function(){
    	$(this).blur();
    });
	//三级联动
	!function () {
        var $target = $('#city1');

        $target.citySelect();

        $target.on('click', function (event) {
            event.stopPropagation();
            $target.citySelect('open');
        });

        $target.on('done.ydui.cityselect', function (ret) {
            $(this).val(ret.provance + ' ' + ret.city + ' ' + ret.area);
        });
    }();
    !function () {
        var $target = $('#city2');

        $target.citySelect();

        $target.on('click', function (event) {
            event.stopPropagation();
            $target.citySelect('open');
        });

        $target.on('done.ydui.cityselect', function (ret) {
            $(this).val(ret.provance + ' ' + ret.city + ' ' + ret.area);
        });
    }();
    !function () {
        var $target = $('#city3');

        $target.citySelect();

        $target.on('click', function (event) {
            event.stopPropagation();
            $target.citySelect('open');
        });

        $target.on('done.ydui.cityselect', function (ret) {
            $(this).val(ret.provance + ' ' + ret.city + ' ' + ret.area);
        });
    }();
    
    //三种选择
    $('.threeChoice button').on('click',function(){
    	$('.threeChoice button').removeClass('redBtn');
    	$(this).addClass('redBtn');
    	var index = parseInt($(this).attr('index'));
    	switch(index){
    		case 1:
    			$('.problem1').show();
    			$('.problem2').hide();
    			$('.problem3').hide();
    			$('.problem1').addClass('animated fadeInUp');
    			break;
    		case 2:
    			$('.problem2').show();
    			$('.problem1').hide();
    			$('.problem3').hide();
    			$('.problem2').addClass('animated fadeInUp');
    			break;
    		case 3:
    			$('.problem3').show();
    			$('.problem1').hide();
    			$('.problem2').hide();
    			$('.problem3').addClass('animated fadeInUp');
    			break;
    	}
    });
    //选择文件
	$('.file').change(function(){
		if($(this).val()=="")
		{
			$('.filesrc').text("未选择文件");
		}else{
			$('.filesrc').text($(this).val());
		}
	});
    alertWind('您的反馈意见已经发送成功。<br/>感谢您对诗尼曼的支持！');
});
