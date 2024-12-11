function actualizarTabla() {
    const tablaCuerpo = document.getElementById("tabla-cuerpo");
    tablaCuerpo.innerHTML = ""; // Limpia la tabla actual

    catalogo.forEach(libro => {
        const fila = document.createElement("tr");

        // Crear celdas para cada propiedad del libro
        const celdaTitulo = document.createElement("td");
        celdaTitulo.textContent = libro.titulo;
        fila.appendChild(celdaTitulo);

        const celdaAutor = document.createElement("td");
        celdaAutor.textContent = libro.autor;
        fila.appendChild(celdaAutor);

        const celdaAño = document.createElement("td");
        celdaAño.textContent = libro.año;
        fila.appendChild(celdaAño);

        const celdaEstado = document.createElement("td");
        celdaEstado.textContent = libro.estado;
        fila.appendChild(celdaEstado);

        // Crear botón para eliminar
        const celdaAccion = document.createElement("td");
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", () => {
            borrarLibro(libro.titulo);
        });
        celdaAccion.appendChild(botonEliminar);
        fila.appendChild(celdaAccion);

        tablaCuerpo.appendChild(fila); // Agregar la fila a la tabla
    });
}

function mostrarResultados(resultados) {
    const tablaCuerpo = document.getElementById("tabla-cuerpo");
    tablaCuerpo.innerHTML = ""; // Limpia la tabla

    resultados.forEach(libro => {
        const fila = crearFila(libro);
        tablaCuerpo.appendChild(fila);
    });
}

function crearFila(libro) {
    const fila = document.createElement("tr");

    // Crear y llenar las celdas
    const celdaTitulo = document.createElement("td");
    celdaTitulo.textContent = libro.titulo;
    fila.appendChild(celdaTitulo);

    const celdaAutor = document.createElement("td");
    celdaAutor.textContent = libro.autor;
    fila.appendChild(celdaAutor);

    const celdaAño = document.createElement("td");
    celdaAño.textContent = libro.año;
    fila.appendChild(celdaAño);

    const celdaEstado = document.createElement("td");
    celdaEstado.textContent = libro.estado;
    fila.appendChild(celdaEstado);

    // Botón de eliminar
    const celdaAccion = document.createElement("td");
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", () => {
        borrarLibro(libro.titulo); // Llama a borrarLibro en gestorLibros.js
    });
    celdaAccion.appendChild(botonEliminar);
    fila.appendChild(celdaAccion);

    return fila;
}

function actualizarEstadisticas() {
    const totalLibros = document.getElementById("total-libros");
    const librosDisponibles = document.getElementById("libros-disponibles");
    const anioMasAntiguo = document.getElementById("anio-mas-antiguo");
    const anioMasReciente = document.getElementById("anio-mas-reciente");

    totalLibros.textContent = catalogo.length;
    librosDisponibles.textContent = catalogo.filter(libro => libro.estado === "Disponible").length;

    if (catalogo.length > 0) {
        anioMasAntiguo.textContent = Math.min(...catalogo.map(libro => libro.año));
        anioMasReciente.textContent = Math.max(...catalogo.map(libro => libro.año));
    } else {
        anioMasAntiguo.textContent = "N/A";
        anioMasReciente.textContent = "N/A";
    }
}
