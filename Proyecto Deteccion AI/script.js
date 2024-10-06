// script.js
function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "admin" && password === "1234") {
        alert("Login exitoso");
        return true; // Aquí puedes redirigir a la página principal si es necesario
    } else {
        alert("Usuario o contraseña incorrectos");
        return false;
    }
}
