$(document).ready(function(){
  console.log("listo");
  $(".js-menu").hide();
});

$(".js-show-recipe").click(function(){
    $(".page").removeClass("make");
});

$(".js-show-make").click(function(){
  $(".page").addClass("make");
})
