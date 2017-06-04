// Calculate Horizontal Distance Traveled 
function distX(velocity,time) {
	return (velocity*time); 
}
// Calculate Vertical Distance Traveled Accounting for Gravity 
function distY(velocity,time) {
	const gravAccel = 100 * scaleFactor;	
	return (velocity*time+0.5*(-gravAccel)*Math.pow(time,2)); 
}
// Character Movement
	// Movement
		// Jump 
			function charJump() {
				if (rogueBot.state == "jumping") {
					// Get time since Space was pressed
					jumpTime = ((new Date()) - upPressTime) / 1000;
					// Calculate current Height of Character Relative to Map Floor and Set PositionY of Character
					rogueBot.positionY -= distY(rogueBot.jumpVelocity,jumpTime)			
				}
				else {
					// If Character is not jumping, return to caller function and continue loop
					return;
				}
			}

