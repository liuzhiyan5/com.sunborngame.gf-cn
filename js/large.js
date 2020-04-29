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