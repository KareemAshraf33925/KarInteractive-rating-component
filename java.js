// start interactive-rating
var ratein=document.getElementById("rate");
var submit=document.getElementById("submit");
var selected=document.getElementById("selected");
var ratingcontent=document.getElementById("rating-content");

function rate(rat){
    submit.addEventListener("click",()=>{
        if(rat === " "){
           alert("Error")
        }else{
            selected.classList.add("active");
            ratingcontent.classList.add("active")
            ratein.innerHTML=rat;
        }    
    });
    
}
