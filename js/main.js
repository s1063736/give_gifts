
//全速前進

let stepX = [0, 0, 0, 0], team = 1, onceStep = 100 / 12, step = [0, 0, 0, 0]
let jumpAudio = $('#jump')[0]
let yesAudio = $('#yes')[0]
let noAudio = $('#no')[0]
let babyAudio = $('#baby')[0]
let bgm = $('#bgm')[0]


$('body').on('click', function () {
    bgm.muted = false;
    bgm.play()
    console.log('bgmOK')
})

$('.team1').on('click', function () {
    team = 1
    $('.team').css('opacity', '0.5')
    $('.team1').css('opacity', '1')
})
$('.team2').on('click', function () {
    team = 2
    $('.team').css('opacity', '0.5')
    $('.team2').css('opacity', '1')
})
$('.team3').on('click', function () {
    team = 3
    $('.team').css('opacity', '0.5')
    $('.team3').css('opacity', '1')
})
$('.team4').on('click', function () {
    team = 4
    $('.team').css('opacity', '0.5')
    $('.team4').css('opacity', '1')
})

$('.team').on('click', function () {
    let steps = 0

    $('.team').css(
        'pointer-events', 'none'
    )

    $('.circle').animate({
        top: '65%'
    }, 500)

    setTimeout(() => {
        steps = rotateCircle()
    }, 1000);

    setTimeout(() => {

        let c = 0

        const loop = setInterval(() => {
            c++
            step[team - 1]++

            if (stepX[team - 1] <= -83) {

                step[team - 1] = 10
                clearInterval(loop)

            } else {

                stepX[team - 1] -= onceStep
                manJump()
                nowStep(stepX[team - 1])
                console.log(step[team - 1])
                console.log(step)

            }

            if (c === steps) {

                if (step[team - 1] == 5) {
                    babyAudio.play()
                }

                if (step[0] == 4 || step[0] == 9 ||
                    step[1] == 2 || step[1] == 3 ||
                    step[2] == 4 || step[2] == 6 ||
                    step[3] == 3 || step[3] == 6
                ) {

                    bonusText()
                }

                clearInterval(loop)
                $('.popbtn').show()
                // setTimeout(() => {

                //     $('.team').css('opacity', '1')

                //     $('.circle').animate({
                //         top: '100%'
                //     }, 200)

                //     setTimeout(() => {
                //         $('.steps').css({
                //             rotate: '0deg'
                //         })
                //     }, 200);

                // }, 1000);
            }

        }, 800);

    }, 3000);

})

$('.bonus').on('click', function () {
    $('.poppage').fadeOut(500)
    $('.bonus').hide()
})

$('.popbtn').on('click', function () {
    $('.poppage').fadeIn(500)
    $('.gamewrap').show()
    $('.bonus').hide()
    $('input').val('')
    $('.team').css('opacity', '1')
    $('.circle').animate({
        top: '100%'
    }, 200)
    setTimeout(() => {
        $('.circle').css({
            rotate: '0deg'
        })
    }, 200);
    onceStep = 100 / 12
    $('.team').css(
        'pointer-events', 'auto'
    )
})

function rotateCircle() {
    let deg = Math.floor(Math.random() * 8), step = 0
    switch (deg) {
        case 0:
            $('.circle').animate({
                rotate: '720deg'
            }, 1500)
            break;
        case 1:
            $('.circle').animate({
                rotate: '765deg'
            }, 1500)
            break;
        case 2:
            $('.circle').animate({
                rotate: '810deg'
            }, 1500)
            break;
        case 3:
            $('.circle').animate({
                rotate: '855deg'
            }, 1500)
            break;
        case 4:
            $('.circle').animate({
                rotate: '900deg'
            }, 1500)
            break;
        case 5:
            $('.circle').animate({
                rotate: '945deg'
            }, 1500)
            break;
        case 6:
            $('.circle').animate({
                rotate: '990deg'
            }, 1500)
            break;
        case 7:
            $('.circle').animate({
                rotate: '1035deg'
            }, 1500)
            break;

        default:
            break;
    }

    switch (deg) {
        case 0:
        case 2:
        case 3:
        case 7:
            step = 3
            break;

        case 4:
        case 6:
            step = 2
            break;

        case 1:
        case 5:
            step = 4
            break;

        default:
            break;
    }

    return step

}

function manJump() {

    $('.team' + team + ' .man').css({
        'translate': '0 -20%',
        'background-image': 'url(img/team' + team + '.png)'
    })

    setTimeout(() => {
        $('.team' + team + ' .sleigh').css(
            'translate', '0 -20%'
        )
    }, 100);

    jumpAudio.play()

    setTimeout(() => {

        $('.team' + team + ' .man').css({
            'translate': '0 0%',
            'background-image': 'url(img/team' + team + '-2.png)'
        })

    }, 300);

    setTimeout(() => {
        $('.team' + team + ' .sleigh').css(
            'translate', '0 0%'
        )
    }, 400);

}

function nowStep(X) {

    if (X <= -83) {

        $('.team' + team + ' .bg').css({
            translate: '-83% 0%'
        })

    } else {

        $('.team' + team + ' .bg').css({
            translate: X + '% 0%'
        })

    }

}

function bonusText() {
    let c = team - 1
    $('.bonus .text p').html('')

    if (c == 0) {

        if (step[c] == 4) {
            $('.gamewrap').hide()
            $('.bonus').show()
            $('.bonus .text p').html('Snowman')
            $('.bonus .text div').css({
                'background-image': 'url(img/snowman.png)'
            })

            setTimeout(() => {
                $('.poppage').fadeIn(500)
            }, 500);
        }
        if (step[c] == 9) {
            $('.gamewrap').hide()
            $('.bonus').show()
            $('.bonus .text p').html('Bell')
            $('.bonus .text div').css({
                'background-image': 'url(img/bell.png)'
            })

            setTimeout(() => {
                $('.poppage').fadeIn(500)
            }, 500);
        }

    } else if (c == 1) {

        if (step[c] == 2) {
            $('.gamewrap').hide()
            $('.bonus').show()
            $('.bonus .text p').html('Stocking')
            $('.bonus .text div').css({
                'background-image': 'url(img/sock.png)'
            })

            setTimeout(() => {
                $('.poppage').fadeIn(500)
            }, 500);
        }
        if (step[c] == 3) {
            $('.gamewrap').hide()
            $('.bonus').show()
            $('.bonus .text p').html('Gifts')
            $('.bonus .text div').css({
                'background-image': 'url(img/gift.png)'
            })

            setTimeout(() => {
                $('.poppage').fadeIn(500)
            }, 500);
        }

    } else if (c == 2) {

        if (step[c] == 4) {
            $('.gamewrap').hide()
            $('.bonus').show()
            $('.bonus .text p').html('Snowman')
            $('.bonus .text div').css({
                'background-image': 'url(img/snowman.png)'
            })

            setTimeout(() => {
                $('.poppage').fadeIn(500)
            }, 500);
        }
        if (step[c] == 6) {
            $('.gamewrap').hide()
            $('.bonus').show()
            $('.bonus .text p').html('Gifts')
            $('.bonus .text div').css({
                'background-image': 'url(img/gift.png)'
            })

            setTimeout(() => {
                $('.poppage').fadeIn(500)
            }, 500);
        }

    } else if (c == 3) {

        if (step[c] == 3) {
            $('.gamewrap').hide()
            $('.bonus').show()
            $('.bonus .text p').html('Stocking')
            $('.bonus .text div').css({
                'background-image': 'url(img/sock.png)'
            })

            setTimeout(() => {
                $('.poppage').fadeIn(500)
            }, 500);
        }
        if (step[c] == 6) {
            $('.gamewrap').hide()
            $('.bonus').show()
            $('.bonus .text p').html('Bell')
            $('.bonus .text div').css({
                'background-image': 'url(img/bell.png)'
            })

            setTimeout(() => {
                $('.poppage').fadeIn(500)
            }, 500);
        }

    }

}


//單字填空

let ansArray = []
let nowQus = 1
let Anslength = 0



$('input').on('input', function () {

    Anslength = $('.game' + nowQus).children('input').length
    for (let i = 0; i < Anslength; i++) {
        ansArray[i] = $('.game' + nowQus + ' input').eq(i).val()
    }

    if($(this).val() == $(this).data('answer')){
        yesAudio.play()
    }else{
        noAudio.play()
    }

    checkAns(ansArray.join(''))

})

function checkAns(ans) {

    if (ans == 'rtse') {

        $('.mask').show()
        yesAudio.play()

        setTimeout(() => {
            $('.poppage').fadeOut(500)
            $('.popbtn').hide()
        }, 5000);

        setTimeout(() => {
            $('.game1').hide()
            $('.game2').css('display', 'flex')
            $('.mask').hide()
        }, 5500);

        nowQus++

    } else if (ans == 'naa') {

        $('.mask').show()
        yesAudio.play()

        setTimeout(() => {
            $('.poppage').fadeOut(500)
            $('.popbtn').hide()
        }, 5000);

        setTimeout(() => {
            $('.game2').hide()
            $('.game3').css('display', 'flex')
            $('.mask').hide()
        }, 5500);

        nowQus++

    } else if (ans == 'ider') {

        $('.mask').show()
        yesAudio.play()

        setTimeout(() => {
            $('.poppage').fadeOut(500)
            $('.popbtn').hide()
        }, 5000);

        setTimeout(() => {
            $('.game3').hide()
            $('.game4').css('display', 'flex')
            $('.mask').hide()
        }, 5500);

        nowQus++

    } else if (ans == 'lih') {

        $('.mask').show()
        yesAudio.play()

        setTimeout(() => {
            $('.poppage').fadeOut(500)
            $('.popbtn').hide()
        }, 5000);

        setTimeout(() => {
            $('.game4').hide()
            $('.game5').css('display', 'flex')
            $('.mask').hide()
        }, 5500);

        nowQus++

    } else if (ans == 'iteo') {

        $('.mask').show()
        yesAudio.play()

        setTimeout(() => {
            $('.poppage').fadeOut(500)
            $('.popbtn').hide()
        }, 5000);

        setTimeout(() => {
            $('.game5').hide()
            $('.game6').css('display', 'flex')
            $('.mask').hide()
        }, 5500);

        nowQus++

    } else if (ans == 'nyne') {

        $('.mask').show()
        yesAudio.play()

        setTimeout(() => {
            $('.poppage').fadeOut(500)
            $('.popbtn').hide()
        }, 5000);

        setTimeout(() => {
            $('.game6').hide()
            $('.game1').css('display', 'flex')
            $('.mask').hide()
        }, 5500);

        nowQus = 1
    }

    ansArray = []

}