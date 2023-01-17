	var player=0;
	function turn(place){
			grid[place]=2;
			$(".square").eq(place).find(".asset-wrapper").append(createElement("cross"));
			player=0;
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
				
				grid[arr[2]]=="0" && player==0){
				turn(arr[arr.length-1]);
				player=1;
			}
			else if(player==1){
				break;
			}
			else{
				arr.unshift(arr[arr.length-1]);
				arr.pop();
			}
		}
	}
function innerLoop(){
console.log("innerloop");
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
	if(player==0){
		console.log("random");
		ranPicker();
		}
	else{return;};
}