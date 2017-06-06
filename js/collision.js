// Collision Detection
	// Implement Collision Offset 
	// Global Collision Variable
	// Possible states up "up", "left", "right", and "down"
	// States are triggered and set by collisionCheck Function
		var collideState = "";

// Collision Mapping
	// Collison Map
		function collisionCheck() {
			// Updates the values of the collision points for all existing colliders
			// updateCollisionPoints() {
			// 	// RogueBot

			// 	// Enemy

			// 	// Projectiles
			// 		// Player

			// 		// Enemy
			// }


			function globalCollisionCheck(collider, colliderObject) {
				// Calculate Relative Distance of player 
				var deltaDist = -gMO.mapX + 582; 
				// RogueBot-Map Loop
				for (var i = 0; i < collisionMapArray.length; i++) {
					for (var j = 0; j < collisionMapArray[i].length; j++) {
						if (!collisionMapArray[i][j].floating) {
							if (deltaDist + 36 >= collisionMapArray[i][j].leftBound && deltaDist + 36 <= collisionMapArray[i][j].rightBound) {
								console.log(collisionMapArray[i][j])
								console.error(collideState)
								collideState = "right"
							}
							// Lower Bound (Left Edge)
							if (deltaDist >= collisionMapArray[i][j].leftBound && deltaDist <= collisionMapArray[i][j].rightBound) {
								// console.log(collisionMapArray[i][j])
								// console.error(collideState)
								// console.log(deltaDist + "px")
								collideState = "left"
							}
						} 
							// Check X Axis Collision
							// Upper Bound (Right Edge)
							
						// Check Y Axis Collision
							// Upper Bound

							// Lower Bound
						
					
					}


					

				}
				// // RogueBot-Enemy Projectile Loop
				// for (var i = 0; i < Things.length; i++) {
				// 	Things[i]

				// 	// Check X Axis Collision
				// 		// Upper Bound

				// 		// Lower Bound

				// 	// Check Y Axis Collision
				// 		// Upper Bound

				// 		// Lower Bound
				// }
				// // RogueBot-Enemy Projectile Loop
				// for (var i = 0; i < Things.length; i++) {
				// 	Things[i]

				// 	// Check X Axis Collision
				// 		// Upper Bound

				// 		// Lower Bound

				// 	// Check Y Axis Collision
				// 		// Upper Bound

				// 		// Lower Bound
				// }
				// // RogueBot Projectile-Enemy Loop
				// for (var i = 0; i < Things.length; i++) {
				// 	Things[i]

				// 	// Check X Axis Collision
				// 		// Upper Bound

				// 		// Lower Bound

				// 	// Check Y Axis Collision
				// 		// Upper Bound

				// 		// Lower Bound
				// }
				// // Enemy-Map  Loop
				// for (var i = 0; i < Things.length; i++) {
				// 	Things[i]

				// 	// Check X Axis Collision
				// 		// Upper Bound

				// 		// Lower Bound

				// 	// Check Y Axis Collision
				// 		// Upper Bound

				// 		// Lower Bound
				// }
			}
			// Check for collision for only objects on canvas
			globalCollisionCheck()
			

		}
// DEPRECATED
// Global Collision Check 
	// Uses gMO (Map Object) as "collider"
	// Uses Object being tested for collision as "collideObject" 

	// Check if Collsion Came from Right or Left
	// Compares Character Position to the center of the colliderObject collision box
	// function collideDirectionCheck(collider, colliderObject) {
	// 	var collObjCenter = (colliderObject.leftBound + colliderObject.rightBound) / 2; 

	// 	if (collObjCenter > collider.mapX) {
	// 		return true;
	// 	} 
	// 	else {
	// 		return false;
	// 	}
	// }