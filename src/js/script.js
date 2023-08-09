 $(document).ready(function () {

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


// JQuery

(function($) {
    
    
    // Modal actions

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

    function closeModal() {
        $(".overlay, #modal-consultation, #modal-order, #modal-thanks").fadeOut('slow');
        $('input').val('');
        // if($('input').hasClass('valid')) {
            
        // }
        // if($('input').hasClass('error')) {
            
        // }
        $('input').removeClass('valid');
        $('input').removeClass('error');
        // $('input').fadeOut();
    }

    // function clearInput(input) {
    $('.clear-input').on('click', function(e, i) {

        
        const input = $(this).siblings('input');
        console.log('input: ', input);
        $(input).val('');
        $(input).removeClass('valid');
        $(input).removeClass('error');
        $(this).siblings('label').fadeOut();
        // $(input).fadeOut();
    })
    // }

    $(".modal__close").on('click', function() {
        closeModal();
    })

    $('.overlay').on('click', function(e){
        if(!$('.modal').is(e.target) && $('.modal').has(e.target).length === 0) {
            closeModal();
            
        } 
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
        

    // Validator rules
    
    $.validator.addMethod("nameTest", function(value, element) {
        return this.optional(element) || /^\S{2}/gms.test(value);
    }, "Введіть корректне ім'я");
    $.validator.addMethod("phoneTest", function(value, element) {
        return this.optional(element) || /^(\+?[1-9]?\s?8?\s?)?\(?\d{3}\)?((\s|\-)?\d{3}(\s|\-)?\d{2}(\s|\-)?\d{2})/gms.test(value);
    }, 'Некоректний телефонний номер');


    //Validator execute

    function checkValid(form) {
        $(form).validate({
            onfocusout: false,
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


    // Set Mask to form telephone input
            
    $('input[name=phone]').mask('+38(999)-999-99-99', {autoClear: true});
    $('input[name=phone]').on('click', function() {
        (this).setSelectionRange(4,4);
    });
        

    // Upper button script

    $('.pageup').on('click', function(e) {

        if(this.hash !== "") {
            e.preventDefault();
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top,
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    })


    // Go to catalog

    $('.link-catalog').on('click', function(e) {

        if(this.hash !== "") {
            e.preventDefault();
            let hash = this.hash;
            console.log('hash: ', hash);
            $('html, body').animate({
                scrollTop: $(hash).offset().top,
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    })
    
    
    // Show, Hide and Animate pageUp button

    $(window).on('scroll', function() {
        let arrow = $(this).scrollTop(),
            target = $('#consultation-part').offset().top;
            if(arrow >= target) {  // Visible pageUp
                console.log('true');
                if(!$('.pageup').is(':visible')) {
                    $('.pageup').fadeIn();
                    if(!$('.pageup').hasClass('animate__bounceIn')) {
                        $('.pageup').addClass('animate__bounceIn')
                    }
                        $('.pageup').removeClass('animate__bounceOut')
                } else {
                    $('.pageup').removeClass('animate__bounceOut')
                }
            } else {  // Invisible pageUp
                console.log('false');
                if($('.pageup').is(':visible')) {
                        $('.pageup').removeClass('animate__bounceIn')
                    if(!$('.pageup').hasClass('animate__bounceOut')) {
                        $('.pageup').addClass('animate__bounceOut')
                        setTimeout(() => {
                            $('.pageup').fadeOut();
                        }, 700);
                    } 
                }
            }
    })



    // Ajax php mail

    $("form").submit(function(e) {
        e.preventDefault();
    console.log('Seryoga');
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize(),
        }).done(function() {
            $(this).find("input").val("");
            $('#modal-consultation, #modal-order').fadeOut('slow');
            $('#modal-thanks').fadeIn('slow');
            $("form").trigger('reset');
        });
        return false;
    });


})(jQuery);


carouselInner();



 });
    