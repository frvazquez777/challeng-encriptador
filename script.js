var resultado = document.querySelector(".texto-resultado");
var btnCopiar = document.getElementById('btnCopiar');

function encriptar() {
    console.log('encriptando...');
    var mensaje = document.getElementById("dato-entrada").value;

    mensaje = mensaje.trim();

    if (mensaje == '') {
        alert('No se encontro ningun mensaje, Por favor de ingresar un texto');
    } else {
        mensaje = mensaje.replace(/e/g, 'enter');
        mensaje = mensaje.replace(/i/g, 'imes');
        mensaje = mensaje.replace(/a/g, 'ai');
        mensaje = mensaje.replace(/o/g, 'ober');
        mensaje = mensaje.replace(/u/g, 'ufat');
        console.log('elemento',resultado);
        resultado.textContent =mensaje;
    }
    console.log(mensaje);
 

    ocultarElemento();

}

function descriptar() {
    console.log('encriptando...');
    var mensaje = document.getElementById("dato-entrada").value;
    mensaje = mensaje.trim();

    if (mensaje == '') {
        alert('No se encontro ningun mensaje, Por favor de ingresar un texto');
    } else {
        mensaje = mensaje.replace(/enter/g, 'e');
        mensaje = mensaje.replace(/imes/g, 'i');
        mensaje = mensaje.replace(/ai/g, 'a');
        mensaje = mensaje.replace(/ober/g, 'o');
        mensaje = mensaje.replace(/ufat/g, 'u');
    }
    console.log(mensaje);
    resultado.textContent =mensaje;
    ocultarElemento();
}

function ocultarElemento() {
    document.querySelector('.contenido-imagen').classList.add('esconder');
    btnCopiar.classList.add('btn-copiar');

}

function copiar() {
    const btnCopiar = document.querySelector('.btn-copiar');
    btnCopiar.addEventListener('click', copiar = () => {
        var contenido = document.querySelector('.texto-resultado').textContent;
        navigator.clipboard.writeText(contenido);
        console.log('trxto copiado', contenido);
    });
}

function limpiar() {
    document.getElementById("dato-entrada").value = '';

}