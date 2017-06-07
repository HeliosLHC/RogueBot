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

                // Set RogueBot State to Shooting
                rogueBot.state = "shooting"

                // Creates new Projectile Element in Array 
                rogueBot.projectileArray.push(new createProjectileObject(canvas.width / 2,rogueBot.positionY))

                // Plays Projectile Fire Sound
                soundObject.projectileFire.play()
                break;

            case 37: // left
                // Check Map Collision
                // Checks if Collision occurs before setting map velocity
                if (collideState != "right") {
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

            case 80: // P for Pause
                    if (e.which == 80 && gameBegin == true) {
                    pauseState = !pauseState;

                        if (pauseState == true) {
                            gameRun = false;
                            console.log("event " + gameRun)
                            ctx.fillStyle = "black"; 
                            ctx.fillRect(0,0,1200,672);
                            $('#outerHealthBar').css("display","none"); 
                        }

                        if (pauseState == false) {
                            gameRun = true;
                            $('#innerHealthBar').css("display","block"); 
                        }
                    }
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
// $(document).keydown(function(e) {
//             if(e.which == 80 && gameBegin == true) {
//                 pauseState = !pauseState;
//                 if (pauseState == true) {
//                     gameRun = false;
//                     ctx.fillStyle = "black"; 
//                     ctx.fillRect(0,0,1200,672);
//                     $('div').css("display","none"); 
//                 }
//                 if (pauseState == false) {
//                     gameRun = true;
//                     $('div').css("display","block"); 
//                 }
//             }
//         });