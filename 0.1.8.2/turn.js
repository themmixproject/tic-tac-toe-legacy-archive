$(document).ready(function(){
	$('.box').click(function(){
		if(switches.multi==false){
			if($(this).find('span.txtOutput').text()=='' && switches.turn==true && switches.win==false){
				switches.turn=false;
				$(this).find('span.txtOutput').text('O');
				$(this).find('span.txtOutput').fadeIn();
				console.log($(this).index());
				grid[$(this).index('.box')]="O";
				winCheck("O");
				if(switches.win==false){
					setTimeout(
						function(){
							innerLoop();
						}
					,140);
				};
				console.log(grid);
			}	
			else{
				console.log("choose an empty block");
			}
		}
		else{	
			if($(this).find('span').text()=='' && switches.turn==true){
				$(this).find('span').text('O');
				grid[$(this).index('.box')]="O";
				winCheck('O');
				$(this).find('span').fadeIn();
				console.log('block chosen');
				switches.turn=false;
			}
			else if($(this).find('span').text()=='' && switches.turn==false){
				$(this).find('span').text('X');
				$(this).find('span').fadeIn();
				grid[$(this).index('.box')]="X";
				winCheck('X');
				console.log('block chosen');
				switches.turn=true;
			};
		};
	});
});