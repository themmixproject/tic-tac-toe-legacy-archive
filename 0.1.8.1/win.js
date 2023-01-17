$('.playerIconPlaceholder').eq(1).offset().top=$('.playerIconPlaceholder').eq(0).offset().top+'px';
var X="<img src='./MEDIA/Player/X.png' class='Ximg'></img>";
var grid=[0,0,0,0,0,0,0,0,0];
var MEDIA="./MEDIA/Icons";
var output = document.getElementById("output");
var switches={
	multi:false,
	night:false,
	turn:true,
	win:false,
	animation:false
};
var anDur=1500;
function winCheck(player) {
	console.log(player+"win check");
		if(
 			(grid[0]==player&&grid[1]==player&&grid[2]==player)
	 		||
	 		(grid[3]==player&&grid[4]==player&&grid[5]==player)
			||
			(grid[6]==player&&grid[7]==player&&grid[8]==player)
			||
			(grid[0]==player&&grid[3]==player&&grid[6]==player)
			||
			(grid[1]==player&&grid[4]==player&&grid[7]==player)
			||
			(grid[2]==player&&grid[5]==player&&grid[8]==player)
			||
			(grid[0]==player&&grid[4]==player&&grid[8]==player)
			||
			(grid[2]==player&&grid[4]==player&&grid[6]==player)
 		 )	
 		{	
 			$('#resultContainer').find('span').text(player+" WINS");
 			$('.result').fadeIn();
 			setTimeout(function(){$('#resultOverlay').fadeIn();},250);
 			switches.win=true;
 			switches.turn=false;
 		}
 		else if(
 			(grid[0]!=0)&&
 			(grid[1]!=0)&&
 			(grid[2]!=0)&&
 			(grid[3]!=0)&&
 			(grid[4]!=0)&&
 			(grid[5]!=0)&&
 			(grid[6]!=0)&&
 			(grid[7]!=0)&&
 			(grid[8]!=0)&&
 			(switches.win==false)
 			)
 		{
 			$('#resultContainer').find('span').text("TIE");
 			$('.result').fadeIn();
 			setTimeout(function(){$('#resultOverlay').fadeIn();},250);
 			switches.turn=false;
 			switches.win=true;
 		}
 	};
	function reset(){
		console.log("reset");
		grid=["0","0","0","0","0","0","0","0","0"];
		console.log(grid);
		$('span').fadeOut('fast');
		$('span').promise().done(function(){
    	$('span').text('');
		});
	    $('.output').text('');
		win=false;
		$('div#output').css({'backgroundColor':'transparent'});
		switches.turn=true;
		switches.win=false;
	}
$(document).ready(function(){





$('#resultOverlay').click(function(){
	$(this).fadeOut();
		$(this).promise().done(function(){
    	$(this).find('span').text('');
    	reset();
		});
});
});