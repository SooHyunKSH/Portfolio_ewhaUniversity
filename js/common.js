$(function(){
  /* 상단으로 이동버튼 */
  $(window).scroll(function(){
    console.log($(this).scrollTop());
    if( $(this).scrollTop() == 0 ){
      $(".go_to_top").removeClass("on");
    }else{
      $(".go_to_top").addClass("on");
    };
  });
})