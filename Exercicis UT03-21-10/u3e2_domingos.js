function calcularDia() {
    const userDate = document.getElementById("date").value;
    const resultadoP = document.getElementById("resultado");
    resultadoP.textContent = "";

    const fecha = new Date(userDate);
    const dia = fecha.getDate();
    const mes = fecha.getMonth();
    const year = fecha.getFullYear();

    let res = 0;
    let resYears = "";

    for (let año = year; año < 2100; año++) {
        const year2 = new Date(año, mes, dia)

        if (year2.getDay() === 0) {
            res++;
            resYears += año + ",";
        };
    } 

    resultadoP.textContent = "Tu cumpleaños caerá en domingo " + res + " veces hasta 2100. Los años son: " + resYears;
}