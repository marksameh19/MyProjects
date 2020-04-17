var tasks = $("#myList");
var X = $(".redX");
var input = $("input[type='text']");
var plus = $(".fa-plus-square");

tasks.on("click",".task",function(){
    $(this).toggleClass("done");
});
tasks.on("click",".redX",function(){
    $(this).parent().fadeOut(500,function(){
       $(this).remove();
    });
    event.stopPropagation();
});
input.on("keypress",function(){
    if(event.which=="13")
    {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append('<li ><span class="redX"><i class="fas fa-trash-alt"></i></span> <span class="task">'+todoText+'</span></li>');
    }
});
plus.on("click",function(){
    input.fadeToggle(400);
});