$(document).ready(function(){ 

//declare variables 
var total = 0;
var crys1Value = Math.floor((Math.random() * 12) + 1);
var crys2Value = Math.floor((Math.random() * 12) + 1);
var crys3Value = Math.floor((Math.random() * 12) + 1);
var crys4Value = Math.floor((Math.random() * 12) + 1);

//when game starts, generate random # between 19-120
//display this number in HTML #targetNumber		
	$("#targetNumber").ready(function(){
		var targetNumber = Math.floor(Math.random() * 120) + 19;  // returns a number between 19 and 120
		$("#targetNumber").html("Target Number: " + targetNumber);
	});	

//assign each crytal image a random value between 1-12
//console log values to keep track of values
//as each crystal is clicked, add the value of that crystal to yourTotal 
//display values in game by ADDING them to yourTotal 
	$("#crystal1").click(function(){
		var crys1Value = Math.floor(Math.random() * 12) + 1;  // returns a number between 1 and 12
		console.log("Crystal 1 Value: " + crys1Value);
		total = total + crys1Value;
		console.log(total);
		$("#yourTotal").html("Your Total Score: " + total);
		if (total === targetNumber) {
		alert("WINNNNNN"); }
		else if (total > targetNumber) {
		alert("LOOOOOOSE"); }
		else {}
	});

	$("#crystal2").click(function(){
		var crys2Value = Math.floor(Math.random() * 12) + 1;  
		console.log("Crystal 2 Value: " + crys2Value);
		total = total + crys2Value;
		console.log(total);
		$("#yourTotal").html("Your Total Score: " + total);
	});
	
	$("#crystal3").click(function(){
		var crys3Value = Math.floor(Math.random() * 12) + 1;  
		console.log("Crystal 3 Value: " + crys3Value);
		total = total + crys3Value;
		console.log(total);
		$("#yourTotal").html("Your Total Score: " + total);
	});
	
	$("#crystal4").click(function(){
		var crys4Value = Math.floor(Math.random() * 12) + 1;  
		console.log("Crystal 4 Value: " + crys4Value);
		total = total + crys4Value;
		console.log(total);
		$("#yourTotal").html("Your Total Score: " + total);
	});


//compare total to targetNumber to determine if user wins or looses 






});