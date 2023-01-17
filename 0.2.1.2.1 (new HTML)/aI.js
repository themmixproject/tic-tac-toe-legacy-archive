var hasPlaced = false;
var gridIndex=[
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[6,4,2],
	[0,4,8]
];
function ai(){
	for(u=2;u>0;u--){
		gridIndex.forEach(function(item){
			blockCheck(item,u);
		});
	}
	if(hasPlaced==false){
		ranIndex();
	}
}
function blockCheck(inputArr,inner){
	inputArr.forEach(function(item,index){
		if(grid[inputArr[0]]==inner && 
			grid[inputArr[1]]==inner && 
			grid[inputArr[2]]==0 && hasPlaced==false){
			turn(inputArr[inputArr.length-1]);
		}
		else{
			inputArr.unshift(inputArr[inputArr.length-1]);
			inputArr.pop();
		}

	});
		
}

function turn(place){
	grid[place]=2;
	$(".square").eq(place).find(".asset-wrapper").append(createElement("cross"));
	$(".square").eq(place).find(".cross").append(createElement("cross-after"));
	$(".square").eq(place).find(".cross,cross-after").animate({"width":"3px"},{duration:600,easing:"easeOutQuart",queue:false});
	hasPlaced=true;
	gameWinCheck(2);
}

function ranIndex(){
	function numSelect(){
		return Math.floor(Math.random()*8);
	}
	var picked=numSelect();
	if(grid[picked]!=0){ranIndex()}
	else{
		turn(picked);
	}
	
};