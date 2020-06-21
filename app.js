//Chapter 21-25
//q1
/*var a=prompt("First name");
var b=prompt("last name");
var full_name=a+" "+b
document.write("Welcome "+full_name)*/

//q2
/*var a=prompt("Your favorite phone is");
var b=a.length
document.write("My favorite phone is: "+a+"<br>Length of string is: "+b)*/

//q3
/*var a="pakistani"
var b=a.indexOf("n")
document.write("index of 'n' is: "+ b)*/

//q4
/*var a="Hello World"
var b=a.lastIndexOf("l")
document.write("String: "+a+"<br>last index of l: "+b)*/

//q5
/*var a="pakistani"
var b=a.charAt(3)
document.write("String: "+a+"<br>Character at index 3 is: "+ b)*/

//q6
/*var a=prompt("First name");
var b=prompt("last name");
var full_name=a.concat(" "+b)
document.write("Welcome "+full_name)*/

//q7
/*var text="Hyderabad"
var index=text.indexOf("abad")
var a=text.slice(index)
var replace="Islam"
document.write("City: "+text+"<br>After replacement: "+replace+a)*/

//q8
/*var text= "ali and sami are best friends they play cricket and football together";
var a=text.replace(/and/g,"&")
document.write(a);*/
//q9
/*var val="472"
var a=parseInt(val)
document.write("Value: "+val+"<br>Type: String<br>Value: "+a+"<br>Type: Number")*/

//q10
/*var a=prompt();
var b=a.toUpperCase()
alert(b)*/

//q11
/*var text=prompt();
var sentence =text.toLowerCase().split(" "); 
for(var i = 0;
i<sentence.length; i++){       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1); }
document.write(sentence.join(" "));*/

//q12
/*var a=35.36
b=a.toString()
c=b.replace(".","")
alert("Number: "+c)*/

//q13
/*var str=prompt("User name");
var split=str.split("");
for(i=0;i<split.length;i++){
var ch = str.charCodeAt(i);
if((ch>0 && ch<=47)||(ch>=58 && ch<=64)|| (ch>=91 && ch<=96)||(ch>=123 && ch<=127))
{alert("Please enter a valid username")}
}*/

//q14
// var a=prompt("Search");
// a = a.toLowerCase();
// var bakery= ["cake","apple pie", "cookie", "chips", "patties"]
// var b=bakery.indexOf(a);
//    if(bakery[b]===a){
//         alert(a+" is available at index "+b+" in our bakery")
//     } 
//     else{
//         alert("We are sorry "+a+" is not available in our bakery")
//     }


//q15
/*var pass=prompt("Enter password");
var a=pass.length
var ch=pass.charCodeAt(0)
for(i=0;i<pass.length;i++){
 var ch=pass.charCodeAt(i)
 if((ch>0 && ch<=47)||(ch>=58 && ch<=64)|| (ch>=91 && ch<=96)||(ch>=123 && ch<=127))
{alert("Please enter a valid password")}
else if(a<6){
    alert("please enter a valid password")
}
else if (ch>=48 && ch<=57){
    alert("please enter a valid password")}
break;
}*/

//q16
/*var a="University of Karachi"
var b=a.split("")
for(i=0;i<b.length;i++){
var c=b[i]
document.write(c + "<br>")
}*/

//q17
/*var a=prompt()
var b=a.split("")
for(i=0;i<b.length;i++){
var c=b[i]
}
alert("Last character "+c)*/

//q18
/*var text="the quick brown fox jumps over the lazy dog."
var res = text.match(/the/g);
var a=res.length
document.write("Text: "+text+"<br>There are "+a+" occurences of word 'the'")*/

//Chapter 26-30

//q1
/*var a=+prompt("Enter positive integer");
var b=a.toFixed(0)
var c=Math.floor(a)
var d=Math.ceil(a)
document.write("number "+a+"<br>round off value: "+b+"<br> Floor value: "+c+"<br>Ceil value:
"+d)*/

//q2
/*var a=+prompt("Enter negative integer");
var b=a.toFixed(0)
var c=Math.floor(a)
var d=Math.ceil(a)
document.write("number "+a+"<br>round off value: "+b+"<br> Floor value: "+c+"<br>Ceil value:
"+d)*/

//q3
//var a=+prompt("Enter value");

//q4
/*var toss= Math.random()*6;
var floor=Math.floor(toss);
alert("Random Dice Value: "+floor)*/

//q5
/*var toss=Math.random()*2
var floor=Math.floor(toss)
if(floor===1){
    alert("Random coin value: Heads")
}
else{
    alert("Random coin value: Tails")
}*/

//q6
/*var a=Math.random()*100
var floor=Math.floor(a)
alert("Random number between 1 to 100: "+floor)*/

//q7
/*var a=prompt("Enter your Weight")
var b=parseInt(a)
alert("The weight of user is "+b+" kilograms")*/

//q8
/*var a=Math.random()*10
var b=Math.floor(a)
c=+prompt()
if(b===c){
    alert("Congrats")
}
else(alert("Fail"))*/

//Chapter 31-34

//q1
/*var a=new Date()
alert(a)*/

//q2
/*var a=new Date()
var b=a.getMonth()
var c=["January","Febuary","march","april","may","june","july","september","october","december"]
alert("Current month: "+c[b])*/

//q3
/*var a=new Date()
var b=a.getDay()
var c= ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
alert("Current day: "+c[b])*/

//q4
/*var a=new Date()
var b=a.getDay()
var c= ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
d=c[b]
if((d==="Sun")||(d==="Sat")){
alert("It's a Fun day")
}
else{
    alert(d)
}*/

//q5
/*var a=new Date()
var b=a.getDate()
if(b<=15){
alert("First fifteen days of month")}
else{
    alert("Last days of month")
}*/

//q6
/*var a=new Date()
var b=a.getTime()
var c=b/(1000*60)
var d=Math.floor(c)
alert("Current Date "+a+"\nEllapsed Milliseconds "+b+"\nEllapsed Minutes "+d)*/

//q7
/*var a=new Date()
var b=a.getHours()
if(b<=12){
    alert("Am")
}
else{
    alert("Pm")
}*/

//q8
/*var date = new Date();
var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
var lastDay = new Date(date.getFullYear(),date.getMonth() + 1, 0);
alert(lastDay )*/

//q9
/*var date= new Date(prompt(""))
var datemili=date.getTime()
var today= new Date()
var todaymili=today.getTime()
var diff=todaymili-datemili
var days=Math.floor(diff/(1000*60*60*24))
alert(days+" Days passed since 1st ramadan,2020")*/

//q10
/*var beg=new Date("jan 1,2015")
var ref=new Date(prompt(""))
var bmili=beg.getTime()
var rmili=ref.getTime()
var diff=rmili-bmili
alert("On reference date "+ref+" ,"+diff+" seconds had passed since beginnig of 2015")*/

//q11
/*var date= new Date()
date.setHours(date.getHours()-1)
alert(date)*/

//q12
/*var date=new Date()
date.setFullYear(date.getFullYear()-100)
alert(date)*/

//q13
/*var a=+prompt("your age");
var b=new Date();
var c=b.getFullYear()
var diff=c-a
alert("Your birth year is "+ diff)*/

//q14
/*var a="Customer Name: Ali"
var b="<br>Month: "
var date=new Date()
var z=date.getMonth()
var c=["January","Febuary","march","april","may","june","july","september","october","december"]
d="<br>Number of units: 410"
e="<br>Charges per unit: 16"
f= 410*16
g="<br>Net amount payable(within due date): "
i="<br>Late payment surcharge: 350"
h="<br>Gross amount payable after due date: "
j=350+f
document.write(
    "<h1>K-Electric Bill</h1><br>"+a+b+c[z]+d+e+g+f+i+h+j
)*/

//Chapter 35-38

//q1
/*function date(){
    d=new Date()
    alert(d)
}
date();*/

//q2
/*function name(a,b){
    alert("Welcome "+a+b)
}
name("Abid"," Ali")*/

//q3
/*function add(){
    return a+b
}
a=+prompt()
b=+prompt()
alert(add())*/

//q4
/*function calc(num1,num2,opr)
{
if(opr==="+"){
    return num1+num2
}
else if(opr==="*"){
    return num1*num2
}
else if(opr==="/"){
    return num1/num2
}
else if(opr==="-"){
    return num1-num2
}
else{
    return ("Wrong operator")
}
}
num1=+prompt("Enter value 1")
num2=+prompt("Enter value 2")
opr=prompt("Operator")
alert(calc(num1,num2,opr))*/

//q5
/*function Square(a){
    return a*a
}
var b=+prompt("Enter value")
var c= Square(b);
alert(c)*/

//q6
/*function fact(a){
   if (a === 0)
 {
    return 1;
 }
 else{
     return a *fact(a-1);
 }
 
}
var b=+prompt("Enter value")
c= fact(b);
alert(c)*/

//q7
/*function count(a,b){
for(i=a;i<=b;i++){
   document.write(i+"<br>")
}
}
count(5,18)*/

//q8
/*var per=+prompt("per");
var base=+prompt("base");
function hyp(a, b){
function square(x){
return x*x;
}
return Math.sqrt(square(a) + square(b));
}
console.log(hyp(per,base))*/

//q9
/*var a=+prompt("Height")
var b=+prompt("Width")
function area(){
   return area=a*b
}
console.log(area())
*/

//q10
/*var a=prompt("Word")
var b=a.toLowerCase()
function palindrome(){
var split=b.split("").reverse("").join("")
if(split===b){
    alert("Palindrome word")
}
else{
    alert("Not a palindrome word")
}
}
palindrome()*/

//q11
/*function Upper(a){
var sentence =a.toLowerCase().split(" "); 
for(var i = 0;
i<sentence.length; i++){       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1); }
document.write(sentence.join(" "));
}
Upper("the quick brown fox")
*/

//q12

//q13
/*function count(a){
    b=a.match(/l/g)
    c=b.length
    
    
//q14
/*var a=+prompt("Radius")
function area(){
 var b=3.14*a*a
 var c=Math.round(b)
    return c
}
function circum(){
  var b= 2*3.14*a
  var c=Math.round(b)
    return c
}
document.write("Circumference of circle = "+circum()+"<br> Area of Circle = "+ area())
*/
