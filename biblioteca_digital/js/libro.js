class Libro{
    constructor(titulo, autor, año, estado = "Disponible") {
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
        this.estado = estado;
    }

    cambiarEstado(nuevoEstado) {
        this.estado = nuevoEstado;
    }

    obtenerInformacion() {
        return `${this.titulo} - ${this.autor} - ${this.año} - ${this.estado}`;
    }
}