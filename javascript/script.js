document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        observer.observe(card);
    });
    
    
    const photos = [
        'photo1.jpg', 'photo2.jpg', 'photo3.jpg',
        'photo4.jpg', 'photo5.jpg', 'photo6.jpg'
    ];

    const gallery = document.getElementById('gallery');

    photos.forEach((photo, index) => {
        const col = document.createElement('div');
        col.className = 'col-md-4';
        col.innerHTML = `
            <div class="card">
                <img src="images/${photo}" class="card-img-top" alt="Photo ${index + 1}">
                <div class="card-body">
                    <h5 class="card-title">Photo Title ${index + 1}</h5>
                    <p class="card-text">Short description of photo ${index + 1}.</p>
                </div>
            </div>
        `;
        gallery.appendChild(col);
    });
});
