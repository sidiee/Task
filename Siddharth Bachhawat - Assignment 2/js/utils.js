// This method is used to set Time in ISO format
function setISODateTime() {
	var currentDate = new Date();
	$('#current-time').append("Current ISO Time: " + currentDate.toISOString()); 
}

// This method is used to evaluate total elapsed time
function totalElapsedTime() {
  var currentDate = new Date(),n;
  
  // Update time every Second
 setInterval(function () {
	 n = new Date - currentDate;
	 $('#time-spent').html("Time Spent: "+Math.floor(n/60000) +" : " +Math.floor((n % 60000) / 1000) + " Minutes"); 
 }, 1000);

}

