var grid=[];
//$(document).ready(function(){


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
	var circle = $(this).find(".circle");

		//$(this).find(".circle").animate({"border":"2 solid white"},240);
		//circle.animate({"height":"+=5","width":"+=5"},{duration:500,easing:"easeOutQuart"});
	
	circle.animate({"borderWidth":"+=3"},{duration:500,easing:"easeOutQuint"});
	ranPicker();
	console.log("hello");
	}
	//this.innerHTML="hello";
});
function createElement(className){
	var newEl = document.createElement("div");
	newEl.className=className;
	return newEl;
}
//});
