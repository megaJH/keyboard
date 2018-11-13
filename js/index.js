
$(window).scroll(function(evt){
  if ($(window).scrollTop()>0)
    $(".navbar").removeClass("navbar-top");
  else
    $(".navbar").addClass("navbar-top");
});
/*scroll top animation*/
var traits = $('#section_traits').children(".title_").offset().top;
var skill = $('#section_skill').children(".title_").offset().top;
var team = $('#section_team').children(".title_").offset().top;
$(window).scroll(function(evt){
  if ($(window).scrollTop() >= traits)
    $('.traits_circle1').css({"animation":"traits_circle1 2s 1","border-right":"solid 10px #efefef","transition-duration":"1s"}),
    $('.traits_circle4').css({"animation":"traits_circle1 2s 1","border-right":"solid 10px #efefef","border-bottom":"solid 10px #efefef","transition-duration":"1s"});
});

$(window).scroll(function(evt){
  if ($(window).scrollTop()>= skill)
    $('.skill_lv1').css({"transform-origin":"0","transform":"scaleX(1.2)","transition-duration":"1s"}),
    $('.skill_lv2').css({"transform-origin":"0","transform":"scaleX(1.2)","transition-duration":"1s"}),
    $('.skill_lv6').css({"transform-origin":"0","transform":"scaleX(0.9)","transition-duration":"1s"}),
    $('.skill_lv8').css({"transform-origin":"0","transform":"scaleX(1.9)","transition-duration":"1s"}),
    $('.skill_lv9').css({"transform-origin":"0","transform":"scaleX(1.8)","transition-duration":"1s"}),
    $('.skill_lv10').css({"transform-origin":"0","transform":"scaleX(1.1)","transition-duration":"1s"});
});

$(window).scroll(function(evt){
  if ($(window).scrollTop() >= team)
    $('.box_line_team').css({"opacity":"1","transform":"rotate(-50deg)","transition-duration":"1s","height":"60px","width":"2px"}),$('.box_team_container').css({"color":"black","transition-duration":"1s"});
});
console.log("welecom")