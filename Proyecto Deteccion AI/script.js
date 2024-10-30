// script.js

function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "1234") {
        // Redirigir a la página de reportes
        window.location.href = 'Bandeja_Reportes.html'; 
        return false; 
    } else {
        alert('Usuario o contraseña incorrectos');
        return false; 
    }
}
// Ejemplo de solicitud GET
fetch('/api/reportes')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Aquí puedes procesar los datos y mostrarlos en tu página
  })
  .catch(error => console.error('Error:', error));