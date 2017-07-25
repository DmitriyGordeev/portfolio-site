
jQuery(document).ready(function() {

    var boxes = jQuery(".box");
    var active = 0;
    var duration = 600;


    for(var i = 0; i < boxes.length; i++) {
        boxes.eq(i).css({ opacity: 0 });
    }
    boxes.eq(active).css({ opacity: 1 });

    jQuery("#fwd").click(function () {
        if(active < boxes.length - 1) {
            boxes.eq(active).animate({width: 0}, duration, function() {jQuery(this).css({ opacity: 0 })});

            boxes.eq(active + 1).css({ opacity: 1 });
            boxes.eq(active + 1).animate({width: 150}, duration);
            active++;
        }
    });

    jQuery("#back").click(function () {
        if(active > 0) {
            boxes.eq(active).animate({width: 0 }, duration, function() {jQuery(this).css({ opacity: 0 })});

            boxes.eq(active - 1).css({ opacity: 1 });
            boxes.eq(active - 1).animate({width: 150 }, duration);
            active--;
        }
    });

});