$(function(){
    //메인 슬라이드
    var swiper = new Swiper(".mySwiper", {
        loop:true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });


    //   모든 a태그를 클릭하면 href속성 막기

    $('a').click(function(e){
        e.preventDefault();
    });


        //   탭 메뉴
        // 모든 탭내용 숨김
        $('.tab_con > div').hide();
        //첫번째 탭내용만 보임
        $('.tab_con > div:first').show();


      $('.tab_title ul li:first').click(function(){
        $('.tab_title ul li:first').addClass('active');
        $('.tab_title ul li:last').removeClass('active');
        $('.tab_con > div:first').show();
        $('.tab_con > div:last').hide();

      });

      $('.tab_title ul li:last').click(function(){
        $('.tab_title ul li:first').removeClass('active');
        $('.tab_title ul li:last').addClass('active');
        $('.tab_con > div:first').hide();
        $('.tab_con > div:last').show();

      });

     //탭메뉴 슬라이드
    var swiper2 = new Swiper(".line_character", {
      loop:true,
      pagination: {
        el: ".line_character .swiper-pagination",
        clickable: true,
      },
      navigation: {
          nextEl: ".line_character .swiper-button-next",
          prevEl: ".line_character .swiper-button-prev",
      },
      breakpoints: {        
          480: {
            slidesPerView: 1,  //브라우저가 480보다 클 때
            spaceBetween: 0,
          },
          768: {
              slidesPerView: 2,  //브라우저가 768보다 클 때
              spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,  //브라우저가 1280보다 클 때
            spaceBetween: 40,
          },
      },
  });

  var swiper3 = new Swiper(".bt_character", {
      loop:true,
      pagination: {
        el: ".bt_character .swiper-pagination",
        clickable: true,
      },
      navigation: {
          nextEl: ".bt_character .swiper-button-next",
          prevEl: ".bt_character .swiper-button-prev",
      },
      breakpoints: {        
          480: {
            slidesPerView: 1,  //브라우저가 480보다 클 때
            spaceBetween: 0,
          },
          768: {
              slidesPerView: 2,  //브라우저가 768보다 클 때
              spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,  //브라우저가 1280보다 클 때
            spaceBetween: 40,
          },
      },
  });

      //이벤트 슬라이드
        var swiper4 = new Swiper(".eventSlide", {
          loop: true,
          scrollbar: {
            el: ".eventSlide .swiper-scrollbar",
            hide: false,
          },
          
          navigation: {
            nextEl: ".eventSlide .swiper-button-next",
            prevEl: ".eventSlide .swiper-button-prev",
        },
          breakpoints: {        
            480: {
              slidesPerView: 1.5,  //브라우저가 480보다 클 때
              spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,  //브라우저가 768보다 클 때
                spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,  //브라우저가 1280보다 클 때
              spaceBetween: 30,
            },
        },
        
      });

      //이벤트 슬라이드 안의 이미지의 세로길이 설정
      // var event_img=$('.notice .eventSlide .swiper-slide .event_img');
      // var img_width=event_img.width();
      // event_img.css('height',img_width*1.5);

      //follow ul li의 세로길이 설정
      // var insta_li=$('.follow .follow_list ul li');
      // var insta_li_width=insta_li.width();
      // insta_li.css('height',insta_li_width);

      if($(window).width() <= 1280) {
        
     
      //햄버거 메뉴를 클릭하면 팝업 메뉴가 나타남
      $('.ham').click(function(){
        $('.popup').animate({'left':0 });
        // 화면 스크롤 막음
        $('html,body').css('overflow-y','hidden');
      });
      //팝업 메뉴의 닫기 버튼을 클락하면 팝업 메뉴가 왼쪽으로 들어감
      $('.close').click(function(){
        $('.popup').animate({'left':'-110vw'})
        //윈도우의 화면 스크롤 활성화
        $('html,body').css('overflow-y','visible');

      });

      //아코디언메뉴
       var popup_nav = $('.popup .popup_nav nav > ul > li > a');
       popup_nav.click(function(){
        if($(this).attr('class') != 'active'){
            popup_nav.next().slideUp();
            popup_nav.removeClass('active');
            $(this).next().slideDown();
            $(this).addClass('active');
        }else{
            $(this).next().slideUp();
            $(this).removeClass('active');

        }
    });
  }else{
    //모바일이 아니면 실행
    $('header nav .sub').hide();
    $('header nav > ul > li > a').hover(function(){
        $('header nav .sub').stop().slideDown();
        $('header nav .sub').css('z-index',11);
        $(this).next().css('z-index',20);
    });
    $('header nav').mouseleave(function(){
        $('header nav .sub').stop().slideUp();
    });
}


        //pc 버전에서만 fullpage 실행
        if($(window).width()>=1281){
          $('#fullpage').fullpage();
      }
});
