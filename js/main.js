$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    });

    $('.main_slide').on('init afterChange', function (e, s, c) {
        const current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');

        $('.main_visual .slide_num span').text(c ? (c + 1) : 1);
        $('.main_visual .slide_num strong').text(s.slideCount);

        console.log(s.slideCount)

        $('.main_visual .menu li').eq(0).addClass('on');
        $('.main_visual .menu li').eq(c).addClass('on')
            .siblings().removeClass('on');
    });

    // 첫번째 슬라이드 안돌아갈때 init을 붙이고, 젤 위로

    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        pauseOnHover: false,
        fade: true,
    });

    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev')
    });
    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    });

    $('.main_visual .menu li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index(); // 0,1,2
        $('.main_slide').slick('slickGoTo', idx);
    })


    $('.product_slide').slick({
        slidesToShow: 3,
        arrows: false,
        asNavFor: ".pic_slide",
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '20px',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,

                }
            }
        ]
    });
    // 이미지수보다 슬라이드투쇼가 적어야 돌아간다
    // responsive는 모바일에서 1개만 돌아가게. slick 홈피에서 긁으셈.
    // asNavFor 슬라이드 두개 같이 돌리는 것. 
    // focusOn~ 은 이미지눌러도 같이 돌아가는 것. 보통 제품과 설명 같이



    $('.product_slide2').slick({
        slidesToShow: 3,
        arrows: false,
        dots: true,
        // asNavFor: ".pic_slide",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,

                }
            }
        ]
    });


    $('.main_big_product .arrows .left').on('click', function () {
        $('.product_slide2').slick('slickPrev');
    });
    $('.main_big_product .arrows .right').on('click', function () {
        $('.product_slide2').slick('slickNext');
    });



    $('.pic_slide').slick({
        vertical: true,
        arrows: false,
    });


    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600)
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        // sct > 1000 ? $('.to_top').fadeIn(1000) : $('.to_top').fadeout();
        // 위에 fadeIn 쓰거나, 밑에꺼 css opacity 등등과 쓰기
        sct > 1000 ? $('.to_top').addClass('on') : $('.to_top').removeClass('on');
    });

    $('.scr').on('click', function (e) {
        e.preventDefault();
        const st = $(this.hash).offset().top;
        console.log(st);
        $('html, body').animate({ scrollTop: st }, 600)
    });

    $('.history_menu li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.history_content li').eq(idx).addClass('on').siblings().removeClass('on');
    });

    $('#fl').on('change', function () {
        const lnk = $(this).val();
        // console.log(lnk, '바뀌네');
        //val() 이 있을 때만
        // if (lnk) {
        //     window.open(lnk);
        // }

        lnk && window.open(lnk);
    });

    $('.family_link2 span').on('click', function () {
        $(this).toggleClass('on');
        $(this).next().toggleClass('on');
    });

    $('.portfolio_slide').on('init afterChange', function (e, s, c) {
        console.log(c);
        $('.main_portfolio .itm').eq(c).addClass('on')
            .siblings().removeClass('on');
    })

    $('.portfolio_slide').slick({
        centerMode: true,
        variableWidth: true,
        arrows: false,
        dots: true,
    });

    $('.main_portfolio .tab_arrows .left').on('click', function () {
        $('.portfolio_slide').slick('slickPrev')
    });
    $('.main_portfolio .tab_arrows .right').on('click', function () {
        $('.portfolio_slide').slick('slickNext')
    });

})