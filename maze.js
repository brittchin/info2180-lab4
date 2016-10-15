var gameLost=false;

window.onload = function(){
	var walls = document.querySelectorAll(".boundary");
	var mazeStart = document.getElementById("start");
	var mazeEnd = document.getElementById("end");

	mazeStart.onmouseover= function(){gameStart(walls)};
	mazeEnd.onmouseover= function(){gameOver()};

	for (var i = 0; i < walls.length; i++) {
		walls[i].addEventListener("mouseover",function(){changeColour(walls)});

	}
};

function gameStart(elem){
	gameLost=false;
	for (var i = 0; i <= elem.length; i++) {
		elem[i].removeClassName("youlose");
	}
}

function changeColour(elem){
	gameLost=true;
	for (var i = 0; i <= elem.length; i++) {
		elem[i].setAttribute("class","boundary youlose");
	}
}

function gameOver(){
	if(gameLost==false){
		alert('You Win!');
	}
	else{
		alert('Opps. Game Over!');
	}
}
