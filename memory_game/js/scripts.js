var clickCount = 0;
var match = "Incorrect.";
var setsMatched = 0;

var card1 = "blank";
var card2 = "blank";

var card1Type = "";
var card2Type = "";

function flipTile(tile_id){

	$("#tiles_wrap").css("pointer-events","none");

	var currentID = "#" + tile_id;
	
	if(card1 == 'blank'){
		card1 = tile_id;
	}
	else{
		card2 = tile_id;
	}
	
	if($(currentID).hasClass("flip")){
		$(currentID).removeClass("flip");
	}
	else{
		$(currentID).addClass("flip");
		$(currentID).css("pointer-events","none");
	}
	
	if(clickCount < 1){
		clickCount = clickCount + 1;
		setTimeout(function(){ $("#tiles_wrap").css("pointer-events","auto");}, 500);
	}
	else{
		compareCards();
	}
	
	//console.log("card 1: " + card1 + " card 2: " + card2);
}

function compareCards(){
	
	card1Type = card1.slice(0, -2);
	card2Type = card2.slice(0, -2);
	
	clickCount = 0;
	if(card1Type == card2Type){
		match = "Correct!";
		
		setTimeout(function(){
			$("#tiles_wrap").find(".flip").removeClass("flip");
			setsMatched += 1;
			$("#tiles_wrap").css("pointer-events","auto");
			$("#" + card1).css("opacity","0");
			$("#" + card1).css("pointer-events","auto");
			$("#" + card1).addClass("inactive");
			$("#" + card2).css("opacity","0");
			$("#" + card2).css("pointer-events","auto");
			$("#" + card2).addClass("inactive");
			card1 = "blank";
			card2 = "blank";
			match = "false";
			
			if(setsMatched == 4){
				document.getElementById("result").innerHTML = "You did it!";
				$("#result").addClass("done");
				$("#submit").css("display","block");
			}
			else{
				document.getElementById("result").innerHTML = "Keep Going!";
			}
		},1000);
	}

	else{
		match="Incorrect.";
		
		setTimeout(function(){
			$("#tiles_wrap").find(".flip").removeClass("flip");
			
			$("#" + card1).css("pointer-events","auto");
			$("#" + card2).css("pointer-events","auto");
			$("#tiles_wrap").css("pointer-events","auto");
			
			card1 = "blank";
			card2 = "blank";
			
			document.getElementById("result").innerHTML = "Try Again.";
		}, 1500);
	}
	document.getElementById("result").innerHTML = match;
}

//scoring
var scoreValue = 0;
/*
function updateScore2(){
	scoreValue = 100;
	document.cookie = "scoreValue = " + scoreValue;
	$( "#score" ).load(window.location.href + " #score" );
	$.post('includes/sendScore2.inc.php');
	document.getElementById("submit").innerHTML = "Score sent!"
}
*/