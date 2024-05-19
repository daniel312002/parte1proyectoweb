// Simulación de datos de cursos y horarios
const courses = [
    { name: "Matemáticas", schedule: "Lunes y Miércoles 10:00 - 12:00" },
    { name: "Física", schedule: "Martes y Jueves 14:00 - 16:00" },
    { name: "Programación", schedule: "Lunes 14:00 - 16:00, Miércoles 14:00 - 15:30" },
    { name: "Inglés", schedule: "Martes y Jueves 10:00 - 12:00" }
];

// Función para mostrar los resultados de la búsqueda
function showResults(results) {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';
    results.forEach(course => {
        const li = document.createElement('li');
        li.textContent = `${course.name} - ${course.schedule}`;
        searchResults.appendChild(li);
    });
}

// Función para buscar cursos
function searchCourses(query) {
    const results = courses.filter(course =>
        course.name.toLowerCase().includes(query.toLowerCase())
    );
    return results;
}

// Event listener para el formulario de búsqueda
document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();
    const results = searchCourses(query);
    showResults(results);
    searchInput.value = '';
});


// Función para mostrar el horario actual
function showSchedule(schedule) {
    const classSchedule = document.getElementById('classSchedule');
    classSchedule.textContent = schedule;
}

// Ejemplo de horario actual
const currentSchedule = "Lunes: 10:00 - 12:00, Martes: 14:00 - 16:00, Miércoles: 10:00 - 12:00";
showSchedule(currentSchedule);
