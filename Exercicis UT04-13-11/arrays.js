
const array = ["España", "Francia", "Irlanda", "México", "Bulgaria"];
let resultado = document.getElementById("resultado");
resultado.innerHTML = "";

function numeroPaises() {

    resultado.innerHTML = array.length;    
}

function mostrarPaises() {
    resultado.innerHTML = array.join(", ");
}

function muestraReversePaises() {
    resultado.innerHTML = array.reverse().join(", ");
}

function ordenaPaisesAlph() {
    resultado.innerHTML = array.sort().join(", ");
}

function añadePais() {
    let nuevoPais = prompt("Introduce el nombre del nuevo pais: ")
    array.unshift(nuevoPais);
    resultado.innerHTML = array.join(", ");    
}

function añadePaisFinal() {
    let nuevoPais = prompt("Introduce el nombre del nuevo pais: ")
    array.push(nuevoPais);
    resultado.innerHTML = array.join(", ");    
}

function borrarPais() {
    resultado.innerHTML = array.shift();
}

function borrarUltimoPais() {
    resultado.innerHTML = array.pop();
}

function mostrarPositionUser() {
    let posicion = prompt("Introduce una numero para saber que país se encuentra en esa posición: ")
    resultado.innerHTML = array[posicion - 1];
}

function mostrarPaisUser() {
    let posicion = prompt("Introduce un país para saber en que posición se encuentra: ")
    resultado.innerHTML = array.indexOf(posicion) + 1;
}

function intervaloPais() {
    let posicion = prompt("Introduce el primer valor del intervalo:");
    let posicion2 = prompt("Introduce el segundo valor del intervalo:");
    resultado.innerHTML = array.slice(posicion - 1, posicion2 + 1).join(", ");
}

