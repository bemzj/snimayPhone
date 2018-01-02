$(function(){
	//八大空间
	var rooms = ['入户空间','厨房空间','餐厅空间','客厅空间','阳台空间','阳台空间','儿童空间','多功能空间'];
	$('.roomBox .rcLeft ul li p').on('click',function(){
		$('.roomBox .rcLeft ul li p').removeClass('pActive');
		$(this).addClass('pActive');
		$('.rcRight .bigTitle').html(rooms[$(this).attr('index')]);
		//对应内容
		$('.rcRight .smallContent').html();
	});
	//实例化轮播图
	var mySwiper = new Swiper('.swiper-container-index', {
		loop: true,
		pagination: '.swiper-pagination',
		paginationClickable :true,
		autoplayDisableOnInteraction : false,
		paginationBulletRender: function (swiper, index,className) {
		    return '<span class="' + className + '">0' + (index + 1) + '</span>';
		    
		},
//		autoplay:5000,
		onInit: function(swiper){
			//添加分页标签
			for(i=0;i<$('.swiper-pagination span').length;i++)
			{
				$('.swiper-pagination span').eq(i).text('0'+(i+1));
			}	
		},onSlideChangeStart: function(swiper){

	    }
	});
});
