window.onload=()=>{
    
 let body= document.body;
 
 
 //create 1;
 let marquee=document.createElement("marquee");
 let heading= document.createElement("h1");
 heading.innerHTML=`Double Tap items to hide`;
 heading.setAttribute("id","heading");
 
 
 
 //create 2;
 let uList= document.createElement("ul");
  uList.setAttribute("id","uList");
 
 //create 3;
 let node;
 
    
 //Create 4;
let button= document.createElement("button");
button.innerHTML ="Restart";





//append 1:
 marquee.appendChild(heading);
 body.appendChild(marquee);
 body.appendChild(uList);
 
 

//CASE 1: (loop to add children to uList(parent)).
   for(let j=1; j <=5; j++){
       
       node= document.createElement("li");
 node.innerHTML =`Paragraph ${j}`;
       uList.appendChild(node);
 
      
// CASE 1.1(EVENT function to individual child).
let num=0;
node.addEventListener("click",(e)=>{
       num+=1;
       
       if(num===1){
   e.target.style.color="pink";
   e.target.style.animation="shake .2s linear 7";
   uList.style.backgroundColor="rgba(103, 128, 159,1)";
   navigator.vibrate(10);
   
    
   }else if(num === 2){
   navigator.vibrate(20);
       e.target.style.color="white";
       e.target.style.animation="shaker .1s ease-out 3";
       uList.style.backgroundColor="rgba(103, 128, 159,0.2)"
       num=0;
   };
     
 });//End of node Event.
       
};//End of for Loop.
 




 
// CASE 2:(adding EVENT function to <ul> to hide child).
  let count=0;
 uList.addEventListener("dblclick",(e)=>{
   count++
    e.target.style.visibility="hidden";
    
    
      if(count > 1){
    button.style.visibility ="visible";
    button.style.backgroundColor ="white";
    button.style.color ="black";
    count=0;
    };     
 },true)//End of Case2;
 


 
 
//append 2: 
 body.appendChild(button);
 
 
 
 
 
 
// CASE 3:(BUTTON EVENT function to turn <ul> children visible).
 
 button.addEventListener("click",(e)=>{
      let child=uList.children;
  
  for(let i=0; i < child.length; i++){
      
      child[i].style.visibility ="visible";
      
  };
     navigator.vibrate(100);
    uList.style.visibility ="visible";   
    button.style.visibility ="hidden";   
    button.style.backgroundColor ="red";
    button.style.color ="white";
 });// End of case 3;
 
 
 
 
 
};//End of General function✅✅
 