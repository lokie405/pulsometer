
const carouselPrev = document.querySelector('.control-prev'),
    carouselNext = document.querySelector('.control-next');

function carouselInner() {
    let slider = tns({
        container: '.carousel__inner',
        responsive: {
            577: {
                "items": 1,
                autoHeight: false,
                "speed": 400,
                controls: false,
                // "center": true,
            },
            350: {
                // items: 1,
                autoWidth: true,
                touch:true,
                // mouseDrag: true,
            }
        }
      });

    carouselPrev.addEventListener('click', () => {
        slider.goTo('prev');
    });

    carouselNext.addEventListener('click', () => {
        slider.goTo('next');
    });
}



// function showDetail() {
//     const link = document.querySelectorAll('.link');

//     link.forEach((element, index) => element.addEventListener('click', function(e) {
//     e.preventDefault();
//     const main = element.parentElement.parentElement.children[0];
//     const detail = element.parentElement.parentElement.children[1];
//     main.classList.toggle('catalog-content__active');
//     detail.classList.toggle('catalog-content__active');
//     }));
// }

    (function($) {

        $(".consultation-btn").each(function(i) {
            $(this).on('click', function () {
                $(".overlay, #modal-consultation").fadeIn('slow');
            });
        })
        $(".catalog-content__btn-buy").each(function (i) {
            $(this).on('click', function () {
                $(".overlay, #modal-order").fadeIn('slow');
                // console.log("ser", $(".catalog-content__title").eq(i).text());
                $(".form__require").text($(".catalog-content__title").eq(i).text());
                
            })
        })
        $(".modal__close").on('click', function() {
            $(".overlay, #modal-consultation, #modal-order, #modal-thanks").fadeOut('slow');
        })
        
        $(function() {
            function toggleClass(item) {
                $(item).each( function(i) {
                    $(this).on('click', function (e) {
                        e.preventDefault();
                        $('.catalog-content__main').eq(i).toggleClass('catalog-content__main_active');
                        $('.catalog-content__detail').eq(i).toggleClass('catalog-content__detail_active');
                        
                    })
                });
            }
            toggleClass('.catalog-content__link-detail');
            toggleClass('.catalog-content__link-back');
            


            $('ul.catalog-tabs').on('click', 'li:not(.catalog-tabs__active)', function() {
                $(this)
                .addClass('catalog-tabs__active').siblings().removeClass('catalog-tabs__active')
                .closest('div.container').find('div.catalog-page').removeClass('catalog-page__active').eq($(this).index()).addClass('catalog-page__active');
            });
            
        });
        
        
        })(jQuery);


        carouselInner();