
/*Загружем морских обитателей в массив*/

var fish =[document.getElementById('character1'),
           document.getElementById('character2'),
           document.getElementById('character3'),
           document.getElementById('character4'),
           document.getElementById('character5'),
           document.getElementById('character6'),
           document.getElementById('character7'),
           document.getElementById('character8'),
           document.getElementById('character9'),
           document.getElementById('character10'),
           document.getElementById('character11'),
           document.getElementById('character12'),
           document.getElementById('character13')
]


/*Функция перезагрузки страницы*/

function reload() {
    document.location.reload(true);
}

/*Функция появления морского обитателя*/

function appearanceFish() {
    
     var randomNumber = Math.floor(Math.random()*fish.length);  // В переменную записывается случайное число от 1 до 13 по количеству персонажей;
      
     fish[randomNumber].style.zIndex = "3"; // Случайному элементу из массива с морскими обитателями присваивается свойство видимости 3 (изначально у всех присвоено -1,чтобы не отображаться в браузере);
    
    var clientWidth = document.documentElement.clientWidth; // Ширина экрана;
    
    var fishWidth = "745"; // Ширина самой широкой картинки;
    
     var randomLeft = Math.floor(Math.random()*(clientWidth-fishWidth)); // В переменную записывается случайное положение на экране по ширине 1000px (не смог найти функцию для определения ширины устройства, поэтому взял усредненное значение 1000)ж
    
    fish[randomNumber].style.left = randomLeft + "px"; // Морской обитатель появляется в случаной месте на экране;

}

/*Запуск функции появления морского обитателя*/

appearanceFish();


