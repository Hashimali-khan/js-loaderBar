let count=0;
let sec=4;
let progress=document.querySelector("#progressBar");
let progressText=document.querySelector("#progressText");

let intv= setInterval(function(e){
    if (count<=99){
        count++;
        progress.style.width=`${count}%`;
        progressText.textContent=`${count}%`;
    }
    else{
        document.querySelector("h1").textContent="loaded";
        clearInterval(intv);
    }

},sec*1000/100);

setInterval(function(){
    document.querySelector("#vanish").style.display="none";
},4000)