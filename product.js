// =====================================================
// ÜRÜN DETAY SAYFASI – JS
// =====================================================

document.addEventListener('DOMContentLoaded', () => {

    // URL'den ?id=urun1 parametresini al
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    if (!productId || !PRODUCTS[productId]) {
        // Ürün bulunamazsa
        const main = document.querySelector('main.product-page');
        main.textContent = ''; // Temizle
        const errorDiv = document.createElement('div');
        errorDiv.className = 'product-not-found';
        errorDiv.textContent = 'Ürün bulunamadı. ';
        const homeLink = document.createElement('a');
        homeLink.href = 'index.html';
        homeLink.textContent = 'Ana sayfaya dön →';
        errorDiv.appendChild(homeLink);
        main.appendChild(errorDiv);
        return;
    }

    const p = PRODUCTS[productId];
    let currentIndex = 0;

    // ---------- Sayfa başlığı ve breadcrumb ----------
    document.title = p.name + ' | Elishi Concept';
    document.getElementById('breadcrumbName').textContent = p.name;
    document.getElementById('productName').textContent = p.name;
    document.getElementById('shopierBtn').href = p.shopier;

    const tagEl = document.getElementById('productTag');
    if (p.tag) {
        tagEl.textContent = p.tag;
    }

    function renderLanguage(lang) {
        const subtitle = lang === 'en' && p.subtitle_en ? p.subtitle_en : p.subtitle;
        
        // Extract collection name and set link
        const subParts = subtitle.split('·');
        if (subParts.length > 1) {
            const fullCollName = subParts[1].replace('Koleksiyon', '').replace('Collection', '').trim();
            const bcColl = document.getElementById('breadcrumbCollection');
            bcColl.textContent = fullCollName;
            
            // Generate link from Turkish subtitle to keep the filter ID consistent
            const trSubParts = p.subtitle.split('·');
            let trCollName = trSubParts[1].replace('Koleksiyon', '').trim();
            let filterId = trCollName.toLowerCase().replace(/\s+/g, '-');
            bcColl.href = `index.html#collection-${filterId}`;
        } else {
            document.getElementById('breadcrumbCollection').style.display = 'none';
            document.getElementById('bcSepCollection').style.display = 'none';
        }

        // ---------- Ürün bilgileri ----------
        document.getElementById('productSubtitle').textContent = subtitle;
        
        let storyHTML = lang === 'en' && p.story_en ? p.story_en : p.story;
        document.getElementById('productStory').innerHTML = storyHTML.replace(/\n/g, '<br>');

        // ---------- Özellikler listesi ----------
        const featuresUl = document.getElementById('productFeatures');
        featuresUl.innerHTML = '';
        p.features.forEach(f => {
            const li = document.createElement('li');
            
            const sIcon = document.createElement('span');
            sIcon.className = 'feat-icon';
            sIcon.textContent = f.icon;
            
            const sLabel = document.createElement('span');
            sLabel.className = 'feat-label';
            sLabel.textContent = lang === 'en' && f.label_en ? f.label_en : f.label;
            
            const sValue = document.createElement('span');
            sValue.className = 'feat-value';
            sValue.textContent = lang === 'en' && f.value_en ? f.value_en : f.value;
            
            li.appendChild(sIcon);
            li.appendChild(sLabel);
            li.appendChild(sValue);
            
            featuresUl.appendChild(li);
        });

        // Sabit Gönderim Bilgisi
        const shippingLi = document.createElement('li');
        const shipLabel = lang === 'en' ? 'Shipping' : 'Gönderim';
        shippingLi.innerHTML = `<span class="feat-icon">🌍</span><span class="feat-label">${shipLabel}</span><span class="feat-value">World wide shipping</span>`;
        featuresUl.appendChild(shippingLi);
    }

    // İlk yükleme
    renderLanguage(window.currentLang || 'tr');

    // Dışarıdan tetiklenen dil değişimi
    window.addEventListener('languageChanged', (e) => {
        renderLanguage(e.detail.lang);
    });

    // ---------- Galeri (Crossfade Slider) ----------
    const imgA = document.getElementById('imgA');
    const imgB = document.getElementById('imgB');
    const thumbsContainer = document.getElementById('galleryThumbs');
    const dotsContainer = document.getElementById('galleryDots');

    // Hangi img aktif: 'A' veya 'B'
    let activeLayer = 'A';

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

        // İlk görseli yükle (crossfade olmadan, direkt)
        imgA.src = p.images[0];
        imgA.alt = p.name;
        imgA.classList.add('active');
        imgB.alt = p.name;
    }

    function setImage(index) {
        if (index < 0) index = p.images.length - 1;
        if (index >= p.images.length) index = 0;
        if (index === currentIndex) return;
        currentIndex = index;

        const newSrc = p.images[currentIndex];

        if (activeLayer === 'A') {
            // B katmanına yeni görseli yükle, görünmez halde
            imgB.src = newSrc;
            // Yüklendikten sonra crossfade başlat
            imgB.onload = () => {
                imgB.classList.add('active');   // B belirir
                imgA.classList.remove('active'); // A solar
                activeLayer = 'B';
                imgB.onload = null;
            };
            // Eğer görsel zaten cache'teyse onload tetiklenmez, elle tetikle
            if (imgB.complete && imgB.naturalWidth > 0) imgB.onload();
        } else {
            imgA.src = newSrc;
            imgA.onload = () => {
                imgA.classList.add('active');   // A belirir
                imgB.classList.remove('active'); // B solar
                activeLayer = 'A';
                imgA.onload = null;
            };
            if (imgA.complete && imgA.naturalWidth > 0) imgA.onload();
        }

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

    // Touch/swipe desteği (ana görsel alanına bağlı)
    const galleryInner = document.querySelector('.gallery-main-inner');
    let touchStartX = 0;
    galleryInner.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    galleryInner.addEventListener('touchend', (e) => {
        const diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 40) {
            setImage(diff > 0 ? currentIndex + 1 : currentIndex - 1);
        }
    }, { passive: true });

    renderGallery();
});
