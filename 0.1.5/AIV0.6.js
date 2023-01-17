
	var turn=false;
	function condition(one,two,three,inner){
					console.log(arguments);
		if(grid[one]==inner && grid[two]==inner && grid[three]=="0"&&turn==false){

			grid[three]="X";
			eval(A_grid[three]).innerHTML=X;
			click=true;
			turn=true;
			winCheckX();
			console.log(grid);
			console.log("blocked");
		};
	}
	function  conditionLoop(F,S,T){
		for(u="X",i=0;i<1;i++,u="O"){
		for(e=0;e<3;e++){


			condition(F,S,T,u);
			console.log( F , S , T , u);
			F+=3;
			S+=3;
			T+=3;
		}
	}
	};
	 function block2(){
	 				conditionLoop(0,1,2);
	 				click=true;
	};
	// function block(){
	// 	for(u="X",i=0;i<=1;i++,u="O"){
	// 		conditionLoop(0,1,2);
	// 		condition(0,1,2,u);
	// 		condition(3,4,5,u);
	// 		condition(6,7,8,u);

	// 		condition(0,2,1,u);
	// 		condition(3,5,4,u);
	// 		condition(6,8,7,u);

	// 		condition(2,1,0,u);
	// 		condition(5,4,3,u);
	// 		condition(8,7,6,u);

	// 		condition(0,3,6,u);
	// 		condition(1,4,7,u);
	// 		condition(2,5,8,u);

	// 		condition(6,0,3,u);
	// 		condition(7,1,4,u);
	// 		condition(8,2,5,u);

	// 		condition(3,6,0,u);
	// 		condition(4,7,1,u);
	// 		condition(5,8,2,u);

	// 		condition(6,4,2,u);
	// 		condition(2,6,4,u);
	// 		condition(4,2,6,u);

	// 		condition(0,4,8,u);
	// 		condition(8,0,4,u);
	// 		condition(4,8,0,u);
	// 	};
	// if(turn==false){
	// 	console.log("random");
	// 	ranPicker();
	// 	}
	// else{turn=false; return; click=true;};
	// }
	// function ranPicker(){
	// 	function numSelect(){
	// 		return Math.floor(Math.random()*8);
	// 	}
	// 	var picked=numSelect();
	// 	if(grid[picked]!="0"){ranPicker()}
	// 	else{
	// 		eval(A_grid[picked]).innerHTML=X;
	// 		grid[picked]="X";
	// 		click=true;
	// 		console.log(grid);
	// 		turn=false;
	// 	};
		
	// };