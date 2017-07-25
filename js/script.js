/* javascript code: */

jQuery(document).ready(function() {

    var root = jQuery(":root");

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

    // assign initial color:
    root.css("--main-color", stripes.eq(active).css("background-color"));

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
            root.css("--main-color", stripes.eq(active).css("background-color"));
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
            root.css("--main-color", stripes.eq(active).css("background-color"));
        }

    });

});
