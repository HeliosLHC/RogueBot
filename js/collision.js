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
				console.log("Map Left Edge Reached");
				collideState = "left"
				return collideState;
			}
			else {
				collideState = "";
			}
			// Right Edge
			if (gMO.mapX <= (-10800 * scaleFactor)) { 
				console.log("Map Right Edge Reached")
				collideState = "right";
				return collideState;
			} 
			else {
				collideState = "";
			}
		}
	// Collision Map Movement
		// Collision Map must move with Map Sprite
			// Define Global Collision Map Object
			var gCM = {
				mapX: null,
				mapY: null ,
				mapDynamicWidth: null,
				mapDynamicHeight: null,
			}
		// TODO Redo function using values used the in ctx.drawImage arguments for the moveMap() function
		function collisionMapMove() {
			gCM.mapX += (gMO.mapVelocity * scaleFactor);
		}