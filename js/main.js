// Resize Canvas
	$('canvas').attr({
		width: (-5 + $(window).innerWidth()),
		height: (-5 + $(window).innerHeight())
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
		$(this).hide();
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
		// DEBUG
	}
// Load Map
	// Create GLobal Variables
	var mapX = 0;
	var mapY = 0;
	function initMap() {
	// Create new image object
		var mapImage = new Image();   
	// Set source path
		mapImage.src = 'assets/images/mariotest3x.png';
		console.log("Map Loaded");
		
	// Use 2d renderer's drawImage method
		function moveMap() {
			// TODO Add Dynamic Scaling to loading Map (Currently set for 1920x1080 Resolution)
			// Set Width to Map Image Width
			var width = 11233;
			// Map Height dynamically adjusted
			var height = canvas.height;
			ctx.drawImage(mapImage,mapX,mapY,width,height);
			--mapX;
		};
		setInterval(moveMap,10);
		console.log("Map Drawn");
	}
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
				this.health = health
			}
		// Dynamically Generate Random Stats for RogueBot using Constructor
			function createCharacter() {
			// Modify local variables to change RogueBot Stats
			var name = "RogueBot1";
			var health = 100;
			var rogueBot = new createCharacterObject(name,health);			
			console.log("RogueBot Object Created");
			console.log(rogueBot)
			}

	// Create Enemy
		// Create Enemy Constructor
		function createEnemyObject(name,health) {
				this.name = name,
				this.health = health
			}
		// Dynamically Generate Random Stats for Enemy using Constructor
		function createEnemy() {
			// Modifify local variables to change enemy stats
			var name = "enemy1";
			var health = 100;
			var enemyBot = new createEnemyObject(name,health)
			console.log("Enemy " + name + "has been spawned");
			console.log(enemyBot);
		}
// Game Logic
	//  Game Render
	function render() {
		// Loop render function via requestAnimateFrame
		requestAnimateFrame(render)
	}
	// Character Movement
		// Key Binding
		$(document).keydown(function(e) {
			// jQuery ".which" method returns keycode for event "e"
		    switch(e.which) {
		        case 37: // left
		        break;

		        case 38: // up
		        break;

		        case 39: // right
		        break;

		        case 40: // down
		        break;

		        default: return; // exit this handler for other keys
		    }
		    e.preventDefault(); // prevent the default action (scroll / move caret)
		});
	// Collision
		// Primitive Physics Engine
			// TODO Refactor Code for use in Physics Engine (Pending Approval)
			// TODO Actually Create Physics (Creating Science YAY)
			function distanceTraveled(velocity,time) {
				const gravAccel = 9.81;
			}
	// Score and Time
		
		// Time
		var date = new Date()
		// Kills

		// Score Algorithm based on Time and Kills