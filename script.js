

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