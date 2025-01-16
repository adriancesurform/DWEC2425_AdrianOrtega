<?php

$url = $_SERVER['REQUEST_URI'];
$nuevaUrl = explode("/", $url)[4];
echo $nuevaUrl;

switch ($nuevaUrl) {
    case '/pepito':
        if ($_SERVER['REQUEST_METHOD'] == 'GET') {
            http_response_code(200);
        }
        break;

    case '/prova':
        if ($_SERVER['REQUEST_METHOD'] == 'GET') {
            http_response_code(200);
        } else {
            http_response_code(405);
        }
        break;
}