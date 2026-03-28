document.addEventListener('DOMContentLoaded', () => {

    // Drawer Menu Logic
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const closeBtn = document.getElementById('closeBtn');
    const sideDrawer = document.getElementById('sideDrawer');
    const menuOverlay = document.getElementById('menuOverlay');

    function openMenu() {
        // Scrollbar kaybolduğunda sayfanın sağa sıçramasını (titremesi) engelle
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.paddingRight = `${scrollBarWidth}px`;
        
        sideDrawer.classList.add('open');
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        sideDrawer.classList.remove('open');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    }

    if(hamburgerBtn) hamburgerBtn.addEventListener('click', openMenu);
    if(closeBtn) closeBtn.addEventListener('click', closeMenu);
    if(menuOverlay) menuOverlay.addEventListener('click', closeMenu);

    document.querySelectorAll('.drawer-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    const themeToggle = document.getElementById('themeToggle');
    if(themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('boho');
            if(document.body.classList.contains('boho')) {
                themeToggle.innerHTML = "Stil: ✨ Saf Bej'e Dön";
            } else {
                themeToggle.innerHTML = "Stil: 🌿 Bohem'e Geç";
            }
        });
    }

    const navbarNightToggle = document.getElementById('navbarNightToggle');
    if(navbarNightToggle) {
        navbarNightToggle.addEventListener('change', (e) => {
            if(e.target.checked) {
                document.body.classList.add('night-mode');
            } else {
                document.body.classList.remove('night-mode');
            }
        });
    }

    // Scroll smoothing
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
