function encriptar(){
    var oración = document.getElementById("textoEncriptar").value.toLowerCase();

    var textoEncriptar = oración.replace(/e/img, "enter");
    var textoEncriptar = textoEncriptar.replace(/i/img, "imes");
    var textoEncriptar = textoEncriptar.replace(/a/img, "ai");
    var textoEncriptar = textoEncriptar.replace(/o/img, "ober");
    var textoEncriptar = textoEncriptar.replace(/u/img, "ufat");

    document.getElementById("textoDesencriptar").innerHTML = textoEncriptar;
    
    document.getElementById("buttonCopiar").style.display = "inline-block";

    var imagen= document.getElementById("imagen");

    imagen.classList.add("hidden");

    var mensajeParrafo=document.getElementById("superponerMensajeParrafo");

    mensajeParrafo.classList.add("hidden");

    document.getElementById("textoDesencriptar").style.display = "inline-block";

    document.getElementById('buttonEncriptar').addEventListener('click', function(){
        document.getElementById('textoDesencriptar').style.height = '100%'; 
    });
}

function desencriptar(){
    var oración = document.getElementById("textoEncriptar").value.toLowerCase();

    var textoEncriptar = oración.replace(/enter/img, "e");
    var textoEncriptar = textoEncriptar.replace(/imes/img, "i");
    var textoEncriptar = textoEncriptar.replace(/ai/img, "a");
    var textoEncriptar = textoEncriptar.replace(/ober/img, "o");
    var textoEncriptar = textoEncriptar.replace(/ufat/img, "u");

    document.getElementById("textoDesencriptar").innerHTML = textoEncriptar;   
}

function copiarOracion() {
    var contenido = document.querySelector("#textoDesencriptar").textContent;
    navigator.clipboard.writeText(contenido).then(() => {
        console.log('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Algo salió mal al copiar el texto: ', err);
    });
}