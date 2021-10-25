// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`3000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0c0c00000000000000000000000000000000000000000000000000000000000c0b000000000000000000000000000010080700000b0000000000000000000000000000000000000000000000000c0010070c00000000000000000000000000000000000006000000000000000000000000000000000000000000000c0006000000060000000000000000000000000000000006000000000000000000000000000000000000000000000c00060000000000000c0000000000000000000b0c13000600000b0b000b001100000000000000000000000000000c0006000000000000000006000000000000000010080808080f0f0f0f0e0d0108080000000000000000000000000c00060000000000000000000c000000000000000006000000000000000000000d000000000000000000000b00000c00060000000000000000000000060000000000000b0600000000000c00000000000d00000000000000000001080808080000000000000c000000000000000c00000000000600000c00000c000c000000000d0000000000000000060c0c0c0c05000000000000000000000000000006000000000600000c000c00000c00000000000d00000000000000060b0c000000000000000000060006000000000b000000000b01000000000c0000001300000000000d1314000108080808080808080808080808090202020202010808080808080808090a0a0a0a0a0a0a0a0a120a0a0a0a0a120a0a000000000000000000000000000000030202020400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
................................................
................................................
................................................
......................................222.......
......................22...................2....
....................2...2................2......
..................2....................2........
................2........2........2222222222.222
..............2..................2..............
............2...........2.......................
......22222....................2................
.....2....2..............2....2.................
....2...........2.2..........2..................
222222222222222.....2222222222222222222222222222
...............22222............................
................................................
`, [myTiles.transparency16,sprites.builtin.forestTiles1,sprites.swamp.swampTile13,sprites.swamp.swampTile12,sprites.swamp.swampTile14,sprites.builtin.forestTiles4,sprites.builtin.forestTiles0,sprites.builtin.forestTiles23,sprites.builtin.forestTiles22,sprites.builtin.forestTiles20,sprites.builtin.forestTiles28,sprites.swamp.swampTile3,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.stairSouth,sprites.builtin.forestTiles3,sprites.builtin.forestTiles2,sprites.builtin.forestTiles21,myTiles.tile3,sprites.builtin.forestTiles25,myTiles.tile5,sprites.dungeon.chestClosed], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile3":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
