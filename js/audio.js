// Audio Asset Initialization
$(document).ready(function() {
	var playerHit = new Audio("assets/playerhit.ogg");
	var enemyHit = new Audio("assets/enemyhit.ogg");
	var projectileFile = new Audio("assets/projectileFile.ogg");
	var bgMusic = new Audio("assets/bgmusic.ogg");
	var bgMusic1 = new Audio("assets/bgmusic1.ogg");
});
// Global Sound Object
var soundObject = {
	playerHit: src(""),
	enemyHit: src("")
}