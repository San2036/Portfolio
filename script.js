document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once animated
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all elements with the fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // Form submission prevent default for demo
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('.btn-submit');
            const originalText = btn.textContent;
            btn.textContent = 'Sending...';
            btn.style.opacity = '0.7';
            
            setTimeout(() => {
                btn.textContent = 'Message Sent!';
                btn.style.backgroundColor = '#0ba360';
                btn.style.borderColor = '#0ba360';
                form.reset();
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.backgroundColor = '';
                    btn.style.borderColor = '';
                    btn.style.opacity = '1';
                }, 3000);
            }, 1500);
        });
    }
});
