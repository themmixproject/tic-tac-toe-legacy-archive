var returnfunction=false;
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
  function AIloop(num1,num2,num3,Con,Anum1,Anum2,Anum3){
      for(a=num1,b=num2,c=num3;a<=Con;a+=Anum1,b+=Anum2,c+=Anum3){
      if((grid[a]==u && grid[b]==u )&& grid[c]==0 && returnfunction!=true){   
      eval(A_grid[c]).innerHTML="X";
      grid[c]="X";
      console.log(grid);
      winCheckX();
      click=true;
      console.log("this worked");
      returnfunction=true;
      return; 
      };
  };
}
for(u="X",i=0;i<=1;i++,u="O"){
  console.log(i+" "+u);
    AIloop(0,1,2,6,3,3,3);
    AIloop(0,2,1,6,3,3,3);    
    AIloop(1,2,0,7,3,3,3);
    AIloop(0,3,6,2,1,1,1);
    AIloop(3,6,0,5,1,1,1);
    AIloop(0,6,3,2,1,1,1);
      for(a=6,b=4,c=2,i=0;i<=1;b-=2,c+=2,i++){
      if((grid[a]==u && grid[b]==u )&& grid[c]==0){
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
      if((grid[a]==u && grid[b]==u )&& grid[c]==0){
      eval(A_grid[c]).innerHTML="X";
      grid[c]="X";
      console.log(grid);
      winCheckX();
      click=true;
      console.log("this worked");
      return;
      };
    };
    if((grid[0]==u && grid[4]==u )&& grid[8]==0){
      eval(A_grid[8]).innerHTML="X";
      grid[8]="X";
      console.log(grid);
      winCheckX();
      click=true;
      console.log("this worked");
      return;
    };
    if((grid[2]==u && grid[4]==u )&& grid[6]==0){
      eval(A_grid[6]).innerHTML="X";
      grid[6]="X";
      console.log(grid);
      winCheckX();
      click=true;
      console.log("this worked");
      return;
  };
  console.log(u);
};
if(returnfunction==false){AI()};
return;
};