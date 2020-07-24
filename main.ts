function Start_Screen () {
    game.showLongText("This is my game. - By a Clemson First-Year Student", DialogLayout.Bottom)
}
tiles.setTilemap(tiles.createTilemap(hex`0a00070004030303030303030309020101010101010101080201010101010101010802010101010101010108020101010101010101080201010101010101010806070707070707070705`, img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile5,myTiles.tile6,myTiles.tile8,myTiles.tile9,myTiles.tile3,myTiles.tile4,myTiles.tile7], TileScale.Sixteen))
