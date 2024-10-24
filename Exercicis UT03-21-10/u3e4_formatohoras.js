const hora1 = document.getElementById("horaDetallada");
const horaUser = document.getElementById("horaUser");


function resultado() {
    const date = new Date();    
    hora1.innerHTML = "Hora seleccionada: " + horaUser.value + ":" + date.getSeconds();
}

function resultado2() {
    const dividirHoras = horaUser.value.split(":");
    const hora = parseInt(dividirHoras[0]);
    const mins = dividirHoras[1];

    const date = new Date();    
    let resHora = "";

    if (hora > 12) {
        resHora = (hora - 12) + ":" + mins + ":" + date.getSeconds() + " PM";
    } 
        
    else resHora = hora + ":" + mins + ":" + date.getSeconds() + " AM";

    hora1.innerHTML = "Hora Seleccionada: " + resHora;
}