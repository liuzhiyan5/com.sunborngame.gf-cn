// 主线章节
$('#main .toc .toctitle span').on('click', function () {
    let h = $('.toc').height();

    if (h >= 407) {
        $('.toc').animate({
            height: 34
        })
        $(this).text('[展开]');
    } else {
        $('.toc').animate({
            height: 407
        })
        $(this).text('[隐藏]');
    }
})

// 侧边人物
$(document).on('scroll', function () {
    if ($(document).scrollTop() >= 50) {
        $('.backToTop').stop().animate({
            opacity: 1
        })
    }
    if ($(document).scrollTop() < 50) {
        $('.backToTop').stop().animate({
            opacity: 0
        })
    }
})

$('.backToTop').on('click', function () {
    $('body,html').animate({
        scrollTop: 0
    }, 200)
})