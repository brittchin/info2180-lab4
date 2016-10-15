var gameLost=false;

window.onload = function(){
	var walls = document.querySelectorAll(".boundary");
	var mazeStart = document.getElementById("start");
	var mazeEnd = document.getElementById("end");

	mazeStart.addEventListener("click",function(){gameStart(walls)});
	mazeEnd.addEventListener("mouseover",function(){endGame()});

	for (var i = 0; i < walls.length; i++) {
		walls[i].addEventListener("mouseover",function(){changeColour(walls)});
	}
};

function gameStart(elem){
	gameLost=false;
	document.getElementById("status").innerHTML="Move your mouse over the 'S' to begin."; 
	for (var i = 0; i <= elem.length; i++) {
		elem[i].setAttribute("class","boundary");
	}
}

function changeColour(elem){
	gameLost=true;
	for (var i = 0; i <= elem.length; i++) {
		elem[i].setAttribute("class","boundary youlose");
	}
}

function endGame(){
	if(!gameLost){
		document.getElementById("status").innerHTML="You Win!";
	}
	else{
		document.getElementById("status").innerHTML="Opps. Game Over!";
	}
}
