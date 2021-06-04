$(function(){
  $(window).scroll(function(){
    console.log($(this).scrollTop());
    if( $(this).scrollTop() == 0 ){
      $(".go_to_top").removeClass("on"); /* 상단으로 이동버튼 */
      /* gnb 스트롤 옵션 */
      $(".header_top_wrap").removeClass("on"); 
      $(".header_md_wrap").removeClass("on");
      $(".header_bottom_wrap").removeClass("on");
    }else{
      $(".go_to_top").addClass("on");
      $(".header_top_wrap").addClass("on");
      $(".header_md_wrap").addClass("on");
      $(".header_bottom_wrap").addClass("on");
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

})