import { game } from "../main";

type point = { x: number; y: number };

export class ResizeManager {
	public static offsetX: boolean = true;
	public static offsetY: boolean = true;
	public static scalingRatio: number = 1;
	
	public static readonly referenceScreenSize = {
		width: 1080,
		height: 1920,
	};
	public static centeringOffsets = {
		x: 0,
		y: 0,
	};
	public static resize() {
		console.log("resize canvas");
		let canvas = game.canvas;
		let windowWidth = window.innerWidth;
		let windowHeight = window.innerHeight;
		let windowRatio = windowWidth / windowHeight;

		let gameRatio =
			(game.config.width as number) / (game.config.height as number);

		let referenceRatio =
			ResizeManager.referenceScreenSize.width /
			ResizeManager.referenceScreenSize.height;
		
		if (windowRatio < gameRatio) {
			canvas.style.width = windowWidth + "px";
			canvas.style.height = windowWidth / gameRatio + "px";
		} else {
			canvas.style.width = windowHeight * gameRatio + "px";
			canvas.style.height = windowHeight + "px";
		}

		if (windowRatio < referenceRatio) {
			const requiredHeight = windowWidth / referenceRatio;
			ResizeManager.centeringOffsets.x = 0;
			ResizeManager.centeringOffsets.y =
				(windowHeight - requiredHeight) / 2;
		} else {
			const requiredWidth = windowHeight * referenceRatio;
			ResizeManager.centeringOffsets.x =
				(windowWidth - requiredWidth) / 2;
			ResizeManager.centeringOffsets.y = 0;
		}

		if (ResizeManager.centeringOffsets.x === 0) {
			ResizeManager.scalingRatio =
				game.canvas.width / ResizeManager.referenceScreenSize.width;
		} else {
			ResizeManager.scalingRatio =
				game.canvas.height / ResizeManager.referenceScreenSize.height;
		}
	}

	//Positioning and Font Size functions

	public static getX(value): number {
		let newX = value * this.scalingRatio;
		if (ResizeManager.offsetX) newX += ResizeManager.centeringOffsets.x;

		return newX;
	}

	public static getY(value): number {
		let newY = value * this.scalingRatio;
		if (ResizeManager.offsetY) newY += ResizeManager.centeringOffsets.y;

		return newY;
	}

	public static getXY(value: point): point {
		return { x: this.getX(value.x), y: this.getY(value.y) };
	}

	public static getFontSize(value: number): number {
		return Math.round(value * ResizeManager.scalingRatio);
	}

	// Width and Height Functions
	public static getScaledProperty(value: number): number {
		return value * ResizeManager.scalingRatio;
	}
}
