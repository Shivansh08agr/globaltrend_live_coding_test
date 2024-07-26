const gallery = document.querySelector('.gallery');
        const modal = document.getElementById('modal');
        const modalImage = document.getElementById('modalImage');
        const closeBtn = document.getElementById('closeBtn');

        gallery.addEventListener('click', (e) => {
            if (e.target.tagName === 'IMG') {
                modal.style.display = 'flex';
                modalImage.src = e.target.src;
            }
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });