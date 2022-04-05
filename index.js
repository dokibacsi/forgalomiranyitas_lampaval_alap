window.addEventListener("load", init);

function ID(elem){
    return document.getElementById(elem);
}

function CLS(elem){
    return document.getElementsByClassName(elem);
}

function $(elem){
    return document.querySelectorAll(elem);
}

var allapot = false;

function init(){
    var autoElem = $(".auto")[0];
    var lampa = $(".lampa")[0];
    var piros = $(".piros")[0];
    var sarga = document.querySelector(".sarga");
    sarga.style.opacity = "20%";
    var zold = document.querySelector(".zold");
    zold.style.opacity = "20%";
 
    setInterval(() => {
        sarga.style.opacity = "100%";}, 1000);
    
    setInterval(() => {
            if (allapot){
                piros.style.oppacity = "100%";
                zold.style.oppacity = "20%";
            }else{
                piros.style.oppacity = "20%";
                sarga.style.oppacity = "20%";
                zold.style.oppacity = "100%";
            autoElem.classList.add("balroljobbra");
            }
            allapot = !allapot;
        }, 2000);
}