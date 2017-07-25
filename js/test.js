
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

    jQuery("#switcher").click(function() {
        var secondColor = "#aa343e";
        var duration = 1000;
        var is_switched = false;

        if(is_switched) {
            color_switch(jQuery("#target"), secondColor, duration, false);
        }
        else {
            color_switch(jQuery("#target"), secondColor, duration, true);
        }
    });

});