
/*Массив цветов для фишек*/

var colors = ["aquamarine","burlywood","chartreuse","cadetblue","chocolate","coral", "corn", "cornflowerblue", "crimson", "darkorchid", "darksalmon", "darkseagreen", "deeppink", "dodgerblue", "deepskyblue", "goldenrod", "greenyellow", "hotpink", "indianred", "khaki", "lawngreen", "lightcoral", "lightblue", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue","lightsteelblue", "mediumseagreen", "lime", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumspringgreen", "mediumturquoise", "navajowhite", "orange","orangered", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "peachpuff", "pink", "plum","powderblue", "rosybrown", "red", "salmon", "sandybrown", "springgreen", "tan"];

/*Массив английского алфавита*/

var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","W","X","Y","Z"]; 

     /*Заданная буква*/

var givenLetter = document.getElementById("givenLetter");

var randomLetter = Math.floor(Math.random()*letters.length);

givenLetter.innerHTML = letters[randomLetter];

  /*Создаем фишки*/

for (let i=0; i<65; i++){
    
button = document.createElement("button");

container.appendChild(button);
    
button.setAttribute("class", "button");
    
var randomColor = Math.floor(Math.random()*colors.length);
    
button.style.background = colors[randomColor];
    
var randomLetter = Math.floor(Math.random()*letters.length);
    
button.innerHTML =  letters[randomLetter];
    
}

/*Получаем массив из 65 фишек*/

 var buttonArray =document.getElementsByClassName("button");

var countMistake=0;  // Нулевое значение для счетчика ошибок;

var mistake = document.getElementById("mistake"); // Получаем доступ к элементу #mistake;

var countResult=0;

var result = document.getElementById("result"); // Получаем доступ к элементу #result;

var quentity =document.getElementById("quentity"); // Получаем доступ к элементу #quentity;

var countQuentity = 65; // Количество фишек на начало игры;

quentity.innerHTML = countQuentity; // Выводим информацию о количестве фишек;


for (var n=0; n<buttonArray.length; n++) {  // Перебираем все фишки по одной;
    
 buttonArray[n].onclick = function () {                  // Нажатие на любую фишку запускает функцию;
     if (this.innerHTML == givenLetter.innerHTML){         //  При условии что нажата правильная фишка;
     this.remove();                                         // Удаляется узел с этой фишкой;
         countResult = countResult + 1;                     // Счетчик удачных нажатий увеличивается на 1;
         result.innerHTML = countResult;
         countQuentity=countQuentity-1;                     //// Счетчик фишек уменьшается на 1;
         quentity.innerHTML = countQuentity;
         
         if ( countResult == 2||                              // Смена заданной буквы;
              countResult == 7||
              countResult == 12||
              countResult == 19||
              countResult == 20||
              countResult == 26||
              countResult == 33||
              countResult == 35||
              countResult == 40||
              countResult == 47||
              countResult == 50||
              countResult == 55||
              countResult == 62||
              countResult == 70||
              countResult == 80||
              countResult == 81||
              countResult == 84||
              countResult == 90||
              countResult == 95||
              countResult == 99||
              countResult == 101||
              countResult == 110||
              countResult == 111||
              countResult == 116||
              countResult == 120||
              countResult == 121
            
            ) 
             {
    var randomLetter = Math.floor(Math.random()*letters.length);

givenLetter.innerHTML = letters[randomLetter];            
}
        
         if ( countResult == 65) {                           // Условия выигрыша;
             alert("ВЫ ВЫИГРАЛИ!!!")
         }
         
         
 }
     else {
         countMistake = countMistake + 1;                     // Счетчик ошибокж
         mistake.innerHTML = countMistake;
         if (countMistake == 10) {                            // Задается 10 ошибок;
             alert("Вы проиграли!!!")
             location.reload();                               //Перезагрузка страницы;
         }
         
     }
 }
}

/*Меняем цвет и буквы на фишках каждые 5 секунд*/

setInterval(changeAllbuttons,5000);

function changeAllbuttons() {
    for(let j=0;j<buttonArray.length;j++){
        var randomColor = Math.floor(Math.random()*colors.length);
        buttonArray[j].style.background = colors[randomColor];
        var randomLetter = Math.floor(Math.random()*letters.length);
    
         buttonArray[j].innerHTML =  letters[randomLetter];
        
    }
}

/* Таймер */

var timer = document.getElementById("timer");
var s = 0;

timer.innerHTML = s;

setTimeout(time,1000);

function time() {
    
    s = s+1;
    timer.innerHTML = s;
    setTimeout(time,1000);
}



