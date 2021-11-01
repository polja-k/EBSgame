namespace SpriteKind {
    export const Key = SpriteKind.create()
    export const Reward = SpriteKind.create()
    export const Coin = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    if (Reward2.image.equals(img`
        . b b b b b b b b b b b b b b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b b b b b b b d d b b b b b b b 
        . b b b b b b c c b b b b b b . 
        b c c c c c b c c b c c c c c b 
        b c c c c c c b b c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b b b b b b b b b b b b b b b b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `)) {
        currentLevel += 1
        changeLevel()
        info.setLife(3)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -4 * pixelsToMeters
    } else if (mySprite.tileKindAt(TileDirection.Center, sprites.dungeon.stairSouth)) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . f f f . f f f f . f f f . 
            f f f f f c c c c f f f f f 
            f f f f b c c c c b f f f f 
            f f f c 3 c c c c 3 c f f f 
            . f 3 3 c c c c c c 3 3 f . 
            . f c c c c c c c c c c f . 
            . f f c c c c c c c c f f . 
            . f f f c c c c c c f f f . 
            . f f f f f f f f f f f f . 
            . . f f f f f f f f f f . . 
            . . e f f f f f f f f e . . 
            . e 4 f f f f f f f f 4 e . 
            . 4 d f 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . f f f f f f . . . . 
            . . . . f f . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . . 
            . f f f . f f f f . f f f . 
            f f f f f c c c c f f f f f 
            f f f f b c c c c b f f f f 
            f f f c 3 c c c c 3 c f f f 
            . f 3 3 c c c c c c 3 3 f . 
            . f c c c c c c c c c f f . 
            . f f c c c c c c c c f f . 
            . f f c c c c c c f f f f . 
            . f f f f f f f f f f f f . 
            . . f f f f f f f f f f . . 
            . . e f f f f f f f f e . . 
            . . e f f f f f f f f 4 e . 
            . . 4 f 3 3 3 3 3 e d d 4 . 
            . . e f f f f f f e e 4 . . 
            . . . f f f . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . 
            . f f f . f f f f . f f f . 
            f f f f f c c c c f f f f f 
            f f f f b c c c c b f f f f 
            f f f c 3 c c c c 3 c f f f 
            . f 3 3 c c c c c c 3 3 f . 
            . f f c c c c c c c c c f . 
            . f f c c c c c c c c f f . 
            . f f f f c c c c c c f f . 
            . f f f f f f f f f f f f . 
            . . f f f f f f f f f f . . 
            . . e f f f f f f f f e . . 
            . e 4 f f f f f f f f e . . 
            . 4 d d e 3 3 3 3 3 f 4 . . 
            . . 4 e e f f f f f f e . . 
            . . . . . . . . f f f . . . 
            `],
        500,
        false
        )
        mySprite.vy = -4 * pixelsToMeters
    }
})
function showIntro () {
    game.showLongText("Oh, who are you?", DialogLayout.Bottom)
    game.showLongText("You just got trapped in Pixar world, right? ", DialogLayout.Bottom)
    game.showLongText("If you want to escape, you need to go through cartoon worlds and collect keys.", DialogLayout.Bottom)
    game.showLongText("But be careful! There are some ghosts which will try to hurt you!", DialogLayout.Bottom)
    game.showLongText("You can start with \"The Incredibles\" world!", DialogLayout.Bottom)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    otherSprite.destroy(effects.trail, 200)
    otherSprite.y += -3
    music.baDing.play()
    info.changeScoreBy(1)
})
function createCoin () {
    for (let value of tiles.getTilesByType(sprites.dungeon.collectibleBlueCrystal)) {
        mySprite3 = sprites.create(assets.image`Coin`, SpriteKind.Coin)
        tiles.placeOnTile(mySprite3, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        animation.runImageAnimation(
        mySprite3,
        [img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . 4 4 4 4 4 . . . . . 
            . . . . 4 5 5 5 5 5 4 . . . . 
            . . . 4 5 5 4 4 4 5 5 4 . . . 
            . . . 4 5 5 4 5 4 5 5 4 . . . 
            . . . 4 5 5 4 4 4 5 5 4 . . . 
            . . . 4 5 5 4 5 5 5 5 4 . . . 
            . . . 4 5 5 4 5 5 5 5 4 . . . 
            . . . . 4 5 5 5 5 5 4 . . . . 
            . . . . . 4 4 4 4 4 . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . 4 4 4 4 . . . . . . 
            . . . . 4 5 4 5 5 4 . . . . . 
            . . . 4 5 4 5 5 5 5 4 . . . . 
            . . . 4 5 4 5 4 4 5 4 . . . . 
            . . . 4 5 4 5 4 4 5 4 . . . . 
            . . . 4 5 4 5 4 5 5 4 . . . . 
            . . . 4 5 4 5 5 5 5 4 . . . . 
            . . . . 4 5 4 5 5 4 . . . . . 
            . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . 4 4 4 4 . . . . . . 
            . . . . 4 5 5 4 5 4 . . . . . 
            . . . . 4 5 5 4 5 5 4 . . . . 
            . . . . 4 5 5 4 5 5 4 . . . . 
            . . . . 4 5 5 4 5 5 4 . . . . 
            . . . . 4 5 5 4 5 5 4 . . . . 
            . . . . 4 5 5 4 5 5 4 . . . . 
            . . . . 4 5 5 4 5 4 . . . . . 
            . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . 
            . . . . . 4 5 4 5 5 4 . . . . 
            . . . . 4 5 5 4 5 5 4 . . . . 
            . . . . 4 5 5 4 5 5 4 . . . . 
            . . . . 4 5 5 4 5 5 4 . . . . 
            . . . . 4 5 5 4 5 5 4 . . . . 
            . . . . 4 5 5 4 5 5 4 . . . . 
            . . . . . 4 5 4 5 5 4 . . . . 
            . . . . . . 4 4 4 4 . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . 
            . . . . . 4 5 5 4 5 4 . . . . 
            . . . . 4 5 5 5 5 4 5 4 . . . 
            . . . . 4 5 4 4 5 4 5 4 . . . 
            . . . . 4 5 4 4 5 4 5 4 . . . 
            . . . . 4 5 4 5 5 4 5 4 . . . 
            . . . . 4 5 5 5 5 4 5 4 . . . 
            . . . . . 4 5 5 4 5 4 . . . . 
            . . . . . . 4 4 4 4 . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `],
        150,
        true
        )
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    changeLevel()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Reward, function (sprite, otherSprite) {
    if (Reward2.image.equals(img`
        . . b b b b b b b b b b b b . . 
        . b e 4 4 4 4 4 4 4 4 4 4 e b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b e e e e e c b b c e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `)) {
        info.changeScoreBy(10)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 5 5 . . . . . . . . . . . . 
            . 5 4 4 5 . . . . . . . . . . . 
            . 5 4 . 5 5 5 5 5 5 5 5 5 5 5 4 
            . 5 4 . 5 4 4 4 4 4 4 4 5 4 5 4 
            . . 5 5 4 . . . . . . . 5 4 . . 
            . . 4 4 . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, otherSprite, 0, -100)
        projectile.fy = 250
        projectile.destroy(effects.confetti, 500)
    }
    Reward2.setImage(img`
        . b b b b b b b b b b b b b b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b b b b b b b d d b b b b b b b 
        . b b b b b b c c b b b b b b . 
        b c c c c c b c c b c c c c c b 
        b c c c c c c b b c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b b b b b b b b b b b b b b b b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `)
})
function changeLevel () {
    clearGame()
    if (currentLevel == 0) {
        scene.setBackgroundImage(img`
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888111111111118888888888888888888888888888888888888881111888888888888888888888888888888888888888888111111111111
            88888888888888888888888888888888888888888888888888881fffffffff18888888888888888888888888881111188888881ff11888888888888888888888888888888888888888881ffffffffff1
            88888888888888888888888888888811111888888888888888881fffffffff18888888888888888888888888881fff188888881fff1888888888888888888881111888888888888888881ffffffffff1
            8888888888888888888888888888811fff1188888888888888881f11ffffff18888888888888888888888888111fff111888811fff1188888888888888888811ff1188888888888888881ff1f1fffff1
            888888888888888888888888888811fffff188888888888888881fffffff1f188888888111888888111111181fffffff188881fffff18888888888888888111ffff188888888888888881ffffff11ff1
            88888811118888888888888888881ffffff188811188888888881fffffffff1888888811f18888881fffff181fffffff188811fffff118888888888888881ffffff188811118888888881ffffffffff1
            8888881ff18888888888888888881fff1f118881f188888888881fffffffff188888881ff18888881fffff181fffffff188811fffff118888888888888881fff1f118881ff18888888881ffff1fffff1
            1111111ff18111111881111111111ffffff18111f111888888881fffffff1f111111111ff18888881fffff111f11ffff18111fffffff11111881111111111ffffff18811ff11888888881fffffff1ff1
            f11ffffff181f1ff1881fffffffffff1fff111fffff1111111111fffffff1f11f11fff1ff188888811ff1ff11fffffff181ffffffffff1ff1881fffffffffffff1f1111ffff1181111111ffffff11fff
            ffff1ffff181ffff18811f1ff1fffffffff111fffff111ff1ff11fffffffff11ffff1f1ff11111111ffffff11ff1ffff181fffffffffffff1881ff1fff1ffffffff1111ffff1181f11ff1fffffffffff
            fffffffff111ff1f1111ffffffffffffffff11ffffff11fffffffffffffffff1fffffffff11f11f11fffffffffffffff181fffffffffff1f1111ffffffffffffffff11ffffff111fffffffffffffffff
            f11f1ffff1fffffff1ff1f1fffffffffffff11fffffff1ffff11fffffffffffff1111fffffff1fff11ff1fffffffffff111fffffffffffffff1fff1fffffffffffff11fffffff111f11fffffffffffff
            fffffffff1fffffff1ffffffffffffffffffff1ffffff11fffffffffffffffffffffffffffff1fff1fffffffffffffff1d1fffffffffffffff1ffffffffffffffffffffffffff1ffffffffffffffffff
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            11ccccccccccc11cccccccccccc11ccccccccccc11ccccccccccc11cccccccccccc11ccccccccccc11ccccccccccc11cccccccccccc11ccccccccccc11ccccccccccc11cccccccccccc11ccccccccccc
            11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc
            11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd1111111d
            11ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d1111111
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbcbddbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            1111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd111
            111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbcbbcbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbddbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd1111111d111d1111d111dd11dd
            d11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11d
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd1111111d
            11ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d1111111
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbccbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
            bccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccc
            ccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbb
            bbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbddbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddb
            bbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111dd
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
            dbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbd
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            `)
        tiles.setTilemap(tilemap`level7`)
    } else if (currentLevel == 1) {
        scene.setBackgroundImage(img`
            99999999999999f99999999999999999999999f9999999999999999999f999999999999999999f999999999999999999f999999999999999999999f99999999999999999f99999999999999999999999
            99999999999999f99999999999999999999999f9999999999999999999f999999999999999999f999999999999999999f999999999999999999999f99999999999999999f99999999999999999999999
            999999999999999f999999999999999999999ff9999999999999999999f999999999999999999f999999999999999999f999999999999999999999f99999999999999999f99999999999999999999999
            999999999999999fff9999999999999999999f99999999999999999999f999999999999999999f999999999999999999f999999999999999999999f99999999999999999f99999999999999999999999
            99999999999999999f9999999999999999999f99999999999999999999f999999999999999999f999999999999999999f999999999999999999999f99999999999999999f99999999999999999999999
            99999999999999999f9999999999999999999f99999999999999999999f999999999999999999f999999999999999999f999999999999999999999f99999999999999999f99999999999999999999999
            99999999999999999f9999999999999999999f99999999999999999999f999999999999999999f999999999999999999f999999999999999999999f99999999999999999f99999999999999999999999
            99999999999999999f9999999999999999999f99999999999999999999f999999999999999999f999999999999999999f999999999999999999999f99999999999999999f99999999999999999999999
            9999999999d111d99f9999999999999999999f9999999999999111d999f999999999999999999ff999999999999111d9f999999999999999999999f99999999999d111d9f99999999999999999999999
            99999999d1111111df9999999999999999999f99999999999111111dd9f9999999999999999999f999999999d11111119f99999999999999999999ff99999999d1111111f99999999999999999999999
            9999999d111111111f9999999999999999999f9999999999111111111df9999999999999999999f99999999d111111111f999999999999999999999f9999999d11111111fd9999999999999999999999
            99999991111111111f9d111d9999999999999f999999999d1111111111fd111d99999999999999f999999991111111111f9d1119999999999999999f9999999111111111f19d111d9999999999999999
            999999d1111111111fd111111999999999999f999999999d1111111111f11111d9999999999999f9999999d1111111111fd11111199999999999999f999999d111111111f1d111111999999999999999
            99999dd11111111fffff11111d99d111111d9f9999999dd11111111111f111111d99d111111d99f999999dd1111111111f1111111d99d111111d999f99999dd1111111fffff111111d99d111111d9999
            99d11ddd1111111f555f11111dd1111111111f9999d11ddd1111111111f111111dd1111111111df999d11ddd11111111ffff11111dd1111111111d9f99d11ddd111111f555f111111dd1111111111d99
            9111111d11111155555555111d11111111111fd99111111d1111111111f111111d111111111111f99111111d11111111f22f11111d111111111111df9111111d11111555555551111d111111111111d9
            11111111d11115555555555111111111111fffff11111111d1111111fffff11111111111111111fd11111111d111112222222211111111111111111f11111111d111555555555511111111111111111d
            11111111111155555555555511111111111f333f3111111111111111f777f11111111111111111f1111111111111122222222222111111111111111f1111111111115555555555511111111111111111
            1111111111115555555555551111111113333333331111111111111777777771111111111111fffff11111111111122222222222211111111111111f1111111111155555555555551111111111111111
            1111111111155555555555555111111133333333333111111111117777777777111111111111f444f111111111112222222222222111111111111ffff111111111155555555555551111111111111111
            111111111115555555555555511111113333333333331111111111777777777771111111111444444444111111112222222222222211111111111f66f111111111155515555555551111111111111111
            1111111111155551555555555111111333333333333311111111117777777777711111111144444444444111111122212222222222111111111666666661111111155515555555551111111111111111
            1111111111155551555555555111111333333333333311111111177777777777711111111444444444444411111122212222222222111111116666666666611111155551555555551111111111111111
            1111111111155555155555555111111333333333333311111111177777777777711111111444444444444411111122221222222221111111116666666666611111155555555555511111111111111111
            1111111111115555555555551111111333133333333311111111177717777777711111111444444444444411111122222222222221111111116666666666661111115555555555511111111111111111
            1111111111111555555555551111111333133333333311111111177717777777711111111444444444444411111122222222222221111111116666666666661111111555555555511111111111111111
            1111111111111155555555511111111333313333333311111111177771777777711111111444144444444411111112222222222111111111166616666666661111111155555551111111111111111111
            1111111111111111555551111111111133333333333111111111117777777777711111111444144444444411111111222222221111111111166616666666661111111111111111111111111111111111
            1111111111111111111111111111111113333333331111111111117777777777711111111444414444444411111111111111111111111111166661666666661111111111111111111111111111111111
            1111111111111111111111111111111111133333311111111111111777777777111111111144444444444111111111111111111111111111166666666666611111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111117777771111111111114444444444111111111111111111111111111116666666666611111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111444444441111111111111111111111111111111666666666111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111166666661111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111116666611111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            dd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            9ddd11111dd11111111111111111111111111111111111111111111d11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            999dd111dd91111111111111111111111111111d11111111111111dd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            9999ddddd999d11111d11111111111111111111d11111111111111ddd11111111111111111111111111111111111111111111111111111111111111d1111111111111111111111111111111111111111
            999999999999d11111d1111111111111111111dd99111111111111d9d111111111111111111d111111111111d111111111d11111111111111111111d1111111dd1111111111111111111111111111111
            9999999999999999ddd111111111111111111dd9999dd11111119dd9ddddd11111111111111d11111111111d9ddd11111d111111111111111111111d999999999ddd9111111dd111111111d111111111
            999999999999999999d11911111111111111dd999999ddddddd999999999d1111111111111dd91111111111d999dddddd1111111111111111111111d999999999999999999999dddd11ddd9d11111111
            999999999999999999dd19111111111111ddd99999999999999999999999d111111111111dd99911111111d9999999999d11111111111111111111dd999999999999999999999999dddd999d11111111
            99999999999999999999d99911111111ddd999999999999999999999999999111111111dd9999999dddddd99999999999dd1111111111111111111d99999999999999999999999999999999dd1111111
            9999999999999999999999999dddddddd999999999999999999999999999999999dddddd99999999999999999999999999dd11111111111111111dd999999999999999999999999999999999ddddd111
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999d111111111111111dd999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddd111111111111dd9999999999999999999999999999999999999999999
            999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999d111111111111d99999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111199999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999999999999999999999999999999999999999999999999d9999999999999999999999999999999999999ddd999999999999999999999999999999999999999dd999999999
            99999999999999999999999999911dd99999999999999999999999999999999999911dd99999999999999999999999999999999999dd1dd999999999999999999999999999999999999dddddd9999999
            999999999999999999999999911111dddd9999999999999999999999999999999111111ddd9999999999999999999999999999999dd111ddd9999999999999999999999999999999dddd1111d9999999
            999999999999999999999999111111111dd99999999999999999999999999999111111111d999999999999999999999999999999dd111111dd99999999999999999999999999999dd1111111dd999999
            d999999999999999999999911111111111ddddd9999999999999999999999991111111111dd91119999999999999999999999991111111111d99111d99999999999999999999999d111111111d99111d
            d999999999999999999999911111111111d111111999999999999999999999911111111111d1111119999ddddddd999999999991111111111dd1111119999999999999999999999d111111111d911111
            d999ddddddddd999999999911111111111d111111999d111111d99999999d99111111111111111111999dd11111d999999999991111111111111111119999d11111d99999999dd9d1111111111111111
            dd9dd1111111dd9999ddddd911111111111d111119d111111111199999911dd9111111111111111119ddd111111119999991199d1111111111111111199d11111111d99999dddddd1111111111111111
            1d9d1111111111ddddd111dd11111111111111111d111111111111d99111111d111111111111111119d11111111111999111111d11111111111111111d111111111111999dd111dd1111111111111111
            1ddd11111111111d1111111d1111111111111111111111111111111d11111111d111111111111111111111111111111911111111d111111111111111111111111111111d11111111dd11111111222111
            11111112222221111111111111111111111111111111111111111111111111111d11111111111111111111111111111111111111d1111111111111111111111111111111111111111111112222222221
            11111122222222211111111111111111111111111111111111111144441111111d1111111111111111111111111111166666111111111111111111111111111111111111111111111111222222222222
            1111122222222222211111111111111111111111111111111111444444444411111111111111111111111111111111666666611111111111111111111111111111111111111111111111222222212222
            1111222222221222221111111111113333331111111111111111444444444411111111111111111111111111111116666666666111111111117777777711111111111111111111111112222222221222
            11112222222221222211111111111333333333111111111111144444444144411111111111111111111111111111666666616666111111117777777777711111111111aaaa1111111112222222221222
            111122222222212222111111111133333333333111111111111444444444144111111111111111111111111111116666666616666111111177777777777711111111aaaaaaaa11111112222222221222
            1112222222222222221111111113333333133333111111111144444444441444111111111115555511111111111166666666166661111111777777717777711111aaaaaaaaaaa1111112222222222222
            1112222222222222221111111113333333313333311111111144444444444444111111111155555555111111111166666666666661111117777777771777711111aaaaaaaaaaa1111112222222222222
            111222222222222221111111111333333331333331111111114444444444444411111111155555555551111111116666666666666111111777777777177771111aaaaaaa1aaaaa111112222222222222
            111222222222222221111111113333333333333331111111114444444444444411111111555555155551111111116666666666666111111777777777177771111aaaaaaaa1aaaa111112222222222222
            111122222222222211111111113333333333333331111111114444444444444411111115555555515551111111111666666666666111111777777777777771111aaaaaaaa1aaaa111111222222222222
            111122222222222111111111113333333333333331111111114444444444444411111115555555515555111111111666666666661111111777777777777771111aaaaaaaaaaaaa111111122222222222
            111111222222222111111111113333333333333331111111114444444444444111111115555555555555111111111116666666611111111777777777777771111aaaaaaaaaaaaa111111112222222222
            11111111f22f111111111111113333333333333331111111111444444444411111111115555555555555111111111111f666f1111111111177777777777711111aaaaaaaaaaaaa111111111222222221
            11111111ffff111111111111113333333333333311111111111111f444f1111111111115555555555555111111111111fffff11111111111177777777777111111aaaaaaaaaaaa11111111111f222f11
            1111111111f1111111111111111333333333333311111111111111fffff111111111111155555555555511111111111111f11111111111111111f777f111111111aaaaaaaaaaa111111111111fffff11
            1111111111f111111111111111111333333333311111111111111111f11111111111111155555555555511111111111111f11111111111111111fffff1111111111aaaaaaaaa111111111111111f1111
            1111111111f11111111111111111111f333f1111111111111111111ff11111111111111115555555555111111111111111ff111111111111111111f11111111111111faaaf11111111111111111f1111
            1111111111ff1111111111111111111fffff1111111111111111111f1111111111111111111f555f1111111111111111111f111111111111111111f11111111111111fffff11111111111111111f1111
            11111111111f111111111111111111111f111111111111111111111f1111111111111111111fffff1111111111111111111f111111111111111111f1111111111111111f1111111111111111111f1111
            11111111111f111111111111111111111f111111111111111111111f111111111111111111111f111111111111111111111f111111111111111111f1111111111111111ff111111111111111111f1111
            `)
        tiles.setTilemap(tilemap`level10`)
    } else if (currentLevel == 2) {
        scene.setBackgroundImage(img`
            3333333333333999999999999999999999999999999999999999999999999933333333333999999777777777777777777777777777777777777777777777777777777777777777777777777777777777
            3333333333333999999999999999999999999999999999999999999999999933333333333999999777777777777777777777777777777777777777777777777777777777777777777777777777777777
            3333333333333399999999999999999999999999999999999999999999999933333333333999999777777777777777777777777777777777777777777777777777777777777777777777777777777777
            3333333333333399999999999999999999999999999999999999999999999933333333333999999777777777777777777777777777777777777777777777777777777777777777777777777777777777
            3333333333333399999999999999999999999999999999999999999999999933333333333999999777777777777777777777777777777777777777777777777777777777777777777777777777777777
            3333333333333399999999999999999999999999999999999999999999999933333333333999999777777777777777777777777777777777777777777777777777777777777777777777777777777777
            3333333333333399999999999999999999999999999999999999999999999993333333339999999777777777777777777777777777777777777777777777777777777777777777777777777777777777
            3333333333333399999999999999999999999999999999999999999999999999333333399999999777777777777777777777777777777777777777777777777777777777777777777777777777777777
            3333333333333399999999999999999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777
            3333333333333399999999999999999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777
            3333333333333399999999999999999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777
            3333333333333999999999999999999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777
            3333333333333999999999999999999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777
            3333333333339999999999999999999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777
            3333333333399999999999999999999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777
            3333333333999999999999999999999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777
            3333333399999999999999999999999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999999333333399999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999933333333333999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999333333333333399999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999333333333333399999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999993333333333333339999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999993333333333333339999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999993333333333333339999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999993333333333333339999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999993333333333333339999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999993333333333333339999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999993333333333333339999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999333333333333399999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999333333333333399999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999933333333333999999999999999999999999999991111111111111117777777777777777777777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999999333333399999999999999999999999999991111111111111111111117777777777777777777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111177777777777777777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111117777777777777777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111177777777777777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111117777777777777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111177777777777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111117777777777777777777777777777777777777777777777777777777777777
            9999933333999999999999999999999999999999999999999999933333311111188888888888811111118888888888811111777777777777777777777777777777777777777777777777777777777777
            9999333333399999999999999999999999999999999999999993333333111111888888888888881111188888888888881111177777777777777777777777777777777777777777777777777777777777
            9999333333399999999999999999999999999999999999999933333333111111888888888888888111188888888888888111177777777777777777777777777777777777777777777777777777777777
            9999333333399999999999999999999999999999999999999333333331111111888888888888888111888888888888888111117777777777777777777777777777777777777777777777777777777777
            9999333333399999999999999999999999999999999999999333333311111118888888888888888818888888888888888111111777777777777777777777777777777777777777777777777777777777
            9999333333399999999999999999999999999999999999993333333311111118888888888888888888888888888888888111111777777777777777777777777777777777777777777777777777777777
            9999933333999999999999999999999999999999999999993333333111111118888888888888888888888888888888888811111177777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999999999999999999993333333111111188888888888888888888888888888888888811111177777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999999999999999999993333333111111188888888888888888888888888888888888811111177777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999999999999999999993333331111111188888888888888111118888888888888888811111117777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999999999999999999993333331111111188888888888111111111111888888888888881111117777777777777777777777777777777777777777777777777777777
            99999999999999999999999999999999999999999999999933333311111118888888888111111fffff111111888888888881111117777777777777777777777777777777777777777777777777777777
            99999999999999999999999999999999999999999999999933333311111118888888811111111fffff111111118888888881111117777777777777777777777777777777777777777777777777777777
            99999999999999999999999999999999999999999999999933333311111118888888111111111fffff111111111888888881111117777777777777777777777777777777777777777777777777777777
            99999999999999999999999999999999999999999999999993333311111188888888111111111fffff111111188888888888111117777777777777777777777777777777777777777777777777777777
            99999999999999999999999999999999999999999999999993333311111188888888888111111fffff111188888888888888111117777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999999999999999999999933331111118888888888888811111111118888888888888888111117777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999999999999999999999993331111188888888888888888881118888888888888888888111117777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999999999999999999999999931111188888888888888888888888888888888888888888111117777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999999999999999999999999991111188888888888888888888888888888888888888888811117777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999999999999999999999999991111888888888888888888888888888888888888888888811117777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999999999999999999999999991111888888888888888888888888888888888888888888811117777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999999999999999999999999991111888888888888888888888888888888888888888888811117777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999999999999999999999999991111888888888888888888888888888888888888888888881117777777777777777777777777777777777777777777777777777777
            9999999999999999999933333339999999999999999999999999999118888888888888888818888888881888888888888888881177777777777777777777777777777777777777777777777777777777
            9999999999999999999333333333999999999999999999999999999118888888888888888818888888881888888888888888881177777777777777777777777777777777777777777777777777777777
            9999999999999999993333333333399999999999999999999999999118888888888888888811888888811888888888888888881177777777777777777777777777777777777777777777777777777777
            9999999999999999993333333333399999999999999999999999999918888888888888888811188888111888888888888888881777777777777777777777777777777777777777777777777777777777
            9999999999999999993333333333399999999999999999999999999911111111111111111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777
            9999999999999999993333333333399999999999999999999999999991111111111111111111111111111111111111111111117777777777777777777777777777777777777777777777777777777777
            9999999999999999993333333333399999999999999999999999999999111111111111111111111111111111111111111111177777777777777777777777777777777777777777777777777777777777
            9999999999999999993333333333399999999999999999999999999999111111111111111111111111111111111111111111177777777777777777777777777777777777777777777777777777777777
            9999999999999999993333333333399999999999999999999999999999911111111111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777
            9999999999999999999333333333999999999999999999999999999999991111111111111111111111111111111111111117777777777777777777777777777777777777777777777777777777777777
            9999999999999999999933333339999999999999999999999999999999999111111111111111111111111111111111111177777777777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111117777777777777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111177777777777777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111117777777777777777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111177777777777777777777777777777777777777777777777777777777777777777777
            9999999999999999999999999999999999999999999999999999999999999999999991111111111111111111117777777777777777777777777777777777777777777777777777777777777777777777
            999999aaaaaaaaaaaaaaaaaa9999999993333333333333333399999999999999999999991111111111111117777777777777777777777777777777777777777777777777777777777777777777777777
            999999aaaaaaaaaaaaaaaaaa9999999993333333333333333399999999777777777777777799999777777772222222222222222777777777999999999999999999777777778888888888888888877777
            999999aaaaaaaaaaaaaaaaaa9999999993bbbbbbbbbbbbbbb399999999777777777777777799999777777772222222222222222777777777999999999999999999777777778888888888888888877777
            999999aaaaaaaaaaaaaaaaaa9999999993b3333333333333b399999999777777777777777799999777777772222222222222222777777777999999999999999999777777778888888888888888877777
            999999aaccccccaaaaaaaaaa9999999993b3333333333333b399999999777777777777777799999777777772222222222222222777777777996666999666699999777777778888888888888888877777
            999999aacaaaacaacccccaaa9999999993b3333333333333b399999999766666776666677799999777777772222222222222222777777777996996999699699999777777778886666666666888877777
            999999aacaaaacaacaaacaaa9999999993b333bbbbbbbb33b399999999767776776777677799999777777772225555555555222777777777996996999699699999777777778886888888886888877777
            999999aacaaaacaacaaacaaa9999999993b333b333333b33b399999999767776776777677799999777777772225555555555222777777777996996999699699999777777778886888888886888877777
            999999aacaaaacaacaaacaaa9999999993b333b333333b33b399999999767776776777677799999777777772225555555555222777777777996996999699699999777777778886888888886888877777
            999999aacaaaacaacaaacaaa9999999993b333b333333b33b399999999767776776777677799999777777772225555555555222777777777996996999699699999777777778886888888886888877777
            999999aacaaaacaacaaacaaa9999999993b333b333333b33b399999999767776776777677799999777777772225555555555222777777777996996999699699999777777778886888888886888877777
            999999aacaaaacaacaaacaaa9999999993b333b333333b33b399999999767776776777677799999777777772225555555555222777777777996996999699699999777777778886888888886888877777
            999999aacaaaacaacaaacaaa9999999993b333b333333b33b399999999767776776777677799999777777772222222222222222777777777996996999699699999777777778886888888886888877777
            999999aacaaaacaacaaacaaa9999999993b333b333333b33b399999999767776776777677799999777777772222222222222222777777777996996999699699999777777778886888888886888877777
            999999aacaaaacaacaaacaaa9999999993b333b333333b33b399999999767776776777677799999777777772225555555555222777777777996996999699699999777777778886888888886888877777
            999999aacaaaacaacaaacaaa9999999993b333b333333b33b399999933767776776777677799999777777772225555555555222777777777996996999699699999777777778886888888886888877777
            999999aacaaaacaacaaacaaa9999999993b333b333333b33b399999333767776776777677799999777777772225555555555222777777777996996999699699999777777778886888888886888877777
            999999aacaaaacaacaaacaaa9999999993b333b333333bfff399993333767776776777677799999777777772225555555555222777777777996666999666699999777777778886888888886888877777
            999999aacaaaacaacccccaaa9999999993b333b333333bfbf399993333767776776777677799999777777772225555555fff222777777777999999999999999999777777778886666666666888877777
            333333aaccccccaaaaafffaa9999999993b333b333333bfff3999933337677767767776fff99999777777772225555555f5f22277777777799999999999999fff9777777778888888888888888877777
            333333aaaaaaaaaaaaafcfaa9999999993b333b333333b33b3999933337677767767776f6f99999777777772225555555fff22277777777799966669966669f6f9777777778888888888886668877777
            333333aaaaaaaaaaaaafffaa9999999993b333b333333b33b3999933337677767767776fff9999977777777222555555555522277777777799969969969969fff9777777778888888888886868877777
            333333aaaaaaaaaaaaaaaaaa9999999993b333b333333b33b399993333767776776777677799999777777772225555555555222777777777999699699699699999777777778888888888886668877777
            333333aacccccaacccccaaaa9999999993b333b333333b33b399993333767776776777677799999777777772225555555555222777777777999699699699699999777777778888666666668888877777
            333333aacaaacaacaaacaaaa9999999993b333b333333b33b399999333767776776777677799999777777772222222222222222777777777999699699699699999777777778888688888868888877777
            333333aacaaacaacaaacaaaa9999999993b333b333333b33b399999933767776776777677799999777777772222222222222222777777777999666699666699999777777778888688888868888877777
            333333aacaaacaacaaacaaaa9999999993b333b333333b33b399999999767776776777677799999777777772225555555555222777777777999999999999999999777777778888688888868888877777
            333333aacaaacaacaaacaaaa9999999993b333b333333b33b399999999767776776777677799999777777772225555555555222777777777999999999999999999777777778888688888868888877777
            333333aacaaacaacaaacaaaa9999999993b333b333333b33b399999999767776776777677799999777777772225555555555222777777777996666699666699999777777778888688888868888877777
            333333aacaaacaacaaacaaaa9999999993b333b333333b33b399999999767776776777677799999777777772225555555555222777777777996999699699699999777777778888688888868888877777
            333333aacaaacaacaaacaaaa9999999993b333b333333b33b399999999767776776777677799999777777772225555555555222777777777996999699699699999777777778888688888868888877777
            333333aacaaacaacaaacaaaa9999999993b333bbbbbbbb33b399999999767776776777677799999777777772225555555555222777777777996999699699699999777777778888688888868888877777
            333333aacccccaacccccaaaa9999999993b3333333333333b399999999766666776666677799999777777772225555555555222777777777996999699699699999777777778888688888868888877777
            333333aaaaaaaaaaaaaaaaaa9999999993bbbbbbbbbbbbbbb399999999777777777777777799999777777772222222222222222777777777996666699666699999777777778888666666668888877777
            333333aaaaaaaaaaaaaaaaaa9999999993333333333333333399999999777777777777777799999777777772222222222222222777777777999999999999999999777777778888888888888888877777
            `)
        tiles.setTilemap(tilemap`level9`)
    } else if (currentLevel == 3) {
        scene.setBackgroundImage(img`
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888899988888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888898988888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888899988888888888811111111111888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888898888888811111ffffffff11118888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888811ffff444444fff118888888888888888888888888888888888888888888888888888888
            888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888899988888888888881ff44444444444ff11888888888888888888888888888888888888888888888888888888
            888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888898988888888888881f4444444444444ff1888888888888888888888888888888888888888888888888888888
            888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888899988888888888881f44444444444444f1888888888888888888888888888888888888888888888888888888
            888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881f44444444444444f1888888888888888888888888888888888888888888888888888888
            888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889998888888881f44444444444444f1888888888888888888888888888888888888888888888888888888
            888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889898888888811f44444444444444f1888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888899988888811fff44444444444444f1888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888811fff4444444444444444fff88888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888811ff44444444444444444f11ffff88111111111111888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888999888881fff44444444444444444ff11111ff81fffffffff11188888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888989888811f4444444444444444444f1111111ffff4444444ff1188888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888899988881ffffffff444444444444ff1111111111f44444444ff118888888888888888888888888888888888
            888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889988881ff4f1111f444444444444f11111111111f444444444ff18888888888888888888888888888888888
            888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881f44fff11f444444444444f11111111111f4444444444f18888888888888888888888888888888888
            888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888999888888811f44fff11ff44444444444f11111111111f4444444444f18888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888898988888881ff44ff1111f444444444fff1ffff111111f444444444ff18888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888899988888881f444f1111ff444444444f11ff44f111111f444444444f118888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881f444ffffff4444444444fff4444ff11111f44444444ff188888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881f444444444444444444444444444f1111ff44444444f18888888844f1188888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881f444444444444444444444444444ff111f444444444f18888884444ff118888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881f4444444444444444444444444444f111f444444444f11f444444444ff18888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881f4444444444444444444444444444f111f444444444f11f4444444444f11888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881f444444444444444444fff4444444f111f444444444f11f4444444444ff1888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881ff44444444444444444f1f4444444f11ff444444444f11f4444444444ff1888888888888888888888
            888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888811fff444444444444444f1ff444444f11f4444444444f11f4444444444f11888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888811ff4444444444444ff11ff4444ff11f444444444ff11f444444444ff18888888888888888888888
            888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888811fff44444444444f1111ff4fff111f444444444f118888884444ff118888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888811ffff44444444f11111fff1111ff44444444ff118888888844f1188888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888111ffffff444f11111111111ff444444444f188888888888888888888888888888888888888
            888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881111ffffff11111111111f44444444fff188888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888111111ffff11111111f4444fffff11888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffff111118888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881111111188888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            888888888888888888888d8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            888888888888888888888d8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888e8888888d8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888e8888888d8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888e8888888d8888e88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888ee88888dd8888e88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888888888888eee888d8888ee88888888888888888888888888888888888888888888888888888888888999888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888e88dd888ee888888888888888888888888888888888888888888888888888888888888989888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888ee8d8888e8888888888888888888888888888888888888888888888888888888888888999888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888d88888888888e8d888ee8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888d8e888888888ed8888e888d8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888d8e888888888ee8888e88dd8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bb8888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88888d8ee8888ee888eeeeee88d888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b8888888888888888888888888888888888888888888888888888888888888888888888888a88888888
            8888dd88e88888e888888ee888d888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b8888888888888888888888888888888888888888888888888888888888888888888888888a88888888
            88e8d888e88888e888888ee888d888888888888888888888888888888888888888888888888888888899988899988888888888888888888888888b8888888888888888888888888888888888888888888888888888888888888888888888888a8888888a
            88ed8888ee8888e888888e888dd88888888888888888888888888888888ee8888888888888888888889898889898888888888888888888888888bb8888888888888888bb8888888888888888888888888888888888888888888888888888888aa888888a
            88e888888e8888e888888edddd888888888888888888888888888e888888e8888888888888888888889998889998888888888888888888888888b88888899988b888888b88888888888888888888888888888888888888888888888888888888aa88888a
            88eee8888e8888ee88888e8888888888888888888888888888888e888888e8888888888888884488888888888998888888888888888888888bb8b8888889898bb998888b88888888888888888888888888888888888888888888888888888888aaaa888a
            8888ee888e88888e88888e888888888888888888888888888888ee888888e8888844888888884888888888888888888888888888888888888bbbb8888889998b898988bb888888888888888888888888888888888888888888888888888888888aaaaaaa
            88888eee8e88d888ee88ee88888888888888888888888888888ee8888888e88844888888888448888888888888888888888888888888888888bbb8888888988bb9998bb88888888888888888888888888888888888888888888888888888888888aaaaaa
            8888888eee88d8888eeee888888888888888888888888884888e88888888e88448888888888488898888889998888888888888888888888888bbb88888888888bb888b88888888888888888888888888888888888888888888888888888888888888888a
            88888888e888d888888e8888d8888888888888888888888488e888888888ee4488888888e844888999888898998888888888888888888888888bb888888888888bbbbb88888888888888888888888888888888888888888888888888aa8888888a888888
            88888888e888dd8888ee888dd888888888888888888888844ee8888888888e8888888888e4488889898888999988888888888888888888888888bb99988888b8888b8888888888888888888888888888888888888888888888888888a88888888aa8888a
            8888888ee8888d888ee8888d8888888888888888888888884e88888888888e882888888e88888889998888888888888888888888888888888888bb98988888b8888b8888888888888888888888888888888888888888888888888888a888888888a8888a
            8e88888e88888dd88e88888dd888888888888888888888884488888888888e88288888ee888888888889998888888888888888888888888888888b99988b88b8888b8888888888888888888888888888888888888888888888888888a888888888a8888a
            8ee8888e888888dee88888888d88e88888888888888828888488888888888e8828888ee88888888888898988888888888888888888888b8888888b88888b88b888bb888888888888888888888888888888888888888888888888888aa88a888a88aa888a
            88ee888e8888888e88888888dd8ee88888888888888822888448888888888ee82288ee888888888888899988888888888888888888888bb888999b888bbb88b99bb888888888888888888888888888888888888888888888888aaa8aa88a88aa888aaa8a
            888eee8ee88888e888888888d88e8888888888888888828888488888884888e8822ee8888888488888888888888888888888888888888bb888989b88bb8888b89b8888888888888888888888888888888888888888888888a888aaaa888a88a8888a8a8a
            88888eeee8888e8888888888d88e8888888888888888822888ee8888884888e8882888888888488888888888888888888888888888888bb888999b88bbb888b9bb8888888888888888888888888888888888888888888888a888a8aa888a8aa8888aaa88
            88dd8888e8888e8888888888d8ee88888888888888888822888e8888848888e88882888888884888882888888888888888888888888888b88888bb888bb888bbb88bbbbb8888888888888888888888888888888888888888a888aaaa888a8a8888888a88
            888d8888e8888e88888888e8d8e888888888888888888882288ee888848888e88882288888884888822888888888888888888888888888bb8888bbb88b88bbbbbbbb8888888888888888888888888888888888888888888aa8888a8a888aaa888888aa88
            888dd888e8888e8888888eeeee88888888888888888888882222ee884488884888882288888448882288888888888888888888888888888bbbbbb8bbbb8bbbb888888888888888888888888888888888888888888aa8888a8888888a888aa8888888aa88
            8888ddddee888e8888888e88ee888888888888888888888888888e884888884888888228e8848882288888888888888888888888888888888bbbb8bbbb8bbbb8b8888888888888888888888888888888888888886aaa88aa8888888a888a88888888aaa8
            888888888e888e88888eee8888888888888888888888888888888ee8488884488888882ee8848822888888888888888888888888888888888bbbb8bbbb8bbbb8b888888888888888888888888888888888888866688aaaa88888888a888a8888aa88aaa8
            888888888e888e888eee8888888888888888888888888888888888e848888488888888ee88448228888888888888888888888888888888b88bbbb8bbbb8bbbbbb8888888888888888888888888886888888886666888aaaa8888888a888aa88aaa8888a8
            8888888888e88e88ee8888888888888888888888888888888e88882488888448888888e888422888888877778888888888888888888888b88bbbb8bbbb8bbbbb8888888888888888888888888886668888888666688888aaaaa888aa888aa88aaa8888a8
            8888888888e8eee8e88888888888888888888888888888888ee888248888884888888e44444e8888888876677888888888888888888888bb8bbbb8bbbb8bbbb888888888888888888888888888866668888866668888888888aa88aa888aaa8aaa8888a8
            8888888888e8eee8e888888888888888888888888888888888ee8882888888488888ee88888e88888888776677888888888888888888888bbbbbb8bbbb8bbbb888888888888888888888888888866668888866568888888888aaa8aaa8aaaa8aaa8888a8
            8888888888eeee88e8888888888888888888888888888888888ee888288888488888e88888ee888888887776778888888888888888888888bbbbb8bbbb8bbbb8888888888888888888888888888866668886655688aa8888888aa8aaa8aaaa8aaaaaaaa8
            8888888888eeee88ee8888888888888888888888888888888888ee8822888848888ee88888e88888888887767788888888888888888888888bbbb8bbbb8bbbb8888888888888888888888886688866568886656688aaaa88888aa8aaa8aaaaaaaaaaabba
            88888888eeee8e88ee8ccc8888888888888888888888888888888e888228884888ee88888ee88777888888767788888888888888888888888bbbb8bbbb8bbbb8888888888888888888888888668866566866556688aaaaaaaaaaaaaaaccccccaaaaaaabb
            88888888eee88e88ee8ccccccc888888888888888888888888888eeeee2288448ee88888e8888777888888777888888888888888888888888bbbb8bbbb8bbbb888888888888888888888888666686656666556688888aa888888aaaaaacccccaaaaaaabb
            8888888eeee88e8eecccccccc888888888888888888888888888888888822884ee88888ee8888767888888777888888888888888888888888bbbb8bbbb8bbbb888888888888888888888888866688655665666888888888888888aaaaccccccaaaaaaaab
            8888b888ee888eeeecccccccc8888888888888888888cc888888888888882884e88888ee88888766788888778888777888888888888888888bbbb8bbbb8bbbb88888888888888888888888888666666555566888888888888888888aaacccccaaaaaaaab
            888bb888ee88eeeeeccccccc6888888888888888888cccc8888888888888228e8888eee888888776787777778887777888888888888888888bbbb8bbbb8bbbb888888888888888888888888888666555556688866888886668888888accccccaaaaaaaab
            888b8888eeeeeeeeeecccccc668888888a88888888ccccc888aaaa888888822e88eee88888888876677667788877767888888888c88888888bbbb8bbbb8bbbb888888888888888888888888888886666656886666688866688888888accccccaaaaaaaab
            8bbb8888eeeeeeeeeccccccc66668888aaa888ccccccccc88aaaaaa888888eeeeee888aa8aaa887767776778877766788888888cc88888c88bbbb8bbbb8bbbb888888888888888888888888663333666556888665668866688888888accccccccaaaabbb
            8bbbb8888eeeeeeecccccccc66668888aaaa8cccccccc8c88aaaaaaaa88eeeee888888aa8aa888876777678887766788888888ccc88888cccccbb8bbbc8bbbb8888888ccc88888888888833666633366566888865668666888888888acccccccccaacbbb
            bbbbbb88beeeeeeecccccccc666688aaaaaaccccccccc8cc8aaaaaaaa8eeeeeee88888aaaaa888876776677777667788833888ccc88c88ccccccb8bbbccbbbb888888ccccc8888aaa883333666663366566688865556656888888888aeeeeeeecccccbbb
            bbbbbbbbbbbbeeeccccccccc666688aaaaaaaaccccccca888aaabbabbbeeeeeeee8bbb88aa88aa776776777776677333333888ccccccc8ccccccb8cbcccbbbbccccccccccc8888aaaaaaa33366666666566688886655556bbbbb8888aeeeeeeeeeccccbb
            bbbbbbbbbbbbeeeccccccccc66666aaaaaaaaaacccacaaccbbbbbbbbbeeeeeeeeebbb888aa88aa77677677777673333333338cccccccc8ccccccc8cbcccbbbbcccccccccc8888aaaaaaaa3333366665556668888866566bbbbbbb88eeeeeeeeeeeecccbb
            bbbbbbbbbebbbeeccccccccc66666aaaaaaaaaacccaaacccbbbbbbbbeeeeeeeeee88bbaaaaaaaa77677677776677333333388cccccccccccccccccccccccbcbcccccccccc888cccaaaaaaa33333666655566888886556bbbbbbbbbeeeeeeeeeeeeecccbb
            bbbbbbbbbeeebeecccccccccc666aaaaaaaaaaacccacccccbbbbbbb88eeeeeeee88bbbaaaaaaaa7767766777677733333333ccccccccccccccccccccccccccccccccccccccccccccaaaaaa33333366666566888866566bbbbbbbbbbeeeeeeeeeeeeebbbb
            bbbbbbbbbbeeeeeccccccccccc66aaaaaaaaaaacccacacccbbbbbbb8eeeeeeeeeebbbbaaaaaaaaa767776777677733333333ccccccccccccccccccccccccccccccccccccccccccccaaaaaa3333333366656666666656bbbbbbbbbbbeeeeeeeeeeeeebbbb
            `)
        tiles.setTilemap(tilemap`level6`)
    } else if (currentLevel == 4) {
        game.over(true)
    }
    createPlayer()
    createEnemy()
    createCoin()
    createReward()
}
function clearGame () {
    for (let value2 of sprites.allOfKind(SpriteKind.Enemy)) {
        value2.destroy()
    }
    for (let value3 of sprites.allOfKind(SpriteKind.Coin)) {
        value3.destroy()
    }
    for (let value4 of sprites.allOfKind(SpriteKind.Reward)) {
        value4.destroy()
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile13, function (sprite, location) {
    changeLevel()
})
function createEnemy () {
    for (let value22 of tiles.getTilesByType(assets.tile`myTile3`)) {
        mySprite2 = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        tiles.placeOnTile(mySprite2, value22)
        tiles.setTileAt(value22, assets.tile`transparency16`)
        animation.runImageAnimation(
        mySprite2,
        [img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111ffff.....
            ......fffcdb1bc111cf....
            ....fc111cbfbf1b1b1f....
            ....f1b1b1ffffbfbfbf....
            ....fbfbfffffff.........
            .........fffff..........
            ..........fff...........
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .....ffff111111bf.......
            ....fc111cdb1bdfff......
            ....f1b1bcbfbfc111cf....
            ....fbfbfbffff1b1b1f....
            .........fffffffbfbf....
            ..........fffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `],
        500,
        true
        )
    }
}
function createReward () {
    for (let value32 of tiles.getTilesByType(sprites.dungeon.chestClosed)) {
        Reward2 = sprites.create(img`
            . . b b b b b b b b b b b b . . 
            . b e 4 4 4 4 4 4 4 4 4 4 e b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b b b b b b b d d b b b b b b b 
            c b b b b b b c c b b b b b b c 
            c c c c c c b c c b c c c c c c 
            b e e e e e c b b c e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `, SpriteKind.Reward)
        tiles.placeOnTile(Reward2, value32)
        tiles.setTileAt(value32, assets.tile`transparency16`)
    }
}
info.onLifeZero(function () {
    if (currentLevel <= 3) {
        changeLevel()
    }
})
function createPlayer () {
    controller.moveSprite(mySprite, 100, 0)
    mySprite.ay = gravity
    scene.cameraFollowSprite(mySprite)
    mySprite.z = 5
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
    info.setLife(3)
    info.setScore(0)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite.vy > 0 && !(sprite.isHittingTile(CollisionDirection.Bottom)) || sprite.y < otherSprite.top) {
        otherSprite.destroy(effects.ashes, 250)
        otherSprite.vy = -50
        sprite.vy = -2 * pixelsToMeters
        info.changeScoreBy(1)
    } else {
        info.changeLifeBy(-1)
        sprite.sayText("Ow!", invincibilityPeriod, false)
    }
    pause(invincibilityPeriod)
})
let mySprite2: Sprite = null
let projectile: Sprite = null
let mySprite3: Sprite = null
let Reward2: Sprite = null
let currentLevel = 0
let gravity = 0
let pixelsToMeters = 0
let invincibilityPeriod = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . . f f d d d d d d f f . . 
    . . e f e 4 4 4 4 e f e . . 
    . e 4 f b 3 3 3 3 b f 4 e . 
    . 4 d f 3 3 3 3 3 3 c d 4 . 
    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.Player)
invincibilityPeriod = 600
pixelsToMeters = 30
gravity = 9.81 * pixelsToMeters
let levelCount = 4
currentLevel = 0
changeLevel()
showIntro()
game.onUpdate(function () {
    if (controller.left.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . 
            . . . . f f f f f . f f f . 
            . . . f f c c c c f f f f f 
            . . f c c c c c c b f f f f 
            . . f c c c c c c 3 c f f f 
            . f c c c c c c c c 3 3 f . 
            . f c c 4 c c c c c f f f . 
            . f f c 4 4 c c c f f f f . 
            . f f f 4 4 f b f 4 4 f f . 
            . . f f d d f 1 4 d 4 f . . 
            . . . f d d d e e f f f . . 
            . . . f e 4 e d d 4 f . . . 
            . . . f 3 3 e d d e f . . . 
            . . f f 6 6 f e e f f f . . 
            . . f f f f f f f f f f . . 
            . . . f f f . . . f f . . . 
            `,img`
            . . . . . . . . . . . . . . 
            . . . . f f f f f . f f f . 
            . . . f f c c c c f f f f f 
            . . f c c c c c c b f f f f 
            . . f c c c c c c 3 c f f f 
            . f c c c c c c c c 3 3 f . 
            . f c c 4 c c c c c f f f . 
            . f f c 4 4 c c c f f f f . 
            . f f f 4 4 f b f 4 4 f f . 
            . . f c d d f 1 4 d 4 f f . 
            . . . f d d d d 4 f f f . . 
            . . . f e 4 4 4 e d d 4 . . 
            . . . f 3 3 3 3 e d d e . . 
            . . f f 6 6 6 6 f e e f . . 
            . . f f f f f f f f f f . . 
            . . . f f f . . . f f . . . 
            `,img`
            . . . . f f f f f . f f f . 
            . . . f f c c c c f f f f f 
            . . f c c c c c c b f f f f 
            . . f c c c c c c 3 c f f f 
            . f c c c c c c c c 3 3 f . 
            . f c c 4 c c c c c f f f . 
            . f f e 4 4 c c c f f f f . 
            . f f e 4 4 f b f 4 4 f f . 
            . . f f d d f 1 4 d 4 f . . 
            . . . f d d d d 4 f f f . . 
            . . . f e 4 4 4 e e f . . . 
            . . . f 3 3 3 e d d 4 . . . 
            . . . f 3 3 3 e d d e . . . 
            . . . f 6 6 6 f e e f . . . 
            . . . . f f f f f f . . . . 
            . . . . . . f f f . . . . . 
            `],
        100,
        false
        )
    } else if (controller.right.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . 
            . f f f . f f f f f . . . . 
            f f f f f c c c c f f . . . 
            f f f f b c c c c c c f . . 
            f f f c 3 c c c c c c f . . 
            . f 3 3 c c c c c c c c f . 
            . f f f c c c c c 4 c c f . 
            . f f f f c c c 4 4 c f f . 
            . f f 4 4 f b f 4 4 f f f . 
            . f f 4 d 4 1 f d d c f . . 
            . . f f f 4 d d d d f . . . 
            . . 4 d d e 4 4 4 e f . . . 
            . . e d d e 3 3 3 3 f . . . 
            . . f e e f 6 6 6 6 f f . . 
            . . f f f f f f f f f f . . 
            . . . f f . . . f f f . . . 
            `,img`
            . . . . . . . . . . . . . . 
            . f f f . f f f f f . . . . 
            f f f f f c c c c f f . . . 
            f f f f b c c c c c c f . . 
            f f f c 3 c c c c c c f . . 
            . f 3 3 c c c c c c c c f . 
            . f f f c c c c c 4 c c f . 
            . f f f f c c c 4 4 c f f . 
            . f f 4 4 f b f 4 4 f f f . 
            . . f 4 d 4 1 f d d f f . . 
            . . f f f e e d d d f . . . 
            . . . f 4 d d e 4 e f . . . 
            . . . f e d d e 3 3 f . . . 
            . . f f f e e f 6 6 f f . . 
            . . f f f f f f f f f f . . 
            . . . f f . . . f f f . . . 
            `,img`
            . f f f . f f f f f . . . . 
            f f f f f c c c c f f . . . 
            f f f f b c c c c c c f . . 
            f f f c 3 c c c c c c f . . 
            . f 3 3 c c c c c c c c f . 
            . f f f c c c c c 4 c c f . 
            . f f f f c c c 4 4 e f f . 
            . f f 4 4 f b f 4 4 e f f . 
            . . f 4 d 4 1 f d d f f . . 
            . . f f f 4 d d d d f . . . 
            . . . f e e 4 4 4 e f . . . 
            . . . 4 d d e 3 3 3 f . . . 
            . . . e d d e 3 3 3 f . . . 
            . . . f e e f 6 6 6 f . . . 
            . . . . f f f f f f . . . . 
            . . . . . f f f . . . . . . 
            `],
        100,
        false
        )
    }
})
