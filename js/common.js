$(document).ready(function(){

    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i) == null ? false : true;
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i) == null ? false : true;
        },
        IOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i) == null ? false : true;
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i) == null ? false : true;
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i) == null ? false : true;
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.IOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    if(isMobile.any()){
        if(isMobile.Android()){
            $('.gnb').removeClass('gnb').addClass('mobile-gnb');
        }else if(isMobile.IOS()){
            $('.gnb').removeClass('gnb').addClass('mobile-gnb');
        }else if(isMobile.BlackBerry()){
            $('.gnb').removeClass('gnb').addClass('mobile-gnb');
        }else if(isMobile.Opera()){
            $('.gnb').removeClass('gnb').addClass('mobile-gnb');
        }else if(isMobile.Windows()){
            $('.gnb').removeClass('gnb').addClass('mobile-gnb');
        }
    }else{

        if(window.innerWidth < 1025){
            $('.gnb').removeClass('gnb').addClass('mobile-gnb');

        }else{
            $('.mobile-gnb').removeClass('mobile-gnb').addClass('gnb');
        }
    }



    $(window).resize(function() {
        var $windowWidth = window.innerWidth;
		
		$(".gnb > ul > li").off();
        $(".mobile-gnb > .top_menulist > li > a").off("click");
        $(".mobile-gnb  .nav > .nav-con > .depth > .depth2-1").off("click");
        $('.m-sub-gnb').attr("style", "");
        $('.sub-gnb').attr("style", "");

        

        if($windowWidth < 1025) {
            $('.gnb').removeClass('gnb').addClass('mobile-gnb');
            $('.sub-gnb').removeClass('sub-gnb').addClass('m-sub-gnb');
			
            $(".mobile-gnb > .top_menulist > li > a").on("click", function() {
                $('.mobile-gnb > .top_menulist > li > a').removeClass('on');
                $(this).toggleClass('on');
                $('.mobile-gnb > .top_menulist > li > .m-sub-gnb').slideUp('fast');
                $(this).next('.m-sub-gnb').stop().slideToggle('fast');
            });

            $(".mobile-gnb  .nav > .nav-con > .depth > .depth2-1").on("click", function() {
                var depth = $(this);
                //console.log(depth);

                $('.mobile-gnb  .nav > .nav-con > .depth > .depth2-1').removeClass('on');
                $(this).toggleClass('on');
                $('.nav > .nav-con > .depth > .depth3-1').slideUp('fast');
                $(this).next('ul').stop().slideToggle('fast');
            });

            /*  plz */
            $('.secs').each(function(){
                if($(this).find(".m-sub-gnb").length > 0){
                    $(this).addClass('has-sub');
                    //console.log('test');
                }else{

                }
            });
            $('.depth').each(function(){
                if($(this).find(".depth3-1").length > 0){
                    $(this).addClass('has-sub');
                }else{

                }
            });
            $('.depth1-1').click(function(){
                var bodyWidth = document.documentElement.clientWidth;
                if($(this).parent('.secs').hasClass('has-sub')){
                    if(bodyWidth < 1025) {
                        return false
                    }else{
                        return true
                    }
                }else{
                }
            });
            $('.depth2-1').click(function(){
                var bodyWidth = document.documentElement.clientWidth;
                if($(this).parent('.depth').hasClass('has-sub')){
                    if(bodyWidth < 1024) {
                        return false
                    }else{
                        return true
                    }
                }else{
                }
            });
        } else {
            $('.mobile-gnb').removeClass('mobile-gnb').addClass('gnb');
            $('.m-sub-gnb').removeClass('m-sub-gnb').addClass('sub-gnb');

            $(".gnb > ul > li").on("mouseover", function() {
                $(this).children('.sub-gnb').stop().fadeIn(0);
            });
		    $(".gnb > ul > li").on("focusin", function() {
                $(this).children('.sub-gnb').stop().slideDown("fast");
            });


            $(".gnb > ul > li").on("mouseout", function() {
                $(this).children('.sub-gnb').stop().fadeOut(0);
            });
            $(".gnb > ul > li").on("focusout", function() {
                $(this).children('.sub-gnb').stop().slideUp("fast");
            });

            $('body').css({'overflow-y':'visible'});
        }


    }).resize();


    $('.toggle').click(function(){
        
		$('.toggle').toggleClass('on');
        $('.mobile-gnb').toggleClass('on');
        $('.mb-closebtn').show();
        $('.mask-wrap').toggleClass('on');
		$('header').toggleClass('fixed');
        $('body').css({'overflow-y':'hidden'});
    });

    $('.mb-closebtn').click(function(){
        $('.mobile-gnb').removeClass('on');      
        $('.mb-closebtn').hide();
        $('.mask-wrap').removeClass('on');
		$('header').removeClass('fixed');
        $('body').css({'overflow-y':'visible'});
    });

    $('.mask-wrap').click(function(){
        $(this).removeClass('on');
		$('.toggle').removeClass('on');
        $('.mobile-gnb').removeClass('on');
        $('.mb-closebtn').hide();
        $('body').css({'overflow-y':'visible'});
		$('header').removeClass('fixed');
    });


	  $('.result').click(function(){
        $('.mask-wrap').toggleClass('on');
        $('.modal').show();
    });

	 $('.modal_close').click(function(){
        $('.mask-wrap').removeClass('on');
		$('.modal').hide();
    });

	

});










$(document).ready(function(){

    $("#header .snsbtn-pgsizelang .today-btn .tbtn").click(function() {
        if($(this).parent().hasClass("active")){
            $(this).parent().removeClass('active');
        }else{
            $(this).parent().addClass('active');
            $.ajax({
                url:'/index.busanjin?contentsSid=1219',
                type: 'get',
                dataType:'html',
                data:'',
                success:function(data){
                    $('#weather').empty();
                    $('#weather').append(data);
                },error:function(error){
                    //console.log('weather get fail...');
                }
            });
            $.ajax({
                url:'/index.busanjin?contentsSid=1350',
                type: 'get',
                dataType:'html',
                data:'',
                success:function(data){
                    $('#nowEvent').empty();
                    $('#nowEvent').append(data);
                },error:function(error){
                    //console.log('nowEvent get fail...');
                }
            });
        }
        $(".gnb-wrap, #container-wrap, #footer").click(function() {
            $("#header .snsbtn-pgsizelang .today-btn").removeClass('active');
        });
    });

    $(window).resize(function() { if($(window).width() >1000) {
        $('#header .snsbtn-pgsizelang .today-btn .tbtn').click(function(){
            $(this).toggleClass('on');
        });
    }
    });


    /* 紐⑤컮�� */
    $(".mobile-top .todaysns-btns .todaybtn .tbtn").click(function() {
        if($(this).parent().hasClass("active")){
            $(this).parent().removeClass('active');
        }else{
            $(this).parent().addClass('active');
            $.ajax({
                url:'/index.busanjin?contentsSid=1219',
                type: 'get',
                dataType:'html',
                data:'',
                success:function(data){
                    $('#m_weather').empty();
                    $('#m_weather').append(data);
                },error:function(error){
                    //console.log('weather get fail...');
                }
            });
            $.ajax({
                url:'/index.busanjin?contentsSid=1350',
                type: 'get',
                dataType:'html',
                data:'',
                success:function(data){
                    $('#m_nowEvent').empty();
                    $('#m_nowEvent').append(data);
                },error:function(error){
                    //console.log('nowEvent get fail...');
                }
            });
        }
    });

});







// 2020-01-01
function sizeControl(width) {
    width = parseInt(width);
    var bodyHeight = document.documentElement.clientHeight;
    var bodyWidth = document.documentElement.clientWidth;


}
$(function($){
    sizeControl($(this).width());
    $(window).resize(function() {
        if(this.resizeTO) {
            clearTimeout(this.resizeTO);
        }
        this.resizeTO = setTimeout(function() {
            $(this).trigger('resizeEnd');
        }, 1);
    });
});
$(window).on('resizeEnd', function() {
    sizeControl($(this).width());
});
$(window).load( function() {
    sizeControl($(this).width());
});




                                                                        