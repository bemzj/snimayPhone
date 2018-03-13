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
	
	setTimeout(function(){
		$('.ptbBox .floatl').width($('.ptwoBottom').width()*0.3);
		$('.ptbBox .floatl').css('margin-right',$('.ptwoBottom').width()*0.05);
		$('.ptbBox').width($('.ptwoBottom').width()*0.3*4+$('.ptwoBottom').width()*0.05*3);
	},100);
	$('.swiperBox').find('.sBtn').on('click',function(){
		var index = $(this).index();
		$(this).siblings('.sBtn').find('input').attr('src','img/sub03.png');
		$(this).siblings('.sBtn').find('p').css('color','#7bd5f2');
		$(this).find('input').attr('src','img/sub04.png');
		$(this).find('p').css('color','white');
		swiperSupport.slideTo(index);
	});
	var swiperPart = new Swiper('.swiper-container-part02', {
		pagination : '.swiper-pagination',
		paginationClickable :true,
		onInit: function(swiper){
		},
		onSlideChangeEnd: function(swiper){
			
			$('.ptbBox').find('.floatl').eq(swiper.activeIndex).addClass('showf');
			$('.ptbBox').find('.floatl').eq(swiper.activeIndex).siblings('.floatl').removeClass('showf');
			if(swiper.activeIndex==3)
		     {
		      	var left = $('.ptbBox').width()-$('.ptwoBottom').width();
		      	$('.ptwoBottom').animate({  
		            scrollLeft: left
		        }, 400); 
		      }else{
		      	$('.ptwoBottom').animate({  
		            scrollLeft: 0
		        }, 400); 
		      }
		}
	});
	
	$('.ptwoBottom .ptbBox .floatl').on('click',function(){
		var index = $(this).index();
		$(this).addClass('showf');
		$(this).siblings('.floatl').removeClass('showf');
		swiperPart.slideTo(index);
	});
	
});
