$("#pauseMenu-close-button").click(function(){
	closePauseMenu();
});
function displayPauseMenu(){
$(".grid-square").animate({"margin":"0px"},function(){
	$("#pauseMenu-container").fadeIn(250,function(){
		$("#grid-container").fadeOut(0);
	})
	});
	
	
}
function closePauseMenu(){
$("#grid-container").fadeIn(0,function(){
		$("#pauseMenu-container").fadeOut(250,function(){
			$(".grid-square").animate({"margin":"2px"},300);
		});
	});
}
$("#pauseMenu-restart-button").click(function(){
	closePauseMenu();
	reset();
});
var switchPos=[0,0];
$(".switch-container").click(function(){
	switch($(this).index(".switch-container")){
		case 0:
			if(switchPos[0]==0){
					switchPos[0]=1;
					switchLeft($(this));
					$("#outer-wrapper").stop();
					$("#outer-wrapper").animate({"backgroundColor":"rgb(37,37,37)"},{duration:500});
				}
				else{
					switchPos[0]=0;
					switchRight($(this));
					$("#outer-wrapper").stop();
					$("#outer-wrapper").animate({"backgroundColor":"rgb(255,255,255)"},{duration:500});
				}
		break;
		case 1:
			if(switchPos[1]==0){
				// console.log("true");
					switchLeft($(this));
					switchPos[1]++;
				}
				else{
					switchRight($(this));
					switchPos[1]--;
				}
		break;

	}

});
function switchLeft(element){
	element.find(".switch-indicator").stop();
	element.find(".switch-indicator").animate({right:"0px"},{easing:"easeOutCubic"});
	element.find(".switch-indicator").css({left:""});
}
function switchRight(element){
	element.find(".switch-indicator").stop();
	element.find(".switch-indicator").animate({left:"0px"},{easing:"easeOutCubic"});
	element.find(".switch-indicator").css({right:""});
}