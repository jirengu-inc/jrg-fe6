define(['jquery','fun/goTop','fun/carousel','fun/lazyLoad'],function($,goTop,carousel,lazyLoad){
	new goTop();
	carousel.init();
	lazyLoad.init();
	// console.log(carousel);
});