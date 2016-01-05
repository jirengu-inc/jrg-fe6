define(['jquery'],function ($) {
    return {
        getHello: function () {
            var content = $('h1').html();
            return content;
        }
    };
});