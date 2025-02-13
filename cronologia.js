// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Obtener todos los enlaces del menú de navegación interna
    const internalLinks = document.querySelectorAll('.internal-nav a');

    // Obtener todas las secciones de la línea de tiempo
    const sections = document.querySelectorAll('.timeline-section');

    // Definir el offset para el header fijo
    const headerOffset = 70;

    // Agregar evento click a cada enlace para el desplazamiento suave
    internalLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Obtener el ID del elemento objetivo desde el href
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Calcular la posición con el offset
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                // Realizar el desplazamiento suave
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Agregar eventos mouseenter y mouseleave a cada sección
    sections.forEach(section => {
        section.addEventListener('mouseenter', function () {
            // Guardar las clases originales
            this.originalClassName = this.className;
            // Aplicar la clase de resaltado
            this.className = 'timeline-section-highlight';
        });

        section.addEventListener('mouseleave', function () {
            // Restaurar las clases originales
            this.className = this.originalClassName;
        });
    });
});