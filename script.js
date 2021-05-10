//Vanilla JS, Scroll
var scrolltoheader = document.querySelector(".scrolltoheader");

window.addEventListener('scroll', function(){
    let nav = document.querySelector(".nav");

    if (window.scrollY > 150) {
        nav.style.backgroundColor = "rgb(6, 6, 104)";
    }
    else {
        nav.style.backgroundColor = "transparent";
    }


    if (window.scrollY > 500) {
        scrolltoheader.style.display = "block";
    }
    else {
        scrolltoheader.style.display = "none";
    }
})

scrolltoheader.addEventListener('click', function(){
    window.scrollTo(0, 0)
})

//Vanilla JS, hamburger 
var hamburger = document.querySelector(".hamburger");
var sidebar = document.querySelector(".sidebar");
var sidebarmenu = document.querySelectorAll(".sidebar ul li a");

var strich1 = document.querySelector(".strich1");
var strich2 = document.querySelector(".strich2");

hamburger.addEventListener('click', function(){
    sidebar.classList.toggle("sidebar-move");

    strich1.classList.toggle("strich-move");
    strich2.classList.toggle("strich-move");
})

sidebarmenu.forEach(function(x) {
    x.addEventListener('click', function(){
        sidebar.classList.toggle("sidebar-move");

        strich1.classList.toggle("strich-move");
        strich2.classList.toggle("strich-move");
    })
})

//JQuery, Einkaufsliste
$("#button-addon2").click(function(){
    var inputTxt = $(".form-control").val();

    var newItem =   '<label class="list-group-item">' +
                    '<input class="form-check-input me-1" type="checkbox" value="">' +
                    '<div>' + inputTxt + '<i class="fas fa-trash-alt"></i> </div> ' +
                    '</label>';


    if ($(".form-control").val() == "") {
        alert("Sie müssen etwas rein schreiben");
    }
    else {
        $(".container").append(newItem);
        $(".form-control").val("");
    }
})

$(".form-control").keydown(function(e){
    var key = e.which;
    if (key == 13){
        $("#button-addon2").trigger('click');
    }
})

$(document).on("change", ".list-group-item", function(e){
    $(e.currentTarget).toggleClass("txt");
})


$(document).on("click", ".fa-trash-alt", function(e){
    $(e.currentTarget.parentElement.parentElement).remove();
})

$(document).on("click", ".btn-danger", function(e){
    $(".list-group-item").remove();
})