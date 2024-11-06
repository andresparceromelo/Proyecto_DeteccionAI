// scripts.js

// Función para cerrar sesión: puede redirigir o simplemente mostrar un mensaje
document.querySelector('.close-session').addEventListener('click', () => {
    alert('Cerrar sesión');
    window.location.href = 'index.html'; // Redirige a la página de inicio de sesión
})
