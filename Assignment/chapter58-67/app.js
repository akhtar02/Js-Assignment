
//--------------Task 1--------------

//i:
var maincontent=document.getElementById("main-content");
//ii:
var c=maincontent.children;
var txt = "";
  for (var i = 0; i < c.length; i++) {
    txt = txt + c[i].tagName + "<br>";
  }
  document.getElementById("demo").innerHTML = txt;
//iii:
var render=document.getElementsByClassName("render");
var txt = "";
for(var i=0;i<render.length;i++){
    txt = txt + render[i].innerHTML + "<br>";
}
document.getElementById("demo").innerHTML = txt;
//iv:
var fn=document.getElementById("first-name");
fn.setAttribute("value","Akhtar");
//v:
var ln=document.getElementById("last-name");
var email=document.getElementById("email");
ln.setAttribute("value","Hussain");
email.setAttribute("value","akhtar@gmail.com");

//--------------Task 2--------------

//i:
var formcontent=document.getElementById("form-content");
console.log(formcontent.nodeType)
//ii:
var lastName=document.getElementById("lastName");
console.log(lastName.nodeType);
console.log(lastName.childNodes)
//iii:
var lastName=document.getElementById("lastName");
lastName.childNodes[0].nodeValue="Last Name: Smith";
//iv:
var maincontent=document.getElementById("main-content");
console.log(maincontent.firstChild);
console.log(maincontent.lastChild);
//v:
var lastName=document.getElementById("lastName");
console.log(lastName.nextSibling)
console.log(lastName.previousSibling)
//vi:
var email=document.getElementById("email");
console.log(email.parentNode)
console.log(email.nodeType)