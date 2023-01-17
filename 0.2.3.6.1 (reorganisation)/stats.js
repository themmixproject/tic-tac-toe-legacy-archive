var stats={
	tie:0,
	win:0,
	lose:0,
	games:0
};
$("#stats-back-button").click(function(){
	$(this).parent().css({"display":"none"});
	$("#pauseMenu-option-wrapper").css({"display":"block"});
});
$("#settings-back-button").click(function(){
	$(this).parent().parent().css({"display":"none"});
	$("#pauseMenu-option-wrapper").css({"display":"block"});
});
$("#pauseMenu-scoreboard-button").click(function(){
$("#stats-screen-container").css({"display":"block"});
	updateStats();
	$("#pauseMenu-option-wrapper").css({"display":"none"});
});
function updateStats(){
	// $(".stats-number")[0].text("hello world");
	$(".stats-number").eq(0).text(stats.tie);
	$(".stats-number").eq(1).text(stats.win);
	$(".stats-number").eq(2).text(stats.lose);
	$(".stats-number").eq(3).text(stats.games);
};
