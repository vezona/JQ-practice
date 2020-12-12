// $.fn.掛你要的名字
$.fn.jinred = function () {
    $(this).css('color', 'red');
    // funtion要返回值，使用的東西才能得到這個效果
    return $(this);

}