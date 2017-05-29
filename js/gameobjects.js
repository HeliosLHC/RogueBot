// Object Creation Functions
// Create Main Character

	// Create Character Constructor (Constructor/Prototype Function)
		function createCharacterObject(name,health) {
			this.name = name,
			this.health = health,
			// Center (1/2 Canvas Width)
			this.positionX = canvas.width / 2,
			// Set Sprite Location on Map Floor
			this.positionY = gMO.mapFloor;
			// RogueBot Initial Velocity in pixels/frame				
			this.velocity = 5;
			// RogueBot Jump Velocity
			this.jumpVelocity = 34 * scaleFactor;
		}

	// Dynamically Generate Random Stats for RogueBot using Constructor
		function createCharacter() {
		// Modify local variables to change RogueBot Stats
		var name = "RogueBot1";
		var health = 100;
		// State Property can have values: "idle", "jump", "running"
		var state = "";
		// Creates RogueBot Object with the values set above
		rogueBot = new createCharacterObject(name,health);	
		// Set Source Path for Sprite
		spriteRogueBot.src = 'assets/images/megaman.png';
		// Creates RogueBot Sprite Object

		// DEBUG 
		console.log(rogueBot);
		}

		// Draws RogueBot Sprite with specified arguments
		function loadRogueBot() {
			rogueBot.positionX = canvas.width / 2;
			ctx.drawImage(spriteRogueBot, rogueBot.positionX, rogueBot.positionY, 100 * scaleFactor, 100 * scaleFactor);
		}
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
		// DEBUG
		console.log("Enemy " + name + " has been spawned");
		console.log(enemyBot);
	}
	function loadEnemy() {

	}
	// Enemy AI

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
		function spriteAnim(img, sx, sy, sw, sh, dx, dy, dw, dh) {
			var sprite = {
				context: null,
				width: null,
				height: null,
				image: img,
				render: function() {
					// ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
					ctx.drawImage(this.image, sx, sy, sw, sh, dx, dy, dw, dh)
				}
			}
		}
	// RogueBot Animations
		// Load Spritesheet
			// Idle - 512px x 512px/ Frame
			var rogueBotAnimIdle = new Image();
			rogueBotAnimIdle.src = "robot1-idle-Sheet-8X.png";
		// Animation Trigger and Render (Select Which Animation to Render)
		// Uses global RogueBot State to determine Animation Type
			if (true) {} else {} 
			spriteAnim(rogueBotAnimIdle, )

	// Projectile Animations
// Animation Render Loop 
	// Separate Render Loop vs For Loop to animate 1 frame every X rendered frames
	function renderAnim() {

		// Cannot have loop
		// requestAnimationFrame(renderAnim)
	}