
	$("#heade").load("header.html .header",function(){
		$("#top #web").mouseover(function(){
		$("#website_nav").slideDown(1000)
	})
		$("#website_navmain").mouseover(function(){
		$("#website_nav").show()
})
	$("#header").mouseleave(function(){
		$("#website_nav").slideUp(1000)
})
$(".spfl").find("li").mouseover(function(){
	$(this).find("img").eq(0).css("display","none")
	$(this).css({"background":"#000"})
					.find("h3").css({"color":"#fff"})
					$(this).find("a").css({"color":"#fff"})
	$(this).find("h3").stop().animate({"margin-left":"20px"},1000)
})
$(".spfl").find("li").mouseout(function(){
	$(this).find("img").eq(0).css("display","block")
	$(this).css({"background":"#e3e3e3"})
					.find("h3").css({"color":"#333"})
					$(this).find("a").css({"color":"#333"})
	$(this).find("h3").stop().animate({"margin-left":0},1000)
	})
})
