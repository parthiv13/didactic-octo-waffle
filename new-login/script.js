$(document).ready(function() {
    $("#goRight").click(function() {
        $(".smallerLayer").animate({
            'left': '0'
        });
        $(".smallerLayer__wrapper").animate({
            'left': '-100%'
        });
        $(".largerLayer").animate({
            'left': '40%'
        });
        $(".largerLayer__wrapper").animate({
            'left': '0%'
        })
    });
    $("#goLeft").click(function() {
        $(".smallerLayer").animate({
            'left': '60%'
        });
        $('.smallerLayer__wrapper').animate({
            'left': '0'
        });
        $('.largerLayer').animate({
            'left': '0'
        });
        $('.largerLayer__wrapper').animate({
            'left': '-100%'
        })
    })
})