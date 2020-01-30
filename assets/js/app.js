$(document).ready(function() {

    var swiper = new Swiper('.swiper-cursos', {
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 0,
            },
        }
    });

    var swiper = new Swiper('.swiper-cursos-two', {
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 0,
            },
        }
    });

})


$menuLeft = $('.pushmenu-left');
$nav_list = $('#sidebartoggle');

$nav_list.click(function() {
    $(this).toggleClass('active');
    $('.pushmenu-push').toggleClass('pushmenu-push-toright');
    $menuLeft.toggleClass('pushmenu-open');

    if ($(this).hasClass('active')) {
        $('#sidebartoggle').html('<i class="material-icons">close</i>');
    } else {

        $('#sidebartoggle').html('<i class="material-icons">menu</i>');
    }
});

$(".pushmenu > a").click(function() {
    $nav_list.toggleClass('active');
    $('.pushmenu-push').toggleClass('pushmenu-push-toright');
    $menuLeft.toggleClass('pushmenu-open');

    if ($(this).hasClass('active')) {
        $('#sidebartoggle').html('<i class="material-icons">close</i>');
    } else {

        $('#sidebartoggle').html('<i class="material-icons">menu</i>');
    }
});