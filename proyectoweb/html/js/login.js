document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Obtener los valores de los campos de entrada
        const username = document.querySelector('input[name="username"]').value;
        const password = document.querySelector('input[name="password"]').value;
        
        // Obtener usuarios del localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Verificar si el usuario existe y la contraseña es correcta
        const user = users.find(user => user.username === username && user.password === password);
        
        if (user) {
            // Si el usuario es encontrado, redirigir a la página de inicio
            window.location.href = 'inicio.html';
        } else {
            // Si el usuario no es encontrado, mostrar un mensaje de error
            document.getElementById('errorMessage').textContent = 'Nombre de usuario o contraseña incorrectos.';
        }
    });
});
