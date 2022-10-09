let rpc = ["ROCK","PAPER","SCISSORS"]
let ures = ""
let uscore = 0
let cscore = 0
const cID = document.getElementById("compinnerdiv")
const uID = document.getElementById("userinnerdiv")
const rbtn = document.getElementById("rbtn")
const pbtn = document.getElementById("pbtn")
const sbtn = document.getElementById("sbtn")
const submitbtn = document.getElementById("submit-btn")
const resultdiv = document.getElementById("result-div")
const scorediv1 = document.getElementById("score-div1")
const scorediv2 = document.getElementById("score-div2")
const newgamebtn = document.getElementById("newgame")
const uc = document.getElementById("uc")
let waitforpressresolve

function rendergame(){
        let cres = rpc[randomnumber()]
        cID.textContent=cres
        if(ures==""){
            alert("select ant one of {rock,paper,scissors}")
        }
        if(ures==cres){
            resultdiv.textContent = `${ures}  ${cres} DRAW MATCH`
            //alert("tie")
        }
        if(cres=="ROCK" && ures=="SCISSORS"){
            resultdiv.textContent = `${cres} BEATS ${ures} USER LOOSES`
            //alert("trail lost")
            cscore+=10
        }else if(cres == "ROCK" && ures=="PAPER"){
            resultdiv.textContent = `${ures} WRAPS ${cres} USER WINS`
            //alert("trail won")
            uscore+=10
        }else if(cres=="PAPER" && ures=="ROCK"){
            resultdiv.textContent = `${cres} WRAPS ${ures} USER LOOSES`
            //alert("trail lost") 
            cscore+=10   
        }else if(cres=="PAPER" && ures=="SCISSORS"){
            resultdiv.textContent = `${ures} CUTS THE ${cres} USER WINS`
            //alert("trail won")
            uscore+=10
        }else if(cres=="SCISSORS" && ures=="ROCK"){
            resultdiv.textContent = `${ures} HITS ${cres} USER WINS`
            //alert("trail won")
            uscore+=10
        }else if(cres=="SCISSORS" && ures=="PAPER"){
            resultdiv.textContent = `${cres} CUTS THE ${ures} USER LOOSES`
            //alert("trail lost")
            cscore+=10
        }
}
function randomnumber(){
    let num = Math.floor(Math.random()*3)
    return num
}
rbtn.addEventListener("click",function(){
    uID.textContent="ROCK"
    ures="ROCK"
})
pbtn.addEventListener("click",function(){
    uID.textContent="PAPER"
    ures="PAPER"
})
sbtn.addEventListener("click",function(){
    uID.textContent="SCISSORS"
    ures="SCISSORS"
})
submitbtn.addEventListener("click",function(){
    rendergame()
})
newgamebtn.addEventListener("click",function(){
    startgame()
})
function startgame(){
    uscore=0
    cscore=0
    cID.textContent="Rock/Paper/Scissors"
    uID.textContent="Enter Your Choice"
    scorediv1.textContent="YOUR SCORE"
    scorediv2.textContent="COMPUTER'S SCORE"
    resultdiv.textContent=""
    uc.textContent=`User's Choice[0/5]`
}

function waitforpress(){
    return new Promise(resolve => waitforpressresolve=resolve)
}
function btnresolver(){
    if(waitforpressresolve) waitforpressresolve()
}
async function doit(){
    submitbtn.addEventListener("click",btnresolver)
    for(let i=0 ;i<5;i++){
        console.log(i)
        uc.textContent=`User's Choice[${i+1}/5]`
        await waitforpress()
    }
    submitbtn.removeEventListener("click",btnresolver)
    console.log("finished")
    scorediv1.textContent="YOUR SCORE:"+uscore
    scorediv2.textContent="COMPUTER'S SCORE:"+cscore
    if(uscore>cscore)
    {
        resultdiv.textContent="HURRAY! YOU WON THE MATCH"
    }else if(uscore==cscore){
        resultdiv.textContent="DRAW MATCH"
    }
    else{
        resultdiv.textContent="OFFO! YOU LOST THE MATCH"
    }
    setTimeout(function(){ alert("Enjoy playing new game again.Thanks and Regards from 'Jayanth'"),3000})
    function myfunction(){
        startgame()
    }
    let albtn = confirm("Enjoy playing new game again.Thanks and Regards from 'Jayanth'")
    if(albtn === true){
        setTimeout(function(){myfunction()},2000)
    }
}
doit()