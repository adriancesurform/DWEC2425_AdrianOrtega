function confirmClose() {
    alert("Error: 107x. Un virus ha infectado su disco duro, conviene eliminar todos los archivos y formatear la unidad");
    if(confirm("Informa a su vendedor de este error."))
        alert('El navegador se cerrará ya que es imposible comunicarse con cualquier sitio web.');
    else {
        alert('Es imposible recuperar el sistema, se comenzará a eliminar archivos.');
        parent.close();
    }
}

