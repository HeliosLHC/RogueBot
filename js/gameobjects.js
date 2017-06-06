// Object Creation Functions
// Create Main Character

	// Create Character Constructor (Constructor/Prototype Function)
		function createCharacterObject(name,health) {
			this.name = name
			this.health = health
			// Center (1/2 Canvas Width)
			this.positionX = canvas.width / 2
			// Set Sprite Location on Map Floor
			this.positionY = gMO.mapFloor
			// RogueBot Initial Velocity in pixels/frame				
			this.velocity = 5;
			// RogueBot Jump Velocity
			this.jumpVelocity = 25
			// State Property can have values: "idle", "jump", "running"
			this.state = ""
			// Create Animation Sub-Object
			this.animation = {}

			this.projectileArray = []

			return this
		}

	// Dynamically Generate Random Stats for RogueBot using Constructor
		function createCharacter() {
		// Modify local variables to change RogueBot Stats
		var name = "Rogue Bot";
		var health = 100;
		// Creates RogueBot Object with the values set above
		rogueBot = createCharacterObject(name,health);	

		// DEBUG 
		console.log(rogueBot);
		}
		// DEPRECATED
		// Draws RogueBot Sprite with specified arguments
		// function loadRogueBot() {
		// 	rogueBot.positionX = canvas.width / 2;
		// 	ctx.drawImage(spriteRogueBot, rogueBot.positionX, rogueBot.positionY, 100 * scaleFactor, 100 * scaleFactor);
		// }
// Create Enemy
	// Create Enemy Constructor
	function createEnemyObject(name,health) {
			this.name = name,
			this.health = health,
			this.positionX = null
			this.positionY = null

			// RogueBot Initial Velocity in pixels/frame				
			this.velocity = 5;
			// RogueBot Jump Velocity
			this.jumpVelocity = 25
			// State Property can have values: "idle", "jump", "running"
			this.state = ""
			// Create Animation Sub-Object
			this.animation = {}

			this.projectileArray = []
		}

	// Dynamically Generate Random Stats for Enemy using Constructor
	function createEnemy() {
		// Modify local variables to change enemy stats
		var health = 100;
		enemyBot = new createEnemyObject(name,health)
		spriteEnemyBot.src = 'assets/images/megaman.png'; 
		// DEBUG
		console.log("Enemy " + name + " has been spawned");
		console.log(enemyBot);
		// Return Object
		// return enemyBot
	}
	// Enemy Array
	var enemyBotArray = []

	function loadEnemy() {
		for (var i = enemyBotArray.length - 1; i >= 0; i--) {
			enemyBotArray[i]
			spriteAnim
		}
	}


	function spawnEnemy() {
		var enemyBotSpawnRate = Math.Floor(timeDelta / 30)
		for (var i = 0; i < enemyBotSpawnRate; i++) {
			enemyBotArray.push(createEnemy())
			
	}
	}

	// Limit max enemies in array, raise limit each interval
	
	// Math.Random() SPAWN RATE
	// Locate mapFloor for 500px in front of player and spawn enemy

// TODO Destory Projectiles Upon Collision or Off Screen
// Create Projectile
	// Create Projectile Constructor
	function createProjectileObject(x,y) {
		this.positionX = x + 20,
		this.positionY = y - 35,
		// Bullet Velocity in pixels/frame
		// this.velocity = 15,
		this.animation = spriteAnim(rogueBotProjectile,32,32,this.positionX,this.positionY,"playerProjectile")
	}

// Unload Projectile
	// Removes projectile upon collision
	function killProjectile(index) {

	} 
// Animations (Separate Animation Loop)
	// Global Sprite Animation Function
		function spriteAnim(image,width,height,posX,posY,spriteType) {
			var sprite = {
				image: image,
				type: spriteType,
				width: width,
				height: height,
				positionX: posX,
				positionY: posY,
				frameNum: 1,
				spriteFrameIndex: 1,
				spriteHeightCheck: function() {
					if (this.type == "playerProjectile") {
							return this.positionY
						} 
						else if (rogueBot.state == "jumping") {
							return rogueBot.positionY - 56
						} 

						else {
							return eval(gMO.mapFloor - 58)
						}
				},
				renderSprite: function(img, sx, sy, sw, sh, dx, dy, dw, dh) {
					// ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
					// ctx.drawImage(img, sx, sy, sw * frameNum, sh, dx, dy, dw, dh)
					// Move constants into animationSelector()
					ctx.drawImage(this.image, 0 + this.width * this.spriteFrameIndex, 0, this.width, this.height, this.positionX , this.spriteHeightCheck() , this.width, this.width)
				}
			}
			// Returns the sprite object to the caller function
			return sprite
		}
		// TODO Move 64 into its own global setting variable
	// RogueBot Animations
		// Load Spritesheet
			// Idle - 64px x 64px / Frame
			var rogueBotAnimIdleImg = new Image();
			rogueBotAnimIdleImg.src = "assets/images/playerbot-idle-Sheet.png";

			// Running - 64px x 64px / Frame
			var rogueBotAnimRunningImg = new Image();
			rogueBotAnimRunningImg.src = "assets/images/playerbot-run-Sheet.png";

			// Running with Gun - 64px x 64px / Frame
			var rogueBotAnimRunningShootingImg = new Image();
			rogueBotAnimRunningShootingImg.src = "assets/images/playerbot-run-shoot-Sheet.png";

			// Jumping - 64px x 64px / Frame
			var rogueBotAnimJumpingImg = new Image();
			rogueBotAnimJumpingImg.src = "assets/images/playerbot-jump-Sheet-Mod.png";

			// Shooting - 64px x 64px / Frame
			var rogueBotAnimShootingImg = new Image();
			rogueBotAnimShootingImg.src = "assets/images/playerbot-shoot-Sheet.png";

			// Destroyed - 64px x 64px / Frame
			var rogueBotAnimDestroyedImg = new Image();
			rogueBotAnimDestroyedImg.src = "assets/images/playerbot-damaged-Sheet.png"
		// Create Animation Objects
			function setAnimations() {
				// RogueBot Animations
					rogueBot.animation.idle = spriteAnim(rogueBotAnimIdleImg,64,64,canvas.width / 2 - 32, eval(gMO.mapFloor - 62), "player")
					rogueBot.animation.running = spriteAnim(rogueBotAnimRunningImg,64,64,canvas.width / 2 - 32, eval(gMO.mapFloor - 62),"player")
					rogueBot.animation.jumping = spriteAnim(rogueBotAnimJumpingImg,64,64,canvas.width / 2 - 32, eval(gMO.mapFloor - 62),"player")
					rogueBot.animation.shooting = spriteAnim(rogueBotAnimShootingImg,64,64,canvas.width / 2 - 32, eval(gMO.mapFloor - 62),"player")
					rogueBot.animation.runningshooting = spriteAnim(rogueBotAnimRunningShootingImg,64,64,canvas.width / 2 - 32,eval(gMO.mapFloor - 62) ,"player")
					rogueBot.animation.destroyed = spriteAnim(rogueBotAnimDestroyedImg,64,64,canvas.width / 2 - 32, eval(gMO.mapFloor - 62),"player")		
			}

		// Animation Trigger and Render (Select Which Animation to Render)
			function rogueBotAnimSelector() {
				if (rogueBot.state == "idle") {
					// Reverts Sprite to Initial Frame
					if (rogueBot.animation.idle.frameNum === 100) {
						rogueBot.animation.idle.frameNum = 0
					}
					if (rogueBot.animation.idle.spriteFrameIndex === 5) {
						rogueBot.animation.idle.spriteFrameIndex = 0
					}

					// Increments Sprite Frame
					rogueBot.animation.idle.spriteFrameIndex = Math.floor(rogueBot.animation.idle.frameNum / 20)
					
					rogueBot.animation.idle.renderSprite()
					// Increments Frame Number
					rogueBot.animation.idle.frameNum += 1

				} 
				else if (rogueBot.state == "running") {
					// Reverts Sprite to Initial Frame
					if (rogueBot.animation.running.frameNum === 80) {
						rogueBot.animation.running.frameNum = 0
					}
					if (rogueBot.animation.running.spriteFrameIndex === 10) {
						rogueBot.animation.running.spriteFrameIndex = 0
					}

					// Increments Sprite Frame
					rogueBot.animation.running.spriteFrameIndex = Math.floor(rogueBot.animation.running.frameNum / 8)
					
					rogueBot.animation.running.renderSprite()
					// Increments Frame Number
					rogueBot.animation.running.frameNum += 1
				} 

				else if (rogueBot.state == "jumping") {
					// Reverts Sprite to Initial Frame
					if (rogueBot.animation.jumping.frameNum === 96) {
						rogueBot.animation.jumping.frameNum = 0
					}
					if (rogueBot.animation.jumping.spriteFrameIndex === 13) {
						rogueBot.animation.jumping.spriteFrameIndex = 0
					}

					// Increments Sprite Frame
					rogueBot.animation.jumping.spriteFrameIndex = Math.floor(rogueBot.animation.jumping.frameNum / 8)
					
					rogueBot.animation.jumping.renderSprite()
					// Increments Frame Number
					rogueBot.animation.jumping.frameNum += 1
				}

				else if (keyComboCheck()) {
					// Reverts Sprite to Initial Frame
					if (rogueBot.animation.runningshooting.frameNum === 80) {
						rogueBot.animation.runningshooting.frameNum = 0
					}
					if (rogueBot.animation.runningshooting.spriteFrameIndex === 10) {
						rogueBot.animation.runningshooting.spriteFrameIndex = 0
					}

					// Increments Sprite Frame
					rogueBot.animation.runningshooting.spriteFrameIndex = Math.floor(rogueBot.animation.runningshooting.frameNum / 8)
					
					rogueBot.animation.runningshooting.renderSprite()
					// Increments Frame Number
					rogueBot.animation.runningshooting.frameNum += 1
				} 

				else if (rogueBot.state == "shooting") {
					// Reverts Sprite to Initial Frame
					if (rogueBot.animation.shooting.frameNum === 40) {
						rogueBot.animation.shooting.frameNum = 0
					}
					if (rogueBot.animation.shooting.spriteFrameIndex === 2) {
						rogueBot.animation.shooting.spriteFrameIndex = 0
					}

					// Increments Sprite Frame
					rogueBot.animation.shooting.spriteFrameIndex = Math.floor(rogueBot.animation.shooting.frameNum / 20)
					
					rogueBot.animation.shooting.renderSprite()
					// Increments Frame Number
					rogueBot.animation.shooting.frameNum += 1
				}

				else if (rogueBot.state == "destroyed") {
					// Reverts Sprite to Initial Frame
					if (rogueBot.animation.destroyed.frameNum === 40) {
						rogueBot.animation.destroyed.frameNum = 0
					}
					if (rogueBot.animation.destroyed.spriteFrameIndex === 3) {
						rogueBot.animation.destroyed.spriteFrameIndex = 0
					}

					// Increments Sprite Frame
					rogueBot.animation.destroyed.spriteFrameIndex = Math.floor(rogueBot.animation.destroyed.frameNum / 20)
					
					rogueBot.animation.destroyed.renderSprite()
					// Increments Frame Number
					rogueBot.animation.destroyed.frameNum += 1
				}
			}

	// Projectile Animations
		// Load Spritesheet
		var rogueBotProjectile = new Image();
		rogueBotProjectile.src = "assets/images/playerbot-bullet-Sheet.png"

		var enemyBotProjectile = new Image();
		enemyBotProjectile.src = "assets/images/enemybot-bullet-Sheet.png"

		// Create Animation Objects
		// rogueBot.projectileArray = []
		// enemyBot.projectileArray = []

		// Renders Projectiles
		function projectileAnimation() {
			// Check if Projectiles Exist
			if (rogueBot.projectileArray.length > 0) {
				for (var i = rogueBot.projectileArray.length - 1; i >= 0; i--) {
					// Reverts Sprite to Initial Frame
						if (rogueBot.projectileArray[i].animation.frameNum === 30) {
							rogueBot.projectileArray[i].animation.frameNum = 0
						}
						if (rogueBot.projectileArray[i].animation.spriteFrameIndex === 3) {
							rogueBot.projectileArray[i].animation.spriteFrameIndex = 0
						}

						// Increments Sprite Frame
						rogueBot.projectileArray[i].animation.spriteFrameIndex = Math.floor(rogueBot.projectileArray[i].animation.frameNum / 10)
						
						rogueBot.projectileArray[i].animation.renderSprite()
						// Increments Frame Number
						rogueBot.projectileArray[i].animation.frameNum += 1

						// Moves Projectile
						rogueBot.projectileArray[i].animation.positionX += 10
				}
			}
		}
	// // EnemyBot Animations
	// 	// Load Spritesheet
	// 		// Idle - 64px x 64px / Frame
	// 		var enemyBotAnimIdleImg = new Image();
	// 		enemyBotAnimIdleImg.src = "assets/images/enemybot-idle-Sheet.png";

	// 		// Running - 64px x 64px / Frame
	// 		var enemyBotAnimRunningImg = new Image();
	// 		enemyBotAnimRunningImg.src = "assets/images/enemybot-run-Sheet.png";

	// 		// Running with Gun - 64px x 64px / Frame
	// 		var enemyBotAnimRunningShootingImg = new Image();
	// 		enemyBotAnimRunningShootingImg.src = "assets/images/enemybot-run-shoot-Sheet.png";

	// 		// Jumping - 64px x 64px / Frame
	// 		var enemyBotAnimJumpingImg = new Image();
	// 		enemyBotAnimJumpingImg.src = "assets/images/enemybot-jump-Sheet-Mod.png";

	// 		// Shooting - 64px x 64px / Frame
	// 		var enemyBotAnimShootingImg = new Image();
	// 		enemyBotAnimShootingImg.src = "assets/images/enemybot-shoot-Sheet.png";

	// 		// Destroyed - 64px x 64px / Frame
	// 		var enemyBotAnimDestroyedImg = new Image();
	// 		enemyBotAnimDestroyedImg.src = "assets/images/enemybot-damaged-Sheet.png"
	// 	// Create Animation Objects
	// 		function setAnimations() {
	// 			// RogueBot Animations
	// 				enemyBot.animation.idle = spriteAnim(enemyBotAnimIdleImg,64,64,canvas.width / 2 - 32, eval(gMO.mapFloor - 62), "player")
	// 				enemyBot.animation.running = spriteAnim(enemyBotAnimRunningImg,64,64,canvas.width / 2 - 32, eval(gMO.mapFloor - 62),"player")
	// 				enemyBot.animation.jumping = spriteAnim(enemyBotAnimJumpingImg,64,64,canvas.width / 2 - 32, eval(gMO.mapFloor - 62),"player")
	// 				enemyBot.animation.shooting = spriteAnim(enemyBotAnimShootingImg,64,64,canvas.width / 2 - 32, eval(gMO.mapFloor - 62),"player")
	// 				enemyBot.animation.runningshooting = spriteAnim(enemyBotAnimRunningShootingImg,64,64,canvas.width / 2 - 32,eval(gMO.mapFloor - 62) ,"player")
	// 				enemyBot.animation.destroyed = spriteAnim(enemyBotAnimDestroyedImg,64,64,canvas.width / 2 - 32, eval(gMO.mapFloor - 62),"player")		
	// 		}

	// 	// Animation Trigger and Render (Select Which Animation to Render)
	// 		function rogueBotAnimSelector() {
	// 			if (enemyBot.state == "idle") {
	// 				// Reverts Sprite to Initial Frame
	// 				if (enemyBot.animation.idle.frameNum === 100) {
	// 					enemyBot.animation.idle.frameNum = 0
	// 				}
	// 				if (enemyBot.animation.idle.spriteFrameIndex === 5) {
	// 					enemyBot.animation.idle.spriteFrameIndex = 0
	// 				}

	// 				// Increments Sprite Frame
	// 				enemyBot.animation.idle.spriteFrameIndex = Math.floor(enemyBot.animation.idle.frameNum / 20)
					
	// 				enemyBot.animation.idle.renderSprite()
	// 				// Increments Frame Number
	// 				enemyBot.animation.idle.frameNum += 1

	// 			} 
	// 			else if (enemyBot.state == "running") {
	// 				// Reverts Sprite to Initial Frame
	// 				if (enemyBot.animation.running.frameNum === 80) {
	// 					enemyBot.animation.running.frameNum = 0
	// 				}
	// 				if (enemyBot.animation.running.spriteFrameIndex === 10) {
	// 					enemyBot.animation.running.spriteFrameIndex = 0
	// 				}

	// 				// Increments Sprite Frame
	// 				enemyBot.animation.running.spriteFrameIndex = Math.floor(enemyBot.animation.running.frameNum / 8)
					
	// 				enemyBot.animation.running.renderSprite()
	// 				// Increments Frame Number
	// 				enemyBot.animation.running.frameNum += 1
	// 			} 

	// 			else if (enemyBot.state == "jumping") {
	// 				// Reverts Sprite to Initial Frame
	// 				if (enemyBot.animation.jumping.frameNum === 96) {
	// 					enemyBot.animation.jumping.frameNum = 0
	// 				}
	// 				if (enemyBot.animation.jumping.spriteFrameIndex === 13) {
	// 					enemyBot.animation.jumping.spriteFrameIndex = 0
	// 				}

	// 				// Increments Sprite Frame
	// 				enemyBot.animation.jumping.spriteFrameIndex = Math.floor(enemyBot.animation.jumping.frameNum / 8)
					
	// 				enemyBot.animation.jumping.renderSprite()
	// 				// Increments Frame Number
	// 				enemyBot.animation.jumping.frameNum += 1
	// 			}

	// 			else if (keyComboCheck()) {
	// 				// Reverts Sprite to Initial Frame
	// 				if (enemyBot.animation.runningshooting.frameNum === 80) {
	// 					enemyBot.animation.runningshooting.frameNum = 0
	// 				}
	// 				if (enemyBot.animation.runningshooting.spriteFrameIndex === 10) {
	// 					enemyBot.animation.runningshooting.spriteFrameIndex = 0
	// 				}

	// 				// Increments Sprite Frame
	// 				enemyBot.animation.runningshooting.spriteFrameIndex = Math.floor(enemyBot.animation.runningshooting.frameNum / 8)
					
	// 				enemyBot.animation.runningshooting.renderSprite()
	// 				// Increments Frame Number
	// 				enemyBot.animation.runningshooting.frameNum += 1
	// 			} 

	// 			else if (enemyBot.state == "shooting") {
	// 				// Reverts Sprite to Initial Frame
	// 				if (enemyBot.animation.shooting.frameNum === 40) {
	// 					enemyBot.animation.shooting.frameNum = 0
	// 				}
	// 				if (enemyBot.animation.shooting.spriteFrameIndex === 2) {
	// 					enemyBot.animation.shooting.spriteFrameIndex = 0
	// 				}

	// 				// Increments Sprite Frame
	// 				enemyBot.animation.shooting.spriteFrameIndex = Math.floor(enemyBot.animation.shooting.frameNum / 20)
					
	// 				enemyBot.animation.shooting.renderSprite()
	// 				// Increments Frame Number
	// 				enemyBot.animation.shooting.frameNum += 1
	// 			}

	// 			else if (enemyBot.state == "destroyed") {
	// 				// Reverts Sprite to Initial Frame
	// 				if (enemyBot.animation.destroyed.frameNum === 40) {
	// 					enemyBot.animation.destroyed.frameNum = 0
	// 				}
	// 				if (enemyBot.animation.destroyed.spriteFrameIndex === 3) {
	// 					enemyBot.animation.destroyed.spriteFrameIndex = 0
	// 				}

	// 				// Increments Sprite Frame
	// 				enemyBot.animation.destroyed.spriteFrameIndex = Math.floor(enemyBot.animation.destroyed.frameNum / 20)
					
	// 				enemyBot.animation.destroyed.renderSprite()
	// 				// Increments Frame Number
	// 				enemyBot.animation.destroyed.frameNum += 1
	// 			}
	// 		}

	// // Projectile Animations
	// 	// Load Spritesheet
	// 	var rogueBotProjectile = new Image();
	// 	rogueBotProjectile.src = "assets/images/playerbot-bullet-Sheet.png"

	// 	var enemyBotProjectile = new Image();
	// 	enemyBotProjectile.src = "assets/images/enemybot-bullet-Sheet.png"

	// 	// Create Animation Objects
	// 	// rogueBot.projectileArray = []
	// 	// enemyBot.projectileArray = []

	// 	// Renders Projectiles
	// 	function projectileAnimation() {
	// 		// Check if Projectiles Exist
	// 		if (rogueBot.projectileArray.length > 0) {
	// 			for (var i = rogueBot.projectileArray.length - 1; i >= 0; i--) {
	// 				// Reverts Sprite to Initial Frame
	// 					if (rogueBot.projectileArray[i].animation.frameNum === 30) {
	// 						rogueBot.projectileArray[i].animation.frameNum = 0
	// 					}
	// 					if (rogueBot.projectileArray[i].animation.spriteFrameIndex === 3) {
	// 						rogueBot.projectileArray[i].animation.spriteFrameIndex = 0
	// 					}

	// 					// Increments Sprite Frame
	// 					rogueBot.projectileArray[i].animation.spriteFrameIndex = Math.floor(rogueBot.projectileArray[i].animation.frameNum / 10)
						
	// 					rogueBot.projectileArray[i].animation.renderSprite()
	// 					// Increments Frame Number
	// 					rogueBot.projectileArray[i].animation.frameNum += 1

	// 					// Moves Projectile
	// 					rogueBot.projectileArray[i].animation.positionX += 10
	// 			}
	// 		}
	// 	}

// Animation Render Loop 
	// Separate Render Loop vs For Loop to animate 1 frame every X rendered frames
	function renderAnim() {
		// Check for Key Combinations
		// keyComboCheck()

		rogueBotAnimSelector() 		
		projectileAnimation()
		// projectileAnimation(enemyBot.projectileArray)

		// requestAnimationFrame(renderAnim) (Causes Lag)
	} 