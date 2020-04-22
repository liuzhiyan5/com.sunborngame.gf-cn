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

// 第三张大图
function fadeIn() {
    $('.all-girl .doll').stop().animate({
        opacity: 1,
        left: 50
    }, 700, 'linear')

    $('.role').stop().animate({
        opacity: 1,
        right: 0
    }, 700)
}
fadeIn()

var gunItem = [1, 1, 3, 3, 3, 3];
var speak = [{
    'p': '春田：指挥官，春田能为您做什么，<br>请随时吩咐。'
}, {
    'p': 'Kar98k：毛瑟98K，为您效劳。<br>让我为您扫除前方的障碍吧~'
}, {
    'p': 'M4A1：指挥官吗，接下来……<br>就拜托您了。'
}, {
    'p': 'M4 SOPMOD II：<br>指挥官，这次要玩什么啊？'
}, {
    'p': 'HK416：指挥官，有我在就足够了。'
}, {
    'p': 'AUG：指挥官，很多行动要是过于冲动，<br>就再也没有反悔的机会了。'
}]

var name1 = ['崛江由衣', '茅野爱衣', '户松遥', '田村由加莉', '野中蓝', '和气杏未'];

function girl(num) {
    $('div').remove('#goddess');
    $('.all-girl').prepend(`
        <div id="goddess">
            <div class="gun_item">
                <img src="./images/index/gun_${gunItem[num]}.png" alt="">
            </div>
            <div class="doll">
                <img src="./images/index/doll_${num+1}.png" alt="">
            </div>
            <div class="speak">
                <p>
                    <span></span>
                    ${speak[num].p}
                </p>
            </div>
            <div class="cv">
                <h2>CV</h2>
                <div class="name">${name1[num]}</div>
                <a href="javascript:;" title="点击播放"></a>
            </div>
        </div>
    `)
    $('#goddess .speak').css({
        backgroundImage: `url(./images/index/name_${num+1}.png)`
    })
    $('.third-big .role').css({
        opacity: 0,
        right: 40,
        backgroundImage: `url(./images/index/role_${num+1}.png)`
    })
}

// 第三张大图轮播
let dianNum = 0;
$('.photo-in li').on('click', function () {
    dianNum = $(this).index();
    $('.photo-in li').removeClass('bright');
    $(this).addClass('bright');
    girl(dianNum)
    fadeIn()
})

$('.photo .right').on('click', function () {
    dianNum++
    if (dianNum >= 0 && dianNum <= 5) {
        $('.photo-in li').removeClass('bright');
        $('.photo-in li').eq(dianNum).addClass('bright');

        if (dianNum == 4) {
            $('.photo-in ul').animate({
                'left': -450
            })
        }
    } else {
        dianNum = 5
    }
    girl(dianNum)
    fadeIn()
})

$('.photo .left').on('click', function () {
    if (dianNum != 0) {
        dianNum--
        $('.photo-in li').removeClass('bright');
        $('.photo-in li').eq(dianNum).addClass('bright');

        if (dianNum == 2) {
            $('.photo-in ul').animate({
                'left': 0
            })
        }
    }
    girl(dianNum)
    fadeIn()
})

// 第四张大图
$('.atlas-content1 div').on('click', function () {
    let content1 = $(this).index();
    $('.atlas .none').html(`
        <img src="./images/index/paint${content1+1}.jpg" alt="">
    `)
    $('.atlas .none').addClass('flex');

    $('.atlas .none img').on('click', function () {
        $('.atlas .none').removeClass('flex');
    })
})

$('.atlas-content2 div').on('click', function () {
    let content2 = $(this).index();
    $('.atlas .none').html(`
        <img src="./images/index/cartoon${content2+1}.jpg" alt="">
    `)
    $('.atlas .none').addClass('flex');

    $('.atlas .none img').on('click', function () {
        $('.atlas .none').removeClass('flex');
    })
})

$('.atlas-content3 .lunbo img').on('click', function () {
    let LiNum = $(this).parent().index()
    let content3 = $(this).index();

    if (LiNum == 0) {
        $('.atlas .none').html(`
            <img src="./images/index/wallpaper${content3+1}.jpg" alt="">
        `)
    } else if (LiNum == 1) {
        $('.atlas .none').html(`
            <img src="./images/index/wallpaper${content3+1+4}.jpg" alt="">
        `)
    } else if (LiNum == 2) {
        $('.atlas .none').html(`
            <img src="./images/index/wallpaper${content3+1+4+4}.jpg" alt="">
        `)
    } else {
        $('.atlas .none').html(`
            <img src="./images/index/wallpaper${content3+1+4+4+4}.jpg" alt="">
        `)
    }
    $('.atlas .none').addClass('flex');

    $('.atlas .none img').on('click', function () {
        $('.atlas .none').removeClass('flex');
    })
})

$('.atlas .atlas-title div').on('click', function () {
    $('.atlas .atlas-title div').removeClass('active');
    $(this).addClass('active');
    let index = $(this).index();
    $('#atlas-content>div').removeClass('taggle');
    $(`.atlas-content${index+1}`).addClass('taggle');

    let step = 0;

    if (index == 2) {
        console.log(index)
        $('.next').css({
            opacity: 1
        })

        $('.next').on('click', function () {
            step++
            if (step >= 0 && step <= 3) {
                $('.atlas-content3 .lunbo ul').animate({
                    left: 880 * -step
                }, 500)

                if (step >= 1) {
                    $('.prev').css({
                        opacity: 1
                    })
                }

                if (step == 3) {
                    $('.next').css({
                        opacity: .35
                    })
                }

                if (step == 0) {
                    $('.prev').css({
                        opacity: .35
                    })
                }
            }
        })

        $('.prev').on('click', function () {
            step--
            if (step >= 0 && step <= 3) {
                $('.atlas-content3 .lunbo ul').animate({
                    left: 880 * -step
                }, 500)

                if (step >= 1) {
                    $('.prev').css({
                        opacity: 1
                    })

                    $('.next').css({
                        opacity: 1
                    })
                }

                if (step == 3) {
                    $('.next').css({
                        opacity: .35
                    })
                }

                if (step == 0) {
                    $('.prev').css({
                        opacity: .35
                    })
                }
            }
        })
    } else {
        $('.next').css({
            opacity: .35
        })

        $('.prev').css({
            opacity: .35
        })

        $('.atlas-content3 .lunbo ul').css({
            left: 0
        })

        $('.next').off('click');
        $('.prev').off('click');
    }
})

// 第五张大图
let WorldIn = 0
$('.world .right-arrow').on('click', function () {
    WorldIn++;
    if (WorldIn == 4) {
        WorldIn = 0;
    }
    $('.world-in li').eq(WorldIn).fadeIn(500).siblings('li').fadeOut(500);
})

$('.world .left-arrow').on('click', function () {
    WorldIn--;
    if (WorldIn < 0) {
        WorldIn = 3;
    }
    $('.world-in li').eq(WorldIn).fadeIn(500).siblings('li').fadeOut(500);
})

// 第六张大图