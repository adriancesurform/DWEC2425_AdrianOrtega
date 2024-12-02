let entradas = [];

document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();

    var nombreAsistente = document.getElementById("nombreAsistente").value;
    var correoElectronico = document.getElementById("correoElectronico").value;
    var fechaInscripcion = document.getElementById("fechaInscripcion").value;

    class Entrada {
        constructor(nombreAsistente, correoElectronico, fechaInscripcion) {
            this.nombreAsistente = nombreAsistente;
            this.correoElectronico = correoElectronico;
            this.fechaInscripcion = fechaInscripcion;
        }
    }

    
    var nuevo = new Entrada(nombreAsistente, correoElectronico, fechaInscripcion);
    entradas.push(nuevo);
    console.log(entradas);
    debugger;
    
    var tabla = document.getElementById("resultado");
    tabla.style.display = "block";

    var tbody = document.querySelector("#tablaResultados tbody");
    var fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${nuevo.nombreAsistente}</td>
        <td>${nuevo.correoElectronico}</td>
        <td>${nuevo.fechaInscripcion}</td>
        <td><button>Borrar</button><td>
    `;

    tbody.appendChild(fila);
    document.getElementById("formulario").reset();
})