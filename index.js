// Función para encriptar el texto
function encriptarTexto(texto) {
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado;
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
}

// Selección de elementos
const encriptarBtn = document.getElementById("encriptar");
const desencriptarBtn = document.getElementById("desencriptar");
const copiarBtn = document.getElementById("copiar");
const resultado = document.getElementById("resultado");
const textoInput = document.getElementById("texto-encriptar/desencriptar");

// Evento de clic para el botón de encriptar
encriptarBtn.addEventListener("click", function() {
    let texto = textoInput.value;
    if (texto) {
        let textoEncriptado = encriptarTexto(texto);
        resultado.textContent = textoEncriptado; // Actualizar el resultado con el texto encriptado
        resultado.style.display = 'block'; // Mostrar el cuadro de resultado
        document.querySelector(".candado").style.display = 'none'; // Ocultar la imagen
        document.getElementById("mensaje-no-encontrado").style.display = 'none'; // Ocultar el mensaje
        mostrarBotonCopiar(); // Mostrar el botón de copiar
    }
});

// Evento de clic para el botón de desencriptar
desencriptarBtn.addEventListener("click", function() {
    let texto = textoInput.value;
    if (texto) {
        let textoDesencriptado = desencriptarTexto(texto);
        resultado.textContent = textoDesencriptado; // Actualizar el resultado con el texto desencriptado
        resultado.style.display = 'block'; // Mostrar el cuadro de resultado
        document.querySelector(".candado").style.display = 'none'; // Ocultar la imagen
        document.getElementById("mensaje-no-encontrado").style.display = 'none'; // Ocultar el mensaje
        mostrarBotonCopiar(); // Mostrar el botón de copiar
    }
});

// Función para mostrar el botón copiar
function mostrarBotonCopiar() {
    copiarBtn.style.display = "block";
}

// Evento de clic para el botón de copiar
copiarBtn.addEventListener("click", function() {
    navigator.clipboard.writeText(resultado.textContent).then(() => {
        alert("Texto copiado al portapapeles!");
    });
});
