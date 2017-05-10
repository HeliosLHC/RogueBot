// Collision Detection
	// Global Collision Variable
	// Possible states up "up", "left", "right", and "down"
	// States are triggered and set by collisionCheck Function
		var collideState;

// Collision Mapping
	// Collison Map
		function collisionCheck() {

		
		// Map Edge Collision
			// Left Edge at 630px
			if (gMO.mapX >= (630 * scaleFactor)) {
				console.log("Map Edge Reached");
				collideState = "left"
				return collideState;
			}
			else {
				collideState = "";
			}
			// Right Edge
		}
	// Collision Map Movement
		// Collision Map must move with Map Sprite