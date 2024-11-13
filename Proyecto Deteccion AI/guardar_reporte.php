<?php
// Datos de conexión a la base de datos
$host = 'localhost'; // O la dirección de tu servidor
$db = 'qualitec';
$user = 'root';
$pass = '';

// Conexión a la base de datos
$conn = new mysqli($host, $user, $pass, $db);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Verificar si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $descripcion = $conn->real_escape_string($_POST['report']);

    // Insertar en la base de datos
    $sql = "INSERT INTO reportes (descripcion) VALUES ('$descripcion')";

    if ($conn->query($sql) === TRUE) {
        echo "Reporte guardado exitosamente.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Cerrar conexión
$conn->close();
?>