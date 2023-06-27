const numFil = 2;
const numCol = 5;
const capas = 4;

function posicionesIniciales(numFil, numCol){
    for (var j=0; j<numCol; j++) for (var i=0; i<numFil; i++) for (var k=0; k<1; k++) {
        var pag = document.getElementById("pag" + j + "-" + i + "-" + k);
        console.log(pag);
        pag.style.left = 100*j + "vw";
        pag.style.top = 100*i + "vh";
    }
}

function desplazar(event, numFil, numCol) {

    console.log(event.key);
    pagBase = document.getElementById("pag0-0-0");

    var x = Math.round(pagBase.getBoundingClientRect().left/pagBase.clientWidth);
    var y = Math.round(pagBase.getBoundingClientRect().top/pagBase.clientHeight);
    console.log(x, y)
    for (var j=0; j<numCol; j++) for (var i=0; i<numFil; i++) for (var k=0; k<1; k++){
        var pag = document.getElementById("pag" + j + "-" + i + "-" + k);

        if (event.key == "ArrowLeft" && -x<numCol-1){
            console.log(100*(x-1));
            var posiciónNuevaX = 100*(x-1);
            var posiciónNuevaY = 100*y;
            pag.style.transform = "translate(" + posiciónNuevaX + "vw," + posiciónNuevaY + "vh)";
        }

        else if (event.key == "ArrowRight" && -x>0){
            console.log(100*(x+1));
            var posiciónNuevaX = 100*(x+1);
            var posiciónNuevaY = 100*y;
            pag.style.transform = "translate(" + posiciónNuevaX + "vw," + posiciónNuevaY + "vh)";
        }

        else if (event.key == "ArrowUp" && -y<numFil-1){
            console.log(100*(y-1));
            var posiciónNuevaX = 100*x;
            var posiciónNuevaY = 100*(y-1);
            pag.style.transform = "translate(" + posiciónNuevaX + "vw," + posiciónNuevaY + "vh)";
        }

        else if (event.key == "ArrowDown" && -y>0){
            console.log(100*(y+1));
            var posiciónNuevaX = 100*x;
            var posiciónNuevaY = 100*(y+1);
            pag.style.transform = "translate(" + posiciónNuevaX + "vw," + posiciónNuevaY + "vh)";
        }
    }
}

window.addEventListener("load", (e) => posicionesIniciales(numFil, numCol));

document.addEventListener("keydown", (e) => desplazar(e, numFil, numCol));



//function desplazarDerecha(event) {
//    if (event.movementX<-100){
//        var n = Math.floor(document.getElementById("pag00").getBoundingClientRect().right/document.getElementById("pag00").clientWidth)-1;
//        for (var i=0; i<2; i++){
//            var pag = document.getElementById("pag" + i + "0");
//            console.log(100*n-100);
//            var n1 = 100*n-100;
//            pag.style.transform = "translateX(" + n1 + "vw)";
//        }
//    }
//}
//document.addEventListener("mousemove", (e) => desplazarDerecha(e));//

