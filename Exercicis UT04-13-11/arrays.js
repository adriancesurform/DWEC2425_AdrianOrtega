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

function ordenaPaisesAlph2() {
    for (let i = 0; i < array.length - 1; i++) {
        console.log(array[i]);
    }
}



function ordenaPaisesAlph() {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (comparaStrings((array[j], array[j + 1])) > 0) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    resultado.innerHTML = array.join(", ");
}

function añadePais() {
    let nuevoPais = prompt("Introduce el nombre del nuevo pais: ")
    array.unshift(nuevoPais);
    resultado.innerHTML = array.join(", ");
    mostrarPaises();
}

function añadePaisFinal() {
    let nuevoPais = prompt("Introduce el nombre del nuevo pais: ")
    array.push(nuevoPais);
    resultado.innerHTML = array.join(", ");
    mostrarPaises();
}

function borrarPais() {
    mostrarPaises();
    resultado.innerHTML += " | Se ha borrado: " + array.shift();
}

function borrarUltimoPais() {
    resultado.innerHTML += " | Se ha borrado: " + array.pop();
    mostrarPaises();
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
    resultado.innerHTML = array.slice(posicion - 1, posicion2).join(", ");
}


function promptInicial() {
    let prompt1 = prompt(
        "Selecciona una de las opciones a continuación: \n" +
        "1 - Mostrar número de países. \n" +
        "2 - Mostrar listado de países. \n" +
        "3 - Mostrar intervalo de países. \n" +
        "4 - Añadir un país. \n" +
        "5 - Borrar un país. \n" +
        "6 - Consultar un país."
    );

    switch (prompt1) {
        case "1":
            numeroPaises();
            return;

        case "2":
            let prompt2 = prompt("Selecciona una de las opciones a continuación: \n 1 - Ordenar por defecto. \n 2 - Ordenar alfabéticamente.");
            if (prompt2 === "1") mostrarPaises();
            else if (prompt2 === "2") ordenaPaisesAlph2();
            else alert("Opción inválida. Regresando al menú principal.");
            return;

        case "3":
            intervaloPais();
            return;

        case "4":
            let prompt3 = prompt("Selecciona una de las opciones a continuación: \n 1 - Añadir país al inicio. \n 2 - Añadir país al final.");
            if (prompt3 === "1") añadePais();
            else if (prompt3 === "2") añadePaisFinal();
            else alert("Opción inválida. Regresando al menú principal.");
            return;

        case "5":
            let prompt4 = prompt("Selecciona una de las opciones a continuación: \n 1 - Borrar país al inicio. \n 2 - Borrar país al final.");
            if (prompt4 === "1") borrarPais();
            else if (prompt4 === "2") borrarUltimoPais();
            else alert("Opción inválida. Regresando al menú principal.");
            return;

        case "6":
            let prompt5 = prompt("Selecciona una de las opciones a continuación: \n 1 - Consultar país por posición. \n 2 - Consultar país por nombre.");
            if (prompt5 === "1") mostrarPositionUser();
            else if (prompt5 === "2") mostrarPaisUser();
            else alert("Opción inválida. Regresando al menú principal.");
            return;
    }
}


promptInicial();