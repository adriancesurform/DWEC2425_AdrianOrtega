function principal1() {
    const fechaInput = document.getElementById('fecha').value;
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = "";

    // Formatos admitidos.
    const formatosFecha = [/^\d{1,2}\/\d{1,2}\/\d{4}$/, /^\d{1,2}-\d{1,2}-\d{4}$/, /^\d{1,2}\.\d{1,2}\.\d{4}$/];

    // Recorrer la array de formatos y comprobar si cumple con el formato.
    if (formatosFecha.some((formato) => formato.test(fechaInput))) {
        resultadoDiv.innerHTML = "<p style='color:green;'>Formato de fecha válido.</p>";
    } else {
        resultadoDiv.innerHTML = "<p style='color:red;'>Formato de fecha no válido. Usa uno de los formatos admitidos.</p>";
    }
    debugger;


    // Validar fecha.
    const fechaNormalizada = fechaInput.replace(/\//g, "-");
    const [dia, mes, anio] = fechaNormalizada.split("-").map(Number);
    const fecha = new Date(anio, mes - 1, dia);

    if (
        fecha.getFullYear() !== anio ||
        fecha.getMonth() + 1 !== mes ||
        fecha.getDate() !== dia
    ) {
        resultadoDiv.innerHTML = "<p style='color:red;'>Fecha no válida.</p>";
    } else {
        resultadoDiv.innerHTML = "<p style='color:green;'>Fecha válida.</p>";
    }
    debugger;


    // Rango de fechas

    const fecha1 = new Date(1975,0,1);
    const fecha2 = new Date(2019, 11, 15);

    if (fecha < fecha1 || fecha > fecha2) {
        resultadoDiv.innerHTML = "<p style='color:red;'>Fecha fuera del rango permitido (01/01/1975 a 15/11/2019).";
    }
    debugger;

    // Dias transcrurridos y restantes.
    const diasTranscurridos = Math.floor((fecha - fecha1) / (1000 * 60 * 60 * 24));
    const diasRestantes = Math.floor((fecha2 - fecha) / (1000 * 60 * 60 * 24));

    const diasSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    const diaSemana = diasSemana[fecha.getDay()];

    resultadoDiv.innerHTML = `
    <div style="color:green">
        <p>Fecha: ${fechaInput}</p>
        <p>Han pasado ${diasTranscurridos}dias desde el 01/01/1975</p>
        <p>Quedan ${diasRestantes} dias hasta el 15/12/2019</p>
        <p>Día de la semana: ${diaSemana}</p>
    </div>
    `;
}