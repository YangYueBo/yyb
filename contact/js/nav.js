$(function(){
				//导航
				$(".nav").hide();
				$(".btn").toggle(function(){
					$(".nav").slideDown();
//					$(this).val("点击收回")
				},function(){
					$(".nav").slideUp();
//					$(this).val("查看更多")
				})
			})