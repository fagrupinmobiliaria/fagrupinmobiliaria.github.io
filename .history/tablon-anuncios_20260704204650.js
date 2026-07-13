/**
 * Tablón de Anuncios - FA GRUP
 * Animación de aparición al hacer scroll
 */
document.addEventListener('DOMContentLoaded', () => {
    
    const container = document.querySelector('.tb-container');
    
    if (!container) return;

    // Configuración del observador
    const observerOptions = {
        root: null, // Observa respecto al viewport
        rootMargin: '0px',
        threshold: 0.2 // Se activa cuando el 20% del tablón es visible
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añadimos la clase con un pequeño retraso para asegurar fluidez
                setTimeout(() => {
                    entry.target.classList.add('tb-visible');
                }, 100);
                
                // Dejamos de observar una vez que ya apareció (animación única)
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observer.observe(container);

    // Efecto ripple en botón (mantenido del original)
    const btn = document.querySelector('.tb-btn');
    if(btn) {
        btn.addEventListener('click', function(e) {
            let x = e.clientX - e.target.getBoundingClientRect().left;
            let y = e.clientY - e.target.getBoundingClientRect().top;
            
            let ripples = document.createElement('span');
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            ripples.classList.add('tb-ripple');
            this.appendChild(ripples);
            
            setTimeout(() => ripples.remove(), 600);
        });
    }
});