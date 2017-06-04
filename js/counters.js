// Score and Time
	// Declare timeDelta as global variable
	var timeDelta;
// Time
	// Sets initial time
	function initTimeAndFont() {
		startTime = new Date();
		fontSize = fontSize + "px";
	}
	// BUG - Causing Issue with Text Rendering
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
// DEBUG
	function debugTable() {
		ctx.fillStyle = "white"
		ctx.font = "30px" + " 'Arial'";
		ctx.textAlign = "right"
		// Map X
		ctx.fillText("mapX = " + gMO.mapX, canvas.width - 50, 150);
		ctx.strokeStyle = "black";
		ctx.strokeText("mapX = " + gMO.mapX, canvas.width - 50, 150);
		// Collison
		ctx.fillText("Collision = " + collideState, canvas.width - 50, 200);
		ctx.strokeStyle = "black";
		ctx.strokeText("Collision = " + collideState, canvas.width - 50, 200);
	}
	