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
		$(this).css('display', 'none');
		gameStart();
	})
// Game Start Function
	// Create Characters
		createRect(); 
// Load Map
	// Create new img element
	var img = new Image();   
	// Set source path
	// img.src = 'assets/images/mariotest.png'; 


// Object Creation Functions
	// Create White Rectangle
		function createRect() {
			ctx.fillStyle = 'white'
			ctx.fillRect(50,50,50,50);

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