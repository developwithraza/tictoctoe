console.log("game")
let music=new Audio("music.mp3")
let audioTurn=new Audio("ting.mp3")
let gameover=new Audio("gameover.mp3")
let winner=new Audio("winner.wav")
var swclick=false;
 let turn="X";
 let isgameover=false;
 const changeTurn=()=>{
     return  turn==="X"?"0":"X"
 }
 const checkWin=()=>{
     let boxtext=document.getElementsByClassName('boxtext');
     let wins=[
         [0,1,2,2,7,0],
         [3,4,5,2,23,0],
         [6,7,8,2,40,0],
         [0,3,6,-16,25,90],
         [1,4,7,-0.5,25,90],
         [2,5,8,15,25,90],
         [0,4,8,1,25,45],
         [6,4,2,3,20,135],
     ]
     wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&& (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!=="")){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText+'___ ' +"You are Win!";

            isgameover=true;
            document.querySelector(".pogo").style.width="160px";
          
            document.querySelector("#fire").style.width="250px";
            document.querySelector("#fire").style.marginTop="-200px";
            gameover.play();
            winner.play();

           document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw)rotate(${e[5]}deg)`
           document.querySelector(".line").style.width="48vw";
        }
     })

 }
 //game logic
// music.play();
 let boxs=document.getElementsByClassName("box");
Array.from(boxs).forEach((element)=>{
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
           turn= changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){

                document.getElementsByClassName("info")[0].innerText="Turn for" +' __'+ turn;
            }
        }
    })

})
//for reset
reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll('.boxtext');
Array.from(boxtext).forEach(e=>{
    e.innerText='';
})
turn="X";
    isgameover=false;
    document.querySelector(".line").style.width="0px";
    document.getElementsByClassName("info")[0].innerText="Turn for" +' __'+turn;
    document.querySelector(".pogo").style.width="0px";
    document.querySelector("#fire").style.width="0px";
    winner.pause();

})
var mu=document.getElementById('sw');
// console.log(element)
document.addEventListener('click',function(){
  music.paused();
   
    
    
})