
let texto = "";



function encriptarTexto() {
    // Lógica para encriptar el texto
    texto = document.getElementById("input_texto").value;
    
    if(texto != ""){
        vaciarPanel();
    }
    let texto_encriptado = ""

    for(let letra of texto){
        switch (letra) {
            case "a":
                texto_encriptado +="ai";
                break;
            case "e":
                texto_encriptado +="enter";
                break;
            case "i":
                texto_encriptado += "imes";
                break;
            case "o":
                texto_encriptado += "ober";
                break;
            case "u":
                texto_encriptado += "ufat";
                break;
            default:
                texto_encriptado += letra;
                break;
        }
    }
    imprimirTexto(texto_encriptado, "Texto encriptado");
}

function desencriptarTexto() {
    // Lógica para desencriptar el texto
    texto = document.getElementById("input_texto").value;

    let texto_desencriptado = "";

    texto_desencriptado = texto.replace("ai","a").replace("enter","e").replace("imes","i").replace("ober","o").replace("ufat","u");
    
    
    imprimirTexto(texto_desencriptado, "Texto desencriptado");
}

function vaciarPanel(){
    let panel = document.getElementById("panel_derecho");
    let imagen = document.getElementById("muñeco");
    
    if (imagen) { // Verifica si la imagen existe antes de intentar eliminarla
        panel.removeChild(imagen);
    }

    let entrada = document.getElementById("input_texto")
    entrada.value="";
}


function imprimirTexto(texto, tit){
    let txt = document.getElementById("alerta");
    txt.innerHTML = texto;
    let titulo = document.getElementById("titulo_salida")
    titulo.innerHTML = tit;
}