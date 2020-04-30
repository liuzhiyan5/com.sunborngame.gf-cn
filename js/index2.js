// 第三版块轮播图左右按钮
$('.work .banner').on('mouseenter', function () {
    $('.work .banner .btn').animate({
        opacity: .5
    })
})

$('.work .banner').on('mouseleave', function () {
    $('.work .banner .btn').animate({
        opacity: .8
    })
})

$('.work .banner .next').on('mouseenter', function () {
    $(this).animate({
        opacity: .8
    })

    $(this).on('mouseleave', function () {
        $(this).animate({
            opacity: .5
        })
    })
})

let flag = true;
let num = 0;
$('.work .banner .next').on('click', function () {
    clearInterval(timer);
    if (flag) {
        flag = false
        if (num == 4) {
            num = -1
        }
        num++
        $('.banner ul').animate({
            left: -907 * num
        }, function () {
            flag = true
            timer = setInterval(function () {
                $('.work .banner .next').click();
            }, 2000)
        })
    }
})

$('.work .banner .prev').on('mouseenter', function () {
    $(this).animate({
        opacity: .8
    })

    $(this).on('mouseleave', function () {
        $(this).animate({
            opacity: .5
        })
    })
})

$('.work .banner .prev').on('click', function () {
    clearInterval(timer);
    if (flag) {
        flag = false
        if (num == 0) {
            num = 5
        }
        num--
        $('.banner ul').animate({
            left: -907 * num
        }, function () {
            flag = true
            timer = setInterval(function () {
                $('.work .banner .next').click();
            }, 2000)
        })
    }
})

// 第三版轮播图自动轮播
let timer = setInterval(function () {
    $('.work .banner .next').click();
}, 2000)

// 第四版轮播图
let flag2 = true;
let num2 = 0;
$('.cosplay .banner2 .next').on('click', function () {
    clearInterval(timer2);
    if (flag2) {
        flag2 = false
        if (num2 == 4) {
            num2 = -1
        }
        num2++
        $('.banner2 ul').animate({
            left: -907 * num2
        }, function () {
            flag2 = true
            timer2 = setInterval(function () {
                $('.cosplay .banner2 .next').click();
            }, 2000)
        })
    }
})

$('.cosplay .banner2 .prev').on('click', function () {
    clearInterval(timer2);
    if (flag2) {
        flag2 = false
        if (num2 == 0) {
            num2 = 5
        }
        num2--
        $('.banner2 ul').animate({
            left: -907 * num2
        }, function () {
            flag2 = true
            timer2 = setInterval(function () {
                $('.cosplay .banner2 .next').click();
            }, 2000)
        })
    }
})

let timer2 = setInterval(function () {
    $('.cosplay .banner2 .next').click();
}, 2500)