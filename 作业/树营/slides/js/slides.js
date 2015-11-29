

/*
var i = 0;
setTimeout(function(){
    i++;
    $('.one').animate({'left': i*(-310)});
}, 1000);

*/




/*
var i = 0;
setTimeout(function step(){
    i++;
    $('one').animate({'left': i*(-310)});
    if(i >= 3) {

    } else {
        setTimeout(step, 1000);
    }
},1000);
*/




/*
$.fn.slides = function(){
    var index = 0;
    var $ul = this;
    var len = $ul.children('li').length;
    var sWidth = $ul.children('li').first().width();
    $ul.width(len * sWidth);

    setTimeout(function step() {
        index++;
        $ul.animate({'left': index * (-sWidth)});
        if (index >= (len - 1)) {

        } else {
            setTimeout(setp, 1000)
        }
    }, 1000);
};
*/





/*
$.fn.slides = function() {
    var index = 0;
    var $ul = this;
    var len = $ul.children('li').length;
    var sWidth = $ul.children('li').first().width();
    $ul.width(sWidth * len);

    setTimeout(function step(){
        index++;
        if(index === 4) {
            index = 0;
        }
        $ul.animate({'left': index*(-sWidth)});

        setTimeout(step, 1000);
    }, 1000);
};
*/



/*
$.fn.slides = function() {
    var index = 0;
    var $ul = this;
    $ul.each(function(){
        this;
        var $currentUl = $(this);
        var len = $currentUl.children('li').length;
        var sWidth = $currentUl.children('li').first().width();
        $currentUl.width(sWidth * len);        
        setTimeout(function step(){
            index++;
            if(index === 4) {
                index = 0;
            }
            $currentUl.animate({'left': index*(-sWidth)});

            setTimeout(step, 1000);
        }, 1000);
    });
};
*/


$.fn.slides = function() {
    var index = 0;
    var $ul = this;
    $ul.each(function(){
        this;
        var $currentUl = $(this);
        var len = $currentUl.children('li').length;
        var sWidth = $currentUl.children('li').first().width();
        $currentUl.width(sWidth * len);        
        setTimeout(function step(){
            index++;
            if(index === 4) {
                index = 0;
            }
            $currentUl.animate({'left': index*(-sWidth)}, 400);

            setTimeout(step, 1000);
        }, 1000);
    });

};


