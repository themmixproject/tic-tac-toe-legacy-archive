	function turn(place){
			$('.box:eq('+place+')').eq(place).find('span').text('X');
			$('.box:eq('+place+')').find('span').fadeIn();
			grid[place]="X";
			console.log(grid);
			switches.turn=true;
			winCheck("X");
	}
	function ranPicker(){
		function numSelect(){
			return Math.floor(Math.random()*8);
		}
		var picked=numSelect();
		if(grid[picked]!="0"){ranPicker()}
		else{
			//eval(A_grid[picked]).innerHTML="X";
			turn(picked);
		}
		
	};
	function loopArr(arr,inner){

		for(e=0;e<arr.length;e++){
			if(grid[arr[0]]==inner && 
				grid[arr[1]]==inner && 
				
				grid[arr[2]]=="0" 
				&& switches.turn==false &&
				 switches.win==false){
				turn(arr[arr.length-1]);
			}
			else{
				arr.unshift(arr[arr.length-1]);
				arr.pop();
			}
		}
	}
function innerLoop(){
console.log("innerloop");
		for(u="X",i=0;i<=1;i++,u="O"){
		loopArr([0,1,2],u);
		loopArr([3,4,5],u);
		loopArr([6,7,8],u);


		loopArr([0,3,6],u);
		loopArr([1,4,7],u);
		loopArr([2,5,8],u);

		loopArr([6,4,2],u);
		loopArr([0,4,8],u);
	};
	if(switches.turn==false && switches.win==false){
		console.log("random");
		ranPicker();
		}
	else{return;};
}