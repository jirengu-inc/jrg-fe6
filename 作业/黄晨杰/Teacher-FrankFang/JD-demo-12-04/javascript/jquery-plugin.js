/**
 * Created by Administrator on 2015/12/10.
 */
(function($){

    $.fn.dropEffect = function(options){
        // defaultSettings
        // @param $wrap             the detailWrap jQuery Object
        // @param thisAddClassName  the add-class Name
        // @param detailDirection   the detail appear direction
        var defaultConfig = {
            "$wrap": $detailWrap,
            "thisAddClassName": "hover",
            "detailDirection": "ltr"
        };

        var config = $.extend({}, defaultConfig, options || {});

        var $detailWrap = config.$wrap;

        $(this).hover(function(){
            // $(this) attr position must be relative or absolute
            $(this).css("position", ($(this).css("position") === "absolute" ? "absolute" : "relative"));
            $(this).addClass(config.thisAddClassName);

            var styleOfdetailWrap = {
                "position": "absolute",
                "top": $(this).outerHeight(),
                "display": "block",
                "background-color": "white",
                "z-index": "666"
            };
            $detailWrap.css(styleOfdetailWrap);

            if(config.detailDirection === "ltr"){
                $detailWrap.css("left", -1);
            }else if(config.detailDirection === "rtl"){
                $detailWrap.css("right", -1);
            }

            // maybe the border-style could influence the effect,
            // so in this page, you need this easy cover tip
            var styleOfCover = {
                "width": $(this).innerWidth(),
                "background-color": "white",
                "position": "absolute",
                "height": "1px",
                "border": "none",
                "top": "-1px",
                "left": "0"
            };
            var $coverDiv = $("<div>");
            $coverDiv.css(styleOfCover);

            $detailWrap.append($coverDiv);
            $(this).append($detailWrap);
        }, function(){
            $(this).removeClass(config.thisAddClassName);
            $(this).find($detailWrap).css("display", "none");
        });
    };
}(jQuery));