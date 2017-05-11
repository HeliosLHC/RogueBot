// Score and Time

// Time
	// Sets initial time
	function initTimeAndFont() {
		startTime = new Date();
		fontSize = scaleFactor * fontSize + "px";
	}
	// function setFontSize() {
	// 	fontSize = scaleFactor * fontSize + "px";
	// }
	// Updates and draws time
	function updateTime() {
		// Get time since game start
		currTime = new Date()
		timeDelta = Math.floor((currTime - startTime) / 1000);
		// Draws Timer on Screen
		// TODO add scaling to text
		ctx.fillStyle = "white"
		ctx.font = fontSize + " 'Press Start 2P'";
		ctx.textAlign = "right"
		ctx.fillText(timeDelta + " Seconds", canvas.width - 50, 80);
		ctx.strokeStyle = "black";
		ctx.strokeText(timeDelta + " Seconds", canvas.width - 50, 80);
		// DEBUG
		// console.log(timeDelta);
	}
// Kills
	// Kill Event

	// Update Kill Count
		var killCount;
	// Draw Kill Counter
	function updateKills() {
		ctx.fillStyle = "white"
		ctx.font = fontSize + " 'Press Start 2P'";
		ctx.textAlign = "left"
		ctx.fillText("Kills:" + killCount , 50, 80);
		ctx.strokeStyle = "black";
		ctx.strokeText("Kills:" + killCount , 50, 80);
	}
	
// Score Algorithm based on Time and Kills
	 function calculateScore (kills,time) {
		gameScore = kills * 10 + timeDelta;
	 }
