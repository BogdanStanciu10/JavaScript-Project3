$("ul").on("click", "li",function () {
    $(this).toggleClass("done");
})


// deleting

$("ul").on("click", "span",function (event) {
    $(this).parent().fadeOut(200, function () {
        $(this).remove();
    })
    event.stopPropagation();
})


// adding

$("input").keypress(function(event){
    if(event.which === 13){ // 13 = tasta enter
        var task = $("input").val(); // obtin valorea din input
        //console.log(task);
        $("ul").append("<li><span class='delete'><i class='fa fa-trash'></i></span>" + task + "</li>");
        $("input").val(""); // ramanea ce am introdus in lista; resetez val
    }
})

// toggling the input form

$("#plus").click(function(){
    $("input").fadeToggle()
})