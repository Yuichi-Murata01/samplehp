// $('#loop').slick({
//     dots: true
// });

jQuery(window).on('scroll', function () {

 if (jQuery('.header').height() < jQuery(this).scrollTop()) {
    jQuery('.header').addClass('change-color');
    jQuery('.logo').addClass('change-headerlogo');
    jQuery('.navi-list').addClass('change-navcolor');
}
 else {
    jQuery('.header').removeClass('change-color');
    jQuery('.logo').addClass('change-headerlogo');
    jQuery('.navi-list').addClass('change-navcolor');
} });
