/* filepath: /c:/Users/mimis/Desktop/personal website/js/main.js */
document.addEventListener('mousemove', function(e) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';
    document.body.appendChild(trail);

    setTimeout(() => {
        trail.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(trail);
        }, 200);
    }, 100);
});

const links = document.querySelectorAll('.social-icons a');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        const hoverSound = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1UV2NveHt2gIGEeGNaTlhFR0hTVExLRj0wJysjGBMTFRQXGRwhKSwuMzg8Pj87NjArJB4VDgQBAQMFCg8XGyApMDc8QEJCQDw3MCkhGRAJAgEBAgYKDgwxOTs9Pz86NzUxJRkO');
        hoverSound.volume = 0.2;
        hoverSound.play();
    });
});

setInterval(() => {
    const container = document.querySelector('.container');
    const colors = ['#ff0099', '#00ff99', '#9900ff', '#ff9900', '#00ffff'];
    const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
    const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
    container.style.setProperty('--border-gradient', `linear-gradient(45deg, ${randomColor1}, ${randomColor2})`);
}, 3000);