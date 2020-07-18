//--------------Task 1--------------
// function alerting(){
//     alert("Welocome")
// }

//--------------Task 2--------------
function msg(){
    alert("Thanks for purchasing a phone from us.")
}
//--------------Task 3--------------
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
  }
//--------------Task 4--------------
function change(id,source){
    var Carimg = document.getElementById(id);
    Carimg.src=source;
}


//--------------Task 5--------------

var counter1=0
var c=document.getElementById("counter");
function inc(){
    counter1++;
    c.innerHTML=counter1;
}
function dec(){
    if(counter1>0){
        counter1--;
        c.innerHTML=counter1;
    }
}
