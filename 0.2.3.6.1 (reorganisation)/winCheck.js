var game = {
	tie:false,
	win:false,
	end:false,
	placed:false,
	canPlace:false,
	turn:true,
	multi:false

}
var gridIndexWin=[
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[6,4,2],
	[0,4,8]
];
function endCheck(){
	cnt=0;
	grid.forEach(function(item,index){
		if(item!=0){
			cnt++;
		}
	});
	if(cnt==9){
		reset();
		stats.tie++;
		stats.games++;
		console.log(grid);
		game.end=true;
	}
}
function gameWinCheck(player){
	checkCounter=0;
	gridIndexWin.forEach(function(item,index){
		if(checkValue(item,player)){
			console.log("you win!");
			game.end=true;
			//setTimeout(function(){

				reset();
				console.log(grid);
			//},250);
				
		}
	});
	if(game.end==false){
		endCheck();
	}
}

function checkValue(inputArr,player) {
	//console.log(grid[inputArr[0]]);
    for(var i = 0; i < inputArr.length; i++)
    {
        if(grid[inputArr[i]] !== player)
            return false;
    }
    console.log("true");
    if(player==1){
    	stats.win++;
    }
    else{
    	stats.lose++;
    }
    stats.games++;
    return true;
}