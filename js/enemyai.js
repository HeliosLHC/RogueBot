// If player within firing range, shoot player
// If player on different level of height, change level
	// Change level so player hitbox is within firing height
	// EnemyBot runs towards player
	// if rogueBot.ylevel is 
	// Use hitbox, if enemy firing point (projectile) hitbox in within Y-Range of player hitbox, execute shoot
	// Check for distance between Player and Enemy and maintain distance
	// Load JSON Array for Collison and execute check per frame
	// Iterate all checks for every rogueBot in array (use FOR loop to iterate whole array before next frame is rendered) 

// TODO Replace Delete with Splice for enemyBotArray in enemyCheck()

// Distance Between Enemy and Player in Pixels
// var enemyDistance = 300
// if ((rogueBot.mapX - enemyBot.mapX) < enemyDistance ) {
// 	// Move EnemyBot Back

// }
// else if ((rogueBot.mapX - enemyBot.mapX) > enemyDistance ) {
// 	// Move EnemyBot Closer
// }

// Check for Enemy Death
function enemyCheck() {
	for (var i = enemyBotArray.length - 1; i >= 0; i--) {
		if (enemyBotArray[i].health <= 0) {
			
			// Remove Enemy (Dead)
			delete enemyBotArray[i]
		
		} 
	}
}