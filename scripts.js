document.getElementById('sortOrder').addEventListener('change', function() {
    const timelineUL = document.querySelector('#timeline ul');
    const entries = Array.from(timelineUL.children);
    
    if (this.value === 'newest') {
        entries.sort((a, b) => {
            return new Date(b.querySelector('h3').textContent.split('Date: ')[1]) - new Date(a.querySelector('h3').textContent.split('Date: ')[1]);
        });
    } else {
        entries.sort((a, b) => {
            return new Date(a.querySelector('h3').textContent.split('Date: ')[1]) - new Date(b.querySelector('h3').textContent.split('Date: ')[1]);
        });
    }

    entries.forEach(entry => {
        timelineUL.appendChild(entry);
    });
});

