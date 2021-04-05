var $c = $("[data-custom-cursor]");
var $h = $("a, button");
var $i = $("img");

$(window).on("mousemove",function(e){
	x = e.clientX;
	y = e.clientY;
  console.log(x,y);
	$c.css("transform","matrix(1, 0, 0, 1, "+x+","+y+")");
});

 $h.on("mouseenter",function(e){
    $c.addClass("custom-cursor-active");
});


 $h.on("mouseleave",function(e){
  $c.removeClass("custom-cursor-active");
});

$i.on("mouseenter",function(e){
    $c.addClass("custom-cursor-active-img");
});
$i.on("mouseleave",function(e){
  $c.removeClass("custom-cursor-active-img");
});