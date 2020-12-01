$(document).ready(function() {
	// 導覽列滾動到該位置
	$(".move").on("click", function(){
		var to = $(this).attr("href");
		$("html").animate({
			scrollTop : $(to).position().top
		}, 700);

		return false;
	});

    //手機導覽列
    //body陰影 
    $('.defocus').hide();

    //展開導覽列 
    $('#mobile-menu-btn').on('click', function() {
    	$('#mobile-nav').animate({
    		width : "250px",
    	}, 300);
    	$('.defocus').fadeIn();


    });

    //收起導覽列 
    $('.close-btn').on('click', function() {
    	$('#mobile-nav').animate({
    		width : "0"
    	}, 300);
    	$('.defocus').fadeOut();

    	return false;
    });
});