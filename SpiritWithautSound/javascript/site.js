var side1 = document.getElementById("side1");
var content = side1.querySelector(".content");
var menu = document.querySelector(".menu");

content.style.opacity = 0;

side1.onmousemove = function appearance () {
        content.style.opacity = 1;
        menu.style.opacity = 1;
       
        
        
}

//Програмирование кнопок спуститься на ступеньку ниже

var positionY = document.documentElement.clientHeight;
var scrolling = 0;

$("button:eq(0)").on("click",function(){window.location = "index.html#main"});
$("button:eq(1)").on("click",function(){window.location = "index.html#next"});
$("button:eq(2)").on("click",function(){window.location = "index.html#next2"});
$("button:eq(3)").on("click",function(){window.location = "index.html#next3"});
$("button:eq(4)").on("click",function(){window.location = "index.html#next4"});



   
// Меню

function changeMenu(event){
    event.classList.toggle('change');
}

// Меню li

$("li:nth-child(1)").on("click",function(){window.location = "index.html#header"});

$("li:nth-child(2)").on("click",function(){window.location = "index.html#main"});

$("li:nth-child(3)").on("click",function(){window.location = "index.html#next"});

$("li:nth-child(4)").on("click",function(){window.location = "index.html#next2"});

$("li:nth-child(5)").on("click",function(){window.location = "index.html#next3"});

$("li:nth-child(6)").on("click",function(){window.location = "index.html#next4"});







//Последний блок для перехода на страницы с видео

$(".block1").on("click",function(){ window.location = "html/fire.html"});

$(".block2").on("click",function(){ window.location = "html/cascade.html"});

$(".block3").on("click",function(){ window.location = "html/swimmingpool.html"});

$(".block4").on("click",function(){ window.location = "html/mantra.html"});

$(".block5").on("click",function(){ window.location = "html/wind.html"});

$(".block6").on("click",function(){ window.location = "html/snow.html"});

$(".block7").on("click",function(){ window.location = "html/rainy.html"});

$(".block8").on("click",function(){ window.location = "html/niagara.html"});

$(".block9").on("click",function(){ window.location = "html/ocean.html"});

$(".block10").on("click",function(){ window.location = "html/autumn.html"});

$(".block11").on("click",function(){ window.location = "html/storm.html"});

$(".block12").on("click",function(){ window.location = "html/arctica.html"});