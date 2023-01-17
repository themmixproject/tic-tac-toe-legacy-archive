	function turn(place){
			$('.box:eq('+place+')').find('span').text('X');
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
			if(grid[arr[0]]==inner && grid[arr[1]]==inner && grid[arr[2]]=="0" && switches.turn==false && switches.win==false){
				turn(arr[2]);
			}
			else{
				arr.unshift(arr[arr.length-1]);
				arr.pop();
			}
		}
	}
var hor=[0,1,2];
var ver=[0,3,6];
function innerLoop(){
console.log("innerloop");
		for(u="X",i=0;i<=1;i++,u="O"){
			for(r=0;r<=2;r++){
				console.log(hor);
				loopArr(hor,u);
				hor.forEach(function(item,index){
				hor[index]=item+=3;	

				});
			}
			hor=[0,1,2];
			for(r=0;r<=2;r++){
				console.log(ver);
				loopArr(ver,u);
				ver.forEach(function(item,index){
				ver[index]=item+=1;	

				});
			}
			ver=[0,3,6];

		loopArr([6,4,2],u);
		loopArr([0,4,8],u);
	};
	if(switches.turn==false && switches.win==false){
		console.log("random");
		ranPicker();
		}
	else{return;};
}