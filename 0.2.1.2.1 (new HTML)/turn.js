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
	$(".square")[i].append(placeholder);
	grid.push(0);

}
console.log(grid);
$(".square").click(function(){
if(game.end==false){
	if(grid[$(this).index(".square")]==0){
		grid[$(this).index(".square")]=1;
		$(this).find(".asset-wrapper").append(createElement("circle"));
		var circle = $(this).find(".circle");
		circle.animate({"borderWidth":"+=3"},{duration:400,easing:"easeOutQuart"});
		// endCheck();
		gameWinCheck(1);
		// ranPicker();
		hasPlaced=false;
		if(game.end==false){
			setTimeout(function(){ai();},250);
		}
	}
}
});
function createElement(className){
	var newEl = document.createElement("div");
	newEl.className=className;
	return newEl;
}
