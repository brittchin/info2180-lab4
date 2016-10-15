var win=false;

window.onload = function(){
	var walls = document.querySelectorAll(".boundary");
	var mazeStart = document.getElementById("start");
	var mazeEnd = document.getElementById("end");

	mazeStart.addEventListener("click",function(){gameStart(walls)});
	mazeEnd.onmouseover= function(){endGame()};

	for (var i = 0; i < walls.length; i++) {
		walls[i].addEventListener("mouseover",function(){changeColour(walls)});

	}
};

function gameStart(elem){
	win=true;
	for (var i = 0; i <= elem.length; i++) {
		elem[i].setAttribute("class","boundary");
	}
}

function changeColour(elem){
	win=false;
	for (var i = 0; i <= elem.length; i++) {
		elem[i].setAttribute("class","boundary youlose");
	}
}

function endGame(){
	if(win){
		alert('You Win!');
	}
	else{
		alert('Opps. Game Over!');
	}
}
