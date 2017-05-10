// Key Binding
function keyBind() {
	// Key Press
	$(document).keydown(function(e) {
	// jQuery ".which" method returns keycode for event "e"
    switch(e.which) {
    	case 32: // space
	    	
	    	break;
        case 37: // left
        	// Check Map Collision
        	// Checks if Collision occurs before setting map velocity
        	if (collideState != "left") {
				// Positive Map Velocity = Map Moves Right
		        gMO.mapVelocity = rogueBot.velocity;
		        break;
        	}
	        	else {
	        		gMO.mapVelocity = 0;
	        		break;
	        	}	

        case 38: // up
        	// Prevent Player from pressing or holding "UP" while character is jumping
	    	if (jumpState === false) {
	    		upPressTime = new Date();
	    	}
	    	
	    	// Set Jump State - charJump() called if jumpState = true
	    	jumpState = true
        	break;

        case 39: // right
        	if (collideState != "right") {
        		// Negative Map Velocity = Map Moves Left				
				gMO.mapVelocity = -rogueBot.velocity;
	        	break;
        	} 
        		else {
					gMO.mapVelocity = 0;
        		}

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
// Resize Event
	$(window).resize(function(event) {
		canvasResize();
		initMap();

		console.log("Window Resized");
	});