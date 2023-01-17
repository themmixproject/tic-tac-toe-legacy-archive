var colors=["blue", "lime"];
var counter1=0;
function color(){
      if(counter1==0){
	   	output.style.color="black";
         color=true;
	for (var i = 1; i <= 9; i++) {
   		document.getElementById(i).style.color = colors[0];
   		document.getElementById(i).style.borderColor = colors[0];
   	};
         output.style.color=colors[0];
   		document.getElementById("button").style.borderColor = colors[0];
   		document.getElementById("button").style.color = colors[0];
   		document.getElementById("button1").style.borderColor = colors[0];
   		document.getElementById("button1").style.color = colors[0];
   		document.getElementById("button1").innerHTML = "Night";
   		document.getElementById("button2").style.borderColor = colors[0];
   		document.getElementById("button2").style.color = colors[0];
      counter1++;
   }
      else if(counter1==1){
         output.style.color="black";
         color=true;
   for (var i = 1; i <= 9; i++) {
         document.getElementById(i).style.color = colors[1];
         document.getElementById(i).style.borderColor = colors[1];
      };
         output.style.color=colors[1];
         document.getElementById("button").style.borderColor = colors[1];
         document.getElementById("button").style.color = colors0[1];
         document.getElementById("button1").style.borderColor = colors[1];
         document.getElementById("button1").style.color = colors[1];
         document.getElementById("button1").innerHTML = "Night";
         document.getElementById("button2").style.borderColor = colors[1];
         document.getElementById("button2").style.color = colors[1];
};
};