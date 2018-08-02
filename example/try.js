var valTwo = "";

function extwo() {
  document.getElementById('exercisetwo').innerHTML = valTwo ;
}

window.onload = function createbuttons(){

    document.getElementById('exbuttwo').onclick =function(){ 
    valTwo =document.getElementById('inputtwo').value; extwo();
	};
		
}

