// Object Creation Functions
// Create Main Character

	// Create Character Constructor (Constructor/Prototype Function)
		function createCharacterObject(name,health) {
			this.name = name,
			this.health = health,
			// Center (1/2 Canvas Width)
			this.positionX = canvas.width / 2,
			// Set Sprite Location on Map Floor
			this.positionY = gMO.mapFloor
			// RogueBot Initial Velocity in pixels/frame				
			this.velocity = 5;
			// RogueBot Jump Velocity
			this.jumpVelocity = 34 * scaleFactor
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
					ctx.drawImage(this.image, 0 + this.width * this.spriteFrameIndex, 0, this.width, this.height, canvas.width / 2 - 128 , gMO.mapFloor - 176 , this.width, this.width)
				}
			}
			// Returns the sprite object to the caller function
			return sprite
		}

	// RogueBot Animations
		// Load Spritesheet
			// Idle - 512px x 512px / Frame
			var rogueBotAnimIdleImg = new Image();
			rogueBotAnimIdleImg.src = "assets/images/robot1-idle-Sheet-4X.png";

			// Running - 512px x 512x / Frame
			var rogueBotAnimRunningImg = new Image();
			rogueBotAnimRunningImg.src = "assets/images/robot1-run-Sheet-4X.png";

			// Running with Gun - 512px x 512x / Frame
			var rogueBotAnimRunningGunImg = new Image();
			rogueBotAnimRunningGunImg.src = "assets/images/robot1-run-gun-Sheet-4X.png";

			// Jumping - 512px x 512x / Frame
			var rogueBotAnimJumpingImg = new Image();
			rogueBotAnimJumpingImg.src = "assets/images/robot1-jumping-Sheet-4X.png";

			// Shooting - 512px x 512x / Frame
			var rogueBotAnimShootingImg = new Image();
			rogueBotAnimShootingImg.src = "assets/images/robot1-shooting-Sheet-4X.png";

		// Create Animation Objects
			function setAnimations() {
				// RogueBot Animations
					rogueBot.animation.idle = spriteAnim(rogueBotAnimIdleImg,256,256)
					rogueBot.animation.running = spriteAnim(rogueBotAnimRunningImg,256,256)
					rogueBot.animation.jumping = spriteAnim()
					rogueBot.animation.shooting = spriteAnim()

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
					if (rogueBot.animation.running.frameNum === 100) {
						rogueBot.animation.running.frameNum = 0
					}
					if (rogueBot.animation.running.spriteFrameIndex === 10) {
						rogueBot.animation.running.spriteFrameIndex = 0
					}

					// Increments Sprite Frame
					rogueBot.animation.running.spriteFrameIndex = Math.floor(rogueBot.animation.running.frameNum / 10)
					
					rogueBot.animation.running.renderSprite()
					// Increments Frame Number
					rogueBot.animation.running.frameNum += 1

				
				
				} 
				else if (rogueBot.state == "jumping") {
					rogueBot.animation.jumping.renderSprite(rogueBotAnimJumpingImg, 0 , 0 , 512 , 512, )
				}
				else if (rogueBot.state == "runninggunning") {
					rogueBot.animation.running.renderSprite(rogueBotAnimRunningGunImg, 0 , 0 , 512 , 512, )
				} 
				else if (rogueBot.state == "shooting") {
					rogueBot.animation.shooting.renderSprite(rogueBotAnimShootingImg, 0 , 0 , 512 , 512 )
				}
			}

	// Projectile Animations

// Animation Render Loop 
	// Separate Render Loop vs For Loop to animate 1 frame every X rendered frames
	function renderAnim() {
		rogueBotAnimSelector() 		
		// requestAnimationFrame(renderAnim) (Causes Lag)
	}