// Collision Detection
	// Global Collision Variable
	// Possible states up "up", "left", "right", and "down"
	// States are triggered and set by collisionCheck Function
		var collideState;

// Collision Mapping
	// Global Collision Variables Declaration
		var platform1Box

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

			// Top Edge
				// TODO Create Array for Collision Map

			// Bottom Edge 
		}
		// Collision Box Object Constructor Function
		function createCollisionBox(name,top,right,bottom,left) {
			this.objectName = name,
			this.topBound = top,
			this.rightBound = right,
			this.bottomBound = bottom,
			this.leftBound = left
		}
		function initCollisionMap() {
			// Create Collision Box for Platform 1
			platform1Box = new createCollisionBox("platform1", (gMO.mapFloor - 67), -457, gMO.mapFloor, -94.5);
			
			// Create Global Collision Check Function 
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