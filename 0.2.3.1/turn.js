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
$(".grid-square").click(function(){
	if(game.end==true){
		game.end=false;
	}
	if(game.turn==true){
		game.turn=false;
		if(grid[$(this).index(".grid-square")]==0){
			grid[$(this).index(".grid-square")]=1;
			$(this).find(".asset-wrapper").append(createElement("circle"));
			var circle = $(this).find(".circle");
			circle.animate({"borderWidth":"+=3"},{duration:350,easing:"easeOutQuart"});
			hasPlaced=false;
			setTimeout(function(){
				gameWinCheck(1);
				if(game.end==false){
					ai();
				}
			},350);
		}
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