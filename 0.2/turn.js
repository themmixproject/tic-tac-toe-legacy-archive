$(document).ready(function(){
var grid=[];

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
	if(grid[$(this).index(".square")]==0){
	grid[$(this).index(".square")]=1;
	$(this).find(".asset-wrapper").append(createElement("circle"));
	//ranPicker();
	console.log("hello");
	}
	//this.innerHTML="hello";
});
function createElement(className){
	var newEl = document.createElement("div");
	newEl.className=className;
	return newEl;
}
});
