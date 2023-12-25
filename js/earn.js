var q = false;
var setMainBalance = localStorage.getItem("Main_Balance");
var setCashPerClick = localStorage.getItem("cashperclick");
var setLevelAmount = localStorage.getItem("LevelAmount");
var Setlevel = localStorage.getItem("level");
var Setebc = localStorage.getItem("ebc");
var Setebp = localStorage.getItem("ebp");
if(setMainBalance>0)
{document.getElementById("Main_Balance").innerText=setMainBalance;}else{
    document.getElementById("Main_Balance").innerText="100";}
    /////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
if(setCashPerClick>0)
{document.getElementById("cash").innerText=setCashPerClick;}else{
    document.getElementById("cash").innerText="1";}
    /////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
if(setLevelAmount>0)
{document.getElementById("Amount").innerText=setLevelAmount;
}else{
    document.getElementById("Amount").innerText="10";
}
    /////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
if(Setlevel!=null)
{document.getElementById("level_digit").innerText=Setlevel;
}else{
    document.getElementById("level_digit").innerText="00";
}
    /////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

if(Setebc>0)
{document.getElementById("total_earn_click").innerText=Setebc;}else{
    document.getElementById("total_earn_click").innerText="00";}
    /////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

if(Setebp>0)
{document.getElementById("total_earn_business").innerText=Setebp;}else{
    document.getElementById("total_earn_business").innerText="00";}
    /////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////


var ebc = document.getElementById("total_earn_click");



function Earn(){
    
    var cash1 =  parseInt(document.getElementById("cash").innerText);

    var ebc1 = parseInt(document.getElementById("total_earn_click").innerText);
   var main = parseInt(document.getElementById("Main_Balance").innerText);
    
   var p = cash1+main;
   var qqq = ebc1 + cash1;
   console.log("Total Earning is"+qqq);
   ebc.innerText=qqq;
   localStorage.setItem("ebc",qqq);
   document.getElementById("Main_Balance").innerText=p;
   localStorage.setItem("Main_Balance",(p));
}
function changeLevel(){
    var levelAmount =  parseInt(document.getElementById("Amount").innerText);
    var MB = parseInt(document.getElementById("Main_Balance").innerText);
    if(MB>levelAmount)
    {

          var q = MB-levelAmount;
            var RandomNo = Math.round(Math.random()*10);
            var Randomcash = Math.round(Math.random()*50);

            var ca = parseInt(document.getElementById("cash").innerText);
            var sumOfRandomCash = ca+Randomcash;
            localStorage.setItem("cashperclick",sumOfRandomCash);
            document.getElementById("cash").innerText=sumOfRandomCash;
            var newLevelAmount = levelAmount*RandomNo*10;
            var level_digi = document.getElementById("level_digit").innerText;
            var  l = ++level_digi;
            document.getElementById("level_digit").innerText=l;

            // generating amount for next level 

           var oldAmount = parseInt(document.getElementById("Amount").innerText);
           
         var RandomNumberForLevelAmount =   Math.round(Math.random()*1000);
         var pk = oldAmount+RandomNumberForLevelAmount;
         document.getElementById("Amount").innerText=pk;
            localStorage.setItem("LevelAmount",pk);
            localStorage.setItem("level",l);
            localStorage.setItem("Main_Balance",q);
            document.getElementById("Main_Balance").innerText=q;
        }
        else{
        alert('You have In suffcient Amount');
    }
}
