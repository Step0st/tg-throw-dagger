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
    for (let i = 0; i < knives.length - 1; i++) {
        for (let j = i + 1; j < knives.length; j++) {
            if (isOverlapping(knives[i], knives[j])) {
                console.error("Collision detected!");
                // Обработка столкновения
            }
        }
    }
}

function isOverlapping(element1, element2) {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();
    return !(rect1.right < rect2.left || 
             rect1.left > rect2.right || 
             rect1.bottom < rect2.top || 
             rect1.top > rect2.bottom);
}


