// 顶部导航栏
function yidong() {
    $('.nav li').removeClass('border');
    $('.nav li:first-child').addClass('border');
    $('.others').removeClass('big-none');
    $('#griffin').addClass('big-none');
    $('#Atlas').addClass('big-none');
}

$('.nav li:nth-child(5)').on('click', function () {
    yidong()
    $('html,body').stop().animate({
        scrollTop: fifthTop + 1
    }, 300)
})

$('.nav li:nth-child(6)').on('click', function () {
    yidong()
    $('html,body').stop().animate({
        scrollTop: sixthTop + 1
    }, 300)
})

$('.nav li:nth-child(2)').on('click', function () {
    $('.nav li').removeClass('border');
    $(this).addClass('border');
    $('#griffin').removeClass('big-none');
    $('.others').addClass('big-none');
    $('#Atlas').addClass('big-none');
})

$('.nav li:first-child').on('click', function () {
    $('.nav li').removeClass('border');
    $(this).addClass('border');
    $('.others').removeClass('big-none');
    $('#griffin').addClass('big-none');
})

$('.nav li:nth-child(4)').on('click', function () {
    $('.nav li').removeClass('border');
    $(this).addClass('border');
    $('#Atlas').removeClass('big-none');
    $('.others').addClass('big-none');
})

// 第一张大图视频
let myVideo = document.querySelector('.PV-video video');
let PVPlay = document.querySelector('.first-big .play');
let PV = document.querySelector('.PV');
let closePV = document.querySelector('.PV .close-Pv');

function playVid() {
    myVideo.play();
}

function pauseVid() {
    myVideo.pause();
}

PVPlay.addEventListener('click', function () {
    PV.classList.remove('none');
    playVid()
})

closePV.addEventListener('click', function () {
    PV.classList.add('none');
    pauseVid()
    myVideo.currentTime = 0
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

function more() {
    $('.nav li').removeClass('border');
    $('.nav li:nth-child(2)').addClass('border');
    $('#griffin').removeClass('big-none');
    $('.others').addClass('big-none');
    $('#Atlas').addClass('big-none');
}

$('#Griffin').on('click', function () {
    more()
})

$('.senond-big .new-box>a').on('click', function () {
    more()
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
let address = [{
    'audio': './audio/index/Rifle.mp3'
}, {
    'audio': './audio/index/kar98k.mp3'
}, {
    'audio': './audio/index/M4A1_GAIN_JP.mp3'
}, {
    'audio': './audio/index/SOP2.mp3'
}, {
    'audio': './audio/index/HK416_DIALOGUE1_JP.mp3'
}, {
    'audio': './audio/index/AUG.mp3'
}]

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
                <audio>
                    <source src="${address[num].audio}">
                </audio>
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

function audiocv() {
    audioplay = document.querySelector('.cv a');
    audio = document.querySelector('.cv audio');
    audioplay.addEventListener('click', function () {
        audio.play()
    })
}

// 第三张大图轮播
let audioplay = document.querySelector('.cv a');
let audio = document.querySelector('.cv audio');
let dianNum = 0;
$('.photo-in li').on('click', function () {
    dianNum = $(this).index();
    $('.photo-in li').removeClass('bright');
    $(this).addClass('bright');
    girl(dianNum)
    fadeIn()
    audiocv()
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
    audiocv()
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
    audiocv()
})

audiocv()

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

$('#battle').on('click', function () {
    $('.nav li').removeClass('border');
    $('.nav li:nth-child(4)').addClass('border');
    $('#Atlas').removeClass('big-none');
    $('.others').addClass('big-none');
})

// 第五张大图
let WorldIn = 0
$('.world .right-arrow').on('click', function () {
    WorldIn++;
    if (WorldIn == 4) {
        WorldIn = 0;
    }
    $('.world-in li').eq(WorldIn).stop().fadeIn(500).siblings('li').stop().fadeOut(500);
})

$('.world .left-arrow').on('click', function () {
    WorldIn--;
    if (WorldIn < 0) {
        WorldIn = 3;
    }
    $('.world-in li').eq(WorldIn).stop().fadeIn(500).siblings('li').stop().fadeOut(500);
})

// 第六张大图
let cssleft = 0
let timeLeft = cssleft;

function reg() {
    cssleft = $('.timeline-img').css('left')
    var str = $('.timeline-img').css('left')
    cssleft = Number(-(str.replace('px', "")));
}

$('.timeline .timeline-right').on('mouseenter', function () {

    lineLeft = setInterval(function () {
        if (timeLeft >= 1057) {
            clearInterval(lineLeft)
        }

        $('.timeline-img').css({
            left: -timeLeft
        })

        timeLeft += 3;
    }, 20)

    $('.timeline .timeline-right').on('mouseleave', function () {
        clearInterval(lineLeft)
        reg()
    })
})

$('.timeline .timeline-left').on('mouseenter', function () {
    lineLeft = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(lineLeft)
        }

        $('.timeline-img').css({
            left: -timeLeft
        })

        timeLeft -= 3;
        // console.log(timeLeft, 1057)
    }, 20)

    $('.timeline .timeline-left').on('mouseleave', function () {
        clearInterval(lineLeft)
        reg()
    })
})

// 侧边导航栏
let firstTop = $('main').offset().top;
let secondTop = $('.senond-big').offset().top;
let thirdTop = $('.third-big').offset().top;
let fourthTop = $('.fourth-big').offset().top;
let fifthTop = $('.fifth-big').offset().top;
let sixthTop = $('.sixth-big').offset().top;

function remove() {
    $('.side-nav li').removeClass('active');
}

$(document).on('scroll', function () {
    if ($(document).scrollTop() >= sixthTop) {
        remove()
        $('.side-nav li:last-child').addClass('active');
    } else if ($(document).scrollTop() >= fifthTop) {
        remove()
        $('.side-nav li:nth-child(5)').addClass('active');
    } else if ($(document).scrollTop() >= fourthTop) {
        remove()
        $('.side-nav li:nth-child(4)').addClass('active');
    } else if ($(document).scrollTop() >= thirdTop) {
        remove()
        $('.side-nav li:nth-child(3)').addClass('active');
    } else if ($(document).scrollTop() >= secondTop) {
        remove()
        $('.side-nav li:nth-child(2)').addClass('active');
    } else {
        remove()
        $('.side-nav li:first-child').addClass('active');
    }
})

$('.side-nav li').on('click', function () {
    $('.side-nav li').removeClass('active');
    $(this).addClass('active');
    let shu = $(this).index()
    let bodychild = $('body').children().eq(shu).offset().top + 1;
    $('html,body').stop().animate({
        scrollTop: bodychild
    }, 300)
})

// 官方QQ
let qqs = document.querySelector('.official-qqs');
let inner = document.querySelector('.official-inner');
let top2 = 0;
qqs.addEventListener('mousewheel', function (e) {
    e.returnValue = false
    if (e.wheelDelta < 0) {
        if (top2 >= 0 && top2 <= 134) {
            top2 += 12
            console.log(top2, e.returnValue)
        }
        inner.style.top = -top2 + 'px'
    } else if (e.wheelDelta > 0) {
        if (top2 > 0 && top2 <= 144) {
            top2 -= 12
        }
        inner.style.top = -top2 + 'px'
    }
})

$('.official .official-hide').on('click', function () {
    $('.close-open .official-close').removeClass('active');
    $('.official').animate({
        right: -190
    }, 500)
})

$('.official-close div').on('click', function () {
    $('.close-open .official-close').addClass('active');
    $('.official').animate({
        right: 0
    }, 500)
})

$('.official-icon .weixin').on('click', function () {
    $('.official-qqs').addClass('none');
    $('.scroll-mouse').addClass('none');
    $('.official-weixing').removeClass('none');
})

$('.official-icon .QQ').on('click', function () {
    $('.official-qqs').removeClass('none');
    $('.scroll-mouse').removeClass('none');
    $('.official-weixing').addClass('none');
})

// 顶部导航栏情报局
$('.griffin .container-menu li').on('click', function () {
    $('.griffin .container-menu li').removeClass('active');
    $(this).addClass('active');
    let num2 = $(this).index();
    $('.griffin-group').removeClass('active');
    $(`.griffin-group${num2+1}`).addClass('active');
})

$('.con-follow a:first-child').on('mouseenter', function () {
    $('.follow_btn img').css({
        display: 'block'
    })
})

$('.con-follow a:first-child').on('mouseleave', function () {
    $('.follow_btn img').css({
        display: 'none'
    })
})

// 第三版块图册
$('.Atlas-menu li').on('click', function () {
    let index2 = $(this).index();
    $('.Atlas-menu li').removeClass('menu');
    $(this).addClass('menu');
    $('.Atlas-group').removeClass('group-block');
    $(`.Atlas-group${index2+1}`).addClass('group-block');
})

$('.Atlas-group .group-item').on('click', function () {
    let itemImg = $(this).children().eq(0).html();
    $('.mas').removeClass('mas-none');
    $('.mas').html(itemImg);

    $('.mas img').on('click', function () {
        $('.mas').addClass('mas-none');
    })
})