//calculate 
$(document).ready(function(){

//set variable
var num = "";
var limit = "Digits limit";
var err = "Error";
var operators = ["+","-","x","÷"];
var lastChar = num[num.length -1];

//make a click button function for calculation
$(".btn").click(function(){
var key = $(this).attr("value");    
 if (key == parseInt(key,10) || key ==="+"|| key ==="-"
   ||key ==="x" || key ==="÷"||　 key ==="." )
 {
//add value in num 
   num += key;
   $(".result").val(num);
 }
    
// avoid consective operators and decimal symbols 
if(num.slice(-1) ==="+" ||num.slice(-1) ==="-" || num.slice(-1) ==="x" || num.slice(-1) ==="÷"){
   $(".operator").attr("disabled",true);
 } else if(num.slice(-1)==="."){
   $(".decimal").attr("disabled",true);
 } else {
    $(".operator").removeAttr("disabled");
    $(".decimal").removeAttr("disabled");
 }
    
// set up clear keys  
if(key ==="AC") {
   num = "";
    $(".result").val(num);
 }
else if(key ==="C") {
   num = num.slice(0,-1);
    $(".result").val(num);
  }
    
 // calculate total with eval 
 if(key === "=") {
   num = num.replace(/x/g,'*').replace(/÷/g,'/');
   res = eval(num);
   num = res.toString();
   $(".result").val(num);
 }
     
 // limit of number and show error message 
   var resultlength = document.getElementById("textbox");
  if(textbox.value.length > 20)
    {
    num = "";
    num = limit;
    $(".result").val(num);
    }
    
    });
  });