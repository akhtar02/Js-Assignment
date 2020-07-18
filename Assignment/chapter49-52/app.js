//--------------Task 1--------------

function submission(){
    var val1=document.getElementById("val1");
    var val2=document.getElementById("val2");
    var val3=document.getElementById("val3");
    var data1=document.createTextNode("Username: "+val1.value);
    var p1= document.createElement("p");
    p1.appendChild(data1);
    var dataForm=document.getElementById("dataForm");
    dataForm.appendChild(p1);
    var data2=document.createTextNode("Email: "+val2.value);
    var p2= document.createElement("p");
    p2.appendChild(data2);
    dataForm.appendChild(p2);
    var data3=document.createTextNode("Password: "+val3.value);
    var p3= document.createElement("p");
    p3.appendChild(data3);
    dataForm.appendChild(p3);
    val1.value="";
    val2.value="";
    val3.value="";
}


//--------------Task 2--------------

var para=document.getElementById("para")
function detail(){
    para.innerHTML="I am Akhtar Hussain, currently Computer Science  from Sindh Madressatul Islam University."
}



//--------------Task 3--------------

var val1=document.getElementById("val1");
var val2=document.getElementById("val2");
var table = document.getElementById("myTable");

function add(){
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = val1.value;
    cell2.innerHTML = val2.value;
    var p = document.createElement("p");
    var text=document.createTextNode("Delete");
    p.appendChild(text);
    p.setAttribute("onclick","deleteRow(this)");
    cell3.appendChild(p);
    var p1 = document.createElement("p");
    var text1=document.createTextNode("Edit");
    p1.appendChild(text1);
    p1.setAttribute("onclick","editRow(this)");
    cell4.appendChild(p1);
    val1.value="";
    val2.value="";
}
function deleteRow(r) {
        var i = r.parentNode.parentNode.rowIndex;
        document.getElementById("myTable").deleteRow(i); 
      }
function editRow(r){
    window.i = r.parentNode.parentNode.rowIndex;
    window.update=document.getElementById("update");
    update.style.display="block";
    var val3=document.getElementById("val3");
    var val4=document.getElementById("val4");
    val3.value=document.getElementById("myTable").rows[i].cells.item(0).innerHTML;
    val4.value=document.getElementById("myTable").rows[i].cells.item(1).innerHTML;
   
}
function edit(){
    document.getElementById("myTable").rows[i].cells.item(0).innerHTML=val3.value;
    document.getElementById("myTable").rows[i].cells.item(1).innerHTML=val4.value;
    update.style.display="none";
    }

