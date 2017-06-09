$(function(){
	function Banner(){
		this.content=$(".box");
		this.li=$(".content_ul li");
		this.timer=null;
		this.int()
	}
	Banner.prototype.int=function(){
		var that=this;
		var index=0;
		this.timer=setInterval(startMove,2000)
		function startMove(){
			index++
			if(index>2){
				index=0
			}
			that.content.eq(index).fadeIn(1000).siblings().not(".content").fadeOut(1000);
			that.li.eq(index).addClass("on").siblings().removeClass("on")
		}
		that.li.mouseover(function(){
			index=$(this).index();
			clearInterval(that.timer)
			$(this).addClass("on").siblings().removeClass("on")
			that.content.eq(index).fadeIn(1000).siblings().not(".content").fadeOut(1000)
		})
		that.li.mouseout(function(){
			index=$(this).index();
			that.timer=setInterval(startMove,2000)
		})	
	}
	var banner=new Banner();
	
//品牌logo
	$.ajax({
			url:"http://127.0.0.1/ajax/xmhdys/json/pingplogo.json",
			type:"get",
			success:function(msg){
				var str="";
				//console.log(msg.pplogo[2].src)
				for(var i in msg.pplogo){
					str+=`<li style="float:left">
						<a href="#" style="background:url(${msg.pplogo[i].src})  no-repeat 18px 7px;"></a>
					</li>`
					}
				$(".pplogo_ul").html(str)
			}
		})
})

