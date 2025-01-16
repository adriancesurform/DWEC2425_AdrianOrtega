// Adrian Ortega Barranco
// 11/12/2024
// CFGS DAW - Cliente

// ---- COOKIES ---- //

// Seleccionar los elementos necesarios.
const formulario = document.getElementById('formulario-compra');
const intentosContainer = document.getElementById('intentos');

// Función para establecer una cookie.
function setCookie(nombreCookie, value) {
    document.cookie = `${nombreCookie}=${value}; path=/`;
}

// Función para obtener el valor de una cookie
function getCookie(nombreCookie) {
    const nombre = `${nombreCookie}=`;
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.startsWith(nombre)) {
            return cookie.substring(nombre.length);
        }
    }
    return null;
}

// Inicializar el contador de intentos desde la cookie o desde 0
let intentos = parseInt(getCookie('intentos')) || 0;

// Mostrar los intentos iniciales en el contenedor
intentosContainer.innerHTML = `Intentos de envío: ${intentos}`;

// Manejar el evento de envío del formulario para actualizar los intenos en el envio.
formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Evitar el envío real del formulario

    // Incrementar intentos
    intentos++;

    // Guardar los intentos en las cookies
    setCookie('intentos', intentos);

    // Actualizar el contenido del contenedor
    intentosContainer.innerHTML = `Intentos de envío: ${intentos}`;
});

// ---- BLUR EN EL NOMBRE ---- // 

// Seleccionar el campo de nombre.
const campoNombre = document.getElementById('nombre');

// Añadir un evento para transformar el texto a mayúsculas al perder el foco.
// "Blur": Sirve para cuando necesitamos ejecutar una accion en un campo de entrada justo despues de que el usuario acabe
//         de interactuar con ella.
campoNombre.addEventListener('blur', () => {
    campoNombre.value = campoNombre.value.toUpperCase();
});

// ---- VALIDACIONES DE CAMPOS ---- //

// El evento 'DOMContentLoaded' se activa cuando el HTML del documento ha sido cargado por completo y analizado por el 
// navegador, pero antes de que se hayan cargado los recursos externos.
document.addEventListener('DOMContentLoaded', () => { 

    // Añadimos los elementos que vamos a usar.
    const formulario = document.getElementById('formulario-compra');

    const campoNombre = document.getElementById('nombre');
    const campoEmail = document.getElementById('email');
    const campoEntradas = document.getElementById('entradas');
    const campoFecha = document.getElementById('fecha-evento');
    const campoTelefono = document.getElementById('telefono');
    const campoMetodoPago = document.getElementById('metodo-pago');
    const campoCodigoPromocional = document.getElementById('codigo-promocional');

    const erroresContainer = document.getElementById('errores');

    // Agregamos en el formulario el evento de 'submit'.
    // Submit se activa cuando se envia el formulario.
    formulario.addEventListener('submit', (event) => {
        event.preventDefault();

        // ---- REGEX ----

        // Este REGEX permite letras mayúsculas, minusculas y digitos y carácteres especiales válidos en un mail.
        // Debe contener el simbolo @.
        // Detrás de este simbolo permite mayusculas, minusculas y digitos con algunos caracteres especiales.
        // Despues debe haber un ".".
        // Detrás del "." debe haber minimo dos o mas letras de dominio.
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        // Este REGEX comprueba que tiene 2 digitos primero (para el dia).
        // Seguido, comprueba que tiene el caracter "/".
        // Seguido, comprueba que tiene 2 digitos para el mes.
        // Seguido, comprueba que tiene el caracter "/".
        // Seguido, comprueba que tiene 4 digitos para el año.
        const fechaRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;

        // Aquí solo implemento el imput del usuario y verifico si es valida.
        const fechaInput = campoFecha.value.trim();
        const fechaMatch = fechaRegex.exec(fechaInput);

        // Este REGEX permite los telefonos: 611475857 - 611 475 857 - +34 611-475-875.
        // Comprobamos si tiene prefijo (+) y seguido de 1 a 3 digitos entre 0 y 9.
        // Comprobamos si tiene un separador permitido (- (espacio) o .).
        // Comprobamos que esta formado por 3 digitos para la primera parte del telefono.
        // Comprobamos si tiene un separador permitido (- (espacio) o .).
        // Comprobamos que esta formado por 3 digitos para la segunda parte del telefono.
        // Comprobamos si tiene un separador permitido (- (espacio) o .).
        // Comprobamos que esta formado por 3 digitos para la tercera parte del telefono.
        const telefonoRegex = /^(\+?[0-9]{1,3}[-\s.]?)?[0-9]{3}[-\s.]?[0-9]{3}[-\s.]?[0-9]{3}$/;

        // Recojo el valor del input del telefono introducido por el usuario
        const telefonoInput = campoTelefono.value.trim();

        // Este REGEX permite y hace cumplir el formato alfanumerico.
        // Es un sistema numerico en base 36. 
        // Permite letras mayusculas y minusculas y digitos. 
        // Minimo 1 caracter y maximo 10.
        const codigoRegex = /^[a-zA-Z0-9]{1,10}$/;
        const codigoPromocional = campoCodigoPromocional.value.trim();


        // ---- VALIDACIONES ---- //

        // .focus : Uso '.focus' para que cuando haya un error ir al input donde esta el error.

        // Limpiar mensajes de error anteriores para que no salgan todos de golpe.
        erroresContainer.innerHTML = '';

        // Validamos que el campo del nombre no esta vacio.
        if (campoNombre.value.trim() === '') {
            erroresContainer.innerHTML = 'El campo "Nombre del Asistente" no puede estar vacío.';
            campoNombre.focus();
            return;
        }

        // Validamos que el campo del email cumple es valido.
        if (!emailRegex.test(campoEmail.value)) {
            erroresContainer.innerHTML = 'El campo "Correo Electrónico" no tiene un formato válido.';
            campoEmail.focus();
            return;
        }

        // Validamos que el número de entradas es valido y no es superior al maximo permitido que es 10.
        const numeroEntradas = parseInt(campoEntradas.value, 10) || 0;
        const asientosSeleccionados = document.querySelectorAll('.seat.selected').length;

        // Comprobamos que el numero de entradas es mayor a 0
        if (numeroEntradas <= 0) {
            erroresContainer.innerHTML = 'El número de entradas debe ser mayor a 0.';
            campoEntradas.focus();
            return;
        }

        // Comprobamos que el numero de entradas no es mayor a 10.
        if (numeroEntradas > 10) {
            erroresContainer.innerHTML = 'El número de entradas no puede exceder 10.';
            campoEntradas.focus();
            return;
        }

        // Comprobamos que el numero de entradas es el mismo que el de los asientos que el usuario ha seleccionado.
        if (numeroEntradas !== asientosSeleccionados) {
            erroresContainer.innerHTML = `El número de entradas (${numeroEntradas}) debe coincidir con el número de asientos seleccionados (${asientosSeleccionados}).`;
            campoEntradas.focus();
            return;
        }

        // Comprobamos el formato de la fecha
        if (!fechaMatch) {
            erroresContainer.innerHTML = 'El campo "Fecha del Evento" debe tener el formato dd/mm/aaaa.';
            campoFecha.focus();
            return;
        }

        // Comprobamos el formato del telefono.
        if (!telefonoRegex.test(telefonoInput)) {
            erroresContainer.innerHTML =
                'El campo "Teléfono de Contacto" debe contener un número válido (ejemplo: 123-456-789 o +34 123-456-789).';
            campoTelefono.focus();
            return;
        }

        // Comprobamos si se ha seleccionado un metodo de pago.
        if (!campoMetodoPago.value) {
            erroresContainer.innerHTML = 'Debes seleccionar un método de pago.';
            campoMetodoPago.focus();
            return;
        }

        if (codigoPromocional && !codigoRegex.test(codigoPromocional)) {
            erroresContainer.innerHTML =
                'El campo "Código Promocional" debe ser alfanumérico y tener hasta 10 caracteres.';
            campoCodigoPromocional.focus();
            return;
        }

        // ---- VALIDACIONES EXTRA ---- //

        // Fecha
        /* No queremos entredas con fechas anteriores al dia actual. Asi que implemento con el uso de Date una 
        comprobacion para que el usuario ponga fechas a partir del dia en el que nos encontremos. */

        // Implementamos dia, mes y año.
        const dia = parseInt(fechaMatch[1], 10);
        const mes = parseInt(fechaMatch[2], 10) - 1; // Restar 1 porque en JS hay 11 meses ya que empieza en 0.
        const anio = parseInt(fechaMatch[3], 10);

        // Con Date creamos una fecha del dia de hoy y la guardamos.
        const fechaEvento = new Date(anio, mes, dia);
        const hoy = new Date();

        // Comprobamos si las fechas son validas.
        if (
            fechaEvento.getDate() !== dia ||
            fechaEvento.getMonth() !== mes ||
            fechaEvento.getFullYear() !== anio
        ) {
            erroresContainer.innerHTML = 'La fecha introducida contiene una fecha no válida.';
            campoFecha.focus();
            return;
        }

        // Asegurar que la fecha actual no tenga horas, minutos, segundos. Sino que es DD/MM/AAAA.
        hoy.setHours(0, 0, 0, 0);
        if (fechaEvento < hoy) {
            erroresContainer.innerHTML = 'El campo "Fecha del Evento" no puede ser una fecha en el pasado.';
            campoFecha.focus();
            return;
        }


        // ---- CONFIRMACIÓN DE ENVÍO ---- //
        const confirmacion = confirm('¿Estás seguro de que deseas enviar el formulario?');
        if (confirmacion) {
            intentos++;
            setCookie('intentos', intentos);
            intentosContainer.innerHTML = `Intentos de envío: ${intentos}`;

            alert('Formulario enviado con éxito.');
            formulario.submit();
        } else {
            intentos--;
            setCookie('intentos', intentos);
            alert('Envío cancelado.');
            intentosContainer.innerHTML = `Intentos de envío: ${intentos}`;
        }
    });
});


