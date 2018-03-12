$(function(){
	//实例化轮播图
	var swiperSupport = new Swiper('.swiper-container-four', {
		onInit: function(swiper){
		},
		onSlideChangeEnd: function(swiper){
	     
	      $('.swiperBox').find('.sBtn').eq( swiper.activeIndex).siblings('.sBtn').find('input').attr('src','img/sub03.png');
	      $('.swiperBox').find('.sBtn').eq( swiper.activeIndex).siblings('.sBtn').find('p').css('color','#7bd5f2');
	      $('.swiperBox').find('.sBtn').eq( swiper.activeIndex).find('input').attr('src','img/sub04.png');
	      $('.swiperBox').find('.sBtn').eq( swiper.activeIndex).find('p').css('color','white');
	      if(swiper.activeIndex>=2)
	      {
	      	var left = $('.swiperBox').width()-$(window).width();
	      	$('.swiperBtn').animate({  
	            scrollLeft: left
	        }, 400); 
	      }else{
	      	$('.swiperBtn').animate({  
	            scrollLeft: 0
	        }, 400); 
	      }
	    }
	});
	//100毫秒后
	setTimeout(function(){
		$('.swiperBox').width($('.sBtn').width()*4+parseInt($('.sBtn').css('margin-right'))*4);
	},100);
	$('.swiperBox').find('.sBtn').on('click',function(){
		var index = $(this).index();
		$(this).siblings('.sBtn').find('input').attr('src','img/sub03.png');
		$(this).siblings('.sBtn').find('p').css('color','#7bd5f2');
		$(this).find('input').attr('src','img/sub04.png');
		$(this).find('p').css('color','white');
		swiperSupport.slideTo(index);
	});
});
