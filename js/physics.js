function distX(velocity,time) {
	return (velocity*time); 
}
function distY(velocity,time) {
	const gravAccel = 9.81;	
	return (velocity*time+0.5*gravAccel*Math.pow(time,2)); 

}