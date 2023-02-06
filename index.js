const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

c.fillRect(0, 0, canvas.width, canvas.height);
const audio = new Audio('./assets//music/SnapInsta.io - Colos & Suses (128 kbps).mp3');
const audio2 = new Audio('./assets//music/mixkit-arcade-retro-changing-tab-206.wav');
const audio3 = new Audio('./assets//music/mixkit-arcade-retro-changing-tab-206.wav');

function playMusic() {
    audio.play()
}

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
    switchFighter(playerOne, playerOne.left ? playerOneFighter.left : playerOneFighter.right)
}

function selectPlayerTwoFighter(ff) {
    playerTowFighter = ff;
    switchFighter(playerTwo, playerTwo.left ? playerTowFighter.left : playerTowFighter.right)
}

function confirmPlayer(player) {
    player.select();
    if (playerOne.selected && playerTwo.selected) setTimeout(() => {
        playMusic()
    }, 500);

    if (player === playerOne) audio2.play()
    if (player === playerTwo) audio3.play()
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

    //select

    document.getElementById('MedievalWarrior1').style.width = playerOne.name === 'MedievalWarrior' ? '110px' : '100px'
    document.getElementById('FantasyWarrior1').style.width = playerOne.name === 'FantasyWarrior' ? '110px' : '100px'
    document.getElementById('MedievalKing1').style.width = playerOne.name === 'MedievalKing' ? '110px' : '100px'
    document.getElementById('Huntress1').style.width = playerOne.name === 'Huntress' ? '110px' : '100px'

    document.getElementById('MedievalWarrior1').style.backgroundColor = playerOne.name === 'MedievalWarrior' ? '#3f51b5' : '#3C2B25'
    document.getElementById('FantasyWarrior1').style.backgroundColor = playerOne.name === 'FantasyWarrior' ? '#3f51b5' : '#3C2B25'
    document.getElementById('MedievalKing1').style.backgroundColor = playerOne.name === 'MedievalKing' ? '#3f51b5' : '#3C2B25'
    document.getElementById('Huntress1').style.backgroundColor = playerOne.name === 'Huntress' ? '#3f51b5' : '#3C2B25'

    document.getElementById('MedievalWarrior2').style.width = playerTwo.name === 'MedievalWarrior' ? '110px' : '100px'
    document.getElementById('FantasyWarrior2').style.width = playerTwo.name === 'FantasyWarrior' ? '110px' : '100px'
    document.getElementById('MedievalKing2').style.width = playerTwo.name === 'MedievalKing' ? '110px' : '100px'
    document.getElementById('Huntress2').style.width = playerTwo.name === 'Huntress' ? '110px' : '100px'

    document.getElementById('MedievalWarrior2').style.backgroundColor = playerTwo.name === 'MedievalWarrior' ? '#f44336' : '#3C2B25'
    document.getElementById('FantasyWarrior2').style.backgroundColor = playerTwo.name === 'FantasyWarrior' ? '#f44336' : '#3C2B25'
    document.getElementById('MedievalKing2').style.backgroundColor = playerTwo.name === 'MedievalKing' ? '#f44336' : '#3C2B25'
    document.getElementById('Huntress2').style.backgroundColor = playerTwo.name === 'Huntress' ? '#f44336' : '#3C2B25'

    if (playerOne.selected) document.getElementById('fighterSelectOne').style.visibility = 'hidden'
    if (playerTwo.selected) document.getElementById('fighterSelectTwo').style.visibility = 'hidden'


    document.querySelector('#fighterOneName').innerHTML = playerOne.fantasyName
    document.querySelector('#fighterTwoName').innerHTML = playerTwo.fantasyName

    document.querySelector('#playerOneSpecial').style.width = playerOne.special + '%'
    document.querySelector('#playerTwoSpecial').style.width = playerTwo.special + '%'

    // palyer move
    if (keys.a.pressed && playerOne.lastKey === 'a' && playerOne.selected && playerTwo.selected) {
        switchFighter(playerOne, playerOneFighter.left)
        playerOne.velocity.x = parseInt('-' + String(playerOne.moviment.x));
        playerOne.switchSprite('run');
    } else if (keys.d.pressed && playerOne.lastKey === 'd' && playerOne.selected && playerTwo.selected) {
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

    if (keys.ArrowLeft.pressed && playerTwo.lastKey === 'ArrowLeft' && playerOne.selected && playerTwo.selected) {
        switchFighter(playerTwo, playerTowFighter.left)
        playerTwo.velocity.x = parseInt('-' + String(playerTwo.moviment.x));
        playerTwo.switchSprite('run');
    } else if (keys.ArrowRight.pressed && playerTwo.lastKey === 'ArrowRight' && playerOne.selected && playerTwo.selected) {
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
        if (playerOne.special >= 100) {
            playerTwo.takeHit(20);
            playerOne.special = 0;
        } else playerTwo.takeHit(5);
        playerOne.special = playerOne.special + 15
        document.querySelector('#playerTwoHealth').style.width = playerTwo.health + '%'
    }

    if (rectangularCollision({
        rectangleOne: playerTwo,
        rectangleTwo: playerOne,
    }) && playerTwo.isAttacking && playerTwo.framesCurrent === playerTwo.timeAtk) {
        playerTwo.isAttacking = false;
        if (playerTwo.special >= 100) {
            playerOne.takeHit(20);
            playerTwo.special = 0;
        } else playerOne.takeHit(5);
        playerTwo.special = playerTwo.special + 15
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
                if (playerOne.position.y >= 405 && playerOne.selected && playerTwo.selected) {
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
                if (playerTwo.position.y >= 405 && playerOne.selected && playerTwo.selected) {
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

let timer = 60
let timerId
function decreaseTimer() {
    if (timer > 0) {
        timerId = setTimeout(decreaseTimer, 1000)
        if (playerOne.selected && playerTwo.selected) timer--
        document.querySelector('#timer').innerHTML = timer
    }

    if (timer === 0) {
        determineWinner({ playerOne, playerTwo, timerId })
    }
}

decreaseTimer()