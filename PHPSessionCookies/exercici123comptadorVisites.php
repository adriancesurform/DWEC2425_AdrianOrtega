<?php
if (isset($_COOKIE['visitas'])) {
    $visitas = $_COOKIE['visitas'] + 1;
    echo "Bienvenido de nuevo. Has visitado esta página $visitas veces.";
} else {
    $visitas = 1;
    echo "Bienvenido, es tu primera visita.";
}

setcookie('visitas', $visitas, time() + 3600);

if (isset($_POST['reiniciar'])) {
    setcookie('visitas', '', time() - 3600);
    header("Location: " . $_SERVER['PHP_SELF']);
    exit();
}
?>

<form method="POST">
    <input type="submit" name="reiniciar" value="Reiniciar contador">
</form>
