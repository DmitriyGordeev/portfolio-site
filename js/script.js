/* javascript code: */

jQuery(document).ready(function() {

    jQuery("#second").css({ width: 0, opacity: 0 });

    var duration = 500;
    setTimeout(function() {

        var w = jQuery("#first").width();
        jQuery("#first").animate({width: 0, opacity: 0}, duration);

        jQuery("#second").css({ opacity: 1 });
        jQuery("#second").animate({width: w}, duration);

    }, 2000);

});
