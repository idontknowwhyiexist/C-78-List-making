var ArrayofFruits=["Apple", "Banana", "Dragonfruit"];
document.getElementById("Array_callhere").innerHTML=ArrayofFruits;
console.log(ArrayofFruits);

var Firstone=ArrayofFruits[0]
document.getElementById("Array_callhereF").innerHTML=Firstone;
console.log(Firstone);

var Thirdone=ArrayofFruits[2]
document.getElementById("Array_callhereT").innerHTML=Thirdone;
console.log(Thirdone);

var Lengtharray=ArrayofFruits.length;
document.getElementById("Array_length").innerHTML=Lengtharray;
console.log(Lengtharray);

ArrayofFruits.push("Guava");
document.getElementById("NewGuava").innerHTML=ArrayofFruits;
console.log(ArrayofFruits);

var arrayvalue="";

for(i=0; i<ArrayofFruits.length; i++)
{
    console.log(ArrayofFruits[i]);
    arrayvalue=arrayvalue+ArrayofFruits[i]+"<br>";
}

document.getElementById("Arrayloops").innerHTML=arrayvalue;

ArrayofFruits.reverse();
console.log(ArrayofFruits);
document.getElementById("Sort").innerHTML=ArrayofFruits;