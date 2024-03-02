
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
    imprimirTexto(texto_encriptado);
    alert(texto_encriptado);
}

function desencriptarTexto() {
    // Lógica para desencriptar el texto
    texto = document.getElementById("input_texto").value;

    let texto_desencriptado = "";

    texto_desencriptado = texto.replace("ai","a").replace("enter","e").replace("imes","i").replace("ober","o").replace("ufat","u");
    
    
    console.log(texto_desencriptado);
    alert(texto_desencriptado)
}

function vaciarPanel(){
    let panel = document.getElementById("panel_derecho");
    let imagen = document.getElementById("muñeco");
    panel.removeChild(imagen);
}

function imprimirTexto(texto){
    let txt = document.getElementById("alerta");
    txt.innerHTML = texto;
}