/* javascript code: */

jQuery(document).ready(function() {

    // text-description:
    jQuery("#second").css({ width: 0, opacity: 0 });
    jQuery("#third").css({ width: 0, opacity: 0 });


    // gallery-stripe:
    var stripes = jQuery(".gallery-stripe");
    for(var i = 1; i < stripes.length; i++) {
        stripes.eq(i).css({ width: 0, opacity: 0});
    }


    var duration = 500;
    setTimeout(function() {

        // text-description:
        var w = jQuery("#first").width();
        jQuery("#first").animate({width: 0, opacity: 0}, duration);

        jQuery("#second").css({ opacity: 1 });
        jQuery("#second").animate({width: w}, duration);


        // gallery-stripe:
        var sw = jQuery("#stripe-1").width();
        jQuery("#stripe-1 img").animate({opacity: 0}, duration * 0.4);
        jQuery("#stripe-1").animate({ width: 0}, duration);

        jQuery("#stripe-2").css({ opacity: 1 });
        jQuery("#stripe-2").animate({ width: sw }, duration);


    }, 2000);

    setTimeout(function() {

        var w = jQuery("#second").width();
        jQuery("#second").animate({width: 0, opacity: 0}, duration);

        jQuery("#third").css({ opacity: 1 });
        jQuery("#third").animate({width: w}, duration);


        // gallery-stripe:
        var sw = jQuery("#stripe-2").width();
        jQuery("#stripe-2 img").animate({opacity: 0}, duration * 0.4);
        jQuery("#stripe-2").animate({ width: 0}, duration);

        jQuery("#stripe-3").css({ opacity: 1 });
        jQuery("#stripe-3").animate({ width: sw }, duration);

    }, 4000);

});
