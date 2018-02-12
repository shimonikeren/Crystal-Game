$(document).ready(function(){ 

//declare variables 
var total = 0;
var wins = 1;
var loses = 1;
var crys1Value = Math.floor((Math.random() * 12) + 1); //returns a number between 1-12
var crys2Value = Math.floor((Math.random() * 12) + 1);
var crys3Value = Math.floor((Math.random() * 12) + 1);
var crys4Value = Math.floor((Math.random() * 12) + 1);
var targetNumber = Math.floor((Math.random() * 120) + 19);  // returns a number between 19 and 120

//when game starts, generate random # between 19-120
//display this number in HTML #targetNumber		
	$("#targetNumber").ready(function(){
		$("#targetNumber").html("Target Number: " + targetNumber);
	});	

//create a reset function
	function reset() {
	targetNumber = Math.floor((Math.random() * 120) + 19);
	$("#targetNumber").html("Target Number: " + targetNumber);
	crys1Value = Math.floor((Math.random() * 12) + 1); 
	crys2Value = Math.floor((Math.random() * 12) + 1);
	crys3Value = Math.floor((Math.random() * 12) + 1);
	crys4Value = Math.floor((Math.random() * 12) + 1);
	total = 0;
	$("#yourTotal").html("Your Total: 0");
	};

//assign each crytal image a random value between 1-12
//console log values to keep track of values
//as each crystal is clicked, add the value of that crystal to yourTotal 
//display values in game by ADDING them to yourTotal 
//compare total to targetNumber to determine if user wins or looses 
	$("#crystal1").click(function(){
		console.log("Crystal 1 Value: " + crys1Value);
		total = total + crys1Value;
		console.log("New total: " + total);
		$("#yourTotal").html("Your Total Score: " + total);
		if (total === targetNumber) {
		$("#wins").html("Wins: " + wins++);
		reset();
		 }
		else if (total > targetNumber) {
		$("#loses").html("Loses: " + loses++); 
		reset();}
		else {}
	});

	$("#crystal2").click(function(){
		console.log("Crystal 2 Value: " + crys2Value);
		total = total + crys2Value;
		console.log("New total: " + total);
		$("#yourTotal").html("Your Total Score: " + total);
		if (total === targetNumber) {
		$("#wins").html("Wins: " + wins++);
		reset();
		 }
		else if (total > targetNumber) {
		$("#loses").html("Loses: " + loses++); 
		reset();}
		else {}

	});
	
	$("#crystal3").click(function(){
		console.log("Crystal 3 Value: " + crys3Value);
		total = total + crys3Value;
		console.log("New total: " + total);
		$("#yourTotal").html("Your Total Score: " + total);
		if (total === targetNumber) {
		$("#wins").html("Wins: " + wins++);
		reset();
		 }
		else if (total > targetNumber) {
		$("#loses").html("Loses: " + loses++); 
		reset();}
		else {}

	});
	
	$("#crystal4").click(function(){
		console.log("Crystal 4 Value: " + crys4Value);
		total = total + crys4Value;
		console.log("New total: " + total);
		$("#yourTotal").html("Your Total Score: " + total);
		if (total === targetNumber) {
		$("#wins").html("Wins: " + wins++);
		reset();
		 }
		else if (total > targetNumber) {
		$("#loses").html("Loses: " + loses++); 
		reset();}
		else {}

	});









});