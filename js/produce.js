$(function(){
	var swiper = new Swiper('.swiper-container-pro', {
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 10,
        loop:true,
        prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
    });
    //开启滑动动画
	if(!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
		(function() {
			window.scrollReveal = new scrollReveal({
				reset: true
			});
		})();
	};
});
