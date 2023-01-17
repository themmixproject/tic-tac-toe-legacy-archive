var game = {
	tie:false,
	win:false,
	end:false

}
console.log('hello world');
function endCheck(){
	cnt=0;
	grid.forEach(function(item,index){
		if(item!=0){
			cnt++;
		}
	});
	if(cnt==9){
		game.end=true;
	}
}