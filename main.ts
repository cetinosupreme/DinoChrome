namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.vy = -200
    if (mySprite.isHittingTile(CollisionDirection.Left)) {
        mySprite.vy = -200
    }
})
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . . . f f 1 f f f . . . . 
. . . . . . f f f f f f . . . . 
. . . f f f f f f f . . . . . . 
. . . f f f f f . . . . . . . . 
. . . f f f f f f . . . . . . . 
. . . f f f f . . . . . . . . . 
. . . f . . f . . . . . . . . . 
. . . f . . f . . . . . . . . . 
. . . f f . f f . . . . . . . . 
`, SpriteKind.Player)
scene.setBackgroundColor(1)
tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101010101010101010101010101010101010101`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.builtin.forestTiles28],
            TileScale.Sixteen
        ))
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 5))
mySprite.ay = 500
game.onUpdateInterval(2000, function () {
    projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f . . . . . . . . . 
. . . f 7 7 f . . . f f . . . . 
. . f f 7 f f . . f f 7 f . . . 
. . f 7 f 7 7 f . f 7 7 f . . . 
. . f f 7 7 7 f f f 7 f f . . . 
. . . f 7 f 7 7 7 7 7 f . . . . 
. . . f f 7 7 7 7 f 7 f . . . . 
. . . . f 7 7 f 7 7 f f . . . . 
. . . . f 7 7 7 7 7 f . . . . . 
. . . . f 7 7 f 7 7 f . . . . . 
. . . . f 7 7 7 7 7 f . . . . . 
. . . . f f 7 7 f 7 f . . . . . 
. . . . . f 7 7 7 7 f . . . . . 
`, Math.randomRange(-100, -80), 0)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
    info.changeScoreBy(1)
})
