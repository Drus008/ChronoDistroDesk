

function posicionesIniciales(e){
    var n=0;
    for (var i=0; i<3; i++){
        var pag = document.getElementById("capa" + i);
        console.log(n);
        console.log(pag.classList.contains("inScreen"));
        if (pag.classList.contains("inScreen")) n=1;
        else {
            pag.style.opacity = 0;
            if (n==0) pag.style.transform = ("scale(0)");
            if (n==1) pag.style.transform = ("scale(10)");
        }
        pag.style.transition = ("all 1s linear")
    }
}

function hacerZoom(e){
    console.log("Tecla pulsada");
    if (e.key == "+"){
        console.log("+ pulsado");
        for (i=0; i<3; i++){
            var pag = document.getElementById("capa" + i);
            console.log(i);
            if (pag.classList.contains("inScreen")){
                var pagSig = document.getElementById("capa" + (i-1));
                pag.style.transform = ("scale(10)");
                pag.style.opacity = 0;
                pag.classList.remove("inScreen");
                pagSig.style.transform = ("scale(1)");
                pagSig.style.opacity = 1;
                pagSig.classList.add("inScreen");
                break
            }
        }
    }
    else if (e.key == "-"){
        console.log("+ pulsado");
        for (i=0; i<3; i++){
            var pag = document.getElementById("capa" + i);
            console.log(i);
            if (pag.classList.contains("inScreen")){
                var pagSig = document.getElementById("capa" + (i+1));
                pag.style.transform = ("scale(0)");
                pag.style.opacity = 0;
                pag.classList.remove("inScreen");
                pagSig.style.transform = ("scale(1)");
                pagSig.style.opacity = 1;
                pagSig.classList.add("inScreen");
                break
            }
        }
    }
}

window.addEventListener("load", (e) => posicionesIniciales(e));

document.addEventListener("keydown", (e) => hacerZoom(e));