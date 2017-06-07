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
				var deltaYDist = gMO.mapFloor - rogueBot.positionY;
				// RogueBot-Map Loop
				for (var i = 0; i < collisionMapArray.length; i++) {
					for (var j = 0; j < collisionMapArray[i].length; j++) {
						if (!collisionMapArray[i][j].floating) {
							// if (deltaYDist <= collisionMapArray[i][j].bottomBound - collisionMapArray[i][j].topBound) {
							// 		// Horizontal Collision

							// 	// Upper Bound
							// 	if (deltaXDist + 36 >= collisionMapArray[i][j].leftBound && deltaXDist + 36 <= collisionMapArray[i][j].rightBound) {
							// 		console.log(collisionMapArray[i][j])
							// 		console.error(collideState)
							// 		collideState = "right"
							// 	}
							// 	// Lower Bound (Left Edge)
							// 	else if (deltaXDist >= collisionMapArray[i][j].leftBound && deltaXDist <= collisionMapArray[i][j].rightBound) {
							// 		console.log(collisionMapArray[i][j])
							// 		console.error(collideState)
							// 		console.log(deltaXDist + "px")
							// 		collideState = "left"
							// 	}
							// }
							// else if (deltaYDist >= collisionMapArray[i][j].bottomBound - collisionMapArray[i][j].topBound)
							// 	gMO.mapFloor = collisionMapArray[i][j].topBound
							// }
							
									// Horizontal Collision

								// Upper Bound
								if (deltaXDist + 31 >= collisionMapArray[i][j].leftBound && deltaXDist + 31 <= collisionMapArray[i][j].rightBound) {
									console.log(collisionMapArray[i][j])
									console.error(collideState)
									collideState = "right"

									if (deltaYDist >= collisionMapArray[i][j].bottomBound - collisionMapArray[i][j].topBound) {
										collideState = "";
										gMO.mapFloor = collisionMapArray[i][j].topBound
									} 
								}
								// Lower Bound (Left Edge)
								else if (deltaXDist >= collisionMapArray[i][j].leftBound && deltaXDist <= collisionMapArray[i][j].rightBound) {
									console.log(collisionMapArray[i][j])
									console.error(collideState)
									console.log(deltaXDist + "px")
									collideState = "left"

									if (deltaYDist >= collisionMapArray[i][j].bottomBound - collisionMapArray[i][j].topBound) {
										collideState = "";
										gMO.mapFloor = collisionMapArray[i][j].topBound
									} 
								}

								
							}
						
						} 
							
										
					}
				if (collideState == "") {
					gMO.mapFloor = 510;
				} 
			}
			// Check for collision for only objects on canvas
			globalCollisionCheck()
			

		}
