import { ResizeManager } from "../utils/utils";

export default class BootScene extends Phaser.Scene {
	constructor() {
		super("BootScene");
	}

	init() {
		this.scale.lockOrientation("portrait");
		this.scale.on("resize", ResizeManager.resize, this);
		ResizeManager.resize();
	}

	preload() {
		this.load.image("background", "./Assets/background.png");
		this.load.image("panel", "./Assets/panel.png");
		this.load.spritesheet("button", "./Assets/button.png", {
			frameWidth: 250,
			frameHeight: 150,
		});
		this.load.image("cross", "./Assets/cross.png");
		this.load.image("tick", "./Assets/tickmark.png");
	}

	create() {
		this.scene.start("LoadScene");
	}
}
