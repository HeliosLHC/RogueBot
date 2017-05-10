// Resize Canvas
	$('canvas').attr({
		width: (-4 + $(window).innerWidth()),
		height: (-4 + $(window).innerHeight())
	});

// Create Canvas Drawing Tool
	// Assign Canvas Element to variable "canvas"
	var canvas = document.querySelector('canvas');

	var ctx = canvas.getContext('2d');

	ctx.fillRect(100, 100, 100, 100);
// Start Button
	$("#start-btn").on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$(this).slideDown(400).hide(300);
		gameStart();
		// DEBUG
		console.log("Game Started")
	})
// Game Start Function
	function gameStart() {
	// Create Characters
		// createRect();  
		createCharacter();
		createEnemy();
		initMap();
		// loadRogueBot();
		// setInterval(render,10)
		initTime();
		// Start Event Listeners
		keyBind();
		render();
	}
// Global Variables
	// TODO transfer map properties into Global Map Object
	var mapX = 0;
	var mapY = 0;
	var rogueBot;
	var enemyBot;
	var mapVelocity = 0;
	// Declare Image Objects
	var mapImage = new Image();   
	var spriteRogueBot = new Image();
	// Map Dimensions
	var mapWidth;
	var mapHeight;
	// Scaled Map Dimensions
	var mapDynamicWidth;
	var mapDynamicHeight;
	// Time
	var startTime;
	// Event Listeners
	var keyUp;
	var keyRelease;
// Load Map
	// TODO Split Javascript File into separate components
	// TODO Move GLobal Variables
	// TODO Create Map Property Object
	// TODO Move render functions (map and characters) into gameRender() function
	// TODO Move Map Y location on Jump
	// TODO Create Global Floor Variable to Declare location (Y Level) of Floor Sprite and Collision for Characters 
	function initMap() {
	// Create new image object
	// Set source path for Map
		mapImage.src = 'assets/images/mariotest3x.png';
		$(mapImage).load(function() {
			// Set values for map dimensions
			mapWidth = mapImage.width;
			mapHeight = mapImage.height;
			// Calculate Scaled map dimensions
			mapDynamicWidth = mapWidth * canvas.height / 1296;
			mapDynamicHeight = canvas.height;			
		});
		// DEBUG
		console.log("Map Drawn");
	}
	// Use 2d renderer's drawImage method
	function moveMap() {
		// Dynamic Scaling of Map
		
		// Draws map when map file is loaded using global variables
		$(document).ready(function() {
			ctx.drawImage(mapImage,mapX,mapY,mapDynamicWidth,mapDynamicHeight);				
		});
		// --mapX;
		mapX += mapVelocity;
	};

// Object Creation Functions
	// Create White Rectangle
		function createRect() {
			ctx.fillStyle = 'white'
			ctx.fillRect(50,50,50,50);

		}
	// Create Main Character
		// Create Character Constructor (Constructor/Prototype Function)
			function createCharacterObject(name,health) {
				this.name = name,
				this.health = health,
				// Center (1/2 Canvas Width)
				this.positionX = canvas.width / 2,
				// Canvas Height Minus Sprite Height
				this.positionY,
			// RogueBot Initial Velocity in pixels/frame				
				this.velocity = 10
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

			// DEBUG 
			console.log(rogueBot);
			}
			function loadRogueBot() {
				// Set Source Path
				// TODO Move X and Y values into Global Variable
				ctx.drawImage(spriteRogueBot, (0.5 * canvas.width), 765, 100, 100);
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
			// Modifify local variables to change enemy stats
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
// Game Logic
	//  Game Render
	function render() {
		// Loop render function via requestAnimationFrame
		requestAnimationFrame(render);
		// Order of Load Determines the Layer Order
		moveMap();
		loadRogueBot();	
		updateTime();	
	}
	// Character Movement
		// Key Binding
		function keyBind() {
			// Key Press
			$(document).keydown(function(e) {
			// jQuery ".which" method returns keycode for event "e"
		    switch(e.which) {
		    	case 32: // space
		    	charJump();
		    	break;
		        case 37: // left
		        mapVelocity = rogueBot.velocity;
		        break;

		        case 38: // up
		        break;

		        case 39: // right
		        mapVelocity = -rogueBot.velocity;
		        break;

		        case 40: // down
		        break;

		        default: return; // exit this handler for other keys
		    }
		    e.preventDefault(); // prevent the default action (scroll / move caret)
		});
			// Key Release
			$(document).keyup(function(e) {
			/* Act on the event */
			mapVelocity = 0;
		});
		}
		// Movement
			// Jump 
				function charJump() {
					// Get time since Space was pressed
					spacePressTime = new Date();
					jumpTime = ((new Date()) - spacePressTime) / 1000;
					// Calculate current Height of Character Relative to Map Floor
					distY(rogueBot.velocity,jumpTime)
					// Set PositionY of Character
				}
	// Collision
		// Primitive Physics Engine
			// TODO Refactor Code for use in Physics Engine (Pending Approval)
			// TODO Actually Create Physics (Creating Science YAY)
			function distanceTraveled(velocity,time) {
				const gravAccel = 9.81;
			}
		// Collision Maps
			// TODO Create Collision Map that moves in Sync with Map
	// Score and Time
		
		// Time
			// Sets initial time
			function initTime() {
				startTime = new Date()
			}
			// Updates and draws time
			function updateTime() {
				// Get time since game start
				currTime = new Date()
				timeDelta = Math.floor((currTime - startTime) / 1000);
				// Draws Timer on Screen
				// TODO add scaling to text
				ctx.fillStyle = "white"
				ctx.font = "60px 'Press Start 2P'";
				ctx.textAlign = "right"
				ctx.fillText(timeDelta + " Seconds", canvas.width - 50, 80);
				ctx.strokeStyle = "black";
				ctx.strokeText(timeDelta + " Seconds", canvas.width - 50, 80);
				// DEBUG
				console.log(timeDelta);
			}

		// Kills

		// Score Algorithm based on Time and Kills
	// Check if Game End
		function gameEnd() {
			if (true) {

			} 
			else {

			}
		}
// TODO gameRescale() function with mapRescale() and spriteRescale() inside when eventlistene for window resize is triggered