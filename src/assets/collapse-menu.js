$(document).ready(function() {
    $("#collapseMenu").click(function() {

        // collapse sidebar
        $('#collapsebar').toggleClass('sidebar-wrapper sidebar-wrapper1');
        // collapse sidebar

        // collapse body
        $('#collapsebody').toggleClass('page-content page-content1');
        // collapse body

        // collapse sidebar item
        if ($("p").hasClass("sidemenu_items")) {
            $("p").removeClass("sidemenu_items").addClass("sidemenu_items1");
        } else {
            $("p").removeClass("sidemenu_items1").addClass("sidemenu_items");
        }
        // collapse sidebar item

        // collapse icon
        $(this).find('i').toggleClass('collapse_icon');
        // collapse icon

        // collapse hover li
        if ($("li").hasClass("sidebar-dropdown")) {
            $("li").removeClass("sidebar-dropdown").addClass("sidebar-dropdown1");
        } else {
            $("li").removeClass("sidebar-dropdown1").addClass("sidebar-dropdown");
        }
        // collapse hover li

    });
});