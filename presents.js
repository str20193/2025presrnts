document.addEventListener('DOMContentLoaded', function () {

    $.fn.commentCards = function () {

        return this.each(function () {

            var $this = $(this),
                $cards = $this.find('.card'),
                $current = $cards.filter('.card--current'),
                $next;

            $cards.on('click', function () {
                if (!$current.is(this)) {
                    $cards.removeClass('card--current card--out card--next');
                    $current.addClass('card--out');
                    $current = $(this).addClass('card--current');
                    $next = $current.next();
                    $next = $next.length ? $next : $cards.first();
                    $next.addClass('card--next');
                }
            });

            if (!$current.length) {
                $current = $cards.last();
                $cards.first().trigger('click');
            }

            $this.addClass('cards--active');

        })

    };

    $('.cards').commentCards();

    //////********************************動く文字の処理 **********************/
    // DOMが完全に読み込まれてからAOSを初期化

    AOS.init();


    // クラスの付け外しのみ
    const text = document.querySelector('.text');

    text.classList.add('is-active');

    setInterval(() => {
        text.classList.toggle('is-active');
    }, 2500);


});