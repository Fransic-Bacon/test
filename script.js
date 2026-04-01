document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;
        reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;
            if(revealTop < windowHeight - revealPoint) {
                reveal.classList.add('active');
            }
        });
    };
    
    // Initial check and scroll listener
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // Sticky navbar styling
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

});
