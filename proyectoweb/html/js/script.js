document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Obtener los datos del formulario
        const formData = new FormData(this);
        const userData = {};
        for (const [key, value] of formData.entries()) {
            userData[key] = value;
        }
        
        // Obtener usuarios existentes de localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Añadir nuevo usuario al array de usuarios
        users.push(userData);
        
        // Guardar usuarios actualizados en localStorage
        localStorage.setItem('users', JSON.stringify(users));
        
        // Redirigir al usuario a la página de inicio de sesión
        window.location.href = 'iniciodesecion.html';
    });

    document.getElementById('goToInicio').addEventListener('click', function() {
        window.location.href = 'iniciodesecion.html';
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Obtenemos el elemento del botón de cerrar sesión por su ID
    var btnCerrarSesion = document.getElementById("cerrar-sesion");

    // Agregamos un evento de clic al botón
    btnCerrarSesion.addEventListener("click", function() {
        // Aquí puedes agregar cualquier lógica necesaria para cerrar la sesión,
        // como redireccionar a la página de inicio de sesión, eliminar cookies, etc.
        // Por ejemplo, podrías redireccionar al usuario a la página de inicio de sesión:
        window.location.href = "iniciodesesion.html";
    });
});