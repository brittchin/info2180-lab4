window.onload = function(){
	var walls = document.querySelectorAll(".boundary");
	for (var i = 0; i < walls.length; i++) {
		walls[i].addEventListener("mouseover",function(){changeColour(walls)},false);

	}
};

function changeColour(elem){
	for (var i = elem.length - 1; i >= 0; i--) {
		elem[i].setAttribute("class","boundary youlose");
	}
}
