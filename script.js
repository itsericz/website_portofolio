// 1. Toggle Menu untuk Responsif (Mobile)
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// 2. Animasi Scroll Reveal menggunakan Intersection Observer
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1
});

reveals.forEach(reveal => {
    observer.observe(reveal);
});

// 3. Interaktivitas Formulir Kontak
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name && email && message) {
        alert(`Terima kasih, ${name}! Pesan Anda telah berhasil dikirim. Saya akan membalas ke ${email} segera.`);
        contactForm.reset();
    } else {
        alert('Mohon isi semua kolom terlebih dahulu!');
    }
});

// 4. Efek Hover Dinamis pada Judul Proyek
const projectTitles = document.querySelectorAll('.project-info h3');
projectTitles.forEach(title => {
    title.addEventListener('mouseover', function() {
        this.style.color = '#e94560';
        this.style.cursor = 'pointer';
    });
    title.addEventListener('mouseout', function() {
        this.style.color = '#16213e';
    });
});