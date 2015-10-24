if (document.addEventListener) {
	document.addEventListener('DOMMouseScroll', changeHeader, false);
} //W3C
window.onmousewheel = document.onmousewheel = changeHeader; //IE/Opera/Chrom

function changeHeader(){
	var top = document.querySelector(".main").getBoundingClientRect().top;

	if(top >= 60){
		document.querySelector(".header").style.height = "100px";
		document.querySelector(".header-content").style.lineHeight = "100px";
	}else{
		document.querySelector(".header").style.height = "50px";
		document.querySelector(".header-content").style.lineHeight = "50px";
	}
}