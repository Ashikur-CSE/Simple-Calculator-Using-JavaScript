// function getHistory(){
//     return document.getElementById("history").innerText;
// }
// function printHistory(num){
//     document.getElementById("history").innerText=num;
// }

// function getCurrent(){
//     return document.getElementById("current").innerText;
// }
// function printCurrent(num){
//     document.getElementById("current").innerText=formatNumber(num);
// }

// //Format number
// function formatNumber(num){
//     let n=Number(num);
//     let value=n.toLocaleString("en");
//     return value;
// }

// let history;
// let number=document.getElementsByClassName("num");
// for(let i=0; i<number.length; i++){

// }

function deleteMe(){
    document.getElementById("current").value ="";

}
function calculator(inputValue){
    document.getElementById("current").value += inputValue;

}

function answer(){
    let a=document.getElementById("current").value;
    let b=eval(a);
    document.getElementById("current").value=b;
    if (a==""){
        document.getElementById("current").value="0";
    }
    n=n+1;
    

}