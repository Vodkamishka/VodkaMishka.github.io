/*Создаем игровое поле*/

let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add("field");

/*Рисуем 100 ячеек*/

for (let i = 1; i < 101; i++) {
    let excel = document.createElement('div');
    field.appendChild(excel);
    excel.classList.add('excel');
}

/*Каждой ячейке задаем координаты*/

let excel = document.getElementsByClassName('excel');
let x = 1;
let y = 10;

for (let i = 0; i < excel.length; i++) {
    if (x > 10) {
        x = 1;
        y--;
    }
    excel[i].setAttribute('posX', x);
    excel[i].setAttribute('posY', y);
    x++;
}

/*Создаем змейку*/

const generateSnake = () => {
    let posX = Math.round(Math.random() * (10 - 3) + 3);
    let posY = Math.round(Math.random() * (10 - 3) + 3);
    return [posX, posY];
}

/*Рефакторим код*/

const query = (arg) => {
  return document.querySelector(arg);
}

let coordinates = generateSnake();
let snakeBody = [query(`[posX = '${coordinates[0]}'][posY = '${coordinates[1]}']`),
    query(`[posX = '${coordinates[0]-1}'][posY = '${coordinates[1]}']`),
    query(`[posX = '${coordinates[0]-2}'][posY = '${coordinates[1]}']`)
];

for (let i = 0; i < snakeBody.length; i++) {
    snakeBody[i].classList.add('snakeBody');
}

/*Рисуем яблоко*/

const createApple = () => {

    let appleCoordinates = generateSnake();

    apple = query(`[posX = '${appleCoordinates[0]}'][posY = '${appleCoordinates[1]}']`);

    while (apple.classList.contains('snakeBody')) {
        appleCoordinates = generateSnake();
        apple = query(`[posX = '${appleCoordinates[0]}'][posY = '${appleCoordinates[1]}']`);
    }

    apple.classList.add('apple');

}

createApple();

let direction = 'right';
let steps = false;

/*Вывод текста подсчета очков*/

let div = document.createElement('div');
document.body.appendChild(div);
div.style.cssText = `
margin: 0 auto;
margin-top: 40px;
font-size: 1.5rem;
font-weight: bold;
width: 230px;
color: white;
`
let score = 0;
div.innerHTML = `Ваши очки: ${score}`;

/*Функция движения змейки*/

const move = () => {
    let snakeCoordinates = [snakeBody[0].getAttribute('posX'), snakeBody[0].getAttribute('posY')]; //координаты головы змейки
    snakeBody[snakeBody.length - 1].classList.remove('snakeBody'); //удаляем хвост змеи
    snakeBody.pop(); // удаляем хвост змеи

    const unShift = (arg) => {
        snakeBody.unshift(document.querySelector(arg));
    }

    /*Направления*/

    if (direction == 'right') {
        if (snakeCoordinates[0] < 10) {
            unShift(`[posX = '${+snakeCoordinates[0]+1}'][posY = '${snakeCoordinates[1]}']`);
        } else {
            unShift(`[posX = '1'][posY = '${snakeCoordinates[1]}']`);
        }
    } else if (direction == 'left') {
        if (snakeCoordinates[0] > 1) {
            unShift(`[posX = '${+snakeCoordinates[0]-1}'][posY = '${snakeCoordinates[1]}']`);
        } else {
            unShift(`[posX = '10'][posY = '${snakeCoordinates[1]}']`);
        }
    } else if (direction == 'down') {
        if (snakeCoordinates[1] > 1) {
            unShift(`[posX = '${+snakeCoordinates[0]}'][posY = '${snakeCoordinates[1]-1}']`);
        } else {
            unShift(`[posX = '${snakeCoordinates[0]}'][posY = '10']`);
        }
    }
    if (direction == 'up') {
        if (snakeCoordinates[1] < 10) {
            unShift(`[posX = '${+snakeCoordinates[0]}'][posY = '${+snakeCoordinates[1]+1}']`);
        } else {
            unShift(`[posX = '${+snakeCoordinates[0]}'][posY = '1']`);
        }
    }
    
    /*Условия если змейка съела яблоко*/

    if (snakeBody[0].getAttribute('posX') == apple.getAttribute('posX') &&
        snakeBody[0].getAttribute('posY') == apple.getAttribute('posY')
    ) {
        apple.classList.remove('apple');
        let x = snakeBody[snakeBody.length - 1].getAttribute('posX');
        let y = snakeBody[snakeBody.length - 1].getAttribute('posY');
        snakeBody.push(document.querySelector(`[posX = '${x}'][posY = '${y}']`));
        createApple();
        score++;
        div.innerHTML = `Ваши очки: ${score}`;
    }
    
    /*Правила окончания игры*/

    if (snakeBody[0].classList.contains('snakeBody')) {
        setTimeout(() => {
            alert('Game over')
        }, 1000);
        clearInterval(interval);
        for (let i = 0; i < snakeBody.length; i++) {
            snakeBody[i].classList.add('crash');
        }
    }

    for (let i = 0; i < snakeBody.length; i++) {
        snakeBody[i].classList.add('snakeBody');
    }
   
  steps = true;
    
}

let interval = setInterval(move, 300); 

/*Задаем нажатия клавиш и направления с ними связанные*/

window.addEventListener('keydown', function (event) {
    if (steps == true) {
        if (event.keyCode == 37 && direction != 'right') {
            direction = 'left';
            steps = false;
        }
        if (event.keyCode == 38 && direction != 'down') {
            direction = 'up';
            steps = false;
        }
        if (event.keyCode == 39 && direction != 'left') {
            direction = 'right';
            steps = false;
        }
        if (event.keyCode == 40 && direction != 'up') {
            direction = 'down';
            steps = false;
        }
    }
})
