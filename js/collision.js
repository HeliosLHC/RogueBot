// Collision Detection
	// Implement Collision Offset 
	// Global Collision Variable
	// Possible states up "up", "left", "right", and "down"
	// States are triggered and set by collisionCheck Function
		var collideState;

// Collision Mapping
	// Collison Map
		function collisionCheck() {


		// Global Collision Check 
			// Uses gMO (Map Object) as "collider"
			// Uses Object being tested for collision as "collideObject" 

			// Check if Collsion Came from Right or Left
			// Compares Character Position to the center of the colliderObject collision box
			function collideDirectionCheck(collider, colliderObject) {
				var collObjCenter = (colliderObject.leftBound + colliderObject.rightBound) / 2; 

				if (collObjCenter > collider.mapX) {
					return true;
				} 
				else {
					return false;
				}
			}

			function globalCollisionCheck(collider, colliderObject) {
				// Platform 1 
				if (collider.mapX <= colliderObject.leftBound && collider.mapX >= colliderObject.rightBound) {
					// console.log("Collision Detected")

					
					if (collideDirectionCheck(collider, colliderObject)) {
						collideState = "left"
					}
					else {
						collideState = "right"
					}
				}
				else {
					// console.log("No Collision Detected")
				}
			}
			// Checks for collision in each frame
			// Check for collision for only objects on canvas
			function collisionCheckExec() {
				// Checks for floor collision
				globalCollisionCheck(gMO,platform1);
				
				// 

				// DEBUG
				console.log(collideState)

			}
			

		}