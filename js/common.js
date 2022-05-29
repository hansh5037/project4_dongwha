$(function(){
    AOS.init();
    // header 고정
    var hdOffset = $("#header").height();
    $(window).scroll(function(){
        if($(document).scrollTop() > hdOffset){
            $("#header").addClass("fixed");
        }else{
            $("#header").removeClass("fixed");
        }
    });

    $(".main-search").click(function(){
        $("#main-search").toggle();
    });
    //모바일 gnb 슬라이드
    $(".gnb-toggle-btn").click(function(){
        $(this).toggleClass("close");
        $(".m-dw-gnb").toggleClass("open");
        // $(".m-dw-gnb .depth1").removeClass("active");
    });

    //gnb 초기화
    function gnbReset(){
        $(".gnb-toggle-btn").removeClass("close");
        $(".m-dw-gnb").removeClass("open");
        $(".m-dw-gnb .depth1").removeClass("active");
        $(".m-dw-gnb .depth2").hide();
    }

    //모바일 gnb 동작
    $(".m-dw-gnb .depth1 > a").click(function(){
        $(this).next().slideToggle();
    });

    // 모바일 gnb 나올때 배경 hidden
    $(".gnb-toggle-btn").click(function(){
        if($(".m-dw-gnb").hasClass("open")){
            $(body).addClass("hidden")
        }else{
            $(body).removeClass("hidden")
        }
    });

    //PC gnb 동작
    $(".dw-gnb .depth1").on("mouseenter focusin", function(){
        $(this).find(".depth2").stop().fadeIn(200);
    });
    $(".dw-gnb .depth1").on("mouseleave focusout", function(){
        $(this).find(".depth2").stop().fadeOut(200);
    });

});