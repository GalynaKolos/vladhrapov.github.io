window.onload = function () {
    $(function() {

        var isOpened = 0;

        $(".menu .menu__item:first-child").click(function () {

            if($(document).width() < 768)
            {
                isOpened++;
                $('.menu__item').toggle();
                $('.menu__item:first-child').toggle();
                if(isOpened % 2 == 1)
                {
                    $('.menu__item:first-child').css('border-radius', '13px');
                }
                else
                {
                    $('.menu__item:first-child').css('border-radius', '13px 13px 0 0');
                }
            }

        });


            //$()

    });
};