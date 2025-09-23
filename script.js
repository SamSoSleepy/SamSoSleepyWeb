// ตัวอย่าง scroll smooth เมื่อคลิกเมนู
const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
