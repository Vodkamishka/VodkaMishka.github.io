
let block = document.querySelector(".block");



document.onmousemove = function(event) {
    
    console.log(event);
    
    rotateX = event.pageX;
     rotateY = event.pageY;
    
    block.style.transform = "rotateY(" + rotateX + "deg)" + "rotateX(" + -rotateY + "deg)";
    
    
    
    
    console.log(rotateX );
    
    
    
}

document.touchmove = function(event) {
    
    console.log(event);
    
    rotateX = event.pageX;
     rotateY = event.pageY;
    
    block.style.transform = "rotateY(" + rotateX + "deg)" + "rotateX(" + -rotateY + "deg)";
    
    
    
    
    console.log(rotateX );
    
    
    
}