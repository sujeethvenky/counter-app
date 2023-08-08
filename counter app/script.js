// getting  data from the html table 
const incrementbtn = document.getElementById("incrementbtn");
const decrementbtn = document.getElementById("decrementbtn");
const disvalue = document.getElementById("value");
const resetbtn = document.getElementById("resetbtn");

// for decrement button click

decrementbtn.addEventListener("click",() =>{
    const value = Number(disvalue.innerText);
    if (value > 0){
        disvalue.innerText = value - 1;
        
    }else{
        alert("negative value are not allowed");
    }
});
// for increment button

incrementbtn.addEventListener("click",() =>
{
    const value = Number(disvalue.innerText);
    if (value >= 10){
        alert("10+ value are not allowed");
    }else{
        disvalue.innerText = value + 1;
    }
});

// for reset btn

resetbtn.addEventListener("click",()=>
{
    value.innerText = 0;
});