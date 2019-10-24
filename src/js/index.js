/**
 * Created by RedSpite.
 */
$(document).ready(function() {
  //页面动画元素
  $(".fades").addClass("fadesin");
  $(" h1.fade").addClass("fadesin1");
  $(" h3.fade").addClass("fadesin2");
  $(" span.fade").addClass("fadesin3");

  var top1 = $("#bannercon").offset().top+300;
  var top2 = $("#frame").offset().top+400;
  var top3 = $("#service").offset().top + 300;
  var top4 = $("#solution").offset().top+100;
  var top5 = $("#case").offset().top+30;
  var top6 = $("#connect").offset().top-30;
  $(window).resize();

  //导航高亮
  $(".nav li a").bind("click", function () {
      var index = $(this).index();//获取序号
      $(".nav li").eq(index).addClass("active").siblings().removeClass("active");
  });

  var s = $(window).scrollTop();
  s > 100 ? $('#header').addClass("fixed") : $('#header').removeClass("fixed");
  //页面滚动
  $(window).scroll(function () {
      //导航fixed
      var s = $(window).scrollTop();
      s > 100 ? $('#header').addClass("fixed") : $('#header').removeClass("fixed");
      //导航跟随滚动响应
      if((s>0)&&(s<top1)){
          $(".nav li").eq(0).addClass("active").siblings().removeClass("active");
      }else if((s>top1)&&(s<top2-100)) {
          $(".nav li").eq(1).addClass("active").siblings().removeClass("active");
      }else if((s>top2+200)&&(s<top3)){
          $(".nav li").eq(2).addClass("active").siblings().removeClass("active");
      }else if((s>top3 + 360)&&(s<top4)){
          $(".nav li").eq(3).addClass("active").siblings().removeClass("active");
      }else if((s>top4)&&(s<top5)){
          $(".nav li").eq(4).addClass("active").siblings().removeClass("active");
      }else if((s>top5)&&(s<top6)){
          $(".nav li").eq(5).addClass("active").siblings().removeClass("active");
      }else if(s>top6){
          $(".nav li").eq(6).addClass("active").siblings().removeClass("active");
      }
  });
});