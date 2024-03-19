function encriptarTexto() {
    var texto = document.getElementById("texto").value.toLowerCase();
    var resultado = "";

    resultado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    mostrarResultado(resultado);
}

function desencriptarTexto() {
    var texto = document.getElementById("texto").value.toLowerCase();
    var resultado = "";

    resultado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = resultado;

    // Agregar un botón de copiar
    var botonCopiar = document.createElement("button");
    botonCopiar.innerText = "Copiar";
    botonCopiar.onclick = function() {
        copiarTexto(resultado);
    };

    resultadoDiv.appendChild(botonCopiar);
}

function copiarTexto(texto) {
    var elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = texto;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand("copy");
    document.body.removeChild(elementoTemporal);
    alert("Texto copiado al portapapeles");
}
