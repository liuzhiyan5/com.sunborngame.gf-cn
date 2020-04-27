// 轮播图
let num = 0;
let flag = true;
let next = setInterval(function () {
    $('.banner .banner-in .banner-next').click();
}, 3000)
$('.banner .banner-in .banner-next').on('click', function () {
    clearInterval(next)
    if (flag) {
        flag = false;

        if (num == 3) {
            $('.banner-in ul').css({
                left: 0
            })
            num = 0
        }
        num++

        $('.banner-in ul').animate({
            left: -718 * num
        }, 500, function () {
            flag = true
            next = setInterval(function () {
                $('.banner .banner-in .banner-next').click();
            }, 3000)
        })

        $('.banner ol li').removeClass('active');
        if (num < 3) {
            $('.banner ol li').eq(num).addClass('active');
        } else {
            $('.banner ol li').eq(0).addClass('active');
        }

    }
})

$('.banner .banner-in .banner-prev').on('click', function () {
    clearInterval(next)
    if (flag) {
        flag = false;

        if (num == 0) {
            $('.banner-in ul').css({
                left: -2158
            })
            num = 3
        }
        num--

        $('.banner-in ul').animate({
            left: -718 * num
        }, 500, function () {
            flag = true
            next = setInterval(function () {
                $('.banner .banner-in .banner-next').click();
            }, 3000)
        })

        $('.banner ol li').removeClass('active');
        if (num < 3) {
            $('.banner ol li').eq(num).addClass('active');
        } else {
            $('.banner ol li').eq(0).addClass('active');
        }
    }
})

$('.banner ol li').on('click', function () {
    let index = $(this).index();
    if (flag) {
        flag = false;

        $('.banner-in ul').animate({
            left: -718 * index
        }, 400, function () {
            flag = true
        })

        $('.banner ol li').removeClass('active');
        $(this).addClass('active');
    }
})

// 轮播图倒计时
let inputTime1 = +new Date("2020-5-10 00:00:00");
let inputTime2 = +new Date("2020-5-09 00:00:00");
let inputTime3 = +new Date("2020-5-08 00:00:00");
let timer = setInterval(count, 1000);
var date = new Date();
let hour = date.getHours();

function count() {
    let nowTime = +new Date();
    let hourTime = 24 - hour;
    let times1 = inputTime1 - nowTime;
    let times2 = inputTime2 - nowTime;
    let times3 = inputTime2 - nowTime;
    // 第一张图
    let day1 = parseInt(times1 / 1000 / 60 / 60 / 24)
    let minutes1 = parseInt(times1 / 1000 / 60 % 60);
    let second1 = parseInt(times1 / 1000 % 60);

    // 第二张图
    let day2 = parseInt(times2 / 1000 / 60 / 60 / 24)
    let minutes2 = parseInt(times2 / 1000 / 60 % 60);
    let second2 = parseInt(times2 / 1000 % 60);

    // 第三张图
    let day3 = parseInt(times3 / 1000 / 60 / 60 / 24)
    let minutes3 = parseInt(times3 / 1000 / 60 % 60);
    let second3 = parseInt(times3 / 1000 % 60);

    // 图1时间倒计时
    $('.banner-in ul li').eq(0).children('p').children('b').text(`
        ${day1}天，${hourTime}小时，${minutes1}分钟${second1}秒
    `)
    $('.banner-in ul li').eq(3).children('p').children('b').text(`
        ${day1}天，${hourTime}小时，${minutes1}分钟${second1}秒
    `)

    // 图2时间倒计时
    $('.banner-in ul li').eq(1).children('p').children('b').text(`
        ${day2}天，${hourTime}小时，${minutes2}分钟${second2}秒
    `)

    // 图3时间倒计时
    $('.banner-in ul li').eq(2).children('p').children('b').text(`
        ${day3}天，${hourTime}小时，${minutes3}分钟${second3}秒
    `)

}
count()

// 日常信息时间定位
var date = new Date();
let month = date.getMonth();
let day = date.getDate();
let week = date.getDay();
let weekday = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];
$('.information ul li:first-child').html(`
    今天是${month+1}月${day}日 <b>${weekday[week-1]}</b>
`)

// 日常信息图片切换
let img = ['500px-Pic_ADS.png', '500px-Pic_DTASRS.png'];
let houzhui = ['ADS', 'DTASRS'];
let ning = date.getHours();
if (ning <= 12) {
    $('.information div').html(`
        <img src="./images/handbook/${img[0]}" alt="" title="${houzhui[0]}">
    `)
} else {
    $('.information div').html(`
        <img src="./images/handbook/${img[1]}" alt="" title="${houzhui[1]}">
    `)
}