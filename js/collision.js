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

			// TODO calculated deltaYDist (Height) for all platforms

			// DEPRECATED
			// function globalCollisionCheck(collider, colliderObject)

			function globalCollisionCheck() {
				// Calculate Relative Distance of player 
				var deltaXDist = -gMO.mapX + 582; 
				var deltaYDist = rogueBot.positionY -  gMO.mapFloor
				// RogueBot-Map Loop
				for (var i = 0; i < collisionMapArray.length; i++) {
					for (var j = 0; j < collisionMapArray[i].length; j++) {
						if (!collisionMapArray[i][j].floating) {

							// Horizontal Collision

							// Upper Bound
							if (deltaXDist + 36 >= collisionMapArray[i][j].leftBound && deltaXDist + 36 <= collisionMapArray[i][j].rightBound) {
								console.log(collisionMapArray[i][j])
								console.error(collideState)
								collideState = "right"
							}
							// Lower Bound (Left Edge)
							else if (deltaXDist >= collisionMapArray[i][j].leftBound && deltaXDist <= collisionMapArray[i][j].rightBound) {
								console.log(collisionMapArray[i][j])
								console.error(collideState)
								console.log(deltaXDist + "px")
								collideState = "left"
							}

							// Vertical Collision
							else if (deltaYDist >= collisionMapArray[i][j].lowerBound - collisionMapArray[i][j].topBound) {
								gMO.mapFloor = collisionMapArray[i][j].topbound
								collideState = "bottom"
							} 

							else {
							// collideState = ""
						}

						} 
							
										
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
