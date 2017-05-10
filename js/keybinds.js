// Key Binding
function keyBind() {
	// Key Press
	$(document).keydown(function(e) {
	// jQuery ".which" method returns keycode for event "e"
    switch(e.which) {
    	case 32: // space
	    	
	    	break;
        case 37: // left
        	// Positive Map Velocity = Map Moves Right
	        gMO.mapVelocity = rogueBot.velocity;
	        break;

        case 38: // up
        	// Prevent Player from pressing or holding "UP" while character is jumping
	    	if (jumpState === false) {
	    		upPressTime = new Date();
	    	}
	    	
	    	// Set Jump State - charJump() called if jumpState = true
	    	jumpState = true
        	break;

        case 39: // right
        	// Negative Map Velocity = Map Moves Left
	        gMO.mapVelocity = -rogueBot.velocity;
	        break;

        case 40: // down
        	break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});
	// Key Release
	$(document).keyup(function(e) {
		switch (e.which) {
			case 32:

				break;
			case 37: 
				gMO.mapVelocity = 0;
				break;
			case 39: 
				gMO.mapVelocity = 0;
				break;
			default:
				return;
		}
	
	});
}