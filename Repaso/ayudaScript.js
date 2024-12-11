// ALERTAS

function mostrarAlerta() {
    alert("Esto es una alerta de prueba");
    if (confirm("Aceptas o cancelas?")) {
        alert("La alerta se ha aceptado.");
    } else {
        alert("La alerta se ha denegado.");
    }
}

// WINDOW CONFIRM . CONFIRMACION DE VENTANA

function windowConfirm() {
    var prueba = window.confirm("Esto es una ventana de prueba");
    if (prueba) {
        alert("Has confirmado la ventana.")
    } else {
        alert("Has cancelado la ventana.")
    }
}

// PROMPT

function mostrarPrompt() {
    var prueba = prompt("Escribe un nombre de prueba:");
    alert("El nombre introducido es : " + prueba);
}

// MENSAJES POR CONSOLA

function enviarMensajeConsola() {
    console.log("Soy un mensaje por consola.");
}

// FECHAS

function mostrarFecha() {
    var nuevaFecha = new Date();
    console.log("Año = " + nuevaFecha.getFullYear());
    console.log("Mes = " + nuevaFecha.getMonth());
    console.log("Dia = " + nuevaFecha.getDay());
    console.log("Horas = " + nuevaFecha.getHours());
    console.log("Minutos = " + nuevaFecha.getMinutes());
    console.log("Segundos = " + nuevaFecha.getSeconds());
}

// NUMBERS

function numbers() {
    const getNumber = prompt("Dame un numero:");
    const numero = Number(getNumber);

    const exponencial = numero.toExponential();
    const cuatroDecimales = numero.toFixed(4);
    const enBinario = numero.toString(2);
    const enOctal = numero.toString(8);
    const enHexa = "0x" + numero.toString(16);
    alert(" Resultados: \n Exponencial: " + exponencial + "\n Decimales: " + cuatroDecimales + "\n Binario: " + enBinario + "\n Hexadecimal: " + enHexa + "\n Octal: " + enOctal);
}


// ARRAYS

const array = ["Argentina", "Brasil", "Colombia", "España", "México", "Japón", "Italia", "India", "Francia", "Alemania"];

// MOSTRAR LONGITUD DE UNA ARRAY

function longitudArray() {
    alert("La longitud de la array es: " + array.length)
}

// MOSTRAR VALORES ARRAY

function mostrarArray() {
    var elegir = prompt("1. Con Joiners\n2. Con Map");
    switch (elegir) {
        case "1": alert(array.join(", ")); break;
        case "2": alert(array.map(array => array)); break;
    }
}

// MOSTRAR VALORES AL REVÉS DEL ARRAY

function mostrarArrayReversa() {
    var elegir = prompt("1. Con Joiners\n2. Con Map");
    switch (elegir) {
        case "1": alert(array.reverse().join(", ")); break;
        case "2": alert(array.reverse().map(array => array)); break;
    }
}

// MOSTRAR VALORES ORDENADOS ALFABETICAMENTE SIN SORT

function ordenarArray() {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            let a = array[j], b = array[j + 1];
            let k = 0;

            while (k < a.length && k < b.length && a.charAt(k).toLowerCase() === b.charAt(k).toLowerCase()) {
                k++;
            }

            if (k === a.length || (k < b.length && a.charAt(k).toLowerCase() > b.charAt(k).toLowerCase())) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    alert(array.join(", "));
}

// ORDENAR UNA ARRAY DE NUMEROS:

function ordenarArrayNums() {
    const numeros = [42, 17, 8, 99, 23, 5, 74, 31, 16, 50];
    for (let i = 0; i < numeros.length; i++) {
        for (let j = 0; j < numeros.length - 1; j++) {
            if (numeros[j] > numeros[j + 1]) {
                [numeros[j], numeros[j + 1]] = [numeros[j + 1], numeros[j]];
            }
        }
    }
    alert(numeros.join(", "));
}

// AÑADIR ALGUN VALOR AL FINAL DEL ARRAY

function añadirValor() {
    var prompt1 = prompt("Que pais quieres agregar:");
    array.push(prompt1);
}

// BORRAR EL PRIMER VALOR DEL ARRAY

function borrarValorInicio() {
    array.shift()
}
// BORRAR EL ULTIMO VALOR DEL ARRAY

function borrarValorFinal() {
    array.pop();
}

// MOSTRAR ARRAY SEGUN LA POSICION

function posicionesArray() {
    var prompt1 = prompt("1. Mostrar un valor segun la posicion.\n2. Mostrar posicion segun el nombre.\n3. Mostrar un intervalo entre dos valores.")
    switch (prompt1) {
        case "1": {
            var prompt2 = prompt("Introduce la posicion:");
            alert(array[prompt2 - 1]);
            break;
        }

        case "2": {
            var prompt2 = prompt("Introduce un pais");
            alert(array.indexOf(prompt2) + 1);
            break;
        }

        case "3": {
            var prompt2 = prompt("Introduce el primer numero del intervalo");
            var prompt3 = prompt("Introduce el segundo numero del intervalo");
            alert(array.slice(prompt2 - 1, prompt3));
            break;
        }
    }
}

// URLS

function crearUrl() {
    const servidor = "www.pep.com";
    const pathFichero = "/modulo/23";
    const nombreFichero = "tofol.php";

    const nombre = "biel";
    const edad = 23;
    const address = "carrer louis,23";

    const url = new URL(servidor + pathFichero + nombreFichero, window.location.href);

    url.searchParams.append('nombre', nombre);
    url.searchParams.append('edad', edad);
    url.searchParams.append('address', address);
    alert(url);
}

// RGEX

// Telefonos fijos
function telefonosFijos() {
    var phoneNumber = 611475857;
    var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    var phoneResult = phoneRGEX.test(phoneNumber);
    alert("phone: " + phoneResult);
}

// Telefonos normales 
function telefonosNormales() {
    var phoneNumber = document.getElementById('phone-number').value;
    var phoneRGEX = /^[0-9]{3}{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{3}$/;
    var phoneResult = phoneRGEX.test(phoneNumber);
    alert("phone: " + phoneResult);
}

// Telefonos con prefijo
function telefonosPrefijo() {
    var phoneNumber = document.getElementById('phone-number').value;
    var phoneRGEX = /^\+?[0-9]([0-9-]{0,8}[0-9])?[-\s.]?[0-9]{3}[-\s.]?[0-9]{3}[-\s.]?[0-9]{3}$/;
    var phoneResult = phoneRGEX.test(phoneNumber);
    alert("phone: " + phoneResult);
}

// Codigos postales
function codigosPostales() {
    var phoneNumber = document.getElementById('phone-number').value;
    var phoneRGEX = /^07[\s]?[0-9]{3}$/;
    var phoneResult = phoneRGEX.test(phoneNumber);
    alert("phone: " + phoneResult);
}

// CLASES

// Ejemplo para guardar en la array.

function ejemploClase() {
    let entradas = [];

    document.getElementById('añadirBoton').addEventListener('submit', function (e) {
        e.preventDefault();

        var ejemplo1 = document.getElementById("ejemplo1").value;
        var ejemplo2 = document.getElementById("ejemplo2").value;
        var ejemplo3 = document.getElementById("ejemplo3").value;

        class Entrada {
            constructor(ejemplo1, ejemplo2, ejemplo3) {
                this.nombre = ejemplo1;
                this.correo = ejemplo2;
                this.fecha = ejemplo3;
            }
        }

        var nuevo = new Entrada(ejemplo1, ejemplo2, ejemplo3);
        entradas.push(nuevo);
        console.log(entradas.join(", "));

    })
}



