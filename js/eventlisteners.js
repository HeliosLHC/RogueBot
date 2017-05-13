// TODO Split into separate event listeners to allow individual disabling
// Key Binding
function keyBind() {
    // Key Press
    $(document).keydown(function(e) {
        // jQuery ".which" method returns keycode for event "e"
        switch (e.which) {
            
            case 32: // space

                break;

            case 37: // left
                // Check Map Collision
                // Checks if Collision occurs before setting map velocity
                if (collideState != "left") {
                    // Positive Map Velocity = Map Moves Right
                    gMO.mapVelocity = rogueBot.velocity;
                    break;
                } else {
                    gMO.mapVelocity = 0;
                    break;
                }
                break;

            case 38: // up
                // Prevent Player from pressing or holding "UP" while character is jumping
                if (jumpState === false) {
                    upPressTime = new Date();

                };

                // Set Jump State - charJump() called if jumpState = true
                jumpState = true;
                console.log("Jumping");
                break;

            case 39: // right
                if (collideState != "right") {
                    // Negative Map Velocity = Map Moves Left				
                    gMO.mapVelocity = -rogueBot.velocity;
                    break;
                } else {
                    gMO.mapVelocity = 0;
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
        switch (e.which) {
            case 32:
                break;
            case 37:
                gMO.mapVelocity = 0;
                break;
            case 39:
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
            // Resize Canvas
            // TODO Refactor to allow a resizeCanvas() function to be called without interfering with map loading
            $('canvas').attr({
                width: ($(window).width()),
                height: ($(window).height())
            });
            initMap();
            // moveMap();
            rogueBot.positionY = gMO.mapFloor;
            loadRogueBot();
            // setFontSize();
            console.log("Window Resized");
        });

        // Checks if game window is not in focus
        $(window).focusout(function(event) {
            gMO.mapVelocity = 0;
        });    
    });
    
}
