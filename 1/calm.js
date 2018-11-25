let cube = $("#cube");
let side6 = $("#side6")
var x = 0;
let clientWidth = "document.documentElement.clientWidth";
let button =$("button");
var y = 0;


function right(){
    
    x = x + 90;
    
    cube.css({
        "transform": "perspective(" + 20000 + "px) rotate3d(0,1,0," + x + "deg)"
        
    });
    
    
}

function up(){
    
    y = y - 90;
    
    cube.css({
        "transform": "perspective(" + 20000 + "px) rotate3d(1,0,0," + y + "deg)"
        
    });
    
    
}