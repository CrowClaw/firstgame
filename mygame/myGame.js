/* global Phaser */
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var platforms;

function preload() {
    game.load.image('sky', 'assets/sky.png');
    game.load.image('ground', 'assets/platform.png');
    game.load.image('star', 'assets/star.png');
    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
}

function create() {
    game.physics.startSystems(Phaser.Physics.Arc)
    game.add.sprite(0,0, 'sky');
    game.add.sprite(0,0, 'star');

    
}

function update() {
    platforms = game.add.group();
    platforms.enableBody = true
    var ground = platforms.create(0, game.world.height - 64, 'ground');
    ground.scale .setTo(2 , 2)
    ground.body.immovable = true;
    var ledge = platforms.create(250,450, 'ground');
  ledge.body.immovable = true;

    
}