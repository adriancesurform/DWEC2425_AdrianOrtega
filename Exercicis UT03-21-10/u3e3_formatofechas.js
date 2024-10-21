function resultadoFechas() {
    const userFecha = document.getElementById("date").value;
    const date1 = document.getElementById("date1");
    const date2 = document.getElementById("date2");

    const date = new Date(userFecha);
    const dia = date.getDate();
    const mes = date.getMonth();
    const year = date.getFullYear();

    let diasSemana;
    const diaSemana = date.getDay();
    
    switch (diaSemana) {
        case 0: diasSemana = "Domingo"; break;
        case 1: diasSemana = "Lunes"; break;
        case 2: diasSemana = "Martes"; break;
        case 3: diasSemana = "Miércoles"; break;
        case 4: diasSemana = "Jueves"; break;
        case 5: diasSemana = "Viernes"; break;
        case 6: diasSemana = "Sábado"; break;
    }
    
    let meses;
    switch (mes) {
        case 0: meses = "Enero"; break;
        case 1: meses = "Febrero"; break;
        case 2: meses = "Marzo"; break;
        case 3: meses = "Abril"; break;
        case 4: meses = "Mayo"; break;
        case 5: meses = "Junio"; break;
        case 6: meses = "Julio"; break;
        case 7: meses = "Agosto"; break;
        case 8: meses = "Septiembre"; break;
        case 9: meses = "Octubre"; break;
        case 10: meses = "Noviembre"; break;
        case 11: meses = "Diciembre"; break;
    }

    date1.textContent = dia + "/" + (mes + 1) + "/" + year; // mes + 1 para ajustarlo a 1-12
    date2.textContent = diasSemana + ", " + dia + " de " + meses + " de " + year;
}
