
jQuery(document).ready(function() {

    jQuery("img").click(function() {
        jQuery(this).dialog({
            modal: true,
            close: function() { $(this).dialog("destroy"); }
        });
    });

});