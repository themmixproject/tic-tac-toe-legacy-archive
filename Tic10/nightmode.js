function nightmode(){

	if(change==true){
	document.body.style.background = "black";
	for (var i = 1; i <= 9; i++) {
   		document.getElementById(i).style.background = "black";
   		night=true;
   	};
   		document.getElementById("button").style.background = "black";
   		document.getElementById("button1").style.background = "black";
   		document.getElementById("button1").onclick = function(){daymode()};
   		document.getElementById("button1").innerHTML = "Day";
   		document.getElementById("button2").style.background = "black";
	}
	else{
	for (var i = 1; i <= 9; i++) {
   		document.getElementById(i).style.background = "black";
   		document.getElementById(i).style.border = "2px solid white";
   		document.getElementById(i).style.color = "white";
   	};
   		night=true;
   		output.style.color="white";
   		document.getElementById("button").style.border = "2px solid white";
   		document.getElementById("button").style.background = "black";
   		document.getElementById("button").style.color = "white";
   		document.body.style.background = "black";
   		console.log(output.style.color);
   		document.getElementById("button1").style.border = "2px solid white";
   		document.getElementById("button1").style.background = "black";
   		document.getElementById("button1").style.color = "white";
   		document.getElementById("button1").onclick = function(){daymode()};
   		document.getElementById("button1").innerHTML = "Day";
    	document.getElementById("button2").style.border = "2px solid white";
   		document.getElementById("button2").style.background = "black";
   		document.getElementById("button2").style.color = "white";
   		document.getElementById("button3").style.border = "2px solid white";
   		document.getElementById("button3").style.background = "black";
   		document.getElementById("button3").style.color = "white"; 
   		}		
};
function daymode(){
	if(change==true){
	document.body.style.background = "white";
	night=false;
	for (var i = 1; i <= 9; i++) {
   		document.getElementById(i).style.background = "white";
   	};
   		document.getElementById("button").style.background = "white";
   		document.getElementById("button1").style.background = "white";
   		document.getElementById("button1").onclick = function(){nightmode()};
   		document.getElementById("button2").style.background = "white";
	}
	else{
	document.body.style.background = "white";
	for (var i = 1; i <= 9; i++) {
   		document.getElementById(i).style.background = "white";
   		document.getElementById(i).style.border = "2px solid black";
   		document.getElementById(i).style.color = "black";
   	};
   		var night=false;
   		output.style.color="black";
   		document.getElementById("button").style.border = "2px solid black";
   		document.getElementById("button").style.background = "white";
   		document.getElementById("button").style.color = "black";
   		document.getElementById("button1").style.border = "2px solid black";
   		document.getElementById("button1").style.background = "white";
   		document.getElementById("button1").style.color = "black";
   		document.getElementById("button1").onclick = function(){nightmode()};
   		document.getElementById("button2").style.border = "2px solid black";
   		document.getElementById("button2").style.background = "white";
   		document.getElementById("button2").style.color = "black";
      	document.getElementById("button3").style.border = "2px solid black";
   		document.getElementById("button3").style.background = "white";
   		document.getElementById("button3").style.color = "black";
   	}
};