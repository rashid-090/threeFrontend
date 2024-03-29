$(document).ready(function() {
    // Select all checkboxes when "check-all" is clicked
    $("#check-all").click(function() {
        $(".checkbox").prop("checked", this.checked);
    });

    // Uncheck "check-all" if any checkbox in the body is unchecked
    $(".checkbox").click(function() {
        if (!this.checked) {
            $("#check-all").prop("checked", false);
        }
    });

    // Select all checkboxes when "check-all" is clicked
    $("#check-all-media").click(function() {
        $(".checkbox").prop("checked", this.checked);
    });
});

$(function() {
    var isXS = false,
        $accordionXSCollapse = $('.accordion-xs-collapse');

    // Window resize event (debounced)
    var timer;
    $(window).resize(function() {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function() {
            isXS = Modernizr.mq('only screen and (max-width: 767px)');

            // Add/remove collapse class as needed
            if (isXS) {
                $accordionXSCollapse.addClass('collapse');
            } else {
                $accordionXSCollapse.removeClass('collapse');
            }
        }, 100);
    }).trigger('resize'); //trigger window resize on pageload    

    // Initialise the Bootstrap Collapse
    $accordionXSCollapse.each(function() {
        $(this).collapse({
            toggle: false
        });
    });

    // Checkbox click event
    $(document).on('click', '.check-sec', function(e) {
        e.stopPropagation();
        var $thisCheckbox = $(this),
            $targetRow = $thisCheckbox.closest('.tr'),
            $targetRow = $targetRow.find('.inner-sec');

        if ($thisCheckbox.is(':checked')) {
            $targetRow.toggleClass('show');
        } else {
            $targetRow.toggleClass('show');
        }
    });

    // Accordion toggle click event (live)
    $(document).on('click', '.accordion-xs-toggle', function(e) {
        e.preventDefault();

        var $thisToggle = $(this),
            $targetRow = $thisToggle.closest('.tr'),
            $targetCollapse = $targetRow.find('.accordion-xs-collapse');

        if (!$(e.target).hasClass('check-sec') && isXS && $targetCollapse.length) {
            var $siblingRow = $targetRow.siblings('.tr'),
                $siblingToggle = $siblingRow.find('.accordion-xs-toggle'),
                $siblingCollapse = $siblingRow.find('.accordion-xs-collapse');

            $targetCollapse.collapse('toggle'); //toggle this collapse
            $siblingCollapse.collapse('hide'); //close siblings

            $thisToggle.toggleClass('collapsed'); //class used for icon marker
            $siblingToggle.removeClass('collapsed'); //remove sibling marker class
        }

    });
    
    // Open edit-subscriber-colour.html page on Edit Colour link click
    $(document).on('click', '.table-text-sec .table-text a:first-child', function(e) {
        e.preventDefault();
        window.location.href = $(this).attr('href');
    });

    // Open view-subscriber.html page on View link click
    $(document).on('click', '.table-text-sec .table-text:last-child a', function(e) {
        e.preventDefault();
        window.location.href = $(this).attr('href');
    });

});

