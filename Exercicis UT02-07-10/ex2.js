function submitBtn() {
    var name = document.getElementById("text").value;
    var userConfirmed = window.confirm("¿Quieres abandonar el programa?");
    if (userConfirmed) {
        alert("Has abandonado el programa, el nombre es " + name);
    } else {
        alert("No has abandonado el programa, el nombre ahora está vacío");
        document.getElementById("text").value = "";
    }
    document.getElementById("text").value = "";            
}

function reset() {
    document.getElementById("text").value = "";            
}