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