
function color_switch(element, secondColor, duration, left) {

    element.remove(".color-switch-first");
    element.remove(".color-switch-second");

    var first = jQuery("<div class='color-switch-first'></div>");
    var second = jQuery("<div class='color-switch-second'></div>");

    element.append(first);
    element.append(second);

    if(left) {
        first.css({
            width: element.width(),
            height: element.height(),
            background: element.css("background"),
            display: "inline-block",
            float: "left"
        });
        second.css({
            width: 0,
            height: element.height(),
            background: secondColor,
            display: "inline-block",
            float: "left"
        });

        first.animate({ width: 0 }, duration);
        second.animate({ width: element.width() }, duration);

        setTimeout(function() {
            element.css("background", secondColor);
            element.remove(first);
            element.remove(second);
        }, duration);
    }
    else {
        first.css({
            width: 0,
            height: element.height(),
            background: secondColor,
            display: "inline-block",
            float: "left"
        });
        second.css({
            width: element.width(),
            height: element.height(),
            background: element.css("background"),
            display: "inline-block",
            float: "left"
        });

        second.animate({ width: 0 }, duration);
        first.animate({ width: element.width() }, duration);

        setTimeout(function() {
            element.css("background", secondColor);
            element.remove(first);
            element.remove(second);
        }, duration);
    }


}

jQuery(document).ready(function() {

    var boxes = jQuery(".box");
    var active = 0;
    var duration = 600;

    jQuery("#fwd").click(function () {
        if(active < boxes.length - 1) {
            boxes.eq(active).animate({width: 0}, duration);
            boxes.eq(active + 1).animate({width: 150}, duration);
            active++;
        }
    });

    jQuery("#back").click(function () {
        if(active > 0) {
            boxes.eq(active).animate({width: 0}, duration);
            boxes.eq(active - 1).animate({width: 150}, duration);
            active--;
        }
    });

});