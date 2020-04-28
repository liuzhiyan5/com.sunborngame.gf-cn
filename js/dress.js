// 主题装扮
$('#main .toc .toctitle span').on('click', function () {
    let h = $('.toc').height();

    if (h == 236) {
        $('.toc').animate({
            height: 34
        })
        $(this).text('[展开]');
    } else {
        $('.toc').animate({
            height: 236
        })
        $(this).text('[隐藏]');
    }
})

// 主题列表
$('.twenty .span span').on('click', function () {
    let h = $('.twenty').height();

    if (h == 52) {
        $('.twenty').animate({
            height: 207
        })
        $(this).text('点击隐藏内容');
    } else {
        $('.twenty').animate({
            height: 52
        })
        $(this).text('点击展开内容');
    }
})

$('.nineteen .span span').on('click', function () {
    let h = $('.nineteen').height();

    if (h == 52) {
        $('.nineteen').animate({
            height: 708
        }, function () {
            $('.nineteen .span span').text('点击隐藏内容');
        })
    } else {
        $('.nineteen').animate({
            height: 52
        }, function () {
            $('.nineteen .span span').text('点击展开内容');
        })
    }
})

$('.eighteen .span span').on('click', function () {
    let h = $('.eighteen').height();

    if (h == 52) {
        $('.eighteen').animate({
            height: 544
        }, function () {
            $('.eighteen .span span').text('点击隐藏内容');
        })
    } else {
        $('.eighteen').animate({
            height: 52
        }, function () {
            $('.eighteen .span span').text('点击展开内容');
        })
    }
})

$('.seventeen .span span').on('click', function () {
    let h = $('.seventeen').height();

    if (h == 52) {
        $('.seventeen').animate({
            height: 544
        }, function () {
            $('.seventeen .span span').text('点击隐藏内容');
        })
    } else {
        $('.seventeen').animate({
            height: 52
        }, function () {
            $('.seventeen .span span').text('点击展开内容');
        })
    }
})

$('.sixteen .span span').on('click', function () {
    let h = $('.sixteen').height();

    if (h == 52) {
        $('.sixteen').animate({
            height: 207
        })
        $(this).text('点击隐藏内容');
    } else {
        $('.sixteen').animate({
            height: 52
        })
        $(this).text('点击展开内容');
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