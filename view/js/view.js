//ÇÐ»»Ö÷Ìâ
$(".main>:first-child").on("click","[data-toggle=item]",e=>{
    e.preventDefault();
    var $item=$(e.target);
    if(!$item.parent().hasClass("active")){
        $item.parent().addClass("active").siblings().removeClass("active");
        var id=$item.attr("href")
        $(id).addClass("active").siblings().removeClass("active");
    }
})


//ÇÐ»»Í¼Æ¬
$(".step-1 li").click(function(){
    $(this).css("z-index",1000).css("transform","rotate(0deg)").css("transform-origin","50% 50%");
    $(this).siblings().removeClass().css("transform","rotate(0deg)").css("transform-origin","50% 50%").css("opacity",0)
})
var $lis=$(".step-1 li");
$(".btn1").click(function(){
    $lis.eq(0).css("transform","rotate(-60deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",10)
    $lis.eq(1).css("transform","rotate(-42.86deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",11)
    $lis.eq(2).css("transform","rotate(-25.71deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",12)
    $lis.eq(3).css("transform","rotate(-8.57deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",13)
    $lis.eq(4).css("transform","rotate(8.57deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",14)
    $lis.eq(5).css("transform","rotate(25.71deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",15)
    $lis.eq(6).css("transform","rotate(42.86deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",16)
    $lis.eq(7).css("transform","rotate(60deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",17)
    $lis.eq(8).css("transform","rotate(-60deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",10)
    $lis.eq(9).css("transform","rotate(-42.86deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",11)
    $lis.eq(10).css("transform","rotate(-25.71deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",12)
    $lis.eq(11).css("transform","rotate(-8.57deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",13)
    $lis.eq(12).css("transform","rotate(8.57deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",14)
    $lis.eq(13).css("transform","rotate(25.71deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",15)
    $lis.eq(14).css("transform","rotate(42.86deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",16)
    $lis.eq(15).css("transform","rotate(60deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",17)
    $lis.eq(16).css("transform","rotate(-60deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",10)
    $lis.eq(17).css("transform","rotate(-42.86deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",11)
    $lis.eq(18).css("transform","rotate(-25.71deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",12)
    $lis.eq(19).css("transform","rotate(-8.57deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",13)
    $lis.eq(20).css("transform","rotate(8.57deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",14)
    $lis.eq(21).css("transform","rotate(25.71deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",15)
    $lis.eq(22).css("transform","rotate(42.86deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",16)
    $lis.eq(23).css("transform","rotate(60deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",17)
    $lis.eq(24).css("transform","rotate(-60deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",10)
    $lis.eq(25).css("transform","rotate(-42.86deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",11)
    $lis.eq(26).css("transform","rotate(-25.71deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",12)
    $lis.eq(27).css("transform","rotate(-8.57deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",13)
    $lis.eq(28).css("transform","rotate(8.57deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",14)
    $lis.eq(29).css("transform","rotate(25.71deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",15)
    $lis.eq(30).css("transform","rotate(42.86deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",16)
    $lis.eq(31).css("transform","rotate(60deg)").css("transform-origin","50% 120%").css("opacity",1).css("z-index",17)
})
$(".btn2").click(function(){
    $lis.attr("style","");
})