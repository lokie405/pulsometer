// $(document).ready(function () {

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

    (function($) {

        // $("#modal-consultation", "#modal-order", ".overlay").fadeOut();

        $(".consultation-btn").each(function(i) {
            $(this).on('click', function () {
                $(".overlay, #modal-consultation").fadeIn('slow');
            });
        })

        $(".catalog-content__btn-buy").each(function (i) {
            $(this).on('click', function () {
                $(".overlay, #modal-order").fadeIn('slow');
                $("#modal-order .form__require").text($(".catalog-content__title").eq(i).text());
                
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
        


    $.validator.addMethod("phoneTest", function(value, element) {
    return console.log(this.optional(element));
}, 'serrrrrr');
function checkValid(form) {
    $(form).validate({
        phoneTest: true,
        rules: {
            name: {
                required: true,
            },
            phone: {
                required: true,
                minlength: 12,
            },
            email: {
              required: true,
              email: true
            }
          },
        success: function(label){
            label.addClass('valid_green-message').addClass('valid').text('Ok');
          },
        messages: {
            name: {
                required: "Не введено ім'я",
            },
            phone: {
                required: "Номер телефону - обов'язковий",
                number: true,
            },
            email: {
                required: "Потрібно ввести email",
                email: "Некоректна електронна адресса"
            }
        }  
      });
}


checkValid('#form-consultation');
checkValid('#form-order');
        
$('input[name=phone]').mask('+38(099) 999 99-99', {autoClear: true});
        


})(jQuery);


        carouselInner();

    