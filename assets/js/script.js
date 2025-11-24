// Inicializar iconos de Lucide
lucide.createIcons();

// Toggle menu móvil
document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Cerrar menú móvil al hacer clic en un enlace
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', function () {
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});

// Smooth scroll para enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});