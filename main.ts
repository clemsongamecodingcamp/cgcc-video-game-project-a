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
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.neutral, function (sprite, otherSprite) {
    sprite.destroy()
})
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
