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
        

    $.validator.addMethod("nameTest", function(value, element) {
        return this.optional(element) || /^\S{2}/gms.test(value);
    }, "Введіть корректне ім'я");
    $.validator.addMethod("phoneTest", function(value, element) {
        return this.optional(element) || /^(\+?[1-9]?\s?8?\s?)?\(?\d{3}\)?((\s|\-)?\d{3}(\s|\-)?\d{2}(\s|\-)?\d{2})/gms.test(value);
    }, 'Некоректний телефонний номер');

    function checkValid(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                    nameTest: true,
                },
                phone: {
                    required: true,
                    minlength: 12,
                    phoneTest: true,
                },
                email: {
                required: true,
                email: true
                }
            },
            success: function(label){
                label.addClass('valid_green-message').addClass('valid');
            },
            messages: {
                name: {
                    required: "Не введено ім'я",
                    minlength: "Ім'я повинно містити більше одного смволу",
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
    checkValid('#form-consultation_static');
            
    $('input[name=phone]').mask('+38(999)-999-99-99', {autoClear: true});
    $('input[name=phone]').on('click', function() {
        (this).setSelectionRange(4,4);
    });
        


})(jQuery);


carouselInner();

    