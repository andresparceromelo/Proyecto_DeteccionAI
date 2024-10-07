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
