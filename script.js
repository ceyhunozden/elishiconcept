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

    if (hamburgerBtn) hamburgerBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (menuOverlay) menuOverlay.addEventListener('click', closeMenu);

    // Close menu when clicking links (excluding the collection trigger)
    document.querySelectorAll('.drawer-link').forEach(link => {
        if (!link.classList.contains('collection-trigger')) {
            link.addEventListener('click', closeMenu);
        }
    });

    // Toggle Submenu on Click/Tap for Mobile
    const collectionTrigger = document.querySelector('.collection-trigger');
    if (collectionTrigger) {
        collectionTrigger.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent closing if nested
            const parentItem = collectionTrigger.closest('.drawer-item');
            if (parentItem) {
                parentItem.classList.toggle('active');
            }
        });
    }

    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('boho');
            if (document.body.classList.contains('boho')) {
                themeToggle.textContent = "Stil: ✨ Saf Bej'e Dön";
            } else {
                themeToggle.textContent = "Stil: 🌿 Bohem'e Geç";
            }
        });
    }

    const navbarNightToggle = document.getElementById('navbarNightToggle');
    if (navbarNightToggle) {
        navbarNightToggle.addEventListener('change', (e) => {
            if (e.target.checked) {
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
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Dynamic Collection Filtering Logic
    window.filterProducts = function (category) {
        const grid = document.getElementById('product-grid');
        const items = document.querySelectorAll('.grid-item');
        const title = document.getElementById('collection-title');
        const subtitle = document.getElementById('collection-subtitle');
        const allBtn = document.getElementById('all-products-btn');

        if (!grid || items.length === 0) return;

        // Update Text
        const titles = {
            all: { t: "Koleksiyonlarımız", s: "Tüm zamansız parçalar bir arada" },
            opera: { t: "Opera Koleksiyonu", s: "Görkemli ve sanatsal dokunuşlar" },
            natura: { t: "Natura Koleksiyonu", s: "Doğal formların zarafeti" },
            'neo-atelier': { t: "Neo Atelier Koleksiyonu", s: "Ustalıkla işlenmiş koleksiyon parçaları" }
        };

        const content = titles[category] || titles.all;
        title.style.opacity = '0';
        subtitle.style.opacity = '0';

        setTimeout(() => {
            title.textContent = content.t;
            subtitle.textContent = content.s;
            title.style.opacity = '1';
            subtitle.style.opacity = '1';
        }, 300);

        // Filter Grid
        if (category === 'all') {
            grid.classList.remove('centered-group');
            allBtn.style.display = 'none';
        } else {
            grid.classList.add('centered-group');
            allBtn.style.display = 'block';
        }

        items.forEach(item => {
            item.classList.remove('fade-in');
            if (category === 'all' || item.getAttribute('data-collection') === category) {
                item.classList.remove('hidden');
                void item.offsetWidth; // Trigger reflow
                item.classList.add('fade-in');
            } else {
                item.classList.add('hidden');
            }
        });

        // Scroll to section
        const collectionSection = document.getElementById('collection');
        if (collectionSection) {
            collectionSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Attach to Sidebar Links
    document.querySelectorAll('.submenu-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = link.getAttribute('href').replace('#collection-', '');
            filterProducts(filter);
            closeMenu();
        });
    });

    // Handle initial hash if any
    if (window.location.hash.startsWith('#collection-')) {
        const initialFilter = window.location.hash.replace('#collection-', '');
        setTimeout(() => filterProducts(initialFilter), 500);
    }
});
