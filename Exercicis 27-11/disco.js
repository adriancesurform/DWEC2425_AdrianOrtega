let discos = [];

document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombreDisco = document.getElementById('nombre').value;
    const nombreGrupo = document.getElementById('grupo').value;
    const año = document.getElementById('año').value;
    const estilo = document.getElementById('estilo').value;

    function disco(nombre, grupo, año, estilo) {
        this.nombre = nombre;
        this.grupo = grupo;
        this.año = año;
        this.estilo = estilo;
        this.localizacion = 0;
        this.prestado = false;
    }

    const nuevoDisco = new disco(nombreDisco, nombreGrupo, año, estilo);
    discos.push(nuevoDisco);
    alert('Disco añadido.');
    mostrarInfo();
});

function mostrarInfo() {
    const infoDisco = document.getElementById('infoDisco');

    if (discos.length > 0) {
        const disco = discos[discos.length - 1];
        infoDisco.style.display = 'block';
        infoDisco.innerHTML = `
            <p><strong>Nombre:</strong> ${disco.nombre}</p>
            <p><strong>Grupo:</strong> ${disco.grupo}</p>
            <p><strong>Año:</strong> ${disco.año}</p>
            <p><strong>Estilo:</strong> ${disco.estilo}</p>
            <p><strong>Estantería:</strong> ${disco.localizacion}</p>
            <p><strong>Prestado:</strong> ${disco.prestado}</p>`;
    } else {
        infoDisco.style.display = 'block';
        infoDisco.innerHTML = '<p>No hay información del disco aún.</p>';
    }
}

function mostrarCampoEstanteria() {
    const divEstanteria = document.getElementById('divEstanteria');
    divEstanteria.style.display = divEstanteria.style.display === 'block' ? 'none' : 'block';
}

function mostrarCampoPrestado() {
    const divPrestado = document.getElementById('divPrestado');
    divPrestado.style.display = divPrestado.style.display === 'block' ? 'none' : 'block';
}

function cambiaEstanteria() {
    const estanteriaInput = document.getElementById('estanteria');
    const nuevaEstanteria = parseInt(estanteriaInput.value, 10);

    if (!isNaN(nuevaEstanteria) && nuevaEstanteria >= 1 && nuevaEstanteria <= 20) {
        discos[discos.length - 1].localizacion = nuevaEstanteria;
        alert(`La estantería del disco se cambió a: ${nuevaEstanteria}`);
        mostrarInfo();
    } else {
        alert('Por favor, introduce un número válido entre 1 y 20.');
    }
    console.log(discos);
}

function cambiaPrestado() {
    const prestadoInput = document.getElementById('prestado');
    const prestado = prestadoInput.value === 'true';

    discos[discos.length - 1].prestado = prestado;
    mostrarInfo();
    console.log(discos);
}

