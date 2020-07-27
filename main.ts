function Start_Screen () {
    game.showLongText("This is my game. - By a Clemson First-Year Student", DialogLayout.Bottom)
}
tiles.setTilemap(tiles.createTilemap(hex`0a00070004030303030303030309020101010101010101080201010a01010b010108020101010101010101080201010a01010a0101080201010101010101010806070707070707070705`, img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile5,myTiles.tile6,myTiles.tile8,myTiles.tile9,myTiles.tile3,myTiles.tile4,myTiles.tile7,myTiles.tile11,myTiles.tile12], TileScale.Sixteen))
let UFO = sprites.create(img`
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
let Black_Hole = sprites.create(img`
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 f f f f f f f f f f 2 . . 
    . 2 f f f f f f f f f f f f 2 . 
    2 f f f f f f f f f f f f f f 2 
    2 f f f f f f f f f f f f f f 2 
    2 f f f f f f f f f f f f f f 2 
    2 f f f f f f f f f f f f f f 2 
    2 f f f f f f f f f f f f f f 2 
    2 f f f f f f f f f f f f f f 2 
    2 f f f f f f f f f f f f f f 2 
    2 f f f f f f f f f f f f f f 2 
    2 f f f f f f f f f f f f f f 2 
    2 f f f f f f f f f f f f f f 2 
    . 2 f f f f f f f f f f f f 2 . 
    . . 2 f f f f f f f f f f 2 . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    `, SpriteKind.Player)
