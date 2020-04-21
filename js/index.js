// 调用函数
function border(zhe) {
    $('.nav li').removeClass('border');
    zhe.addClass('border');
}

// 顶部导航栏
$('.nav li:first-child').on('click', function () {
    border($(this));
})

$('.nav li:nth-child(2)').on('click', function () {
    border($(this));
})

$('.nav li:nth-child(4)').on('click', function () {
    border($(this));
})

// 第二张大图轮播图
let num = 1
let timer = setInterval(function () {
    let left = 640 * num
    $('.banner-in ul').animate({
        'left': -left
    }, 400)
    num++
    if (num == 4) {
        num = 0
    }
    $('.DoT li').removeClass('bgc');
    $('.DoT li').eq(num - 1).addClass('bgc');
}, 3000)

// 第二张大图tab切换
$('.new-top span').on('mouseenter', function () {
    $('.new-top span').removeClass('bgi');
    $(this).addClass('bgi');
    let index = $(this).index();
    $('.new-bottom div').removeClass('taggle');
    $(`.new-bottom .number${index+1}`).addClass('taggle');
})