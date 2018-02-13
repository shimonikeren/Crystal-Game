$( "#winImageHolder" ).ready(function() {
  $( "#winPic").hide();
  $( "#losePic").hide();
});

//document ready function for jQuery
$(document).ready(function(){ 

//declare variables
var targetNumber = Math.floor((Math.random() * 101) + 19);  // returns a number between 19 and 120. this will happen upon loading the document
var total = 0;
var wins = 1;
var loses = 1;
var crys1Value = Math.floor((Math.random() * 12) + 1); //returns a number between 1-12
var crys2Value = Math.floor((Math.random() * 12) + 1);
var crys3Value = Math.floor((Math.random() * 12) + 1);
var crys4Value = Math.floor((Math.random() * 12) + 1);



//when game starts, generate random # between 19-120
//display this number in HTML #targetNumber		
	$("#targetNumber").ready(function(){
		$("#targetNumber").html("Target Number: " + targetNumber);
	});	

//create a reset function
	function reset() {
	targetNumber = Math.floor((Math.random() * 101) + 19);
	$("#targetNumber").html("Target Number: " + targetNumber);
	crys1Value = Math.floor((Math.random() * 12) + 1); 
	crys2Value = Math.floor((Math.random() * 12) + 1);
	crys3Value = Math.floor((Math.random() * 12) + 1);
	crys4Value = Math.floor((Math.random() * 12) + 1);
	total = 0;
	$("#yourTotal").html("Your Total: 0");
	};


//create function for when user wins
function winner (){
	//alert("You won! Congrats!");
  $( "#winPic" ).fadeIn(500);
  $( "#winPic" ).fadeOut(2000);
	$("#wins").html("Wins: " + wins++);
	reset();
}

//create function for when user loses
function loser (){
	// alert("You lost! Sorry, try again!");
	$( "#losePic" ).fadeIn(500);
  	$( "#losePic" ).fadeOut(2000);
	$("#loses").html("Loses: " + loses++);
	reset();
}

//function for when each crystal when clicked
//as each crystal is clicked, add the value of that crystal to yourTotal 
//display values in game by ADDING them to yourTotal 
//compare total to targetNumber to determine if user wins or looses, then call reset function 
	$("#crystal1").click(function(){
		total = total + crys1Value;
		$("#yourTotal").html("Your Total Score: " + total);
		if (total === targetNumber) {
		winner ();
		}
		else if (total > targetNumber) {
		loser(); 
		}
		else {}
	});

	$("#crystal2").click(function(){
		total = total + crys2Value;
		$("#yourTotal").html("Your Total Score: " + total);
		if (total === targetNumber) {
		winner ();
		}
		else if (total > targetNumber) {
		loser(); 
		}
		else {}

	});
	
	$("#crystal3").click(function(){
		total = total + crys3Value;
		$("#yourTotal").html("Your Total Score: " + total);
		if (total === targetNumber) {
		winner ();
		}
		else if (total > targetNumber) {
		loser(); 
		}
		else {}

	});
	
	$("#crystal4").click(function(){
		total = total + crys4Value;
		$("#yourTotal").html("Your Total Score: " + total);
		if (total === targetNumber) {
		winner ();
		}
		else if (total > targetNumber) {
		loser(); 
		}
		else {}

	});


});