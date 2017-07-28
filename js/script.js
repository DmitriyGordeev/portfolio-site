/* javascript code: */

jQuery(document).ready(function() {

    var root = jQuery(":root");

    var active = 0;
    var page_change_duration = 700;


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
            containers.eq(active).animate({ opacity: 0 }, page_change_duration * 0.3);
            containers.eq(active).animate({ width: 0 }, page_change_duration);

            containers.eq(active + 1).css({ opacity: 1 });
            containers.eq(active + 1).animate({width: containerWidth}, page_change_duration);


            // gallery-stripe:
            stripes.eq(active).find("img").animate({ opacity: 0 }, page_change_duration * 0.3);

            stripes.eq(active).animate({ width: 0 }, page_change_duration);
            stripes.eq(active + 1).css({ opacity: 1 });
            stripes.eq(active + 1).animate({ width: stripeWidth }, page_change_duration);
            stripes.eq(active + 1).find("img").animate({ opacity: 1 }, page_change_duration * 0.3);

            active++;
            root.css("--main-color", stripes.eq(active).css("background-color"));
        }
    });

    jQuery("#left-arrow").click(function() {
        var containerWidth = containers.eq(active).width();
        var stripeWidth = stripes.eq(active).width();
        if(active > 0) {

            // text-container:
            containers.eq(active).animate({ opacity: 0 }, page_change_duration * 0.3);
            containers.eq(active).animate({ width: 0 }, page_change_duration);

            containers.eq(active - 1).animate({ width: containerWidth }, page_change_duration);
            containers.eq(active - 1).animate({ opacity: 1 }, page_change_duration);


            // gallery-stripe:
            stripes.eq(active).find("img").animate({ opacity: 0 }, page_change_duration * 0.3);
            stripes.eq(active).animate({ width: 0 }, page_change_duration);

            stripes.eq(active - 1).css({ opacity: 1 });
            stripes.eq(active - 1).animate({ width: stripeWidth }, page_change_duration);
            stripes.eq(active - 1).find("img").animate({ opacity: 1 }, page_change_duration * 0.3);


            active--;
            root.css("--main-color", stripes.eq(active).css("background-color"));
        }
    });

    /* feedback handle: */
    jQuery("#feedback-button").click(function() {
        jQuery("#feedback-form-container").css({ visibility: "visible" });
        jQuery("#feedback-form-container").animate({ opacity: 1 }, 200);
    });

    jQuery("#contacts-button").click(function() {
        jQuery("#contacts-container").css({ visibility: "visible" });
        jQuery("#contacts-container").animate({ opacity: 1 }, 200);
    });

    jQuery("#feedback-close-button").click(function() {
        jQuery("#feedback-form-container").animate({ opacity: 0 }, 200);
        setTimeout(function() { jQuery("#feedback-form-container").css({ visibility: "hidden" }); }, 200);
    });

    jQuery("#contacts-close-button").click(function() {
        jQuery("#contacts-container").animate({ opacity: 0 }, 200);
        setTimeout(function() { jQuery("#contacts-container").css({ visibility: "hidden" }); }, 200);
    });


    // // ----------------------------------------------------------
    // // testing:
    // var getGif = function() {
    //     var gif = [];
    //     jQuery('.gif-anim').each(function() {
    //         var data = $(this).data('alt');
    //         gif.push(data);
    //     });
    //     return gif;
    // }
    //
    // var gif = getGif();
    // var image = [];
    // jQuery.each(gif, function(index) {
    //     image[index] = new Image();
    //     image[index].src = gif[index];
    // });

    jQuery("figure.gif-animation").on("click", function() {

        var index = jQuery(this).index();
        var image = jQuery(this).children("img");
        var imageSrc = image.attr("src");
        var imageDataAlt = image.attr("data-alt");
        var imageExt = imageDataAlt.split(".");

        // swap 'src' and 'data-alt':
        if(imageExt[1] == "gif") {
            image.attr("src", image.data("alt")).attr("data-alt", imageSrc);
        }
        else {
            image.attr("src", imageDataAlt).attr("data-alt", image.data("alt"));
        }
    });

});
