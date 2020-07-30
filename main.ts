namespace SpriteKind {
    export const neutral = SpriteKind.create()
}
function SpawnMeteor3 () {
    meteor = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . a a . . . . . . . 
        . . . . . a c b a c . . . . . . 
        . . . . c c b c f a c f . . . . 
        . . . . a f b b b a c a . . . . 
        . . . . a f f b a f c c . . . . 
        . . . . c b b a f f c a . . . . 
        . . . . c b f a f a c c . . . . 
        . . . . . c c b b b c . . . . . 
        . . . . . . c c f b . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    meteor.setPosition(randint(0, 116), 10)
    sprites.setInstant2DGravityAcceleration(
    meteor,
    80,
    58,
    10
    )
}
function SpawnSpaceShark () {
    SpaceShark = sprites.create(img`
        . . . . . . . . . . . f f f f f f f . . . c c f f f . . . . . . . . . . 
        . . . . . . . . . . f b b b b b b b f f c b b b b f . . . . . . . . . . 
        . . . . . . . . . . f b b 1 1 1 b b b b b f f b f . . . . . . . . . . . 
        . . . . . . . . . . f b 1 1 1 1 1 f f b b b b f f . . . . . . . . . . . 
        . . . . . . . . . . f 1 c c c c 1 f f b b b b b c f f . . . . . . . . . 
        . . . . . . . . . . f f c 1 c 1 c 1 b b c b c b c c c f . . . . . . . . 
        . . . . 2 2 2 2 2 . . f c c 3 3 3 1 b b b c b c b c c c f . . c c c c c 
        . 2 2 2 2 2 2 2 2 2 . . c 3 3 3 c 1 b b b c b c b c c c c f c d d b b c 
        . . . 2 2 2 2 2 2 2 . . c 3 3 3 c 1 b b b b b b b c c c c c d d b c c . 
        . 2 2 2 2 2 2 2 2 . . . c 3 3 3 c 1 1 b b b b b c c c c c c b b c c . . 
        . . . 2 2 2 2 2 2 2 . c c 3 3 1 c 1 1 b b b b c c c c c c f b c c f . . 
        . . . . . . . . . . . c c 1 3 c 1 1 c b b b c c c c c b b c f c c f . . 
        . . . . . . . . . . . c 1 1 1 1 1 1 c b b b f d d d d d c . f b b c f . 
        . . . . . . . . . . . . c c 1 1 1 1 f b d b b f d d d c . . . f b b f . 
        . . . . . . . . . . . . . . c c c f f f b d b b f c c . . . . . f b b f 
        . . . . . . . . . . . . . . . . . . . . f f f f f . . . . . . . . f f f 
        `, SpriteKind.Enemy)
    SpaceShark.setPosition(140, randint(0, 100))
    sprites.setInstant2DGravityAcceleration(
    SpaceShark,
    80,
    58,
    10
    )
}
game.onGameUpdateWithHeading(function () {
    controller.moveSprite(UFO, 50, 50)
    console.logValue("x", UFO.x)
    console.logValue("y", UFO.y)
    if (!(UFO.overlapsWith(Black_Hole))) {
        info.stopCountdown()
        IsTimeStarted = false
    }
})
function SpawnMeteor2 () {
    meteor = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . a a . . . . . . . 
        . . . . . a c b a c . . . . . . 
        . . . . c c b c f a c f . . . . 
        . . . . a f b b b a c a . . . . 
        . . . . a f f b a f c c . . . . 
        . . . . c b b a f f c a . . . . 
        . . . . c b f a f a c c . . . . 
        . . . . . c c b b b c . . . . . 
        . . . . . . c c f b . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    meteor.setPosition(150, randint(0, 116))
    sprites.setInstant2DGravityAcceleration(
    meteor,
    80,
    58,
    10
    )
}
function SpawnBookShelf () {
    Bookshelf = sprites.create(img`
        . c c c c c c c c c c c c c c c c c c c c c c . 
        c b d d d d d d d d d d d d d d d d d d d d b c 
        c d d d d d d d d d d d d d d d d d d d d d d c 
        c d d d d d d d d d d d d d d d d d d d d d d c 
        c d d d d d d d d d d d d d d d d d d d d d d c 
        c d d d d d d d d d d d d d d d d d d d d d d c 
        c d d d d d d d d d d d d d d d d d d d d d d c 
        c b d d d d d d d d d d d d d d d d d d d d b c 
        c c b b b b b b b b b b b b b b b b b b b b c c 
        c c f f f f f f f f f f f f f f f f f f f f c c 
        c b c c 3 3 c 6 c 4 4 c 3 c 7 c 6 6 c 3 c c b c 
        c b c c 3 3 c 6 c 4 4 c 3 c 7 c 6 6 c 3 c c b c 
        f b c c 3 3 c 6 c 4 4 c c c 7 c 6 6 c 3 c c b f 
        f d c c c c c c c c c c c c c c c c c c c c d f 
        f d c b b d d d d d d d d d d d d d d b b c d f 
        f d f f f f f f f f f f f f f f f f f f f f d f 
        f d c c c 6 c 3 3 c 4 c 6 c 4 4 c 3 c 7 c c d f 
        f d c c c 6 c 3 3 c 4 c 6 c 4 4 c 3 c 7 c c d f 
        f d c c c 6 c 3 3 c c c 6 c 4 4 c c c 7 c c d f 
        f d c c c c c c c c c c c c c c c c c c c c d f 
        f d c b b d d d d d d d d d d d d d d b b c d f 
        f d c b b d d d d d d d d d d d d d d b b c d f 
        f d f f f f f f f f f f f f f f f f f f f f d f 
        f f f f f f f f f f f f f f f f f f f f f f f f 
        `, SpriteKind.Enemy)
    Bookshelf.setPosition(randint(0, 116), 99)
    sprites.setInstant2DGravityAcceleration(
    Bookshelf,
    80,
    58,
    10
    )
}
function Instructions (text: string) {
    game.showLongText(text, DialogLayout.Bottom)
}
function SpawnMeteor4 () {
    meteor = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . a a . . . . . . . 
        . . . . . a c b a c . . . . . . 
        . . . . c c b c f a c f . . . . 
        . . . . a f b b b a c a . . . . 
        . . . . a f f b a f c c . . . . 
        . . . . c b b a f f c a . . . . 
        . . . . c b f a f a c c . . . . 
        . . . . . c c b b b c . . . . . 
        . . . . . . c c f b . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    meteor.setPosition(randint(0, 116), 110)
    sprites.setInstant2DGravityAcceleration(
    meteor,
    80,
    58,
    10
    )
}
function SpawnAngryComputer () {
    AngryComputer = sprites.create(img`
        . . . b b b b b b b b b . . . . 
        . . b 1 d d d d d d d 1 b . . . 
        . b 1 1 1 1 1 1 1 1 1 1 1 b . . 
        . b d b c c c c c c c b d b . . 
        . b d c f 6 6 6 6 6 f c d b . . 
        . b d c 9 f 6 6 6 f 9 c d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c 6 6 f f f 6 6 c d b . . 
        . b d c 6 f 6 6 6 f 6 c d b . . 
        . b d c c c c c c c c c d b . . 
        . c b b b b b b b b b b b c . . 
        c b c c c c c c c c c c c b c . 
        c 1 d d d d d d d d d d d 1 c . 
        c 1 d 1 1 d 1 1 d 1 1 d 1 1 c . 
        c b b b b b b b b b b b b b c . 
        c c c c c c c c c c c c c c c . 
        `, SpriteKind.Enemy)
    AngryComputer.setPosition(randint(0, 116), 10)
    sprites.setInstant2DGravityAcceleration(
    AngryComputer,
    80,
    58,
    10
    )
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.neutral, function (sprite, otherSprite) {
    sprite.destroy()
})
function SpawnObject () {
    Object2 = sprites.create(img`
        . . c c c c . . . . . . . . . 
        . c 7 7 7 6 c . . . . . . . . 
        c 6 7 7 7 6 c c c c c c c . . 
        c 6 7 7 7 6 c 6 7 7 7 7 7 c . 
        c 6 7 7 7 6 c 7 7 7 7 7 6 6 c 
        c 6 7 7 7 6 c 6 6 6 6 6 6 6 c 
        c 6 7 7 7 6 c c c c c c 6 6 c 
        c 6 7 7 7 6 c 7 7 7 7 6 c c c 
        c 6 7 7 7 6 c 7 7 7 7 7 6 c . 
        c 6 7 7 7 6 c 7 7 7 7 7 6 c . 
        c 6 7 7 7 6 c 7 7 7 7 7 6 c . 
        c 6 7 7 7 6 c 7 7 7 7 7 6 c . 
        c 6 7 7 7 6 c 7 7 7 7 7 6 c . 
        c 6 7 7 7 6 c 7 7 7 7 7 6 c . 
        c 6 7 7 7 6 c 7 7 7 7 7 6 c . 
        c 6 7 7 6 6 c 7 7 7 7 7 6 c . 
        c 6 6 6 6 6 c c c c c c c c . 
        c 6 6 6 6 6 c 6 7 7 7 7 7 c . 
        c 6 6 6 6 6 c 7 7 7 7 7 6 6 c 
        c 6 6 6 6 6 c 6 6 6 6 6 6 6 c 
        c 6 6 6 6 6 c 6 6 6 6 6 6 6 c 
        c 6 6 6 6 6 c 6 6 6 6 6 6 6 c 
        . c c c c c c c c c c c c c c 
        . c b b c . . . . . c b b c . 
        `, SpriteKind.Enemy)
    Object2.setPosition(10, randint(0, 116))
    sprites.setInstant2DGravityAcceleration(
    Object2,
    80,
    58,
    10
    )
}
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    sprite.destroy()
})
function Start_Screen () {
    Instructions("Welcome to Black Hole Apocalypse")
    Instructions("A Black Hole is ravaging the universe and it is your job to avoid being hit by anything being sucked into it")
    Instructions("Use the Arrow Keys To Move")
    Instructions("Avoid meteors and other objects flying towards the black hole")
    Instructions("You have three lives. After one is lost you will be transported to the center of the black hole! Quickly escape from it before it's too late! ")
}
function SpawnMeteor () {
    meteor = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . a a . . . . . . . 
        . . . . . a c b a c . . . . . . 
        . . . . c c b c f a c f . . . . 
        . . . . a f b b b a c a . . . . 
        . . . . a f f b a f c c . . . . 
        . . . . c b b a f f c a . . . . 
        . . . . c b f a f a c c . . . . 
        . . . . . c c b b b c . . . . . 
        . . . . . . c c f b . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    meteor.setPosition(10, randint(0, 116))
    sprites.setInstant2DGravityAcceleration(
    meteor,
    80,
    58,
    10
    )
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.neutral, function (sprite, otherSprite) {
    if (!(IsTimeStarted)) {
        info.startCountdown(5)
        IsTimeStarted = true
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    UFO.setPosition(80, 58)
})
let Object2: Sprite = null
let AngryComputer: Sprite = null
let Bookshelf: Sprite = null
let SpaceShark: Sprite = null
let meteor: Sprite = null
let UFO: Sprite = null
let Black_Hole: Sprite = null
let IsTimeStarted = false
tiles.setTilemap(tiles.createTilemap(hex`0a00070004030303030303030309020101010101010101080201010d0e0e0b010108020101010e0e010101080201010a0e0e0c0101080201010101010101010806070707070707070705`, img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile5,myTiles.tile6,myTiles.tile8,myTiles.tile9,myTiles.tile3,myTiles.tile4,myTiles.tile7,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15], TileScale.Sixteen))
IsTimeStarted = false
Black_Hole = sprites.create(img`
    . . . 2 c 2 c 2 2 f c c 2 . . . 
    . . 2 f f f f f f f f f f 2 . . 
    . 2 f f f f a f f a c f f f 2 . 
    2 f f a f f f f f f f f f f f 2 
    c f f f f f f c c f f f f c f c 
    c f f f b f f f f f f f f a f 2 
    2 f f f c f f c f f f f f f f c 
    2 f a f f f f f f c f b f f f f 
    f f c f f f c f f f f f f c f c 
    c f f f b f f f c f f f f f f 2 
    c f f f f f f f f f f c f f f c 
    2 f a f f f c f f b f f f f f 2 
    2 f f f f f f f f f f f a f f 2 
    . 2 f f a f f a c f f a f f 2 . 
    . . 2 f f f f f f f f f f 2 . . 
    . . . 2 c c c f 2 2 2 c c . . . 
    `, SpriteKind.neutral)
Black_Hole.setPosition(80, 58)
UFO = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . b b . . . . . . . 
    . . . . . . b 6 6 b . . . . . . 
    . . . . . b 6 f f 6 b . . . . . 
    . . b b 6 9 6 f f 6 9 6 b b . . 
    . b b 6 9 6 f f f f 6 9 6 b b . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . b b 6 6 f f f f f f 6 6 b b . 
    . . b b 9 9 6 f f 6 9 9 b b . . 
    . . . . . b b 6 6 b b . . . . . 
    . . . . . . . b b . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
UFO.setPosition(80, 30)
info.setLife(3)
info.setScore(0)
Start_Screen()
game.onUpdateInterval(5000, function () {
    if (info.score() > 20) {
        SpawnAngryComputer()
    }
})
game.onUpdateInterval(5000, function () {
    if (info.score() > 30) {
        SpawnObject()
    }
})
game.onUpdateInterval(5000, function () {
    if (info.score() > 50) {
        SpawnSpaceShark()
    }
})
game.onUpdateInterval(5000, function () {
    if (info.score() > 40) {
        SpawnBookShelf()
    }
})
game.onUpdateInterval(randint(1000, 5000), function () {
    SpawnMeteor()
})
game.onUpdateInterval(randint(1000, 5000), function () {
    SpawnMeteor2()
})
game.onUpdateInterval(randint(1000, 5000), function () {
    SpawnMeteor3()
})
game.onUpdateInterval(randint(1000, 5000), function () {
    SpawnMeteor4()
})
game.onUpdateInterval(500, function () {
    info.changeScoreBy(1)
})
