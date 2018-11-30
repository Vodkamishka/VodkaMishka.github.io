   
// Меню

function changeMenu(event){
    event.classList.toggle('change');
}

// Меню li

$("li:nth-child(1)").on("click",function(){window.location = "../index.html#header"});

$("li:nth-child(2)").on("click",function(){window.location = "../index.html#main"});

$("li:nth-child(3)").on("click",function(){window.location = "../index.html#next"});

$("li:nth-child(4)").on("click",function(){window.location = "../index.html#next2"});

$("li:nth-child(5)").on("click",function(){window.location = "../index.html#next3"});

$("li:nth-child(6)").on("click",function(){window.location = "../index.html#next4"});

