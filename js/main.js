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

			// Disable Background Image 
			$("#gameDiv").css('background-image', 'url("")');
			// DEBUG
			console.log("Game Started")
		})
	// Game Start Function
		function gameStart() {
			// Asset Initialization
				// Loads Map Image
				mapImage.src = 'assets/images/mariotest3x.png';
			// Waits for map to load before executing rest of initialization
			mapImage.addEventListener('load', function() {
				// Initialize Map 
				initMap();

				// Initialize Collision MAp
				// initCollisionMap();

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
			}, false);
		}

// Load Map
 	// TODO gameRescale() function with mapRescale() and spriteRescale() inside when eventlistene for window resize is triggered
	// TODO Split Javascript File into separate components
	// TODO Move render functions (map and characters) into gameRender() function
	// TODO Move Jump Collision Check into new function and plae into collision.js
	// TODO Debug Object with console.table()
	// JSON Object include properties "solid" true or false and "floating" true or false
	// TODO Move Global Vars and Initialization Functions into its own JS Module
	// TODO Move Jump Collision into COllision.js
	// Collision Check Function, set range for x and y that check becomes active, this input collisionbox data to check for match
	// TODO Create JSON File for All Collision Map Data OR Create Multiple Objects per Collision Box
	// Dynamic Collision State Generation
	// Creates the Initial State of Map
	// Change Map Floor as mapX changes (changes in height)
	function initMap() {

		// Set source path for Map

		// .load commented out to allow rogueBot to run prior to .load occurence
		// Set values for map dimensions
			gMO.mapWidth = mapImage.width;
			gMO.mapHeight = mapImage.height;
			// Calculate Scaled map dimensions
			gMO.mapDynamicWidth = gMO.mapWidth * canvas.height / gMO.mapHeight;
			gMO.mapDynamicHeight = canvas.height;
			// Set Scaling Factor			
			scaleFactor = gMO.mapDynamicHeight / 974;
			console.log("Map Drawn");
			// Set Map Floor Value
			gMO.mapFloor = 0.788*974*scaleFactor;

	

		// Resize Event
		// gMO.mapX = scaleFactor;
		// DEBUG
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


// Game Logic

	//  Game Render (Logic and Animation calculated by frame instead of time)
	function render() {
		// Order of Load Determines the Layer Order

		// Clear Canvas
		ctx.clearRect(0,0, canvas.width, canvas.height);

		// Loop render function via requestAnimationFrame
		// Animates Map Movement
		moveMap();
		// collisionMapMove();
		loadRogueBot();	
		// Checks if character is in jump state and begins jump animation
		charJump();
		// setFontSize();
		updateTime();	
		updateKills();
		debugTable();
		// Check for Collision Events for All Objects and Map
		collisionCheck();
		// collisionCheckExec();
		// console.log(collideState)
		// Initiates Animation Render Loop
		// For every 5 frames of the game render, 1 frame of sprite animation is rendered (12)
		for (var i = 6; i > 5; i--) {
			// renderAnim();	
			if (i == 1) {
				i = 6;
			};
		}
		requestAnimationFrame(render);
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
