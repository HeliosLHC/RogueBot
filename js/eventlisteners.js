// TODO Split into separate event listeners to allow individual disabling
// Key Binding
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
                    e.preventDefault();
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
            var canvasWidthInit = canvas.width;
            var canvasHeightInit = canvas.height;
            // Resize Canvas
            // TODO Refactor to allow a resizeCanvas() function to be called without interfering with map loading
            $('canvas').attr({
                width: ($(window).width()),
                height: ($(window).height())
            });
            var canvasWidthFinal = canvas.width;
            var canvasHeightFinal = canvas.width;
            gMO.mapX -= 0.5 * (canvasWidthInit - canvasWidthFinal)
            initMap();
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
