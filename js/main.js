let main = document.getElementById("main");
let slide = document.getElementById("slide");
let slide_logo = document.getElementById("slide-logo");
let menu = document.getElementById("menu");
    let one_screen = document.getElementById("one_screen");
    let progress = document.getElementById("progress");
setTimeout(function(){
    slide.style.marginLeft="-300px";
},5000);
setTimeout(function(){
    slide_logo.style.marginLeft="0px";
    slide_logo.style.transition="ease 2s";
    slide_logo.style.fontSize="40px";
    slide_logo.style.letterSpacing="8px";
},1000);

setTimeout(function(){
    menu.style.bottom="0";
},6000);
setTimeout(function(){
        one_screen.style.top="0";
},6100)

setTimeout(function(){
    progress.style.opacity="1";
},7900);

var screen1 = document.getElementsByClassName("one_screen")[0];
    screen1.style.transition="2s ease";
var screen2 = document.getElementsByClassName("two_screen")[0];
var screen3 = document.getElementsByClassName("three_screen")[0];
var screen4 = document.getElementsByClassName("four_screen")[0];
var screen5 = document.getElementsByClassName("five_screen")[0];
function changeScreen(id){
    switch(id){
        case 1:
                setDefaultColor();
                setTimeout(function(){
                    changeColor(1);
                },100);
                setTimeout(function(){
                screen1.style.top="00px";
            },1900);
            screen2.style.top="-500px";
            screen3.style.top="-500px";
            screen4.style.top="-500px";
            screen5.style.top="-500px";
         break;
        case 2: 
        setDefaultColor();
        setTimeout(function(){
            changeColor(2);
        },100);
            screen1.style.top="-500px";
            setTimeout(function(){
                screen2.style.top="00px";
            },1900);
            screen3.style.top="-500px";
            screen4.style.top="-500px";
            screen5.style.top="-500px";
         break;
        case 3:
            setDefaultColor();
            setTimeout(function(){
                changeColor(3);
            },100);
            screen1.style.top="-500px";
            screen2.style.top="-500px";
            setTimeout(function(){
                screen3.style.top="00px";
            },1900);
            screen4.style.top="-500px";
            screen5.style.top="-500px";
         break;
        case 4:
            setDefaultColor();
            setTimeout(function(){
                changeColor(4);
            },100);
            screen1.style.top="-500px";
            screen2.style.top="-500px";
            screen3.style.top="-500px";
            setTimeout(function(){
                screen4.style.top="00px";
            },1900);
            screen5.style.top="-500px";
         break;
        case 5:
            setDefaultColor();
            setTimeout(function(){
                changeColor(5);
            },100);
            screen1.style.top="-500px";
            screen2.style.top="-500px";
            screen3.style.top="-500px";
            screen4.style.top="-500px";
            setTimeout(function(){
                screen5.style.top="00px";
            },1900);
         break;
    }
}


var progress_show = document.getElementById("progress_show");
var progress_time_sec = document.getElementById("progress_time");
var length=0;
var progress_time = 100;
setTimeout(function(){
    var start_progress = setInterval(function(){
        length++;
        progress_show.style.width=length+"%";
            progress_time--;
            progress_time_sec.innerText=progress_time;
        if(length==100)
        {
            
   var main_b = parseInt(document.getElementById("Main_Balance").innerText);
   var cycle_income = parseInt(document.getElementById("cycle_income").innerText);

   var ttotal = main_b + cycle_income;
   document.getElementById("Main_Balance").innerText=ttotal;
localStorage.setItem("Main_Balance",(ttotal));
            progress_time=100;;
            length=0;

            let _cycle_income = document.getElementById("cycle_income");
            let cycle_incomeInnerText = parseInt(document.getElementById("cycle_income").innerText);
           
            let total_earn_business1 = parseInt(document.getElementById("total_earn_business").innerText);
            
                var tt = cycle_incomeInnerText + total_earn_business1;
            let total_earn_business = document.getElementById("total_earn_business").innerText=tt;

            localStorage.setItem("ebp",tt);
        }
        recall();
    },1000);
},5000);
function recall(){
var checkLevel = parseInt(document.getElementById("level_digit").innerText);
if(checkLevel>299)
{
    document.getElementById("level").innerText="Maximum Level";
    document.getElementById("cash_new_level").style.display="none";
}

}

function changeColor(id){
    document.getElementById("menu-item"+id).style.borderTop="1px solid blue";
    document.getElementById("menu-item"+id).style.borderBottom="1px solid blue";
    document.getElementById("menu-item"+id).style.color="blue";
}
function setDefaultColor(){
        
    document.getElementById("menu-item1").style.border="none";
    document.getElementById("menu-item1").style.color="black";
    document.getElementById("menu-item2").style.border="none";
    document.getElementById("menu-item2").style.color="black";
    document.getElementById("menu-item3").style.border="none";
    document.getElementById("menu-item3").style.color="black";
    document.getElementById("menu-item4").style.border="none";
    document.getElementById("menu-item4").style.color="black";
    document.getElementById("menu-item5").style.border="none";
    document.getElementById("menu-item5").style.color="black";
}

