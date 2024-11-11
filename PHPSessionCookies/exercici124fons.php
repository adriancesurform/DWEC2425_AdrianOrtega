<?php
// Comprovem si hi ha una cookie amb el color de fons
if (isset($_COOKIE['color_fons'])) {
    $color_fons = $_COOKIE['color_fons'];
} else {
    // Si no hi ha cookie, posem un color per defecte
    $color_fons = 'white';
}

// Comprovem si s'ha enviat el formulari per canviar el color
if (isset($_POST['color'])) {
    $color_fons = $_POST['color'];
    // Guardem el color seleccionat en una cookie durant 24 hores
    setcookie('color_fons', $color_fons, time() + 86400); // 86400 segons = 24 hores
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

</body>
</html>
