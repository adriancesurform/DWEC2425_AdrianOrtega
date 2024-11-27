let nuevoDisco = null;

document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombreDisco = document.getElementById('nombre').value;
    const nombreGrupo = document.getElementById('grupo').value;
    const año = document.getElementById('año').value;
    const estilo = document.getElementById('estilo').value;

    const infoDisco = document.getElementById('infoDisco');


    function disco(nombre, grupo, año, estilo) {
        this.nombre = nombre;
        this.grupo = grupo;
        this.año = año;
        this.estilo = estilo;
        this.localizacion = 0;
        this.prestado = false;
    }

    nuevoDisco = new disco(nombreDisco, nombreGrupo, año, estilo);
    alert('Disco añadido.')
})

function mostrarInfo() {
    const infoDisco = document.getElementById('infoDisco');

    if (nuevoDisco) {
        infoDisco.style.display = 'block';
        infoDisco.innerHTML = `
                <p><strong>Nombre:</strong> ${nuevoDisco.nombre}</p>
                <p><strong>Grupo:</strong> ${nuevoDisco.grupo}</p>
                <p><strong>Año:</strong> ${nuevoDisco.año}</p>
                <p><strong>Estilo:</strong> ${nuevoDisco.estilo}</p>
                <p><strong>Estanteria:</strong> ${nuevoDisco.localizacion}</p>
                <p><strong>Prestado:</strong> ${nuevoDisco.prestado}</p>`;

    } else {
        infoDisco.style.display = 'block';
        infoDisco.innerHTML = '<p>No hay información del disco aún.</p>';
    }
}

function mostrarCampoEstanteria() {
    const divEstanteria = document.getElementById('divEstanteria');

    if (divEstanteria.style.display === 'block') {
        divEstanteria.style.display = 'none';
    } else {
        divEstanteria.style.display = 'block';
    }

}

function mostrarCampoPrestado() {
    const divPrestado = document.getElementById('divPrestado');

    if (divPrestado.style.display === 'block') {
        divPrestado.style.display = 'none';
    } else {
        divPrestado.style.display = 'block';
    }

}

function cambiaEstanteria() {
    const estanteriaInput = document.getElementById('estanteria');
    const nuevaEstanteria = parseInt(estanteriaInput.value, 10);

    if (!isNaN(nuevaEstanteria) && nuevaEstanteria >= 1 && nuevaEstanteria <= 20) {
        nuevoDisco.localizacion = nuevaEstanteria;
        alert(`La estantería del disco se cambió a: ${nuevaEstanteria}`);
        mostrarInfo();
    } else {
        alert('Por favor, introduce un número válido entre 1 y 20.');
    }
}

function cambiaPrestado() {
    const prestadoInput = document.getElementById('prestado');
    const prestado = prestadoInput.value === 'true';

    nuevoDisco.prestado = prestado;
    mostrarInfo();
}