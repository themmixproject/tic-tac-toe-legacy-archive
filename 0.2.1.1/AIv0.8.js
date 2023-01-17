	var player=0;
	var hasPlaced = false;
	function turn(place){
			grid[place]=2;
			console.log(place);
			$(".square").eq(place).find(".asset-wrapper").append(createElement("cross"));
			$(".square").eq(place).find(".cross").append(createElement("cross-after"));
			$(".square").eq(place).find(".cross,cross-after").animate({"width":"3px"},{duration:600,easing:"easeOutQuart",queue:false});
			//$(".square").eq(place).find(".cross-after").animate({"width":"2px"},{duration:500,easing:"easeOutQuart",queue:false});
			hasPlaced=true;
	}
	function ranPicker(){
		function numSelect(){
			return Math.floor(Math.random()*8);
		}
		var picked=numSelect();
		if(grid[picked]!=0){ranPicker()}
		else{
			//eval(A_grid[picked]).innerHTML="X";
			turn(picked);
		}
		
	};
	function loopArr(arr,inner){

		for(e=0;e<arr.length;e++){
			if(grid[arr[0]]==inner && 
				grid[arr[1]]==inner && 
				
				grid[arr[2]]=="0" && hasPlaced==false){
				turn(arr[arr.length-1]);
				//player=1;
			}
			// else if(player==1){
			// 	break;
			// }
			else{
				arr.unshift(arr[arr.length-1]);
				arr.pop();
			}
		}
	}
function innerLoop(){
console.log("innerloop");
	if(game.end==false){
		for(u=1,i=0;i<=1;i++,u=2){
			loopArr([0,1,2],u);
			loopArr([3,4,5],u);
			loopArr([6,7,8],u);


			loopArr([0,3,6],u);
			loopArr([1,4,7],u);
			loopArr([2,5,8],u);

			loopArr([6,4,2],u);
			loopArr([0,4,8],u);
		};
	}
	
	if(hasPlaced==false){
		console.log("random");
		ranPicker();
		}
	else{return;};
}
