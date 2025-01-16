function principal1() {
    const fechaInput = document.getElementById("fecha").value;
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; // Limpiar resultados anteriores

    const formatosAceptados = [
        /^\d{1,2}\/\d{1,2}\/\d{4}$/, // D/M/YYYY o DD/MM/YYYY
        /^\d{1,2}-\d{1,2}-\d{4}$/, // D-M-YYYY o DD-MM-YYYY
        /^\d{1,2}\.\d{1,2}\.\d{4}$/ // D.M.YYYY o DD.MM.YYYY
    ];

    if (!formatosAceptados.some((formato) => formato.test(fechaInput))) {
        resultadoDiv.innerHTML = "<p style='color:red;'>Error: Formato de fecha no válido. Usa uno de los formatos admitidos.</p>";
        return;
    }

    // Reemplazar separadores por "-" para facilitar el manejo
    const fechaNormalizada = fechaInput.replace(/[\/\.]/g, "-");
    const [dia, mes, anio] = fechaNormalizada.split("-").map(Number);

    // Validar fecha
    const fecha = new Date(anio, mes - 1, dia);
    if (
        fecha.getFullYear() !== anio ||
        fecha.getMonth() + 1 !== mes ||
        fecha.getDate() !== dia
    ) {
        resultadoDiv.innerHTML = "<p style='color:red;'>Error: Fecha no válida.</p>";
        return;
    }

    // Validar rango de fechas
    const inicioRango = new Date(1975, 0, 1); // 01/01/1975
    const finRango = new Date(2019, 11, 15); // 15/12/2019

    if (fecha < inicioRango || fecha > finRango) {
        resultadoDiv.innerHTML = "<p style='color:red;'>Error: La fecha no está en el rango permitido (01/01/1975 - 15/12/2019).</p>";
        return;
    }

    // Calcular días transcurridos y restantes
    const diasTranscurridos = Math.floor((fecha - inicioRango) / (1000 * 60 * 60 * 24));
    const diasRestantes = Math.floor((finRango - fecha) / (1000 * 60 * 60 * 24));

    // Obtener día de la semana
    const diasSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    const diaSemana = diasSemana[fecha.getDay()];

    resultadoDiv.innerHTML = `
        <p>Fecha: ${fechaInput}</p>
        <p>Han pasado ${diasTranscurridos} desde el 01/01/1975:</p>
        <p>Quedan ${diasRestantes} dias hasta el 15/12/2019:</p>
        <p>Día de la semana: ${diaSemana}</p>
    `;
}