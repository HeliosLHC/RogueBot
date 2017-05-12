// Calculate Horizontal Distance Traveled 
function distX(velocity,time) {
	return (velocity*time); 
}
// Calculate Vertical Distance Traveled Accounting for Gravity 
function distY(velocity,time) {
	const gravAccel = 100 * scaleFactor;	
	return (velocity*time+0.5*(-gravAccel)*Math.pow(time,2)); 
}
