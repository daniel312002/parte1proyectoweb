document.addEventListener('DOMContentLoaded', function() {
    const cursos = [
        "Matemáticas",
        "Historia",
        "Inglés",
        "Biología",
        "Química",
        "Física",
        "Literatura",
        "Arte",
        "Música"
    ];

    const resultadosBusquedaList = document.getElementById('resultadosBusquedaList');
    const cursosSeleccionadosList = document.getElementById('cursosSeleccionadosList');

    // Método para buscar cursos
    function buscarCursos(terminoDeBusqueda) {
        const resultados = cursos.filter(curso => curso.toLowerCase().includes(terminoDeBusqueda.toLowerCase()));
        mostrarResultadosBusqueda(resultados);
    }

    // Método para mostrar los resultados de la búsqueda
    function mostrarResultadosBusqueda(resultados) {
        // Limpiar la lista de resultados de la búsqueda
        resultadosBusquedaList.innerHTML = '';

        resultados.forEach(curso => {
            const li = document.createElement('li');
            li.textContent = curso;
            const seleccionarCursoButton = document.createElement('button');
            seleccionarCursoButton.textContent = 'Seleccionar';
            seleccionarCursoButton.addEventListener('click', function() {
                seleccionarCurso(curso); // Llama a la función seleccionarCurso cuando se hace clic en el botón
            });
            li.appendChild(seleccionarCursoButton);
            resultadosBusquedaList.appendChild(li);
        });

        // Mostrar la sección de resultados de la búsqueda
        resultadosBusquedaList.style.display = 'block';
    }

 // Método para agregar un curso seleccionado a la lista de cursos seleccionados
function seleccionarCurso(curso) {
    const li = document.createElement('li');
    li.textContent = curso;
    cursosSeleccionadosList.appendChild(li);

    // Redireccionar a la página "cursosselecionados.html" con el curso seleccionado como parámetro en la URL
    window.location.href = 'cursosselecionados.html?curso=' + encodeURIComponent(curso);
}

    // Evento de envío del formulario de búsqueda de cursos
    const buscarCursosForm = document.getElementById('buscarCursosForm');
    buscarCursosForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const terminoDeBusqueda = document.getElementById('terminoBusqueda').value;
        buscarCursos(terminoDeBusqueda);
    });
});
