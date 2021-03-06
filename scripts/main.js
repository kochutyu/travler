AOS.init();
const navbarLi = $('.navbar-li');
let countLi = 0;
for (const li of navbarLi) {
    countLi++;
    if (countLi % 2 === 0) {
        $(li).css({
            'border-bottom': '5px solid #a34ff0'
        });
        $(li).hover(() => {
            $(li).animate({
                'top': '-10px'
            }, 300, "linear", () => {});
        }, () => {
            $(li).animate({
                'top': '0px'
            }, 300, "linear", () => {});
        });

    } else {
        const preveousBorder = $(li).css({
            'border-bottom': '5px solid #6017a3'
        });
        $(li).hover(() => {
            $(li).animate({
                'top': '-10px'
            }, 300, "linear", () => {});
        }, () => {
            $(li).animate({
                'top': '0px'
            }, 100, "linear", () => {});
        });
    }
}

function paralax() {
    $('.bg-slider-bg').css({
        'top': `${window.pageYOffset/2}px`
    })
}

//! bg-travel-guide

//* MAP ANUMATION
let map1_3 = 90;
let map2_4 = -90;
let checkClick = false;
let onScrollMap = false;

function animateMap() {
    if (checkClick) {
        const inteval1 = setInterval(() => {
            map1_3 -= 1;
            $('.map-1').css({
                'transform': `rotateX(50deg) rotateY(${map1_3}deg) perspective(1100px) skew(-15deg, -15deg)`,
            });
            $('.map-3').css({
                'transform': `rotateX(50deg) rotateY(${map1_3}deg) perspective(1100px) skew(-15deg, -15deg)`,
            });
            if (map1_3 === 0) {
                map1_3 = 90;
                checkClick = false;
                clearInterval(inteval1);
            }
        }, 11);
        const inteval2 = setInterval(() => {
            map2_4 += 1;
            $('.map-2').css({
                'transform': `rotateX(50deg) rotateY(${map2_4}deg) perspective(1100px) skew(-15deg, 15deg)`,
            });
            $('.map-4').css({
                'transform': `rotateX(50deg) rotateY(${map2_4}deg) perspective(1100px) skew(-15deg, 15deg)`,
            });
            if (map2_4 === 0) {
                map2_4 = -90;
                checkClick = false;
                clearInterval(inteval2);
            }
        }, 11.1);

        $('.map-1').animate({
            'left': '0',
            'height': '400px',
        }, 1000, 'linear')
        $('.map-2').animate({
            'left': '10px',
            'height': '400px',
            'transform': 'rotateX(70deg) rotateY(0deg) perspective(1100px) skew(-15deg, -30deg)'
        }, 1000, 'linear')
        $('.map-3').animate({
            'left': '20px',
            'height': '400px',
            'transform': 'rotateX(70deg) rotateY(0deg) perspective(1100px) skew(-15deg, -30deg)'
        }, 1000, 'linear', () => {})
        $('.map-4').animate({
            'left': '30px',
            'height': '400px',
            'transform': 'rotateX(70deg) rotateY(0deg) perspective(1100px) skew(-15deg, -30deg)'
        }, 1000, 'linear')
        if (window.innerWidth >= 1010) {
            $('.here').animate({
                'opacity': 1,
            }, 1000, 'linear')
        }
    

}
let scroll = 0;
$(window).on('scroll', function () {
    adaptive();
    $('.bg-slider-bg').css({
        'top': `${window.pageYOffset/2}px`
    })
    const clientHeightMin = document.documentElement.clientHeight / 2;
    if (window.pageYOffset < 200) {
        onScrollMap = false;
    }
    if (!checkClick && window.pageYOffset > clientHeightMin && !onScrollMap) {
        checkClick = true;
        onScrollMap = true;
        $('.map-1').css({
            'left': '38%'
        });
        $('.map-2').css({
            'left': '13%'
        });
        $('.map-1').css({
            'right': '12%'
        });
        $('.map-1').css({
            'right': '37%'
        });
        $('.here').css({
            'opacity': '0'
        });
        animateMap()
    }

    paralax()
});
$('.map-1, .map-2, .map-3, .map-4').click(function (e) {
    if (!checkClick) {
        checkClick = true;
        $('.map-1').css({
            'left': '38%'
        });
        $('.map-2').css({
            'left': '13%'
        });
        $('.map-1').css({
            'right': '12%'
        });
        $('.map-1').css({
            'right': '37%'
        });
        $('.here').css({
            'opacity': '0'
        });
        animateMap()
    }
});

let widthContainer = window.innerWidth;
$(window).on('resize', function () {
    getImgMap()
    adaptive()
});

$(window).on('load', function () {
    getImgMap()
    adaptive()
});


function adaptive() {
    if (window.innerWidth < 1010) {
        $('.container').css({
            width: `100%`
        })
        $('.navbar').css({
            'flex-wrap': 'wrap',
            'left': '0px'
        })
        $('.logo-search').css({
            'align-items': 'center',
            'flex-direction': 'column'
        })

    } else if (window.innerWidth >= 1010) {
        $('.container').css({
            width: `950px`
        })
        $('.navbar').css({
            'flex-wrap': 'nowrap'
        });
        $('.logo-search').css({
            'align-items': 'center',
            'flex-direction': 'row'
        })
        $('.here').css({
            opacity: `1`
        })
    }

    if (window.innerWidth < 820) {
        $('.service-blocks').css({
            'flex-direction': 'column'
        });

        $('.bg-travel-guide h1').css({
            'text-align': 'center',
            'line-height': '35px'
        });

    } else if (window.innerWidth >= 820) {
        $('.service-blocks').css({
            'flex-direction': 'row'
        });
    }

    if (window.innerWidth < 610) {

        $('.search').css({
            'flex-direction': 'column'
        });
        $('.search-logo:after').css({
            display: 'none'
        });
    } else if (window.innerWidth >= 610) {
        $('.search').css({
            'flex-direction': 'row'
        });
    }
}

let preveousWindowWidth = window.innerWidth;

let scale = 0;
let scaleCoef = 0;
const startWindowWidth = window.innerWidth;
let deltaWidth = 0;

function getImgMap() {

    if (window.innerWidth < 1010) {
        scale = ((window.innerWidth * 0.5) / 840).toFixed(2);
        if (preveousWindowWidth < window.innerWidth) {
            deltaWidth -= 1;
        } else {
            if (deltaWidth <= 0) {

                deltaWidth += 1;
            } else {
                deltaWidth = 0;
            }
        }
    } else {
        scale = 0.6;
        deltaWidth = 0;
    }
    $('.here').css({
        opacity: `0`
    })
    $('.card img').css({
        transform: `scale(${scale})`
    })
    $('.map-1 img').css({
        left: `-${360 + deltaWidth}px`
    })
    $('.map-2 img').css({
        left: `-${600 + deltaWidth}px`
    })
    $('.map-3 img').css({
        left: `-${900 + deltaWidth}px`
    })
    $('.map-4 img').css({
        left: `-${1200 + deltaWidth}px`
    })
    preveousWindowWidth = window.innerWidth;

}