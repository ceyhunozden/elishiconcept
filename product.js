// =====================================================
// ÜRÜN DETAY SAYFASI – JS
// =====================================================

document.addEventListener('DOMContentLoaded', () => {

    // URL'den ?id=urun1 parametresini al
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    if (!productId || !PRODUCTS[productId]) {
        // Ürün bulunamazsa
        document.querySelector('main.product-page').innerHTML =
            '<div class="product-not-found">Ürün bulunamadı. <a href="index.html">Ana sayfaya dön →</a></div>';
        return;
    }

    const p = PRODUCTS[productId];
    let currentIndex = 0;

    // ---------- Sayfa başlığı ve breadcrumb ----------
    document.title = p.name + ' – Elishi Concept';
    document.getElementById('breadcrumbName').textContent = p.name;

    // ---------- Ürün bilgileri ----------
    document.getElementById('productName').textContent = p.name;
    document.getElementById('productSubtitle').textContent = p.subtitle;
    document.getElementById('productPrice').textContent = p.price;
    document.getElementById('productStory').textContent = p.story;
    document.getElementById('etsyBtn').href = p.etsy;

    const tagEl = document.getElementById('productTag');
    if (p.tag) {
        tagEl.textContent = p.tag;
    }

    // ---------- Özellikler listesi ----------
    const featuresUl = document.getElementById('productFeatures');
    p.features.forEach(f => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="feat-icon">${f.icon}</span>
            <span class="feat-label">${f.label}</span>
            <span class="feat-value">${f.value}</span>
        `;
        featuresUl.appendChild(li);
    });

    // ---------- Galeri (Slider) ----------
    const mainImg = document.getElementById('mainImage');
    const thumbsContainer = document.getElementById('galleryThumbs');
    const dotsContainer = document.getElementById('galleryDots');

    function renderGallery() {
        p.images.forEach((src, i) => {
            // Thumbnail
            const thumb = document.createElement('img');
            thumb.src = src;
            thumb.alt = `${p.name} görsel ${i + 1}`;
            thumb.className = 'gallery-thumb' + (i === 0 ? ' active' : '');
            thumb.addEventListener('click', () => setImage(i));
            thumbsContainer.appendChild(thumb);

            // Dot
            const dot = document.createElement('button');
            dot.className = 'gallery-dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', `Görsel ${i + 1}`);
            dot.addEventListener('click', () => setImage(i));
            dotsContainer.appendChild(dot);
        });

        // İlk görseli yükle
        mainImg.src = p.images[0];
        mainImg.alt = p.name;
    }

    function setImage(index) {
        if (index < 0) index = p.images.length - 1;
        if (index >= p.images.length) index = 0;
        currentIndex = index;

        // Fade animasyonu
        mainImg.classList.add('fade-out');
        setTimeout(() => {
            mainImg.src = p.images[currentIndex];
            mainImg.classList.remove('fade-out');
        }, 300);

        // Thumbnails güncelle
        thumbsContainer.querySelectorAll('.gallery-thumb').forEach((t, i) => {
            t.classList.toggle('active', i === currentIndex);
        });

        // Dots güncelle
        dotsContainer.querySelectorAll('.gallery-dot').forEach((d, i) => {
            d.classList.toggle('active', i === currentIndex);
        });
    }

    // Ok butonları
    document.getElementById('galleryPrev').addEventListener('click', () => setImage(currentIndex - 1));
    document.getElementById('galleryNext').addEventListener('click', () => setImage(currentIndex + 1));

    // Klavye navigasyonu
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') setImage(currentIndex - 1);
        if (e.key === 'ArrowRight') setImage(currentIndex + 1);
    });

    // Touch/swipe desteği
    let touchStartX = 0;
    mainImg.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    mainImg.addEventListener('touchend', (e) => {
        const diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 40) {
            setImage(diff > 0 ? currentIndex + 1 : currentIndex - 1);
        }
    }, { passive: true });

    renderGallery();
});
