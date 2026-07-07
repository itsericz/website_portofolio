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

// 3. Interaktivitas Formulir Kontak (mengirim email sungguhan via EmailJS)
// PENTING: Ganti 3 nilai di bawah ini dengan milik Anda dari dashboard EmailJS.com
// 1. Daftar gratis di https://www.emailjs.com
// 2. Buat "Email Service" (misal hubungkan Gmail Anda) -> dapatkan SERVICE_ID
// 3. Buat "Email Template" -> dapatkan TEMPLATE_ID
// 4. Buka Account > General -> dapatkan PUBLIC_KEY
const EMAILJS_PUBLIC_KEY = "cH_zVyy1fAh34qPzl";
const EMAILJS_SERVICE_ID = "service_65ywit4";
const EMAILJS_TEMPLATE_ID = "contact_form";

emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        formStatus.textContent = 'Mohon isi semua kolom terlebih dahulu!';
        formStatus.className = 'form-status error';
        return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Mengirim...';
    formStatus.textContent = '';
    formStatus.className = 'form-status';

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: name,
        from_email: email,
        message: message
    }).then(() => {
        formStatus.textContent = `Terima kasih, ${name}! Pesan Anda berhasil dikirim.`;
        formStatus.className = 'form-status success';
        contactForm.reset();
    }).catch((error) => {
        console.error('EmailJS error:', error);
        formStatus.textContent = 'Gagal mengirim pesan. Coba lagi nanti, atau hubungi via WhatsApp.';
        formStatus.className = 'form-status error';
    }).finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Kirim Pesan';
    });
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

/* ==========================
      IMAGE LIGHTBOX
========================== */

const images = document.querySelectorAll(".zoomable");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close-lightbox");

images.forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.classList.add("show");

        lightboxImg.src = img.src;

    });

});

closeBtn.addEventListener("click",()=>{

    lightbox.classList.remove("show");

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("show");

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        lightbox.classList.remove("show");

    }

});