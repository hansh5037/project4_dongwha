$(function(){
    // 메인 비주얼 비디오 사이즈
    let wH;
    videoSize();
    $(window).resize(function(){
        videoSize();
    });
    function videoSize(){
        wH = $(window).height();
        $(".my-video").css("height", wH);
    }

    // 메인 비주얼 슬라이드
    var visualSwiper = new Swiper(".main-visual-container", {
        speed: 1200,
        autoplay: {
        delay: 15000,
        disableOnInteraction: false,        
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    // 상품 슬라이드 
    var pdSwiper = new Swiper(".products-swiper", {
        speed: 1200,
        loop:'true',
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
        delay: 3000,
        disableOnInteraction: false,        
        },
    });
    // 상품 오토플레이 멈춤/재생
    $(".stop").on('click',function(){
        pdSwiper.autoplay.stop();
        return false;
    });
    $(".play").on('click',function(){
        pdSwiper.autoplay.start();
        return false;
    }); 

    // 최근 뉴스 슬라이드
    var lnSwiper = new Swiper(".latestnews-container", {
        slidesPerView: 3,
        spaceBetween: 50,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            700: {
                slidesPerView: 1,
                
            },
            1280: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        }
    });

});