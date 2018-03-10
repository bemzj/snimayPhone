$(function(){
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
	//实例化轮播图
	var swiperHonor = new Swiper('.swiper-container-honor', {
		initialSlide :1,
		onInit: function(swiper){
		}
	});
	//实例化轮播图
	var swiperSupport = new Swiper('.swiper-container-support', {
		loop: true,
		pagination: '.swiper-pagination',
		paginationClickable :true,
		autoplayDisableOnInteraction : true,
		autoplay:5000,
		onInit: function(swiper){
		}
	});
});
