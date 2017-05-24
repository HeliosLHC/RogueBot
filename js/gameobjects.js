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
// Create Projectile

	// Create Projectile Constructor
	function createProjectileObject(name) {
		this.name = "",
		this.positionX,
		this.positionY,
		// Bullet Velocity in pixels/frame
		this.velocity = 10
	}
// Animations
	// Global Sprite Animation Function
		function spriteAnim() {
			var sprite = {
				context: null,
				width: null,
				height: null,
				image: null,
				render: null
			}
		}
	// RogueBot Animations
		// Load Spritesheet
		var rogueBotAnim = new Image();
		rogueBotAnim.src = "assets/images/roguebotspritesheet.png";

	// Enemy Animations

	// Projectile Animations