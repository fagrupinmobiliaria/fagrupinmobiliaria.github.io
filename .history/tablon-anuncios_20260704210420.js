document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos nuestra tarjeta compacta
    const target = document.querySelector('.tb-compact-card');

    if (target) {
        // Configuración del observador
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Cuando el elemento entra en pantalla (aunque sea un 10%)
                if (entry.isIntersecting) {
                    // Lanzamos la animación
                    entry.target.classList.add('tb-pop-in');
                    // Dejamos de observar para que solo ocurra una vez
                    observer.unobserve(entry.target);
                }
            });
        }, { 
            threshold: 0.1 // Se activa cuando el 10% del elemento es visible
        });

        // Empezamos a vigilar
        observer.observe(target);
    }
});