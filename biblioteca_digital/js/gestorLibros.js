let catalogo = [
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967, estado: "Disponible" },
    { titulo: "1984", autor: "George Orwell", año: 1949, estado: "No Disponible" },
    { titulo: "El Quijote", autor: "Miguel de Cervantes", año: 1605, estado: "Disponible" }
];

function agregarLibro(nuevoLibro) {
    const existe = catalogo.some(libro => libro.titulo === nuevoLibro.titulo && libro.autor === nuevoLibro.autor);
    if (existe) {
        alert("El libro ya existe en el catálogo.");
        return;
    }
    catalogo.push(nuevoLibro);
    console.log("Libro agregado:", nuevoLibro); // Verifica que se agrega correctamente
    console.log("Catálogo actualizado:", catalogo); // Muestra el catálogo actualizado
    actualizarTabla(); // Asegúrate de que esta función esté definida
    actualizarEstadisticas(); // Asegúrate de que esta función esté definida
}


function borrarLibro(titulo) {
    const index = catalogo.findIndex(libro => libro.titulo === titulo);
    if (index === -1) {
        alert("Libro no encontrado.");
        return;
    }
    catalogo.splice(index, 1);
    actualizarTabla();
    actualizarEstadisticas();
}

function ordenarLibros(criterio) {
    for (let i = 0; i < catalogo.length - 1; i++) {
        for (let j = 0; j < catalogo.length - i - 1; j++) {
            let comparar = false;
            if (criterio === "titulo") {
                if (catalogo[j].titulo > catalogo[j + 1].titulo) {
                    comparar = true;
                }
            } else if (criterio === "año") {
                if (catalogo[j].año > catalogo[j + 1].año) {
                    comparar = true;
                }
            }
            if (comparar) {
                let temp = catalogo[j];
                catalogo[j] = catalogo[j + 1];
                catalogo[j + 1] = temp;
            }
        }
    }
    actualizarTabla();
}

function buscarLibros(termino) {
    const resultados = catalogo.filter(libro =>
        libro.titulo.toLowerCase().includes(termino.toLowerCase()) ||
        libro.autor.toLowerCase().includes(termino.toLowerCase())
    );
    mostrarResultados(resultados);
}
