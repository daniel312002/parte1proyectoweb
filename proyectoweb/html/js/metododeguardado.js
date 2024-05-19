document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el botón de actualización
    const updateButton = document.getElementById('updateButton');

    // Agrega un evento de clic al botón
    updateButton.addEventListener('click', function() {
        // Recarga la página
        location.reload();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el botón de actualización
    const updateButton = document.getElementById('updateButton');

    // Agrega un evento de clic al botón
    updateButton.addEventListener('click', function() {
        // Deshabilita el botón temporalmente para evitar clics repetidos
        updateButton.disabled = true;

        // Agrega un pequeño retraso antes de recargar la página (500ms en este ejemplo)
        setTimeout(function() {
            // Recarga la página
            location.reload();
        }, 500); // 500 milisegundos de retraso
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Botón de actualizar información
    const updateButton = document.getElementById('updateButton');
    updateButton.addEventListener('click', function() {
        // Aquí puedes agregar la lógica para actualizar la información
        alert('¡Información actualizada!');
    });

    // Botones para editar la información
    const editButtons = document.querySelectorAll('.editButton');
    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            // Habilitar la edición de la sección correspondiente
            enableEditing(section);
        });
    });

    // Función para habilitar la edición de una sección
    function enableEditing(section) {
        // Aquí puedes implementar la lógica para permitir la edición de los campos
        alert(`¡Editando ${section.id}!`);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Botones para editar la información
    const editButtons = document.querySelectorAll('.editButton');
    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            // Activar modo de edición para la sección correspondiente
            enableEditing(section);
        });
    });

    // Botones para guardar la información
    const saveButtons = document.querySelectorAll('.saveButton');
    saveButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            // Desactivar modo de edición para la sección correspondiente
            disableEditing(section);
        });
    });

    // Función para habilitar la edición de una sección
    function enableEditing(section) {
        const editButton = section.querySelector('.editButton');
        const saveButton = section.querySelector('.saveButton');

        // Ocultar botón de editar y mostrar botón de guardar
        editButton.style.display = 'none';
        saveButton.style.display = 'inline-block';

        // Habilitar campos de entrada para edición
        const inputs = section.querySelectorAll('input');
        inputs.forEach(input => {
            input.style.display = 'inline-block';
            // Establecer el valor del campo de entrada igual al valor actual del span
            input.value = section.querySelector(`#${input.id.replace('Input', '')}`).innerText;
        });

        // Ocultar los span con los valores actuales
        const spans = section.querySelectorAll('span');
        spans.forEach(span => {
            span.style.display = 'none';
        });
    }

    // Función para deshabilitar la edición de una sección
    function disableEditing(section) {
        const editButton = section.querySelector('.editButton');
        const saveButton = section.querySelector('.saveButton');

        // Mostrar botón de editar y ocultar botón de guardar
        editButton.style.display = 'inline-block';
        saveButton.style.display = 'none';

        // Deshabilitar campos de entrada para edición
        const inputs = section.querySelectorAll('input');
        inputs.forEach(input => {
            input.style.display = 'none';
        });

        // Mostrar los span con los nuevos valores
        const spans = section.querySelectorAll('span');
        spans.forEach(span => {
            span.style.display = 'inline';
            // Actualizar el valor del span con el valor del campo de entrada
            span.innerText = section.querySelector(`#${span.id}Input`).value;
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Botones para editar la información
    const editButtons = document.querySelectorAll('.editButton');
    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            // Desactivar la edición
            disableEditing(section);
        });
    });
});
