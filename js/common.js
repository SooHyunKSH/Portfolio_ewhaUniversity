$(function(){
  $(window).scroll(function(){
    if( $(this).innerWidth() > 980){
      if( $(this).scrollTop() < 50 ){
        /* gnb 스트롤 옵션 */
        $(".header_top_wrap").removeClass("on"); 
        $(".header_md_wrap").removeClass("on");
        $(".header_bottom_wrap").removeClass("on");
      }else{
        $(".header_top_wrap").addClass("on");
        $(".header_md_wrap").addClass("on");
        $(".header_bottom_wrap").addClass("on");
      };
    }
    if( $(this).scrollTop() == 0 ){
      $(".go_to_top").removeClass("on"); /* 상단으로 이동버튼 */
    }else{
      $(".go_to_top").addClass("on");
    };
  });

  /* sub_gnb 드롭다운메뉴 */
  // sub_gnb li 너비 계산
  $(".sub_gnb > ul > li").each(function(){
    let subgnbLi = $(".sub_gnb > ul > li").length;
    $(this).css("width", "calc(100% / "+subgnbLi+")");
  })
  // 마우스오버시 sub_gnb 나타나기
  $(".gnb li").mouseenter(function(){
    $(this).siblings().children(".sub_gnb").removeClass("on");
    $(this).children(".sub_gnb").addClass("on");
  }).mouseleave(function(){
    $(this).children(".sub_gnb").removeClass("on");
  });

  /* 모바일 sub menu 나타나기 */
  $(".mobile_gnb_btn").click(function(){
    $(".m_slide_menu").addClass("on");
  });
  $(".m_close").click(function(){
    $(".m_slide_menu").removeClass("on");
  });

  /* subpage 상단 tab menu 나타나기 */
  $(".tab_box > ul > li").mouseenter(function(){
    $(this).siblings().children(".sub_tab").removeClass("on");
    $(this).children(".sub_tab").addClass("on");
  }).mouseleave(function(){
    $(this).children(".sub_tab").removeClass("on");
  });
  // m_gnb 클릭 시 m_sub_gnb 나타나기
  $(".m_gnb li").click(function(){
    $(this).each(function(){
      $('.m_sub_gnb').removeClass("on")
      $('.m_gnb li a').removeClass("click");
      $(this).children('.m_sub_gnb').addClass("on")
      $(this).children('a').addClass("click");
    })
  })
  // sub_gnb 아코디언
  $(".m_sub_gnb > ul > li > a").on("click",function(){
    if( $("+ul",this).css("display") == "none"){
      $(".m_sub_gnb02").slideUp();
      $("+ul",this).slideDown();
    }
  });

      /* click list li 클릭 시 display0$ 나오기 */
      $(".click_list li").click(function() {
        $(".click_list li").removeClass("on");
        $(this).addClass("on");
        let indexNum = $(this).index() + 1;
        $(".display_wrap .display_box").css("display", "none");
        $(".display_wrap .display_box").each(function() {
          let thisIndex = $(this).index() + 1;
          if (indexNum == thisIndex) {
            $(this).css("display", "block");
          }
        });
      });

      $(".click_list_type02 li").click(function() {
        $(".click_list_type02 li").removeClass("on");
        $(this).addClass("on");
        let indexNum = $(this).index() + 1;
        $(".display_wrap .display_box_type02").css("display", "none");
        $(".display_wrap .display_box_type02").each(function() {
          let thisIndex = $(this).index() + 1;
          if (indexNum == thisIndex) {
            $(this).css("display", "block");
          }
        });
      });

          /* select list 클릭 시 display_box 나타내기 */
    $("#select_tab").on("change", function () {
      $(".display_wrap .display_box").each(function () {
          if ($("#select_tab").val() == $(this).index() + 1) {
              $(".display_wrap .display_box").css("display", "none");
              $(this).css("display", "block");
          }
      });
      /* 선택된 option 텍스트 label테그에 넣기 */
    $(".select_list label").text($("#select_tab option:selected").text());
  });

  $("#select_tab02").on("change", function (i) {
    $(".display_wrap .display_box_type02").each(function () {
        if ($("#select_tab02").val() == $(this).index() + 1) {
            $(".display_wrap .display_box_type02").css("display", "none");
            $(this).css("display", "block");
        }
    });
    /* 선택된 option 텍스트 label테그에 넣기 */
  $(".select_list02 label").text($("#select_tab02 option:selected").text());
});
})