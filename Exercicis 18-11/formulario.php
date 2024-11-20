<?php

class Persona {
    public $nombre;
    public $dni;
    public $edad;

    public function __construct($nombre, $dni, $edad) {
        $this->nombre = $nombre;
        $this->dni = $dni;
        $this->edad = $edad;
    }
}

if (isset($_GET['name']) && isset($_GET['dni']) && isset($_GET['edad'])) {
    $name = htmlspecialchars($_GET['name']);
    $dni = htmlspecialchars($_GET['dni']);
    $edad = htmlspecialchars($_GET['edad']);

    $persona = new Persona($name, $dni, $edad);
}

