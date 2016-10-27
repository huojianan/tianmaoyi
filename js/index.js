$(function(){
	$('.lis').on('click',function(){
		var i = $(this).index();
		$('body').toggleClass('scroll');
		$('.lis').removeClass('active');
		$(this).addClass('active');
		$('.liss').removeClass('active').eq(i).addClass('active');
	});
	$('.h-list').on('click',function(){
		$('.zz').addClass('move').removeClass('moves');
	})
	$('.dian').on('click',function(){
		$('.zz').removeClass('move').addClass('moves');
	})
})