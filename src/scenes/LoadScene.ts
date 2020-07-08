import { ResizeManager } from "../utils/utils";

export default class LoadScene extends Phaser.Scene {
	aspectRatio: number;

	constructor() {
		super("LoadScene");
	}

	create() {
		const width = this.game.canvas.width;
		const height = this.game.canvas.height;
		console.log({ width, height });
		console.log(ResizeManager.centeringOffsets);

		/* MOST IMPORTANT::TILABLE SPRITE*/
		const bg = this.add
			.tileSprite(
				0,
				0,
				width / ResizeManager.scalingRatio,
				height / ResizeManager.scalingRatio,
				"background"
			)
			.setOrigin(0)
			.setScale(ResizeManager.scalingRatio);
		/**/

		/*Stretched Background
		const bg = this.add
			.image(
				0,
				0,
				"background"
			)
			.setOrigin(0)
			.setDisplaySize(width,height)
		*/
		const button1 = this.add
			.sprite(0, 0, "button", 0)
			.setOrigin(0.5)
			.setScale(ResizeManager.scalingRatio);
		const cross = this.add
			.image(0, 0, "cross")
			.setOrigin(0.5)
			.setScale(ResizeManager.scalingRatio);

		this.add.container(
			ResizeManager.getX(540 + 85),
			ResizeManager.getY(580),
			[button1, cross]
		);

		const button2 = this.add
			.sprite(0, 0, "button", 0)
			.setOrigin(0.5)
			.setScale(ResizeManager.scalingRatio);
		const tick = this.add
			.image(0, 0, "tick")
			.setOrigin(0.5)
			.setScale(ResizeManager.scalingRatio);

		this.add.container(
			ResizeManager.getX(540 + 385),
			ResizeManager.getY(580),
			[button2, tick]
		);
		//Panel
		this.add
			.image(ResizeManager.getX(540), ResizeManager.getY(245), "panel")
			.setScale(ResizeManager.scalingRatio);

		const text = this.add
			.text(
				ResizeManager.getX(540),
				ResizeManager.getY(245),
				"Click Buttons",
				{
					fontSize: `${ResizeManager.getFontSize(64)}px Lato`,
					fill: "#000",
				}
			)
			.setAlign("center")
			.setOrigin(0.5);

		//interactive buttons
		button1
			.setInteractive()
			.on("pointerover", () => {
				button1.setFrame(1);
			})
			.on("pointerout", () => {
				button1.setFrame(0);
			})
			.on("pointerdown", () => {
				button1.setFrame(1);
				text.setText("cross clicked");
			});

		button2
			.setInteractive()
			.on("pointerover", () => {
				button2.setFrame(1);
			})
			.on("pointerout", () => {
				button2.setFrame(0);
			})
			.on("pointerdown", () => {
				button2.setFrame(1);
				text.setText("tick clicked");
			});
	}
}
