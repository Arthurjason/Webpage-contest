	$('document').ready(function(){
		
		//锚点定位
		$('a[href*=#]').click(function() {
	        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	            var $target = $(this.hash);
	            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
	            if ($target.length) {
	                var targetOffset = $target.offset().top-40;
	                $('html,body').animate({
	                    scrollTop: targetOffset
	                },
	                1000);
	                return false;
	            }
	        }
	    });
		//滚动栏目开始
	    var aWidth = $('#focus').width();
	    var len    = $('#focus ul li').length;
	    var index  = 0;
	    $('#focus ul').css("width",aWidth*(len));

	    //左边按钮
	    $('.list-left').click(function(){
	    	index -= 1;
	    	if(index == -1){
	    		index = len - 1;
	    	}
	    	showPage(index);
	    });
	    //右边按钮
	    $('.list-right').click(function(){
	    	index += 1;
	    	if(index == len){
	    		index = 0;
	    	}
	    	showPage(index);
	    });
	    $(".icon-ul li a").click(function(){
	    	index = $(".icon-ul li a").index(this);
	    	showPage(index);
	    	$(".icon-ul li a").stop(true,false).removeClass('active').eq(index).stop(true,false).addClass('active');
	    });
	    $('.icon-ul li a:eq(0)').addClass('active');
	    function showPage(index){
			var nowLeft = -index*aWidth;
			$('#focus ul').stop(true,false).animate({"left":nowLeft},300);
			$(".icon-ul li a").stop(true,false).removeClass('active').eq(index).stop(true,false).addClass('active');
		}
		setInterval(function(){
			showPage(index);
			index++;
			if(index == len){index = 0}
		},4000);
		//滚动栏目结束
		//滚轮监控
		$(window).scroll(function(){
			var sheight = $(window).scrollTop();
			if(sheight>475){
				$('#menu').addClass('fix');
			}
			if(sheight<=475){
				$('#menu').removeClass('fix');
			}
		});
		//底部二维码显示
		$('.weixin').mouseenter(function(){
			$('.weixin-img').fadeIn();
		}).mouseleave(function(){
			$('.weixin-img').fadeOut();
		});
		//ajax 调用查看报名人数
		$.ajax({
			url:"./admin/web/num.php",
			dataType:"JSON",
			type:"post",
			success:function(data){
				$('.bner-num').append(data.num);
			}
		});
	});
	