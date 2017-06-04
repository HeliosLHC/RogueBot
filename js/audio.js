// SoundObject Global Variable Declaration
var soundObject;
// Audio Asset Initialization
soundObject = {
	// playerHit: new Audio("assets/playerhit.ogg"),
	// enemyHit: new Audio("assets/enemyhit.ogg"),
	projectileFire: new Audio("assets/music/projectilefire.mp3"),
	bgMusic: new Audio("assets/music/background ost.mp3"),
	botDestroyed: new Audio("assets/music/death.mp3")
}
// Set bgMusic Sub-Object to Loop Mode
soundObject.bgMusic.loop = true;

soundObject.bgMusic.play() 
