function AI(){
	function ran(){
		num = Math.floor(Math.random() * 9 +1);
		return num;
	};
	var number = ran();
	console.log(number);
	var Randomblock = document.getElementById(number);
	if(Randomblock.innerHTML != ""){
		console.log(click + "if");
		AI();
			}
	else{

		Randomblock.innerHTML = "X";
		winCheckX();	
		click=true;
		console.log(click + "else");
	};
};
 	 function block(){



 	 if((sq1.innerHTML=="O" && sq5.innerHTML=="O" )&& sq9.innerHTML==""){
 		sq9.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
   	 else if((sq1.innerHTML=="O" && sq9.innerHTML=="O" )&& sq5.innerHTML==""){
 		sq5.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
    else if((sq5.innerHTML=="O" && sq9.innerHTML=="O" )&& sq1.innerHTML==""){
 		sq1.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}


 	 else if((sq3.innerHTML=="O" && sq5.innerHTML=="O" )&& sq7.innerHTML==""){
 		sq7.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
   	 else if((sq3.innerHTML=="O" && sq7.innerHTML=="O" )&& sq5.innerHTML==""){
 		sq5.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
    else if((sq7.innerHTML=="O" && sq5.innerHTML=="O" )&& sq3.innerHTML==""){
 		sq3.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}



 	else if((sq1.innerHTML=="O" && sq3.innerHTML=="O" )&& sq2.innerHTML==""){
 		sq2.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
  	else if((sq1.innerHTML=="O" && sq2.innerHTML=="O" )&& sq3.innerHTML==""){
 		sq3.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
   	else if((sq2.innerHTML=="O" && sq3.innerHTML=="O" )&& sq1.innerHTML==""){
 		sq1.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
   	else if((sq4.innerHTML=="O" && sq5.innerHTML=="O" )&& sq6.innerHTML==""){
 		sq6.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
   	else if((sq4.innerHTML=="O" && sq6.innerHTML=="O" )&& sq5.innerHTML==""){
 		sq5.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
   	else if((sq5.innerHTML=="O" && sq6.innerHTML=="O" )&& sq4.innerHTML==""){
 		sq4.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
   	else if((sq7.innerHTML=="O" && sq8.innerHTML=="O" )&& sq9.innerHTML==""){
 		sq9.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
    else if((sq7.innerHTML=="O" && sq9.innerHTML=="O" )&& sq8.innerHTML==""){
 		sq8.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
 	else if((sq8.innerHTML=="O" && sq9.innerHTML=="O" )&& sq7.innerHTML==""){
 		sq7.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}





  	else if((sq1.innerHTML=="O" && sq4.innerHTML=="O" )&& sq7.innerHTML==""){
 		sq7.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
   	else if((sq1.innerHTML=="O" && sq7.innerHTML=="O" )&& sq4.innerHTML==""){
 		sq4.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
  	else if((sq4.innerHTML=="O" && sq7.innerHTML=="O" )&& sq1.innerHTML==""){
 		sq1.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
 	else if((sq2.innerHTML=="O" && sq5.innerHTML=="O" )&& sq8.innerHTML==""){
 		sq8.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
  	 else if((sq2.innerHTML=="O" && sq8.innerHTML=="O" )&& sq5.innerHTML==""){
 		sq5.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
   	 else if((sq5.innerHTML=="O" && sq8.innerHTML=="O" )&& sq2.innerHTML==""){
 		sq2.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
  	else if((sq3.innerHTML=="O" && sq6.innerHTML=="O" )&& sq9.innerHTML==""){
 		sq9.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
  	 else if((sq3.innerHTML=="O" && sq9.innerHTML=="O" )&& sq6.innerHTML==""){
 		sq6.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
   	 else if((sq6.innerHTML=="O" && sq9.innerHTML=="O" )&& sq3.innerHTML==""){
 		sq3.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}



 	else{
 		AI();
 	}
 };
  	 function seeWin(){



 	 if((sq1.innerHTML=="X" && sq5.innerHTML=="X" )&& sq9.innerHTML==""){
 		sq9.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
   	 else if((sq1.innerHTML=="X" && sq9.innerHTML=="X" )&& sq5.innerHTML==""){
 		sq5.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
    else if((sq5.innerHTML=="X" && sq9.innerHTML=="X" )&& sq1.innerHTML==""){
 		sq1.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}


 	 else if((sq3.innerHTML=="X" && sq5.innerHTML=="X" )&& sq7.innerHTML==""){
 		sq7.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
   	 else if((sq3.innerHTML=="X" && sq7.innerHTML=="X" )&& sq5.innerHTML==""){
 		sq5.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
    else if((sq7.innerHTML=="X" && sq5.innerHTML=="X" )&& sq3.innerHTML==""){
 		sq3.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}



 	else if((sq1.innerHTML=="X" && sq3.innerHTML=="X" )&& sq2.innerHTML==""){
 		sq2.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
  	else if((sq1.innerHTML=="X" && sq2.innerHTML=="X" )&& sq3.innerHTML==""){
 		sq3.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
   	else if((sq2.innerHTML=="X" && sq3.innerHTML=="X" )&& sq1.innerHTML==""){
 		sq1.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
   	else if((sq4.innerHTML=="X" && sq5.innerHTML=="X" )&& sq6.innerHTML==""){
 		sq6.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
   	else if((sq4.innerHTML=="X" && sq6.innerHTML=="X" )&& sq5.innerHTML==""){
 		sq5.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
   	else if((sq5.innerHTML=="X" && sq6.innerHTML=="X" )&& sq4.innerHTML==""){
 		sq4.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
   	else if((sq7.innerHTML=="X" && sq8.innerHTML=="X" )&& sq9.innerHTML==""){
 		sq9.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
    else if((sq7.innerHTML=="X" && sq9.innerHTML=="X" )&& sq8.innerHTML==""){
 		sq8.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
 	else if((sq8.innerHTML=="X" && sq9.innerHTML=="X" )&& sq7.innerHTML==""){
 		sq7.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}





  	else if((sq1.innerHTML=="X" && sq4.innerHTML=="X" )&& sq7.innerHTML==""){
 		sq7.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
   	else if((sq1.innerHTML=="X" && sq7.innerHTML=="X" )&& sq4.innerHTML==""){
 		sq4.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
  	else if((sq4.innerHTML=="X" && sq7.innerHTML=="X" )&& sq1.innerHTML==""){
 		sq1.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
 	else if((sq2.innerHTML=="X" && sq5.innerHTML=="X" )&& sq8.innerHTML==""){
 		sq8.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
  	 else if((sq2.innerHTML=="X" && sq8.innerHTML=="X" )&& sq5.innerHTML==""){
 		sq5.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
   	 else if((sq5.innerHTML=="X" && sq8.innerHTML=="X" )&& sq2.innerHTML==""){
 		sq2.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
  	else if((sq3.innerHTML=="X" && sq6.innerHTML=="X" )&& sq9.innerHTML==""){
 		sq9.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
  	 else if((sq3.innerHTML=="X" && sq9.innerHTML=="X" )&& sq6.innerHTML==""){
 		sq6.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}
   	 else if((sq6.innerHTML=="X" && sq9.innerHTML=="X" )&& sq3.innerHTML==""){
 		sq3.innerHTML = "X";
 		winCheckX();
 		click=true;
 		console.log("block");
 	}



 	else{
 		block();
 	}
 };