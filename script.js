let knives = [];
const target = document.getElementById('target');
const throwButton = document.getElementById('throwButton');

throwButton.addEventListener('click', throwKnife);

function throwKnife() {
    const knife = document.createElement('div');
    knife.classList.add('knife');
    target.appendChild(knife);
    knives.push(knife);
    checkCollision();
}

function checkCollision() {
    // Здесь добавьте логику проверки коллизий ножей
}
