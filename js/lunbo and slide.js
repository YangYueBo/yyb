$(function(){
	
				//轮播图
				$('.bxslider').bxSlider({
				auto: true,
  				autoControls: true
				});
				
				
				
				
				//下拉
				$("#btn").toggle(function(){
					$(".hide").slideDown();
					$(this).val("点击收回 X")
				},function(){
					$(".hide").slideUp();
					$(this).val("查看更多 +")
				})
				
				$("#btn3").toggle(function(){
					$(".hide3").slideDown();
					$(this).val("点击收回 X")
				},function(){
					$(".hide3").slideUp();
					$(this).val("查看更多 +")
				})

				
				$(function(){
					if($(window).width()<481){
						$("#btn2").toggle(function(){
							$(".max_480_h2").slideDown();
							$(this).val("点击收回 X")
						},function(){
							$(".max_480_h2").slideUp();
							$(this).val("查看更多 +")
						})
						$("#btn4").toggle(function(){
							$(".max_480_h4").slideDown();
							$(this).val("点击收回 X")
						},function(){
							$(".max_480_h4").slideUp();
							$(this).val("查看更多 +")
						})
					}
					if($(window).width()>480 && $(window).width()<762){
						
							
						$("#btn2").toggle(function(){
								$(".hide2").slideDown();
								$(this).val("点击收回 X")
							},function(){
								$(".hide2").slideUp();
								$(this).val("查看更多 +")
						})
						
						
							
		
						$("#btn4").toggle(function(){
							$(".hide4").slideDown();
							$(this).val("点击收回 X")
						},function(){
							$(".hide4").slideUp();
							$(this).val("查看更多 +")
						})
					}
				})
			})