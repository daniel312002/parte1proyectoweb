   // Función para obtener el curso seleccionado de la URL
   function obtenerCursoSeleccionado() {
    const urlParams = new URLSearchParams(window.location.search);
    const cursoSeleccionado = urlParams.get('curso');
    return cursoSeleccionado;
}

// Función para mostrar el curso seleccionado en la página
function mostrarCursoSeleccionado() {
    const cursoSeleccionado = obtenerCursoSeleccionado();
    const cursoSeleccionadoDiv = document.getElementById('cursoSeleccionado');
    if (cursoSeleccionado) {
        cursoSeleccionadoDiv.textContent = "Curso seleccionado: " + decodeURIComponent(cursoSeleccionado);
    } else {
        cursoSeleccionadoDiv.textContent = "No se ha seleccionado ningún curso.";
    }
}

// Llama a la función para mostrar el curso seleccionado cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    mostrarCursoSeleccionado();
});
// Método para agregar un curso seleccionado a la lista de cursos seleccionados
function seleccionarCurso(curso) {
    const li = document.createElement('li');
    li.textContent = curso;
    cursosSeleccionadosList.appendChild(li);

    // Obtener información adicional sobre el curso seleccionado (por ejemplo: horario, profesor, créditos)
    const informacionAdicional = obtenerInformacionAdicional(curso);

    // Redireccionar a la página "cursosselecionados.html" con la información adicional como parámetros en la URL
    window.location.href = 'cursosselecionados.html?curso=' + encodeURIComponent(curso) + '&info=' + encodeURIComponent(informacionAdicional);
}

// Función para obtener información adicional sobre el curso seleccionado (simulación)
function obtenerInformacionAdicional(curso) {
    // Aquí podrías implementar la lógica para obtener la información adicional del curso desde tu base de datos o alguna fuente de datos
    // Por ahora, simplemente devolveremos un texto de ejemplo
    return "Horario: Lunes y Miércoles, 10:00-12:00 | Profesor: Juan Pérez | Créditos: 4";
}
