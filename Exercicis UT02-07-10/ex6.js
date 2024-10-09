function resultado() {
    var lletres = document.getElementById("dia").value;

    switch (lletres) {
        case "DL": console.log("Lunes, 8:00"); break;
        case "DM": console.log("Martes, 7:55"); break;
        case "DX": console.log("Miércoles, 7:30"); break;
        case "DJ": console.log("Jueves, 8:30"); break;
        case "DV": console.log("Viernes, 9:00"); break;
        case "DS": console.log("No hay clase, es Sábado!"); break;

        default: console.log("No hay clase."); break;
    }
}