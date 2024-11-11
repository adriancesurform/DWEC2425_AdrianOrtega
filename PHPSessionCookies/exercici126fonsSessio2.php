<?php
// Iniciar la sessió
session_start();

// Comprovar si hi ha un color de fons guardat a la sessió
if (isset($_SESSION['color_fons'])) {
    $color_fons = $_SESSION['color_fons'];
} else {
    $color_fons = 'white'; // Color per defecte si no hi ha color a la sessió
}

// Buida la sessió i torna a la pàgina anterior si s'ha accedit amb l'enllaç de buidar la sessió
if (isset($_GET['buidar_sessio']) && $_GET['buidar_sessio'] == '1') {
    session_unset();  // Eliminar totes les variables de sessió
    session_destroy(); // Destruir la sessió
    header("Location: exercici124fons.php"); // Tornar a la pàgina anterior
    exit();
}
?>

<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color de Fons Guardat</title>
</head>
<body style="background-color: <?php echo $color_fons; ?>;">

<h1>Color de Fons Seleccionat</h1>
<p>El color de fons actual és: <strong><?php echo $color_fons; ?></strong></p>

<!-- Enllaç per tornar a la pàgina anterior -->
<p><a href="exercici125fonsSessio1.php">Torna a la pàgina anterior</a></p>

<!-- Enllaç per buidar la sessió i tornar a la pàgina anterior -->
<p><a href="ex5.php?buidar_sessio=1">Buidar la sessió i tornar a la pàgina anterior</a></p>

</body>
</html>
