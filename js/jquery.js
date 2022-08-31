$(function(){
    $(".hamBtn>a>img").click(function(){
        $(".headBottom").css("display","block");
        $(".hamBg").css("display","block");

    })
    $(".hamBg").click(function(){
        $(".headBottom").css("display","none");
        $(".hamBg").slideUp();
    })
    $("#nav>li>a").click(function(){
        $(this).next().slideToggle(300)
        .parent()
        .siblings()
        .children(".sub").slideUp(300);
        
        $(this).parent().toggleClass("active")
        .siblings().removeClass("active");
    })

    //현재 보여지는 배너를 체크할 변수
     //middleList 기준으로
     var showBanner = 0;

      //.rightList 붙이기
      var firstObj = $(".rightList>ul>li:lt(5)").clone();
      var midObj = $(".middleList>ul>li:lt(1)").clone();

      $(".rightList>ul").append(firstObj);
      $(".middleList>ul").append(midObj);

      var liWidth= $(".rightList>ul>li").outerWidth();

      startAni();

      function startAni(){
          showBanner=0;
          $(".rightList>ul").css("left",0);
          $(".middleList>ul>li").eq(showBanner).stop().fadeIn(500)
          .siblings().stop().fadeOut(500);
          $(".rightList>ul").css("margin-left",-liWidth)
      }
      $(window).resize(function(){
          liWidth= $(".rightList>ul>li").outerWidth();
          startAni();
      })

     function moveBanner(){
          $(".middleList>ul>li").eq(showBanner).stop().fadeIn(500)
          .siblings().stop().fadeOut(500);
          $(".rightList>ul").stop().animate({
               "left" :- liWidth* showBanner
           }, 500)
     }

     $(".rightBtn").click(function(){
          if(showBanner == 6){
               $(".rightList>ul").css("left",0);
               showBanner=0;
          }
          showBanner++;
          moveBanner();
     })
     $(".leftBtn").click(function(){    
          if(showBanner == 0 ){
               $(".rightList>ul").css("left",-235*6);
               showBanner=6;
          }
          showBanner--;
          moveBanner();
     })


     //----2번째 페이지----
     var showBannerRe = 0;

     //  .rightList 붙이기
      var firstObjRe = $(".rightListRe>ul>li:lt(5)").clone();
      var midObjRe = $(".middleListRe>ul>li:lt(1)").clone();

      $(".rightListRe>ul").append(firstObjRe);
      $(".middleListRe>ul").append(midObjRe);

      var liWidthRe= $(".cirWrap>ul>li").outerWidth();

      startAniRe();

      function startAniRe(){
          showBannerRe=0;
          $(".rightListRe>ul").css("left",0);
          $(".middleListRe>ul>li").eq(showBannerRe).stop().fadeIn(500)
          .siblings().stop().fadeOut(500);
          $(".rightListRe>ul").css("margin-left",-liWidthRe)
      }
      $(window).resize(function(){
          liWidthRe= $(".rightListRe>ul>li").outerWidth();
          startAniRe();
      })

     function moveBannerRe(){
          $(".middleListRe>ul>li").eq(showBannerRe).stop().fadeIn(500)
          .siblings().stop().fadeOut(500);
          $(".rightListRe>ul").stop().animate({
               "left" :-liWidthRe*showBannerRe
           }, 500)
     }

     $(".rightBtnRe").click(function(){
          if(showBannerRe == 6){
               $(".rightListRe>ul").css("left",0);
               showBannerRe=0;
          }
          showBannerRe++;
          moveBannerRe();
     })
     $(".leftBtnRe").click(function(){    
          if(showBannerRe == 0 ){
               $(".rightListRe>ul").css("left",-235*6);
               showBannerRe=6;
          }
          showBannerRe--;
          moveBannerRe();
     })

     //----3번째 페이지----
     var showBannerReRe = 0;

     //  .rightList 붙이기
      var firstObjReRe = $(".rightListReRe>ul>li:lt(5)").clone();
      var midObjReRe = $(".middleListReRe>ul>li:lt(1)").clone();

      $(".rightListReRe>ul").append(firstObjReRe);
      $(".middleListReRe>ul").append(midObjReRe);

      var liWidthReRe= $(".cirWrap>ul>li").outerWidth();

      startAniReRe();

      function startAniReRe(){
          showBannerReRe=0;
          $(".rightListReRe>ul").css("left",0);
          $(".middleListReRe>ul>li").eq(showBannerReRe).stop().fadeIn(500)
          .siblings().stop().fadeOut(500);
          $(".rightListReRe>ul").css("margin-left",-liWidthReRe)
      }
      $(window).resize(function(){
          liWidthReRe= $(".rightListReRe>ul>li").outerWidth();
          startAniReRe();
      })

     function moveBannerReRe(){
          $(".middleListReRe>ul>li").eq(showBannerReRe).stop().fadeIn(500)
          .siblings().stop().fadeOut(500);
          $(".rightListReRe>ul").stop().animate({
               "left" :-liWidthReRe*showBannerReRe
           }, 500)
     }

     $(".rightBtnReRe").click(function(){
          if(showBannerReRe == 6){
               $(".rightListReRe>ul").css("left",0);
               showBannerReRe=0;
          }
          showBannerReRe++;
          moveBannerReRe();
     })
     $(".leftBtnReRe").click(function(){    
          if(showBannerReRe == 0 ){
               $(".rightListReRe>ul").css("left",-235*6);
               showBannerReRe=6;
          }
          showBannerReRe--;
          moveBannerReRe();
     })

     $(".eyewearBtn").click(function(){
          $(".lens").css("display","none");
          $(".eyewear").css("display","block");
          $(".contactLens").css("display","none");

     })
     $(".lensBtn").click(function(){
          $(".lens").css("display","block");
          $(".eyewear").css("display","none");
          $(".contactLens").css("display","none");

     })
     $(".contactBtn").click(function(){
          $(".lens").css("display","none");
          $(".eyewear").css("display","none");
          $(".contactLens").css("display","block");

     })
})