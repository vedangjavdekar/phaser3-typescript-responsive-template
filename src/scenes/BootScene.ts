import { ResizeManager } from "../utils/utils";

export default class BootScene extends Phaser.Scene {
	constructor() {
		super("BootScene");
	}

	init() {
		this.scale.on("resize", ResizeManager.resize, this);
		ResizeManager.orientation_portrait =
			["portrait", "portrait-primary", "portrait-secondary"].indexOf(
				this.scale.orientation.toString()
			) !== -1;
		console.log(ResizeManager.orientation_portrait);
		ResizeManager.resize();

		this.scale.on("orientationchange", (orientation: string) => {
			if (orientation === Phaser.Scale.PORTRAIT) {
				ResizeManager.orientation_portrait = true;
				//this.scale.lockOrientation("portrait");
			} else if (orientation === Phaser.Scale.LANDSCAPE) {
				ResizeManager.orientation_portrait = false;
			}
			console.log("orientation" + ResizeManager.orientation_portrait);
			ResizeManager.resize();
		});
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
