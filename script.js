document.addEventListener('DOMContentLoaded', () => {
    console.log('Landing page loaded');

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Thank you for your message, ' + name + '!');
            contactForm.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });

    const features = document.querySelectorAll('.feature-box');
    features.forEach((feature, index) => {
        feature.addEventListener('mouseover', () => {
            feature.style.transform = 'scale(1.1)';
            feature.style.transition = 'transform 0.3s';
        });
        feature.addEventListener('mouseout', () => {
            feature.style.transform = 'scale(1)';
        });
    });
});
