<?php
// Iniciar la sessió
session_start();

// Comprovem si s'ha enviat el formulari per canviar el color
if (isset($_POST['color'])) {
    $_SESSION['color_fons'] = $_POST['color']; // Guardem el color de fons a la sessió
}

// Comprovem si hi ha un color de fons a la sessió, si no, assignem un valor per defecte
if (isset($_SESSION['color_fons'])) {
    $color_fons = $_SESSION['color_fons'];
} else {
    $color_fons = 'white'; // Color per defecte si no hi ha cap color seleccionat
}
?>

<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cambiar Color de Fons</title>
</head>
<body style="background-color: <?php echo $color_fons; ?>;">

<h1>Canvia el color de fons de la pàgina</h1>

<form method="post" action="">
    <label for="color">Tria un color:</label>
    <select name="color" id="color">
        <option value="white" <?php if ($color_fons == 'white') echo 'selected'; ?>>Blanc</option>
        <option value="red" <?php if ($color_fons == 'red') echo 'selected'; ?>>Vermell</option>
        <option value="blue" <?php if ($color_fons == 'blue') echo 'selected'; ?>>Blau</option>
        <option value="green" <?php if ($color_fons == 'green') echo 'selected'; ?>>Verd</option>
        <option value="yellow" <?php if ($color_fons == 'yellow') echo 'selected'; ?>>Groc</option>
    </select>
    <input type="submit" value="Canviar color">
</form>

<!-- Enllaç a l'altre arxiu -->
<p><a href="exercici126fonsSessio2.php">Vés a l'altre arxiu</a></p>

</body>
</html>
