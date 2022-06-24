$(document).ready(function () {
  $("#slider").bxSlider({
    /*		mode: 'horizontal',
		moveSlides: 1,
		slideMargin: 40,
		infiniteLoop: true,
		slideWidth: 660,
		minSlides: 3,
		maxSlides: 3,
		speed: 800,*/
    auto: true,
    autoControls: false,
    pager: true,
    mode: "fade",
    touchEnabled: true,
    speed: 600,
    pause: 3000,
    responsive: true,
    easing: "easeInQuad",
    autoHover: false,
    controls: false,
  });
});
