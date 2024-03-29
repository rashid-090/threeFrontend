// sidebar menu

$(".sidebar-dropdown > a").click(function() {
    $(".sidebar-submenu").slideUp(200);
    if (
        $(this)
        .parent()
        .hasClass("active")
    ) {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
            .parent()
            .removeClass("active");
    } else {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
            .next(".sidebar-submenu")
            .slideDown(200);
        $(this)
            .parent()
            .addClass("active");
    }
});

$("#close-sidebar").click(function() {
    $(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function() {
    $(".page-wrapper").addClass("toggled");
});
$("#show-sidebar").css("padding-top", "5px");

// sidebar menu

// table checkbox selection

$(document).ready(function() {
    $(".checkAll").on("click", function() {
        $(this)
            .closest("table")
            .find("tbody :checkbox")
            .prop("checked", this.checked)
            .closest("tr")
            .toggleClass("selected", this.checked);
    });

    $("tbody :checkbox").on("click", function() {
        // toggle selected class to the checkbox in a row
        $(this)
            .closest("tr")
            .toggleClass("selected", this.checked);

        // add selected class on check all
        $(this).closest("table")
            .find(".checkAll")
            .prop("checked",
                $(this)
                .closest("table")
                .find("tbody :checkbox:checked").length ==
                $(this)
                .closest("table")
                .find("tbody :checkbox").length
            );
    });
});

// table checkbox selection

// right sidemenu bar
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("actives");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

// right sidemenu bar

// image upload

// const inputFile = document.querySelector("#picture__input");
// const pictureImage = document.querySelector(".picture__image");
// const pictureImageTxt = "Choose an image";
// pictureImage.innerHTML = pictureImageTxt;

// inputFile.addEventListener("change", function(e) {
//     const inputTarget = e.target;
//     const file = inputTarget.files[0];

//     if (file) {
//         const reader = new FileReader();

//         reader.addEventListener("load", function(e) {
//             const readerTarget = e.target;

//             const img = document.createElement("img");
//             img.src = readerTarget.result;
//             img.classList.add("picture__img");

//             pictureImage.innerHTML = "";
//             pictureImage.appendChild(img);
//         });

//         reader.readAsDataURL(file);
//     } else {
//         pictureImage.innerHTML = pictureImageTxt;
//     }
// });

// image upload

// image check

$(".img_check").on("click", function() {
    var id = $(this).attr("element-id");
    $("img#home-button").attr("src", id);
});


$('.modal-right-box').hide()
jQuery('.single-img').on('click', function() {
    jQuery('.modal-right-box').show();
})

// image check

