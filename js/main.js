// Global Variables
	// Settings

		// Font Size in px
		var fontSize = 60;
		var debugEnabled = false;

	// GLOBAL SCALE FACTOR
	// Set Scale Factor based on screen resolution dimensions relative to 974 (height only)
	var scaleFactor; // Width, Height, Velocity, positions

	// Declare Sprite Objects
	var rogueBot;
	var enemyBot;
	// Declare Image Objects
	var mapImage = new Image();   
	var spriteRogueBot = new Image();
	// Time
	var startTime;
	// Event Listeners
	var keyUp;
	var keyRelease;
	// Jump
	var upPressTime;
	var jumpState = false;
	var jumpTime;
	// GLobal Map Object (Contains all Map Properties)
	var gMO = {
		mapX: 0,
		mapY: 0,
		mapVelocity: 0,
		// Initial Map Dimensions
		mapWidth: null,
		mapHeight: null,
		// Scaled Map Dimensions
		mapDynamicHeight: null,
		mapDynamicWidth: null
	}

// Initialization Functions (Called Only Once)
	// Resize Canvas
			$('canvas').attr({
				width: ($(window).width()),
				height: ($(window).height())
			});		
		
	// Create Canvas Drawing Tool
		// Assign Canvas Element to variable "canvas"
		var canvas = document.querySelector('canvas');
		// Creates HTML Canvas Drawing Tool assigned to variable "ctx"
		var ctx = canvas.getContext('2d');
	// Start Button
		$("#start-btn").on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			$(this).hide(300);
			gameStart();
			// DEBUG
			console.log("Game Started")
		})
	// Game Start Function
		function gameStart() {
			// Initialize Map 
			initMap();

			// Initialize Collision MAp
			initCollisionMap();

			// Create Character Objects
			createCharacter();
			createEnemy();	

			// loadRogueBot();

			// Initialize Time Object and Set Font Rendering Properties
			initTimeAndFont();

			// Start Event Listeners
			keyBind();

			// DEBUG
			if (debugEnabled) {
				debug();
			}

			// Wait for page (initial frame) to be loaded before beginning animation and logic 
			$(document).ready(function() {
				render();
			});
		}

// Load Map
 	// TODO gameRescale() function with mapRescale() and spriteRescale() inside when eventlistene for window resize is triggered
	// TODO Split Javascript File into separate components
	// TODO Move render functions (map and characters) into gameRender() function
	// TODO Move Jump Collision Check into new function and plae into collision.js
	// TODO Debug Object with console.table()
	// TODO Move Global Vars and Initialization Functions into its own JS Module
	// TODO Move Jump Collision into COllision.js
	// Collision Check Function, set range for x and y that check becomes active, this input collisionbox data to check for match
	// TODO Create JSON File for All Collision Map Data OR Create Multiple Objects per Collision Box
	// Dynamic Collision State Generation
	// Creates the Initial State of Map
	// Change Map Floor as mapX changes (changes in height)
	function initMap() {

		// Set source path for Map
		mapImage.src = 'assets/images/mariotest3x.png';

		// .load commented out to allow rogueBot to run prior to .load occurence
		// $(mapImage).load(function() {
			// Set values for map dimensions
			gMO.mapWidth = mapImage.width;
			gMO.mapHeight = mapImage.height;
			// Calculate Scaled map dimensions
			gMO.mapDynamicWidth = gMO.mapWidth * canvas.height / gMO.mapHeight;
			gMO.mapDynamicHeight = canvas.height;
			// Set Scaling Factor			
			scaleFactor = gMO.mapDynamicHeight / 974
		// });

		// Set Map Floor Value
		gMO.mapFloor = 0.788*974*scaleFactor;
		// DEBUG
		console.log("Map Drawn");
	}
	// Use 2d renderer's drawImage method
	function moveMap() {
		// Dynamic Scaling of Map
		
		// Draws map when map file is loaded using global variables
		$(document).ready(function() {
			ctx.drawImage(mapImage,gMO.mapX,gMO.mapY,gMO.mapDynamicWidth,gMO.mapDynamicHeight);				
		});
		// Moves map sprite distance X calculated from the velocity of the map (assume map moves "gMO.mapVelocity" pixels per frame)
		gMO.mapX += (gMO.mapVelocity * scaleFactor);
	};

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
				ctx.drawImage(spriteRogueBot, rogueBot.positionX * scaleFactor, rogueBot.positionY, 100 * scaleFactor, 100 * scaleFactor);
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
// Game Logic

	//  Game Render (Logic and Animation calculated by frame instead of time)
	function render() {
		// Order of Load Determines the Layer Order

		// Loop render function via requestAnimationFrame
		requestAnimationFrame(render);
		// Animates Map Movement
		moveMap();
		// collisionMapMove();
		loadRogueBot();	
		// Checks if character is in jump state and begins jump animation
		charJump();
		// setFontSize();
		updateTime();	
		updateKills();
		// Check for Collision Events for All Objects and Map
		collisionCheck();
	}

	// Character Movement
		// Movement
			// Jump 
				function charJump() {
					if (jumpState) {
						// Get time since Space was pressed
						jumpTime = ((new Date()) - upPressTime) / 1000;
						// Calculate current Height of Character Relative to Map Floor and Set PositionY of Character
						rogueBot.positionY -= distY(rogueBot.jumpVelocity,jumpTime)
						// Check if Character Hits Map FLoor, if true, stop the jump physics
						if (jumpTime > 1 && rogueBot.positionY >= gMO.mapFloor) {
							jumpState = false;
							rogueBot.positionY = gMO.mapFloor;
							return;
						}	
					}
					else {
						// If Character is not jumping, return to caller function and continue loop
						return;
					}
				}
	// Check if Game End
		// Create gameEnd event
		function gameEnd() {
			if (true) {
				calculateScore(killCount,timeDelta);
			} 
			else {
				return;
			}
		}
