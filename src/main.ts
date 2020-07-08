import "phaser";
import LoadScene from "./scenes/LoadScene";
import BootScene from "./scenes/BootScene";

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: window.innerWidth,
	height: window.innerHeight,
	backgroundColor: 0x642e95,
	scene: [BootScene, LoadScene],
};

export const game = new Phaser.Game(config);
