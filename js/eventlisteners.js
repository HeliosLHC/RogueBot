var canvasWidthInit;
var canvasHeightInit;
var canvasWidthFinal;
var canvasHeightFinal;
var keyPressState;
var keyCodeArray = [];

// TODO Split into separate event listeners to allow individual disabling
// Key Binding
	// Enter Key Binding - Triggers Start Button Click
	// TODO ONLY ALLOW TRIGGER TO OCCUR BEFORE GAME 
		// DISABLE EVENT LISTENER 
	$(document).keydown(function(event) {
		if (event.which === 13) {
			$("#start-btn").trigger("click")
		} 
	});
function keyBind() {
    // Key Press
        // Left Key
        // $(document).keydown(function(event) {
        //     if (event.which == 37) {
        //         if (collideState != "left") {
        //             // Positive Map Velocity = Map Moves Right
        //             gMO.mapVelocity = rogueBot.velocity;
        //         } else {
        //             gMO.mapVelocity = 0;
        //             event.preventDefault();
        //             console.log("Left Key Locked");
        //         }

                    
        //     } 
        //         else {
                    
        //         }
        // });
    $(document).keydown(function(e) {
        // Sets KeyPressState to true
        keyPressState = true

        // jQuery ".which" method returns keycode for event "e"
        switch (e.which) {
            case 32: // space
                // Add Key to Key Array
                keyCodeArray[e.which] = true

                rogueBot.state = "shooting"
                break;

            case 37: // left
                // Check Map Collision
                // Checks if Collision occurs before setting map velocity
                if (collideState != "left") {
                    // Add Key to Key Array
                    keyCodeArray[e.which] = true
                    // Positive Map Velocity = Map Moves Right
                    gMO.mapVelocity = rogueBot.velocity;

                    // Set RogueBot State
                    rogueBot.state = "running"

                    break;
                } else {
                    e.preventDefault();
                    break;
                }
                break;

            case 38: // up
                // Prevent Player from pressing or holding "UP" while character is jumping
                if (rogueBot.state != "jumping" ) {
                    upPressTime = new Date();

                    // Set RogueBot State
                    rogueBot.state = "jumping"
                };

                // Set Jump State - charJump() called if rogueBot.state = "jump"
                rogueBot.state = "jumping";
                console.log("Jumping");
                break;

            case 39: // right
                if (collideState != "right") {
                    // Add Key to Key Array
                    keyCodeArray[e.which] = true

                    // Negative Map Velocity = Map Moves Left				
                    gMO.mapVelocity = -rogueBot.velocity;
     
                    // Set RogueBot State
                    rogueBot.state = "running"

                    break;
                } else {
                    e.preventDefault();
                }
                break;

            case 40: // down
                break;

            default:
                return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });

    // Key Release
    $(document).keyup(function(e) {
        keyPressState = false
        switch (e.which) {
            case 32:
                keyCodeArray[e.which] = false
                break;
            case 37:
                keyCodeArray[e.which] = false
                gMO.mapVelocity = 0;
                break;
            case 39:
                keyCodeArray[e.which] = false
                gMO.mapVelocity = 0;
                break;
            default:
                return;
        }

    });
    	// 

    // Resize Event
    $(document).ready(function() {
        $(window).resize(function(event) {
            canvasWidthInit = canvas.width;
            canvasHeightInit = canvas.height;
            // Resize Canvas
            // TODO Refactor to allow a resizeCanvas() function to be called without interfering with map loading
            $('canvas').attr({
                width: ($(window).width()),
                // height: ($(window).height())
            });
            canvasWidthFinal = canvas.width;
            canvasHeightFinal = canvas.height;
            gMO.mapX -= 0.5 * (canvasWidthInit - canvasWidthFinal);
            // gMO.mapX += 0.005 * (canvasWidthInit * ((canvasHeightInit - canvasHeightFinal) / 974));
            initMap();
            rogueBot.positionY = gMO.mapFloor;

            // loadRogueBot();
            // setFontSize();
            console.log("Window Resized");
        });

        // Checks if game window is not in focus
        $(window).focusout(function(event) {
            gMO.mapVelocity = 0;
        });    
    });
    
}
function keyComboCheck() {
    if (keyCodeArray[32] && keyCodeArray[37] || keyCodeArray[32] && keyCodeArray[39]) {
        return true
    } else {
        return false
    }
}
