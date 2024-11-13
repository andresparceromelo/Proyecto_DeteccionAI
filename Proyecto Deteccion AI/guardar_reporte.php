<?php
// Establecer la conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "qualitec";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Verificar si se envió el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los valores desde el formulario
    $modelo = isset($_POST['modelo']) ? $_POST['modelo'] : '';
    $electrodomestico = isset($_POST['electrodomestico']) ? $_POST['electrodomestico'] : '';
    $estado = isset($_POST['estado']) ? $_POST['estado'] : '';
    $id_usuario = isset($_POST['id_usuario']) ? $_POST['id_usuario'] : '';
    $fecha_reporte = isset($_POST['fecha_reporte']) ? $_POST['fecha_reporte'] : '';
    $nuevos_reportes = isset($_POST['report']) ? $_POST['report'] : ''; // Captura el valor del reporte

    // Sanitizar los datos
    $modelo = $conn->real_escape_string($modelo);
    $electrodomestico = $conn->real_escape_string($electrodomestico);
    $estado = $conn->real_escape_string($estado);
    $id_usuario = $conn->real_escape_string($id_usuario);
    $fecha_reporte = $conn->real_escape_string($fecha_reporte);
    $nuevos_reportes = $conn->real_escape_string($nuevos_reportes); // Sanitizar también el reporte

    // Insertar el reporte en la base de datos
    $sql = "INSERT INTO reportes (Modelo, Electrodomestico, Estado, Id_Usuario, Fecha_Reporte, Nuevos_Reportes)
            VALUES ('$modelo', '$electrodomestico', '$estado', '$id_usuario', '$fecha_reporte', '$nuevos_reportes')";

    if ($conn->query($sql) === TRUE) {
        echo "Reporte guardado exitosamente.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Cerrar conexión
$conn->close();
?>