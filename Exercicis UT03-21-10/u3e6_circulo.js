function resultado() {
    const numero = document.getElementById("number").value;
    const resultado = document.createElement("p");

    resultado.innerHTML = "<p>El radio es: " + numero + "</p>";
    resultado.innerHTML += "<p>El valor del diametro es: " + numero * 2 + "</p>";
    resultado.innerHTML += "<p>El valor del perimetro de la circunferencia: " + Math.PI * 2 * numero + "</p>";
    resultado.innerHTML += "<p>El valor del area del circulo: " + Math.PI * Math.pow(numero, 2)  + "</p>";
    resultado.innerHTML += "<p>El valor del area de la esfera: " + 4 * Math.PI * Math.pow(numero, 2)  + "</p>";
    resultado.innerHTML += "<p>El valor del volumen de la esfera: " + 4/3 * Math.PI * Math.pow(numero, 3)  + "</p>";



    document.body.appendChild(resultado); 
}