/* javascript code: */

jQuery(document).ready(function() {

    var active = 0;
    var page_change_duration = 500;

    /* hide all project pages except first: */
    // text containers:
    var containers = jQuery(".text-container");
    if(containers.length > 1) {
        for(var i = 1; i < containers.length; i++) {
            containers.eq(i).css({ width: 0, opacity: 0 });
        }
    }

    // gallery stripes:
    var stripes = jQuery(".gallery-stripe");
    if(stripes.length > 1) {
        for (i = 1; i < stripes.length; i++) {
            stripes.eq(i).css({ width: 0, opacity: 0 });
        }
    }


    jQuery("#right-arrow").click(function() {

        var containerWidth = containers.eq(active).width();
        var stripeWidth = stripes.eq(active).width();

        if(active < containers.length - 1) {

            // text-container:
            containers.eq(active).animate({width: 0, opacity: 0}, page_change_duration);
            containers.eq(active + 1).css({opacity: 1});
            containers.eq(active + 1).animate({width: containerWidth}, page_change_duration);


            // gallery-stripe:
            // stripes.eq(active)("img").animate({opacity: 0}, page_change_duration * 0.4);
            stripes.eq(active).animate({ width: 0 }, page_change_duration);
            stripes.eq(active + 1).css({ opacity: 1 });
            stripes.eq(active + 1).animate({ width: stripeWidth }, page_change_duration);

            active++;
        }

    });


    jQuery("#left-arrow").click(function() {

        var containerWidth = containers.eq(active).width();
        var stripeWidth = stripes.eq(active).width();
        if(active > 0) {

            // text-container:
            containers.eq(active).animate({ width: 0, opacity: 0 }, page_change_duration);
            containers.eq(active - 1).css({ opacity: 1 });
            containers.eq(active - 1).animate({ width: containerWidth }, page_change_duration);

            // gallery-stripe:
            // stripes.eq(active)("img").animate({opacity: 0}, page_change_duration * 0.4);
            stripes.eq(active).animate({ width: 0 }, page_change_duration);
            stripes.eq(active - 1).css({ opacity: 1 });
            stripes.eq(active - 1).animate({ width: stripeWidth }, page_change_duration);


            active--;
        }

    });



    // // text-description:
    // jQuery("#second").css({ width: 0, opacity: 0 });
    // jQuery("#third").css({ width: 0, opacity: 0 });


    //
    // var duration = 500;
    // setTimeout(function() {
    //
    //     // text-description:
    //     var w = jQuery("#first").width();
    //     jQuery("#first").animate({width: 0, opacity: 0}, duration);
    //
    //     jQuery("#second").css({ opacity: 1 });
    //     jQuery("#second").animate({width: w}, duration);
    //
    //
    //     // gallery-stripe:
    //     var sw = jQuery("#stripe-1").width();
    //     jQuery("#stripe-1 img").animate({opacity: 0}, duration * 0.4);
    //     jQuery("#stripe-1").animate({ width: 0}, duration);
    //
    //     jQuery("#stripe-2").css({ opacity: 1 });
    //     jQuery("#stripe-2").animate({ width: sw }, duration);
    //
    //
    // }, 2000);
    //
    // setTimeout(function() {
    //
    //     var w = jQuery("#second").width();
    //     jQuery("#second").animate({width: 0, opacity: 0}, duration);
    //
    //     jQuery("#third").css({ opacity: 1 });
    //     jQuery("#third").animate({width: w}, duration);
    //
    //
    //     // gallery-stripe:
    //     var sw = jQuery("#stripe-2").width();
    //     jQuery("#stripe-2 img").animate({opacity: 0}, duration * 0.4);
    //     jQuery("#stripe-2").animate({ width: 0}, duration);
    //
    //     jQuery("#stripe-3").css({ opacity: 1 });
    //     jQuery("#stripe-3").animate({ width: sw }, duration);
    //
    // }, 4000);

});
