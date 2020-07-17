//--------------Task 1--------------

function power(a,b){
    return Math.pow(a,b);
}
console.log(power(2,5));
//--------------Task 2--------------

function leap(y){
    if(y%4===0){
        alert(y+" is a Leap year")
    }else{
        alert(y+" is not a Leap year")
    }
}
y=+prompt("Enter any year:");
leap(y);

//--------------Task 3--------------

function areaTriangle(a,b,c){
    function findS(a,b,c){
        return (( a + b + c ) / 2);
    }
    var S=findS(a,b,c);
    var area = S*(S - a)*(S - b)*(S - c)
    return area;
}
console.log(areaTriangle(2,2,2));

//--------------Task 4--------------

function mainFunction(s1,s2,s3){
    function average(s1,s2,s3){
        return (s1+s2+s3)/3;
    }
    function percentage(s1,s2,s3){
        return ((s1+s2+s3)/300)*100;
    }
    return "Marks average: "+average(s1,s2,s3)+"\nPercentage: "+percentage(s1,s2,s3);
}
console.log(mainFunction(71,87,85));

//--------------Task 5--------------

function indexOf(str,char){
    for(var i=0;i<str.length;i++){
        if(str[i]===char){
            return i;
        }
    }
    return -1;
}
console.log(indexOf("javascript","r"));


//--------------Task 6--------------

function deleteVowel(str){
    var str1="";
    for(var i=0;i<str.length;i++){
        if(str[i]==="a" || str[i]==="A" || str[i]==="e" || str[i]==="E" || str[i]==="i" || str[i]==="I" || str[i]==="o" || str[i]==="O" || str[i]==="u" || str[i]==="U"){
            str1+=str[i].replace(str[i],"")
        }
        else{
            str1+=str[i];
        }
    }
    return str1
}
var str="My name is Bilal";
document.write("Actual sring: "+str+"<br>");
document.write("Dleted vowel string: "+deleteVowel(str));

//--------------Task 7--------------


function vowel(str) {
    var count = 0;
    var occ = "";
    for (var i = 0; i < str.length; i++) {
        switch (str.slice(i, i + 2)) {
            case "aa":
                occ += "aa<br>";
                count++;
                break;
            case "ae":
                occ += "ae<br>";
                count++;
                break;
            case "ai":
                occ += "ai<br>";
                count++;
                break;
            case "ao":
                occ += "ao<br>";
                count++;
                break;
            case "au":
                occ += "au<br>";
                count++;
                break;
            /////////////////////////
            case "ea":
                occ += "ea<br>";
                count++;
                break;
            case "ee":
                occ += "ee<br>";
                count++;
                break;
            case "ei":
                occ += "ei<br>";
                count++;
                break;
            case "eo":
                occ += "eo<br>";
                count++;
                break;
            case "eu":
                occ += "eu<br>";
                count++;
                break;
            /////////////
            case "ia":
                occ += "ia<br>";
                count++;
                break;
            case "ie":
                occ += "ie<br>";
                count++;
                break;
            case "ii":
                occ += "ii<br>";
                count++;
                break;
            case "io":
                occ += "io<br>";
                count++;
                break;
            case "iu":
                occ += "iu<br>";
                count++;
                break;
            ////////////
            case "oa":
                occ += "oa<br>";
                count++;
                break;
            case "oe":
                occ += "oe<br>";
                count++;
                break;
            case "oi":
                occ += "oi<br>";
                count++;
                break;
            case "oo":
                occ += "oo<br>";
                count++;
                break;
            case "ou":
                occ += "ou<br>";
                count++;
                break;
            /////////
            case "ua":
                occ += "ua<br>";
                count++;
                break;
            case "ue":
                occ += "ue<br>";
                count++;
                break;
            case "ui":
                occ += "ui<br>";
                count++;
                break;
            case "uo":
                occ += "uo<br>";
                count++;
                break;
            case "uu":
                occ += "uu<br>";
                count++;
                break;
            default:
                break;
        }
    }
    return "Such occurrences are<br>" + occ+"Count is: "+count;
}
document.write(vowel("Pleases read this application and give me gratuity"))


//--------------Task 8--------------

function meter(km){
    return km*1000;
}
function feet(km){
    return km*3281;
}
function inches(km){
    return km*39370;
}
function centimeter(km){
    return km*100000;
}
km=+prompt("Enter the distance between two cities (in km.)");
document.write("the distance between two cities (in m.):  "+meter(km)+"<br>the distance between two cities (in feet.): "+
feet(km)+"<br>the distance between two cities (in inch.): "+inches(km)+"<br>the distance between two cities (in cm.): "+centimeter(km));



//--------------Task 9--------------

var overtimeRate=12.00;
var overtimeHours=+prompt("Enter your overtime hours:");

if(overtimeHours>40)
{
    overtimePay=(overtimeHours*12.00);
    alert("Your overtime pay is: "+overtimePay);
}
else{
    alert("complete 40 hours to get overtime benefit");
}
//--------------Task 10--------------

var amount=+prompt("Enter amount to withdraw: ");
var hn=parseInt(amount/100);
var r1=amount%100;
var fn=parseInt(r1/50);
var r2=r1%50;
var tn=parseInt(r2/10);
document.write("You will have "+hn+" hundred notes, "+fn+" fifty notes and "+tn+" ten notes");