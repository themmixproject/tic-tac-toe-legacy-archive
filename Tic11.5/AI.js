function AI(){
	function ran(){
		num = Math.floor(Math.random() * 9 +1);
		return num;
	};
	var number = ran();
	var Randomblock = document.getElementById(number);
	if(Randomblock.innerHTML != ""){
		AI();
			}
	else{
      grid[num-1]="X";
      console.log(grid);
		Randomblock.innerHTML = "X";
		winCheckX();	
		click=true;
	};
};
function block(){

  for(a=0,b=1,c=2;a<=6;a+=3,b+=3,c+=3){
      if((grid[a]=="O" && grid[b]=="O" )&& grid[c]==0){
      eval(A_grid[c]).innerHTML="X";
      grid[c]="X";
      console.log(grid);
      winCheckX();
      click=true;
      console.log("this worked");
      return;
      };
  };
  for(a=0,b=2,c=1;a<=6;a+=3,b+=3,c+=3){
      if((grid[a]=="O" && grid[b]=="O" )&& grid[c]==0){
      eval(A_grid[c]).innerHTML="X";
      grid[c]="X";
      console.log(grid);
      winCheckX();
      click=true;
      console.log("this worked");
      return;
      };
  };
  for(a=1,b=2,c=0;a<=7;a+=3,b+=3,c+=3){
      if((grid[a]=="O" && grid[b]=="O" )&& grid[c]==0){
      eval(A_grid[c]).innerHTML="X";
      grid[c]="X";
      console.log(grid);
      winCheckX();
      click=true;
      console.log("this worked");
      return;
      };
  }
  for(a=0,b=3,c=6;a<=2;a+=1,b+=1,c+=1){
      if((grid[a]=="O" && grid[b]=="O" )&& grid[c]==0){
      eval(A_grid[c]).innerHTML="X";
      grid[c]="X";
      console.log(grid);
      winCheckX();
      click=true;
      console.log("this worked");
      return;
      };
  };
  for(a=0,b=6,c=3;a<=2;a+=1,b+=1,c+=1){
      if((grid[a]=="O" && grid[b]=="O" )&& grid[c]==0){
      eval(A_grid[c]).innerHTML="X";
      grid[c]="X";
      console.log(grid);
      winCheckX();
      click=true;
      console.log("this worked");
      return;
      };
  };
  for(a=3,b=6,c=0;a<=5;a+=1,b+=1,c+=1){
      if((grid[a]=="O" && grid[b]=="O" )&& grid[c]==0){
      eval(A_grid[c]).innerHTML="X";
      grid[c]="X";
      console.log(grid);
      winCheckX();
      click=true;
      console.log("this worked");
      return;
      };
  };
  for(a=6,b=4,c=2,i=0;i<=1;b-=2,c+=2,i++){
      if((grid[a]=="O" && grid[b]=="O" )&& grid[c]==0){
      eval(A_grid[c]).innerHTML="X";
      grid[c]="X";
      console.log(grid);
      winCheckX();
      click=true;
      console.log("this worked");
      return;
      };
    }
        for(a=8,b=4,c=0,i=0;i<=1;b-=4,c+=4,i++){
      if((grid[a]=="O" && grid[b]=="O" )&& grid[c]==0){
      eval(A_grid[c]).innerHTML="X";
      grid[c]="X";
      console.log(grid);
      winCheckX();
      click=true;
      console.log("this worked");
      return;
      };
    };
    if((grid[0]=="O" && grid[4]=="O" )&& grid[8]==0){
      eval(A_grid[8]).innerHTML="X";
      grid[8]="X";
      console.log(grid);
      winCheckX();
      click=true;
      console.log("this worked");
    }
    else  if((grid[2]=="O" && grid[4]=="O" )&& grid[6]==0){
      eval(A_grid[6]).innerHTML="X";
      grid[6]="X";
      console.log(grid);
      winCheckX();
      click=true;
      console.log("this worked");
  }
  else{AI();};
};
function seeWin(){
  for(a=0,b=1,c=2;a<=6;a+=3,b+=3,c+=3){
      if((grid[a]=="X" && grid[b]=="X" )&& grid[c]==0){
      eval(A_grid[c]).innerHTML="X";
      grid[c]="X";
      console.log(grid);
      winCheckX();
      click=true;
      console.log("this worked");
      return;
      };
  };
  for(a=0,b=2,c=1;a<=6;a+=3,b+=3,c+=3){
      if((grid[a]=="X" && grid[b]=="X" )&& grid[c]==0){
      eval(A_grid[c]).innerHTML="X";
      grid[c]="X";
      console.log(grid);
      winCheckX();
      click=true;
      console.log("this worked");
      return;
      };
  };
  for(a=1,b=2,c=0;a<=7;a+=3,b+=3,c+=3){
      if((grid[a]=="X" && grid[b]=="X" )&& grid[c]==0){
      eval(A_grid[c]).innerHTML="X";
      grid[c]="X";
      console.log(grid);
      winCheckX();
      click=true;
      console.log("this worked");
      return;
      };
  }
  for(a=0,b=3,c=6;a<=2;a+=1,b+=1,c+=1){
      if((grid[a]=="X" && grid[b]=="X" )&& grid[c]==0){
      eval(A_grid[c]).innerHTML="X";
      grid[c]="X";
      console.log(grid);
      winCheckX();
      click=true;
      console.log("this worked");
      return;
      };
  };
  for(a=0,b=6,c=3;a<=2;a+=1,b+=1,c+=1){
      if((grid[a]=="X" && grid[b]=="X" )&& grid[c]==0){
      eval(A_grid[c]).innerHTML="X";
      grid[c]="X";
      console.log(grid);
      winCheckX();
      click=true;
      console.log("this worked");
      return;
      };
  };
  for(a=3,b=6,c=0;a<=5;a+=1,b+=1,c+=1){
      if((grid[a]=="X" && grid[b]=="X" )&& grid[c]==0){
      eval(A_grid[c]).innerHTML="X";
      grid[c]="X";
      console.log(grid);
      winCheckX();
      click=true;
      console.log("this worked");
      return;
      };
  };
  for(a=6,b=4,c=2,i=0;i<=1;b-=2,c+=2,i++){
      if((grid[a]=="X" && grid[b]=="X" )&& grid[c]==0){
      eval(A_grid[c]).innerHTML="X";
      grid[c]="X";
      console.log(grid);
      winCheckX();
      click=true;
      console.log("this worked");
      return;
      };
    }
        for(a=8,b=4,c=0,i=0;i<=1;b-=4,c+=4,i++){
      if((grid[a]=="X" && grid[b]=="X" )&& grid[c]==0){
      eval(A_grid[c]).innerHTML="X";
      grid[c]="X";
      console.log(grid);
      winCheckX();
      click=true;
      console.log("this worked");
      return;
      };
    };
    if((grid[0]=="X" && grid[4]=="X" )&& grid[8]==0){
      eval(A_grid[8]).innerHTML="X";
      grid[8]="X";
      console.log(grid);
      winCheckX();
      click=true;
      console.log("this worked");
    }
    else  if((grid[2]=="X" && grid[4]=="X" )&& grid[6]==0){
      eval(A_grid[6]).innerHTML="X";
      grid[6]="X";
      console.log(grid);
      winCheckX();
      click=true;
      console.log("this worked");
  }
  else{block();};
};