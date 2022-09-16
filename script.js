let div=document.createElement("div");
div.style.textAlign="center";
div.style.marginTop="100px";



let input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","name");

var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="search";
button.addEventListener("click",foo);

let country=document.createElement("div");
country.setAttribute("id","country");


let prop=document.createElement("div");
prop.setAttribute("id","propability");

div.append(input,button,country,prop);
document.body.append(div);

async function foo(){
let personname=document.getElementById("name").value;
console.log(personname);
let url=`https://api.nationalize.io/?name=${personname}`;
let res= await fetch(url);
let res1= await res.json();
console.log(res1);

console.log(res1.country[0]);
country.innerHTML=`COUNTRY NAME:${res1.country_id}`;
prop.innerHTML=`PROBABILITY:${res1.propability}`;

console.log(res1.country[1]);
country.innerHTML=`COUNTRY NAME:${res1.country_id}`;
prop.innerHTML=`PROBABILITY:${res1.propability}`;
}














