$(window).scroll(function(){
	$('.animated').each(function(){

		if( $(document).scrollTop() + $(window).height() > $(this).offset().top && $(document).scrollTop() - $(this).offset().top < $(this).height() ){
			// элемент на экране
			$(this).css('opacity', 1);
			$(this).addClass( $(this).data('animation') );
		}else{
			// элемент не на экране
			$(this).css('opacity', 0);
			$(this).removeClass( $(this).data('animation') );
		}

	});
});