// Obtiene el botón de cambio de modo por su ID
const switchButton = document.getElementById('switch');

// Comprueba si hay un estado de modo oscuro guardado en localStorage
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Establece el estado del modo oscuro en función de lo que se encuentra en localStorage
if (isDarkMode) {
    document.body.classList.add('dark');
    switchButton.classList.add('active');
}

// Agrega un evento de escucha al botón para cambiar el estado del modo oscuro
switchButton.addEventListener('click', () => {
    // Alterna la clase 'dark' en el cuerpo del documento para cambiar el fondo y el color del texto
    document.body.classList.toggle('dark');
    
    // Alterna la clase 'active' en el botón para cambiar su apariencia cuando está activo
    switchButton.classList.toggle('active');
    
    // Guarda el estado actual del modo oscuro en localStorage
    const isDarkMode = document.body.classList.contains('dark');
    localStorage.setItem('darkMode', isDarkMode.toString());
});
