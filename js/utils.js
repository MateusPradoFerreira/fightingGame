function createFighter({ name, offsetRight, offsetLeft, idleFrames, runFrames, jumpFrames, fallFrames, attack1Frames, scale, attackN = 1, fantasyName, takeHitFrames, deathFrames, timeAtk }) {
    return {
        right: {
            scale: scale,
            offset: offsetRight,
            imageSrc: './assets/' + name + '/Sprites/Idle.png',
            framesMax: idleFrames,
            left: false,
            fantasyName: fantasyName,
            timeAtk: timeAtk,
            name: name,
            spriteSet: {
                idle: {
                    imageSrc: './assets/' + name + '/Sprites/Idle.png',
                    framesMax: idleFrames,
                },
                run: {
                    imageSrc: './assets/' + name + '/Sprites/Run.png',
                    framesMax: runFrames,
                },
                jump: {
                    imageSrc: './assets/' + name + '/Sprites/Jump.png',
                    framesMax: jumpFrames,
                },
                fall: {
                    imageSrc: './assets/' + name + '/Sprites/Fall.png',
                    framesMax: fallFrames,
                },
                attack1: {
                    imageSrc: './assets/' + name + '/Sprites/Attack' + attackN + '.png',
                    framesMax: attack1Frames,
                },
                takeHit: {
                    imageSrc: './assets/' + name + '/Sprites/Take Hit.png',
                    framesMax: takeHitFrames,
                },
                death: {
                    imageSrc: './assets/' + name + '/Sprites/Death.png',
                    framesMax: deathFrames,
                },
            },
            sprites: {
                idle: {
                    imageSrc: './assets/' + name + '/Sprites/Idle.png',
                    framesMax: idleFrames,
                },
                run: {
                    imageSrc: './assets/' + name + '/Sprites/Run.png',
                    framesMax: runFrames,
                },
                jump: {
                    imageSrc: './assets/' + name + '/Sprites/Jump.png',
                    framesMax: jumpFrames,
                },
                fall: {
                    imageSrc: './assets/' + name + '/Sprites/Fall.png',
                    framesMax: fallFrames,
                },
                attack1: {
                    imageSrc: './assets/' + name + '/Sprites/Attack' + attackN + '.png',
                    framesMax: attack1Frames,
                },
                takeHit: {
                    imageSrc: './assets/' + name + '/Sprites/Take Hit.png',
                    framesMax: takeHitFrames,
                },
                death: {
                    imageSrc: './assets/' + name + '/Sprites/Death.png',
                    framesMax: deathFrames,
                },
            },
        },
        left: {
            scale: scale,
            offset: offsetLeft,
            imageSrc: './assets/' + name + 'ToTheLeft/Sprites/Idle.png',
            framesMax: idleFrames,
            left: true,
            fantasyName: fantasyName,
            timeAtk: timeAtk,
            name: name,
            spriteSet: {
                idle: {
                    imageSrc: './assets/' + name + 'ToTheLeft/Sprites/Idle.png',
                    framesMax: idleFrames,
                },
                run: {
                    imageSrc: './assets/' + name + 'ToTheLeft/Sprites/Run.png',
                    framesMax: runFrames,
                },
                jump: {
                    imageSrc: './assets/' + name + 'ToTheLeft/Sprites/Jump.png',
                    framesMax: jumpFrames,
                },
                fall: {
                    imageSrc: './assets/' + name + 'ToTheLeft/Sprites/Fall.png',
                    framesMax: fallFrames,
                },
                attack1: {
                    imageSrc: './assets/' + name + 'ToTheLeft/Sprites/Attack' + attackN + '.png',
                    framesMax: attack1Frames,
                },
                takeHit: {
                    imageSrc: './assets/' + name + 'ToTheLeft/Sprites/Take Hit.png',
                    framesMax: takeHitFrames,
                },
                death: {
                    imageSrc: './assets/' + name + 'ToTheLeft/Sprites/Death.png',
                    framesMax: deathFrames,
                },
            },
            sprites: {
                idle: {
                    imageSrc: './assets/' + name + 'ToTheLeft/Sprites/Idle.png',
                    framesMax: idleFrames,
                },
                run: {
                    imageSrc: './assets/' + name + 'ToTheLeft/Sprites/Run.png',
                    framesMax: runFrames,
                },
                jump: {
                    imageSrc: './assets/' + name + 'ToTheLeft/Sprites/Jump.png',
                    framesMax: jumpFrames,
                },
                fall: {
                    imageSrc: './assets/' + name + 'ToTheLeft/Sprites/Fall.png',
                    framesMax: fallFrames,
                },
                attack1: {
                    imageSrc: './assets/' + name + 'ToTheLeft/Sprites/Attack' + attackN + '.png',
                    framesMax: attack1Frames,
                },
                takeHit: {
                    imageSrc: './assets/' + name + 'ToTheLeft/Sprites/Take Hit.png',
                    framesMax: takeHitFrames,
                },
                death: {
                    imageSrc: './assets/' + name + 'ToTheLeft/Sprites/Death.png',
                    framesMax: deathFrames,
                },
            },
        }
    }
}

var fighters = {
    FantasyWarrior: createFighter({
        scale: 2.5,
        name: 'FantasyWarrior',
        fantasyName: 'Geralt de Rivia',
        offsetLeft: {
            x: 0,
            y: 214,
            attackBox: {
                x: -55,
                y: 70,
            }
        },
        offsetRight: {
            x: 40,
            y: 214,
            attackBox: {
                x: -120,
                y: 70,
            }
        },
        attackN: 1,
        idleFrames: 10,
        runFrames: 8,
        jumpFrames: 3,
        fallFrames: 3,
        attack1Frames: 7,
        takeHitFrames: 3,
        deathFrames: 7,
        timeAtk: 4,
    }),
    MedievalKing: createFighter({
        scale: 2.5,
        name: 'MedievalKing',
        fantasyName: 'Cyprian Abeodan',
        offsetLeft: {
            x: 0,
            y: 222,
            attackBox: {
                x: -60,
                y: 70,
            }
        },
        offsetRight: {
            x: 0,
            y: 222,
            attackBox: {
                x: -160,
                y: 70,
            }
        },
        attackN: 1,
        idleFrames: 8,
        runFrames: 8,
        jumpFrames: 2,
        fallFrames: 2,
        attack1Frames: 4,
        takeHitFrames: 4,
        deathFrames: 6,
        timeAtk: 2,
    }),
    Huntress: createFighter({
        scale: 3,
        name: 'Huntress',
        fantasyName: 'Brielle Atalanta',
        offsetLeft: {
            x: 70,
            y: 252,
            attackBox: {
                x: 0,
                y: 70,
            }
        },
        offsetRight: {
            x: 0,
            y: 252,
            attackBox: {
                x: -200,
                y: 70,
            }
        },
        attackN: 1,
        idleFrames: 8,
        runFrames: 8,
        jumpFrames: 2,
        fallFrames: 2,
        attack1Frames: 5,
        takeHitFrames: 3,
        deathFrames: 8,
        timeAtk: 3,
    }),
    MedievalWarrior: createFighter({
        scale: 2.8,
        name: 'MedievalWarrior',
        fantasyName: 'Ethan Meaning',
        offsetLeft: {
            x: 70,
            y: 227,
            attackBox: {
                x: 0,
                y: 70,
            }
        },
        offsetRight: {
            x: 0,
            y: 227,
            attackBox: {
                x: -170,
                y: 70,
            }
        },
        attackN: 1,
        idleFrames: 8,
        runFrames: 8,
        jumpFrames: 2,
        fallFrames: 2,
        attack1Frames: 4,
        takeHitFrames: 4,
        deathFrames: 6,
        timeAtk: 2,
    }),
}

const keys = {
    a: {
        pressed: false,
    },
    d: {
        pressed: false,
    },
    ArrowRight: {
        pressed: false,
    },
    ArrowLeft: {
        pressed: false,
    },
}

function rectangularCollision({ rectangleOne, rectangleTwo }) {
    return (
        rectangleOne.attackBox.position.x + (rectangleOne.left ? 0 : rectangleOne.attackBox.width) >=
        (rectangleTwo.position.x - rectangleTwo.offset.x) + ((rectangleTwo.image.width / rectangleTwo.framesMax) * rectangleTwo.scale) / 3
        &&
        rectangleOne.attackBox.position.x + (rectangleOne.left ? 0 : rectangleOne.attackBox.width) <=
        ((rectangleTwo.position.x - rectangleTwo.offset.x) + (((rectangleTwo.image.width / rectangleTwo.framesMax) * rectangleTwo.scale) / 3) * 2)
        &&
        rectangleOne.attackBox.position.y + rectangleOne.attackBox.height >= rectangleTwo.position.y
        &&
        rectangleOne.attackBox.position.y <= rectangleTwo.position.y + rectangleTwo.attackBox.height
        &&
        rectangleOne.isAttacking
    )
}

function determineWinner({ playerOne, playerTwo, timerID }) {
    clearTimeout(timerID)
    if (playerTwo.health === playerOne.health) {
        document.querySelector('#winnerAnnouncer').innerHTML = 'tie'
        document.querySelector('#winnerAnnouncer').style.display = 'flex'
    } else if (playerTwo.health >= playerOne.health) {
        document.querySelector('#winnerAnnouncer').innerHTML = 'Player Two Wins'
        document.querySelector('#winnerAnnouncer').style.display = 'flex'
        playerOne.switchSprite('death');
    } else if (playerTwo.health <= playerOne.health) {
        document.querySelector('#winnerAnnouncer').innerHTML = 'Player One Wins'
        document.querySelector('#winnerAnnouncer').style.display = 'flex'
        playerTwo.switchSprite('death');
    }
}

function switchFighter(currentFighter, newFighter) {
    if (currentFighter.spriteSet !== newFighter.spriteSet) {
        var newSprites = { ...currentFighter.sprites };
        for (const sprite in newFighter.sprites) {
            if (currentFighter.sprites[sprite].image.src !== 'http://127.0.0.1:5500' + newFighter.sprites[sprite].imageSrc.substring(1)) {
                newSprites[sprite].image = new Image();
                newSprites[sprite].image.src = newFighter.sprites[sprite].imageSrc;
                newSprites[sprite].framesMax = newFighter.sprites[sprite].framesMax;
            }
        }
        currentFighter.sprites = newSprites
        currentFighter.offset = newFighter.offset;
        currentFighter.scale = newFighter.scale;
        currentFighter.left = newFighter.left;
        currentFighter.fantasyName = newFighter.fantasyName;
        currentFighter.timeAtk = newFighter.timeAtk;
        currentFighter.name = newFighter.name;
        currentFighter.spriteSet = newFighter.spriteSet;
        currentFighter.framesCurrent = 0;
    }
}

