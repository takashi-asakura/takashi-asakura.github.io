// JavaScript Document
// -------------------------------------------------------------------

/* tel_link */
/*
$(function(){
    var ua = navigator.userAgent;
    if(ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0){
        $('.tel_link').each(function(){
            var str = $(this).text();
            $(this).html($('<a>').attr('href', 'tel:' + str.replace(/-/g, '')).append(str + '</a>'));
        });
    }
});
*/
if (navigator.userAgent.match(/(iPhone|Android)/)) {
  jQuery(function ($) {
    $(".tel_link").each(function () {
      var str = $(this).html();
      if ($(this).children().is("img")) {
        $(this).html(
          $("<a>")
            .attr("href", "tel:" + $(this).children().attr("alt").replace(/-|\s+/g, ""))
            .append(str + "</a>")
        );
      } else {
        $(this).html(
          $("<a>")
            .attr("href", "tel:" + $(this).text().replace(/-|\s+/g, ""))
            .append(str + "</a>")
        );
      }
    });
  });
}

/* current page active */
$(function () {
  $(".pc-nav li a").each(function () {
    var $href = $(this).attr("href");
    if (location.href.match($href)) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
});

// headerScroll
//
/* ▽headerScroll */
// var startPos = 0,
//   winScrollTop = 0;
// $(window).on("scroll", function () {
//   winScrollTop = $(this).scrollTop();
//   if (winScrollTop >= startPos) {
//     if (winScrollTop >= 200) {
//       $(".site-header").addClass("hide");
//     }
//   } else {
//     $(".site-header").removeClass("hide");
//   }
//   startPos = winScrollTop;
// });

// smartRollover
//
/* ▽smartRollover */
function smartRollover() {
  if (document.getElementsByTagName) {
    var images = document.getElementsByTagName("img");

    for (var i = 0; i < images.length; i++) {
      if (images[i].getAttribute("src").match("_off.")) {
        images[i].onmouseover = function () {
          this.setAttribute("src", this.getAttribute("src").replace("_off.", "_on."));
        };
        images[i].onmouseout = function () {
          this.setAttribute("src", this.getAttribute("src").replace("_on.", "_off."));
        };
      }
    }
  }
}

if (window.addEventListener) {
  window.addEventListener("load", smartRollover, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", smartRollover);
}
/* ▲smartRollover */

/*
$(function() {
	var topBtn = $('#totop');	
	topBtn.hide();
	//スクロールが100に達したらボタン表示
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
	//スクロールしてトップ
    topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
    });
});
*/

/* ▽スムーズスクロール */
/*
$(function(){
   $('a[href^=#]' + 'a:not([href *= "panel1"])' + 'a:not([href *= "panel2"])' + 'a:not([href *= "panel3"])').click(function() {
      // スクロールの速度
      var speed = 500; // ミリ秒
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});
*/

/* ▽TELボタン */
$(function () {
  var ua = navigator.userAgent;
  if (ua.indexOf("iPhone") < 0 && ua.indexOf("Android") < 0) {
    $('a[href^="tel:"]')
      .css({
        cursor: "default",
        "text-decoration": "none",
      })
      .click(function (event) {
        event.preventDefault();
      });
  }
});

/* ▽メガドロップメニュー */
$(function () {
  $("div.pc-nav ul > li").hover(
    function () {
      $(this).find(".child:not(:animated)").slideDown();
    },
    function () {
      $(this).find(".child").fadeOut();
    }
  );
  /*$("#header nav.pc-nav > ul > li > ul > li").hover(function(){
		$(this).find(".grand-child:not(:animated)").slideDown();
	}, function(){
		$(this).find(".grand-child").fadeOut();
	});*/
});

/* ▽sticky */
$(window).scroll(function () {
  //if ($(this).scrollTop() > 548){
  if ($(this).scrollTop() > 80) {
    $("#header").addClass("sticky");
  } else {
    $("#header").removeClass("sticky");
  }
});

/* ▽ウインドウリサイズ */
$(document).ready(function () {
  funcResize();

  $(window).resize(function () {
    funcResize();
  });

  function funcResize() {
    //	var wid = $(window).width();
    var wid = window.innerWidth;

    //画像の切替
    //	if( wid < 761 ){
    if (wid < 1041) {
      $(".switch").each(function () {
        $(this).attr("src", $(this).attr("src").replace("_pc", "_sp"));
      });
    } else {
      $(".switch").each(function () {
        $(this).attr("src", $(this).attr("src").replace("_sp", "_pc"));
      });
    }
    //sp_menu(グローバルナビスタイル用クラス)
    //	if( wid < 1040 ){
    if (wid < 1041) {
      $("header .overlay").each(function () {
        $(this).addClass("sp-nav").removeClass("pc-nav");
      });
    } else {
      $("header .overlay").each(function () {
        $(this).addClass("pc-nav").removeClass("sp-nav");
      });
    }
  }
});
