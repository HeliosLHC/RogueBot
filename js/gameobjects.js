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
			this.jumpVelocity = 34
			// State Property can have values: "idle", "jump", "running"
			this.state = ""
			// Create Animation Sub-Object
			this.animation = {}

			return this
		}

	// Dynamically Generate Random Stats for RogueBot using Constructor
		function createCharacter() {
		// Modify local variables to change RogueBot Stats
		var name = "Rogue Bot";
		var health = 100;
		// Creates RogueBot Object with the values set above
		rogueBot = createCharacterObject(name,health);	
		// Set Source Path for Sprite
		spriteRogueBot.src = 'assets/images/megaman.png';
		// Creates RogueBot Sprite Object

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
			this.positionX,
			this.positionY
		}

	// Dynamically Generate Random Stats for Enemy using Constructor
	function createEnemy() {
		// Modify local variables to change enemy stats
		var name = "enemy1";
		var health = 100;
		enemyBot = new createEnemyObject(name,health)
		spriteEnemyBot.src = 'assets/images/megaman.png'; 
		// DEBUG
		console.log("Enemy " + name + " has been spawned");
		console.log(enemyBot);
		// Return Object
		// return enemyBot
	}
	function loadEnemy() {
		enemyBotArray.push(createEnemy())
	}
	// Enemy Array
	var enemyBotArray = []

	// var enemyBotSpawnRate = Math.Floor(timeDelta / 30)
	// Math.Random() SPAWN RATE
// TODO USe Array to add and append projectilej=objects
// Create Projectile
	// Create Projectile Constructor
	function createProjectileObject(index) {
		this.name = index,
		this.positionX = 0,
		this.positionY = 0,
		// Bullet Velocity in pixels/frame
		this.velocity = 10
	}
// Load Projectiles
	var projectileArray = []
	function loadProjectileObject() {
		projectileArray.push( new createProjectileObject(1) )
	}

	loadProjectileObject()
// Unload Projectile
	// Removes projectile upon collision
	function killProjectile(index) {

	} 
// Animations (Separate Animation Loop)
	// Global Sprite Animation Function
		function spriteAnim(image,width,height) {
			var sprite = {
				image: image,
				context: null,
				width: width,
				height: height,
				frameNum: 1,
				spriteFrameIndex: 1,
				// image: imgObject,
				renderSprite: function(img, sx, sy, sw, sh, dx, dy, dw, dh) {
					// ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
					// ctx.drawImage(img, sx, sy, sw * frameNum, sh, dx, dy, dw, dh)
					// Move constants into animationSelector()
					function playerHeightCheck() {
						if (rogueBot.state == "jumping") {
							return rogueBot.positionY - 256
						} 

							else {
							return eval(gMO.mapFloor - 248)
						}
					}
					ctx.drawImage(this.image, 0 + this.width * this.spriteFrameIndex, 0, this.width, this.height, canvas.width / 2 - 128 , playerHeightCheck() , this.width, this.width)
				}
			}
			// Returns the sprite object to the caller function
			return sprite
		}

	// RogueBot Animations
		// Load Spritesheet
			// Idle - 256px x 256px / Frame
			var rogueBotAnimIdleImg = new Image();
			rogueBotAnimIdleImg.src = "assets/images/playerbot-idle-Sheet-4X.png";

			// Running - 256px x 256px / Frame
			var rogueBotAnimRunningImg = new Image();
			rogueBotAnimRunningImg.src = "assets/images/playerbot-run-Sheet-4X.png";

			// Running with Gun - 256px x 256px / Frame
			var rogueBotAnimRunningShootingImg = new Image();
			rogueBotAnimRunningShootingImg.src = "assets/images/playerbot-run-shoot-Sheet-4X.png";

			// Jumping - 256px x 256px / Frame
			var rogueBotAnimJumpingImg = new Image();
			rogueBotAnimJumpingImg.src = "assets/images/playerbot-jump-Sheet-Mod-4X.png";

			// Shooting - 256px x 256px / Frame
			var rogueBotAnimShootingImg = new Image();
			rogueBotAnimShootingImg.src = "assets/images/playerbot-shoot-Sheet-4X.png";

			// Destroyed - 256px x 256px / Frame
			var rogueBotAnimDestroyedImg = new Image();
			rogueBotAnimDestroyedImg.src = "assets/images/playerbot-jump-Sheet-Mod-4X.png"
		// Create Animation Objects
			function setAnimations() {
				// RogueBot Animations
					rogueBot.animation.idle = spriteAnim(rogueBotAnimIdleImg,256,256)
					rogueBot.animation.running = spriteAnim(rogueBotAnimRunningImg,256,256)
					rogueBot.animation.jumping = spriteAnim(rogueBotAnimJumpingImg,256,256)
					rogueBot.animation.shooting = spriteAnim(rogueBotAnimShootingImg,256,256)
					rogueBot.animation.runningshooting = spriteAnim(rogueBotAnimRunningShootingImg,256,256)
					rogueBot.animation.destroyed = spriteAnim(rogueBotAnimDestroyedImg,256,256)
			}

		// Animation Trigger and Render (Select Which Animation to Render)
		// Uses global RogueBot State to determine Animation Type
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

// Animation Render Loop 
	// Separate Render Loop vs For Loop to animate 1 frame every X rendered frames
	function renderAnim() {
		// Check for Key Combinations
		// keyComboCheck()

		rogueBotAnimSelector() 		
		// requestAnimationFrame(renderAnim) (Causes Lag)
	}