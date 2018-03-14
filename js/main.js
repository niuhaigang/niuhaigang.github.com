/*
	main.js
 */
$(document).ready(function() {
	// 点击滚动
	$(".scroll").click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop: $(this.hash).offset().top}, 1000);
	});
	// 点击nav添加active
	$(".nav li a").click(function () {
		$(this).parent().addClass("active");
		$(this).parent().siblings().removeClass("active");
	});
	// 页面滚动nav fiexd
	var navoffeset = $(".header-home").offset().top;
	$(window).scroll(function () {
		var scrollpos = $(window).scrollTop(); 
		if (scrollpos >= navoffeset) {
			$(".header-home").addClass("fixed");
		} else {
			$(".header-home").removeClass("fixed");
		}
	});
      // Slideshow 4
      $("#slider4").responsiveSlides({
        auto: true,
        pager: true,
        nav: true,
        speed: 500,
        namespace: "callbacks",
        before: function () {
          $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
          $('.events').append("<li>after event fired.</li>");
        }
      });
      // Slideshow 4
      $("#slider5").responsiveSlides({
        auto: true,
        pager: true,
        nav: false,
        speed: 500,
        namespace: "callbacks",
        before: function () {
          $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
          $('.events').append("<li>after event fired.</li>");
        }
      });
    // 返回顶部插件
    $().UItoTop({ easingType: 'easeOutQuart' });
});

