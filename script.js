document.addEventListener('DOMContentLoaded', () => {

    // Drawer Menu Logic
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const closeBtn = document.getElementById('closeBtn');
    const sideDrawer = document.getElementById('sideDrawer');
    const menuOverlay = document.getElementById('menuOverlay');

    function openMenu() {
        console.log("Hamburger menu opened");
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
    const moonIcon = document.getElementById('moonIcon');

    if (navbarNightToggle) {
        navbarNightToggle.addEventListener('change', (e) => {
            if (e.target.checked) {
                document.body.classList.add('night-mode');
            } else {
                document.body.classList.remove('night-mode');
            }
        });
        
        // Moon icon click should also toggle the switch
        if (moonIcon) {
            moonIcon.addEventListener('click', () => {
                navbarNightToggle.checked = !navbarNightToggle.checked;
                // Manually trigger the change event
                navbarNightToggle.dispatchEvent(new Event('change'));
            });
        }
    }

    // Scroll smoothing
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Sadece aynı sayfa içindeki # linkleri için çalış
            if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
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
            minimalist: { t: "Minimalist Koleksiyon", s: "Sade ve modern dokunuşlar" },
            maksimalist: { t: "Maksimalist Koleksiyon", s: "Görkemli ve iddialı detaylar" },
            'boho-chic': { t: "Boho Chic Koleksiyon", s: "Özgür ve sanatsal ruh" },
            timeless: { t: "Timeless Koleksiyon", s: "Zamansız ve klasik tasarımlar" },
            retro: { t: "Retro Koleksiyon", s: "Nostaljik dokunuşlar ve vintage ruhu" }
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

    // --- AUTOMATIC LIGHT-ON EFFECT (MOBILE) ---
    // Detect if mobile (screen width < 900px)
    const isMobile = window.matchMedia("(max-width: 900px)").matches;

    if (isMobile) {
        const productItems = document.querySelectorAll('.grid-item');
        const activeTimers = new Map(); // Store timers to cancel if item leaves early

        const observerOptions = {
            root: null,
            threshold: 0.5 // Trigger when 50% of the item is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const target = entry.target;

                if (entry.isIntersecting) {
                    // Check if already "on" or already has a timer
                    if (!target.classList.contains('auto-on') && !activeTimers.has(target)) {
                        const timer = setTimeout(() => {
                            target.classList.add('auto-on');
                            activeTimers.delete(target);
                        }, 500); // 0.5 second delay
                        activeTimers.set(target, timer);
                    }
                } else {
                    // If it leaves the viewport before the timer finishes, cancel it
                    if (activeTimers.has(target)) {
                        clearTimeout(activeTimers.get(target));
                        activeTimers.delete(target);
                    }
                }
            });
        }, observerOptions);

        productItems.forEach(item => observer.observe(item));
    }

    // --- ABOUT SECTION EXPANDABLE LOGIC ---
    const btsExpandable = document.getElementById('btsExpandable');
    const btsReadMore = document.getElementById('btsReadMore');
    const btsImage = document.querySelector('.bts-image');

    if (btsExpandable && btsReadMore && btsImage) {
        const updateHeight = () => {
            if (btsExpandable.classList.contains('expanded')) return;

            // Desktop layout: side-by-side
            if (window.innerWidth > 900) {
                const imageHeight = btsImage.offsetHeight;
                const btsText = document.querySelector('.bts-text');
                const btsContentRect = btsExpandable.getBoundingClientRect();
                const btsTextRect = btsText.getBoundingClientRect();
                
                // Calculate the offset of the expandable div from the top of the text column
                const offset = btsContentRect.top - btsTextRect.top;
                
                // Available height is video height minus the space taken by headers above
                const availableHeight = imageHeight - offset;
                
                if (availableHeight > 50) {
                    btsExpandable.style.maxHeight = `${availableHeight}px`;
                }
            } else {
                // Mobile layout: stacked
                btsExpandable.style.maxHeight = '250px'; 
            }
        };

        // Delay slightly to ensure video/image layout is computed
        setTimeout(updateHeight, 600);
        window.addEventListener('resize', updateHeight);

        btsReadMore.addEventListener('click', () => {
            const isExpanding = !btsExpandable.classList.contains('expanded');
            btsExpandable.classList.toggle('expanded');
            
            if (isExpanding) {
                btsReadMore.textContent = 'daha az...';
            } else {
                btsReadMore.textContent = 'devamı...';
                // Scroll back to the top of the section when closing
                document.getElementById('behind-the-scenes').scrollIntoView({ behavior: 'smooth' });
                // Re-calculate truncation after collapse
                setTimeout(updateHeight, 850);
            }
        });
    }

    // Hero Slider Logic
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (slides.length > 0) {
        let currentSlide = 0;
        const slideInterval = 5000; // 5 saniye
        let autoSlide;

        function showSlide(index) {
            if (!slides[index]) return;
            
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            slides[index].classList.add('active');
            if (dots[index]) dots[index].classList.add('active');
            currentSlide = index;
        }

        function nextSlide() {
            let next = (currentSlide + 1) % slides.length;
            showSlide(next);
        }

        function startAutoSlide() {
            clearInterval(autoSlide);
            autoSlide = setInterval(nextSlide, slideInterval);
        }

        // Dots click event
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
                startAutoSlide();
            });
        });

        // Start initial timer
        startAutoSlide();
    }

    // --- CONTACT WIDGET LOGIC ---
    const contactTrigger = document.getElementById('contactTrigger');
    const contactPopup = document.getElementById('contactPopup');

    if (contactTrigger && contactPopup) {
        contactTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            contactPopup.classList.toggle('active');
        });

        // Close popup when clicking outside
        document.addEventListener('click', (e) => {
            if (!contactPopup.contains(e.target) && !contactTrigger.contains(e.target)) {
                contactPopup.classList.remove('active');
            }
        });

        // Close popup with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                contactPopup.classList.remove('active');
            }
        });

        // --- WELCOME BUBBLE LOGIC ---
        const welcomeBubble = document.getElementById('welcomeBubble');
        if (welcomeBubble) {
            // Show after a short delay (1s) and hide after 3s
            setTimeout(() => {
                welcomeBubble.classList.add('show');
                setTimeout(() => {
                    welcomeBubble.classList.remove('show');
                }, 3000);
            }, 1000);
        }
    }
});
