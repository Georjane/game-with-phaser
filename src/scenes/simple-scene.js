export class SimpleScene extends Phaser.Scene {
  preload() {
    this.load.image('rose', 'assets/rose.jpg');
  }

  create() {
    this.add.text(100, 100, 'Hello Phaser!', { fill: '#0f0' });
    this.add.image(100, 200, 'rose');
  }
}