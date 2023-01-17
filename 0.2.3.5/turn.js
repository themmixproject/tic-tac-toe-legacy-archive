var grid=[];
var switches={
	multi:false,
	night:false,
	turn:true,
	gameEnd:false,
	gameWin:false,
	animation:false,
	tie:false
};
// $(document).ready(function(){


for(i=0;i<9;i++){
	var placeholder = document.createElement("div");
	placeholder.className = "asset-placeholder";
	var wrapper = document.createElement("div");
	wrapper.className = "asset-wrapper";
	placeholder.appendChild(wrapper);
	$(".grid-square")[i].append(placeholder);
	grid.push(0);

}
console.log(grid);

var longClick=true;
var shortClick=true;
var thisSet;

$(".grid-square").mousedown(function(){
	$this = $(this);
		clearTimeout(thisSet);
		longClick=true;
		shortClick=true;
		console.log(longClick,shortClick);
		thisSet = setTimeout(function(){
			
			if(longClick==true){
				//launch longClick function here
				playerLongClick();
				shortClick=false;	
			}
			
		},1000);
});

$(".grid-square").mouseup(function(){
		$this = $(this);
		clearTimeout(thisSet);
		longClick=false;
		console.log(longClick,shortClick);
		if(shortClick==true){
			playerShortClick($this);
			//launch shortClick function here
		}
});
function createElement(className){
	var newEl = document.createElement("div");
	newEl.className=className;
	return newEl;
}

function reset(){
	$(".grid-square").find(".cross,.circle").fadeOut(400);
	setTimeout(function(){
		$(".grid-square").find(".cross,.circle").remove();
		grid=[0,0,0,0,0,0,0,0,0];
	},400);
	game.turn=true;
}

function playerShortClick(element){
	game.canPlace=true;
	game.end=false;
	if(grid[element.index(".grid-square")]==0){
		grid[element.index(".grid-square")]=1;
		element.find(".asset-wrapper").append(createElement("circle"));
		var circle = element.find(".circle");
		circle.animate({"borderWidth":"+=3"},{duration:350,easing:"easeOutQuart"});
		// endCheck();
		
		// ranPicker();
		hasPlaced=false;
			setTimeout(function(){
				gameWinCheck(1);
				if(game.canPlace==true && game.end==false){
					ai();
				}
			},350);
	}
}

function playerLongClick(){
	// $(".grid-square").animate({"margin":"0px"});
	displayPauseMenu();
}

$('.grid-square').bind('touchstart', function(){
   	$this = $(this);
		clearTimeout(thisSet);
		longClick=true;
		shortClick=true;
		console.log(longClick,shortClick);
		thisSet = setTimeout(function(){
			
			if(longClick==true){
				//launch longClick function here
				playerLongClick();9
				shortClick=false;
			}
			
		},1000);
});
$(".grid-square").bind('touchend', function(){
   $this = $(this);
		clearTimeout(thisSet);
		longClick=false;
		console.log(longClick,shortClick);
		if(shortClick==true){
			playerShortClick($this);
			//launch shortClick function here
		}
});