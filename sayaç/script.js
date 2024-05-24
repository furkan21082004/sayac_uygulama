var count = 0;
const numberspan = document.getElementById('numberspan');
const increase_button = document.getElementById('btnincrease');
const decrease_button = document.getElementById('btndecrease');
const reset_button = document.getElementById('btnreset');

function check_sign()
{
    if(count<0)
    {
        numberspan.classList.add("redtext");
        numberspan.classList.remove("greentext");

    }else if (count>0){
        numberspan.classList.add("greentext");
        numberspan.classList.remove("redtext");
    }else{
        numberspan.classList.remove("redtext");
        numberspan.classList.remove("greentext");
        
    }
}



function increase ()
{
    count++;
    check_sign();
    numberspan.innerHTML=count;
}


function decrease ()
{
    count--;
    check_sign();
    numberspan.innerHTML=count;
}

function reset ()
{
    count=0;
    check_sign();
    numberspan.innerHTML=count;
}



increase_button.addEventListener("click",increase);
decrease_button.addEventListener("click",decrease);
reset_button.addEventListener("click",reset);

