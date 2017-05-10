function distX(velocity,time) {
	return (velocity*time); 
}
function distY(velocity,time) {
	const gravAccel = 20;	
	return (velocity*time+0.5*(-gravAccel)*Math.pow(time,2)); 
}