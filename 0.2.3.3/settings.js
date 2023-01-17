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