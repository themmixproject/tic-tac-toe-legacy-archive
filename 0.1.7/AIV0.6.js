	var turn=false;
	function condition(one,two,three,inner){
		if(grid[one]==inner && grid[two]==inner && grid[three]=="0" && switches.turn==false && switches.win==false){
			switches.turn=true;
			grid[three]="X";
			eval(A_grid[three]).innerHTML="X";

			winCheckX();
			console.log(grid);
		};
	}
	function block(){
		for(u="X",i=0;i<=1;i++,u="O"){
			condition(0,1,2,u);
			condition(3,4,5,u);
			condition(6,7,8,u);

			condition(0,2,1,u);
			condition(3,5,4,u);
			condition(6,8,7,u);

			condition(2,1,0,u);
			condition(5,4,3,u);
			condition(8,7,6,u);

			condition(0,3,6,u);
			condition(1,4,7,u);
			condition(2,5,8,u);

			condition(6,0,3,u);
			condition(7,1,4,u);
			condition(8,2,5,u);

			condition(3,6,0,u);
			condition(4,7,1,u);
			condition(5,8,2,u);

			condition(6,4,2,u);
			condition(2,6,4,u);
			condition(4,2,6,u);

			condition(0,4,8,u);
			condition(8,0,4,u);
			condition(4,8,0,u);
		};
	if(switches.turn==false && switches.win==false){
		console.log("random");
		ranPicker();
		}
	else{return;};
	}
	function ranPicker(){
		function numSelect(){
			return Math.floor(Math.random()*8);
		}
		var picked=numSelect();
		if(grid[picked]!="0"){ranPicker()}
		else{
			eval(A_grid[picked]).innerHTML="X";
			grid[picked]="X";
			console.log(grid);
			switches.turn=true;
		};
		
	};