window.onload = function(){
	var wall = document.getElementById("boundary1");
	wall.onmouseover=function(){
		changeColour(wall);
	}
};

function changeColour(elem){
		elem.setAttribute("class", "boundary youlose");
	}