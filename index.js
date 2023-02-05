const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

c.fillRect(0, 0, canvas.width, canvas.height);

const gravity = 0.7;

const background = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    dimensions: {
        width: 1024,
        height: 576,
    },
    imageSrc: './assets/background/background.png'
})

var playerOneFighter = fighters.MedievalWarrior;
var playerTowFighter = fighters.MedievalKing;

const playerOne = new Fighter({
    position: {
        x: -30,
        y: 50,
    },
    velocity: {
        x: 0,
        y: 10,
    },
    moviment: {
        x: 7,
        y: -15,
    },
    ...playerOneFighter.right
});

const playerTwo = new Fighter({
    position: {
        x: 630,
        y: 100,
    },
    velocity: {
        x: 0,
        y: 10,
    },
    moviment: {
        x: 7,
        y: -15,
    },
    ...playerTowFighter.left
});

function selectPlayerOneFighter(ff) {
    playerOneFighter = ff;
    switchFighter(playerOne, playerOneFighter.right)
}

function selectPlayerTwoFighter(ff) {
    playerTowFighter = ff;
    switchFighter(playerTwo, playerTowFighter.left)
}

function animate() {
    window.requestAnimationFrame(animate);

    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);

    background.update();
    playerOne.update();
    playerTwo.update();

    playerOne.velocity.x = 0;
    playerTwo.velocity.x = 0;


    document.querySelector('#fighterOneName').innerHTML = playerOne.fantasyName
    document.querySelector('#fighterTwoName').innerHTML = playerTwo.fantasyName

    // palyer move
    if (keys.a.pressed && playerOne.lastKey === 'a') {
        switchFighter(playerOne, playerOneFighter.left)
        playerOne.velocity.x = parseInt('-' + String(playerOne.moviment.x));
        playerOne.switchSprite('run');
    } else if (keys.d.pressed && playerOne.lastKey === 'd') {
        switchFighter(playerOne, playerOneFighter.right)
        playerOne.velocity.x = playerOne.moviment.x;
        playerOne.switchSprite('run');
    } else {
        playerOne.switchSprite('idle');
    }

    if (playerOne.velocity.y < 0) {
        playerOne.switchSprite('jump');
    } else if (playerOne.velocity.y > 0) {
        playerOne.switchSprite('fall');
    }

    // playerTwo move

    if (keys.ArrowLeft.pressed && playerTwo.lastKey === 'ArrowLeft') {
        switchFighter(playerTwo, playerTowFighter.left)
        playerTwo.velocity.x = parseInt('-' + String(playerTwo.moviment.x));
        playerTwo.switchSprite('run');
    } else if (keys.ArrowRight.pressed && playerTwo.lastKey === 'ArrowRight') {
        switchFighter(playerTwo, playerTowFighter.right)
        playerTwo.velocity.x = playerTwo.moviment.x;
        playerTwo.switchSprite('run');
    } else {
        playerTwo.switchSprite('idle');
    }

    if (playerTwo.velocity.y < 0) {
        playerTwo.switchSprite('jump');
    } else if (playerTwo.velocity.y > 0) {
        playerTwo.switchSprite('fall');
    }

    if (playerOne.isAttacking && playerOne.framesCurrent === playerOne.timeAtk) {
        playerOne.isAttacking === false
    }

    // detect for collision
    if (rectangularCollision({
        rectangleOne: playerOne,
        rectangleTwo: playerTwo,
    }) && playerOne.isAttacking && playerOne.framesCurrent === playerOne.timeAtk) {
        playerOne.isAttacking = false;
        playerTwo.takeHit();
        document.querySelector('#playerTwoHealth').style.width = playerTwo.health + '%'
    }

    if (rectangularCollision({
        rectangleOne: playerTwo,
        rectangleTwo: playerOne,
    }) && playerTwo.isAttacking && playerTwo.framesCurrent === playerTwo.timeAtk) {
        playerTwo.isAttacking = false;
        playerOne.takeHit();
        document.querySelector('#playerOneHealth').style.width = playerOne.health + '%'
    }

    if (playerTwo.isAttacking && playerTwo.framesCurrent === playerTwo.timeAtk) {
        playerTwo.isAttacking === false
    }

    // end 
    if (playerOne.health <= 0 || playerTwo.health <= 0) {
        determineWinner({ playerOne, playerTwo, timerId })
    }
}
animate();


window.addEventListener('keydown', (event) => {

    if (!playerOne.dead) {
        // playerOne move
        switch (event.key) {
            case 'd':
                keys.d.pressed = true;
                playerOne.lastKey = 'd';
                break
            case 'a':
                keys.a.pressed = true;
                playerOne.lastKey = 'a';
                break
            case 'w':
                if (playerOne.position.y >= 405) {
                    playerOne.velocity.y = -20;
                }
                break
            case ' ':
                playerOne.attack();
                break
        }
    }

    if (!playerTwo.dead) {
        // playerTwo move
        switch (event.key) {
            case 'ArrowRight':
                keys.ArrowRight.pressed = true;
                playerTwo.lastKey = 'ArrowRight';
                break
            case 'ArrowLeft':
                keys.ArrowLeft.pressed = true;
                playerTwo.lastKey = 'ArrowLeft';
                break
            case 'ArrowUp':
                if (playerTwo.position.y >= 405) {
                    playerTwo.velocity.y = -20;
                }
                break
            case 'ArrowDown':
                playerTwo.attack();
                break
        }
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = false;
            break
        case 'a':
            keys.a.pressed = false;
            break

        // playerTwo move
        case 'ArrowRight':
            keys.ArrowRight.pressed = false;
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false;
            break
    }
})