$(document).ready(function(){
	$('#restart').click(function(){
		if(switches.animation==false){
			switches.animation=true;
			$(this).find('div').animate({rotate:'-=360deg'},{duration:950,easing:'easeOutQuad',queue:true});
			setTimeout(function() { switches.animation=false }, 950);
		}
		else{
			console.log("animation is still running")
		};
		reset();
	});

	$('#mode').click(function(){
		console.log(switches.multi , switches.night);
		if(switches.night==false){
			switches.night=true;
			$('body').animate({'backgroundColor':'Black'},{duration:anDur,queue:true});
			$('.sideButton,.centerButton,.box').animate({'borderColor':'White'},{duration:anDur,queue:true});
			$('.box span').animate({'color':'white'},{duration:anDur,queue:true});
			$('#moonIcon,#restartIcon,.playerIcon').fadeOut({duration:anDur,queue:true});
			$('#sunIcon ,#restartIconN,.playerIconN').fadeIn({duration:anDur,queue:true});
		}
		else{
			switches.night=false;
			$('body').animate({'backgroundColor':'White'},{duration:anDur,queue:true});
			$('.sideButton,.centerButton,.box').animate({'borderColor':'Black'},{duration:anDur,queue:true});
			$('.box span').animate({'color':'black'},{duration:anDur,queue:true});
			$('#moonIcon,#restartIcon,.playerIcon').fadeIn({duration:anDur,queue:true});
			$('#sunIcon ,#restartIconN,.playerIconN').fadeOut({duration:anDur,queue:true});
		}
	});

	$('#playersButton').click(function(){
		console.log(switches.multi,switches.night);
		if(switches.multi==false){
			switches.multi=true;
			$('.playerIconPlaceholder').eq(0).animate({right:8.5+'px',scale:0.86, easing:'easeOutSine'},250);
			$('.playerIconPlaceholder').eq(1).animate({left:8.5+'px',scale:0.86, easing:'easeOutSine'},250);
			reset();
		}
		else{
			switches.multi=false;
			$('.playerIconPlaceholder').eq(0).animate({right:0+'px',scale:1, easing:'easeOutSine'},250);
			$('.playerIconPlaceholder').eq(1).animate({left:0+'px',scale:1, easing:'easeOutSine'},250);
			reset();
		};
	});
	
});