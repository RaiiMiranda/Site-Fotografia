// js-nav
var nav = document.getElementById('nav');
window.addEventListener("scroll", function(event) {
    if(window.pageYOffset>600){
        nav.style.background = "#538393";
        nav.style.transition = "0.6s";
    }else{
        nav.style.background = "transparent";
    }
});
// end js-nav

// js-seta
var seta = document.getElementById('seta');
window.addEventListener("scroll", function(event) {
    if(window.pageYOffset>3900){
        seta.style.filter = "invert(100%)";
        seta.style.transition = "0.6s";
    }else{
        seta.style.filter = "invert(0%)";
    }
});

var setaHistoria = document.getElementById('seta-historia');
window.addEventListener("scroll", function(event) {
    if(window.pageYOffset>4550){
        setaHistoria.style.filter = "invert(100%)";
        setaHistoria.style.transition = "0.6s";
    }else{
        setaHistoria.style.filter = "invert(0%)";
    }
});

var setaHistoricas = document.getElementById('seta-historicas');
window.addEventListener("scroll", function(event) {
    if(window.pageYOffset>9750){
        setaHistoricas.style.filter = "invert(100%)";
        setaHistoricas.style.transition = "0.6s";
    }else{
        setaHistoricas.style.filter = "invert(0%)";
    }
});

var setaFamosos = document.getElementById('seta-famosos');
window.addEventListener("scroll", function(event) {
    if(window.pageYOffset>3500){
        setaFamosos.style.filter = "invert(100%)";
        setaFamosos.style.transition = "0.6s";
    }else{
        setaFamosos.style.filter = "invert(0%)";
    }
});

var setaTipos = document.getElementById('seta-tipos');
window.addEventListener("scroll", function(event) {
    if(window.pageYOffset>10500){
        setaTipos.style.filter = "invert(100%)";
        setaTipos.style.transition = "0.6s";
    }else{
        setaTipos.style.filter = "invert(0%)";
    }
});

var setaMundo = document.getElementById('seta-mundo');
window.addEventListener("scroll", function(event) {
    if(window.pageYOffset>7100){
        setaMundo.style.filter = "invert(100%)";
        setaMundo.style.transition = "0.6s";
    }else{
        setaMundo.style.filter = "invert(0%)";
    }
});

var setaGuia = document.getElementById('seta-guia');
window.addEventListener("scroll", function(event) {
    if(window.pageYOffset>10530){
        setaGuia.style.filter = "invert(100%)";
        setaGuia.style.transition = "0.6s";
    }else{
        setaGuia.style.filter = "invert(0%)";
    }
});

var setaSobre = document.getElementById('seta-sobre');
window.addEventListener("scroll", function(event) {
    if(window.pageYOffset>2300){
        setaSobre.style.filter = "invert(100%)";
        setaSobre.style.transition = "0.6s";
    }else{
        setaSobre.style.filter = "invert(0%)";
    }
});
// end js-seta