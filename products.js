// =====================================================
// ÜRÜN VERİLERİ - Buradan kolayca düzenleyebilirsiniz
// =====================================================

const PRODUCTS = {
    urun1: {
        id: 'urun1',
        name: 'Vega',
        subtitle: 'El Yapımı · Timeless Koleksiyon',
        tag: 'BESTSELLER',
        images: [
            'images/klasik-zamansiz-puskullu-vintage-masa-lambasi-kapali.webp',
            'images/klasik-zamansiz-puskullu-vintage-masa-lambasi.webp',
            'images/klasik-zamansiz-puskullu-vintage-masa-lambasi-detay1.webp',
            'images/klasik-zamansiz-puskullu-vintage-masa-lambasi-detay2.webp',
            'images/klasik-zamansiz-puskullu-vintage-masa-lambasi-detay3.webp'
        ],
        story: `Bu özel masa lambası, yıllar öncesinden gelen bir nostaljinin bugüne taşınmasıyla doğdu. Bordo kadife kumaşı ve el oyası saçakları, odanıza sıcak bir İngiliz salonu havası katar.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Bordo kadife kumaş, el yapımı saçaklar' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Abajur Ø28cm, Yükseklik 42cm' },
            { icon: '🕰', label: 'Üretim', value: 'El yapımı, sipariş üzerine' },
            { icon: '📦', label: 'Teslimat', value: '7-10 iş günü' },
        ],
        etsy: 'https://etsy.com'
    },

    urun2: {
        id: 'urun2',
        name: 'Luna',
        subtitle: 'El Yapımı · Boho Chic Koleksiyon',
        tag: 'YENİ',
        images: [
            'images/antik-retro-kruvasan-maximalist-abajur-kapali.webp',
            'images/antik-retro-kruvasan-maximalist-abajur.webp',
            'images/antik-retro-kruvasan-maximalist-abajur-detay1.webp',
            'images/antik-retro-kruvasan-maximalist-abajur-detay2.webp',
            'images/antik-retro-kruvasan-maximalist-abajur-detay3.webp',
            'images/antik-retro-kruvasan-maximalist-abajur-detay4.webp',
            'images/antik-retro-kruvasan-maximalist-abajur-detay5.webp',
            'images/antik-retro-kruvasan-maximalist-abajur-detay6.webp',
            'images/antik-retro-kruvasan-maximalist-abajur-detay7.webp'
        ],
        story: `Mavi ve kiremit renklerin büyülü buluşması olan bu lamba, bohem ruhunu yaşatmak isteyenler için tasarlandı. Yusufçuk motifli detayları ile eşsiz bir atmosfer yaratır.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Mavi-kiremit kumaş, metal aksesuarlar' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Abajur Ø32cm, Yükseklik 48cm' },
            { icon: '🕰', label: 'Üretim', value: 'El yapımı, sipariş üzerine' },
            { icon: '📦', label: 'Teslimat', value: '7-10 iş günü' },
        ],
        etsy: 'https://etsy.com'
    },

    urun3: {
        id: 'urun3',
        name: 'Maia',
        subtitle: 'El Yapımı · Minimalist Koleksiyon',
        tag: '',
        images: [
            'images/elegance-soft-minimalist-seramik-abajur-kapali.webp',
            'images/elegance-soft-minimalist-seramik-abajur.webp',
            'images/elegance-soft-minimalist-seramik-abajur-detay1.webp',
            'images/elegance-soft-minimalist-seramik-abajur-detay2.webp',
            'images/elegance-soft-minimalist-seramik-abajur-detay3.webp',
            'images/elegance-soft-minimalist-seramik-abajur-detay4.webp'
        ],
        story: `Saf beyazın zarafetiyle işlenmiş bu pileli konik abajur, minimalist ve modern mekanlar için biçilmiş kaftandır. Her kıvrımı elle yerleştirilmiş, ışığı mükemmel dağıtır.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Krem-beyaz pileli kumaş' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 60W' },
            { icon: '📐', label: 'Boyut', value: 'Abajur Ø26cm, Yükseklik 38cm' },
            { icon: '🕰', label: 'Üretim', value: 'El yapımı, sipariş üzerine' },
            { icon: '📦', label: 'Teslimat', value: '7-10 iş günü' },
        ],
        etsy: 'https://etsy.com'
    },

    urun4: {
        id: 'urun4',
        name: 'Auriga',
        subtitle: 'El Yapımı · Minimalist Koleksiyon',
        tag: '',
        images: [
            'images/boho-zarif-pileli-cozy-abajur-kapali.webp',
            'images/boho-zarif-pileli-cozy-abajur.webp',
            'images/boho-zarif-pileli-cozy-abajur-detay1.webp'
        ],
        story: `İnci beyazının yumuşak parlaklığından ilham alınan bu lamba, sofistike bir dokunuş arayan mekanlar için tasarlandı. Seramik ayak detayları ile tamamlanan şık bir bütün oluşturur.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Fildişi kumaş, seramik ayak' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Abajur Ø24cm, Yükseklik 40cm' },
            { icon: '🕰', label: 'Üretim', value: 'El yapımı, sipariş üzerine' },
            { icon: '📦', label: 'Teslimat', value: '7-10 iş günü' },
        ],
        etsy: 'https://etsy.com'
    },

    urun5: {
        id: 'urun5',
        name: 'Büyük Capella - Zeytin',
        subtitle: 'El Yapımı · Boho Chic Koleksiyon',
        tag: 'PREMİUM',
        images: [
            'images/bohem-nakisli-ozgun-abajur-kapali.webp',
            'images/bohem-nakisli-ozgun-abajur.webp',
            'images/bohem-nakisli-ozgun-abajur-detay1.webp',
            'images/bohem-nakisli-ozgun-abajur-detay2.webp',
            'images/bohem-nakisli-ozgun-abajur-detay3.webp',
            'images/bohem-nakisli-ozgun-abajur-detay4.webp'
        ],
        story: `Zümrüt yeşilinin derinliği ile işlenmiş bu abajur, kraliyet saraylarından ilham alan bir tasarıma sahip. Altın rengi detaylar and el nakışları bu eseri eşsiz kılar.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Zümrüt kumaş, altın aksesuar' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 60W' },
            { icon: '📐', label: 'Boyut', value: 'Abajur Ø30cm, Yükseklik 50cm' },
            { icon: '🕰', label: 'Üretim', value: 'El yapımı, sipariş üzerine' },
            { icon: '📦', label: 'Teslimat', value: '7-10 iş günü' },
        ],
        etsy: 'https://etsy.com'
    },

    urun6: {
        id: 'urun6',
        name: 'Küçük Capella - Fuşya',
        subtitle: 'El Yapımı · Boho Chic Koleksiyon',
        tag: 'LİMİTED',
        images: [
            'images/mistik-geleneksel-nakisli-kumas-abajur-kapali.webp',
            'images/mistik-geleneksel-nakisli-kumas-abajur.webp',
            'images/mistik-geleneksel-nakisli-kumas-abajur-detay1.webp',
            'images/mistik-geleneksel-nakisli-kumas-abajur-detay2.webp',
            'images/mistik-geleneksel-nakisli-kumas-abajur-detay3.webp'
        ],
        story: `Altın varak detaylarının ışıltısıyla yaratılan bu şaheser, koleksiyonun en prestijli parçasıdır. Sınırlı sayıda üretilen bu lamba, seçici zevklere hitap eder.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Lüks kumaş, altın varak detaylar' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Abajur Ø28cm, Yükseklik 45cm' },
            { icon: '🕰', label: 'Üretim', value: 'El yapımı, sipariş üzerine (Sınırlı Sayı)' },
            { icon: '📦', label: 'Teslimat', value: '10-14 iş günü' },
        ],
        etsy: 'https://etsy.com'
    },
    
    urun7: {
        id: 'urun7',
        name: 'Bella',
        subtitle: 'El Yapımı · Maksimalist Koleksiyon',
        tag: 'YENİ',
        images: [
            'images/timeless-ozel-tasarim-elisi-puskullu-vintage-abajur-kapali.webp',
            'images/timeless-ozel-tasarim-elisi-puskullu-vintage-abajur.webp',
            'images/timeless-ozel-tasarim-elisi-puskullu-vintage-abajur-detay1.webp',
            'images/timeless-ozel-tasarim-elisi-puskullu-vintage-abajur-detay2.webp',
            'images/timeless-ozel-tasarim-elisi-puskullu-vintage-abajur-detay3.webp',
            'images/timeless-ozel-tasarim-elisi-puskullu-vintage-abajur-detay4.webp'
        ],
        story: `Metal iskeletin sağlamlığı, kumaşın zarafeti ve el yapımı püsküllerin nostaljik dokusuyla birleşen Bella, kapalı lale figüründen ilham alan formuyla mekanınıza zarafet katar. Her bir detay, zanaatkar ellerin özenli dokunuşuyla ve büyük bir tutkuyla hayat bulmuştur.`,
        features: [
            { icon: '🌿', label: 'Malzeme', value: 'Metal, kumaş ve püskül' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Şapka Ø24cm h43cm toplam 80cm' },
            { icon: '🕰', label: 'Üretim', value: 'El yapımı, sipariş üzerine' },
            { icon: '📦', label: 'Teslimat', value: '7-15 iş günü' },
        ],
        etsy: 'https://etsy.com'
    },

    urun8: {
        id: 'urun8',
        name: 'Parseus - Sarı',
        subtitle: 'El Yapımı · Boho Chic Koleksiyon',
        tag: '',
        images: [
            'images/piliseli-modern-abajur-kapali.webp',
            'images/piliseli-modern-abajur.webp',
            'images/piliseli-modern-abajur-detay1.webp',
            'images/piliseli-modern-abajur-detay2.webp',
            'images/piliseli-modern-abajur-detay3.webp',
            'images/piliseli-modern-abajur-detay4.webp',
            'images/piliseli-modern-abajur-detay5.webp'
        ],
        story: `Modern mekanların vazgeçilmeli olacak gümüş ışıltılı bu abajur, minimalist tasarımıyla dikkat çeker. Işığı soğuk ve berrak bir şekilde dağıtarak elegant bir hava yaratır.`,
        features: [
            { icon: '✨', label: 'Malzeme', value: 'Gümüş kaplama detaylar, parlak kumaş' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 60W' },
            { icon: '📐', label: 'Boyut', value: 'Abajur Ø24cm, Yükseklik 42cm' },
            { icon: '🕰', label: 'Üretim', value: 'El yapımı, sipariş üzerine' },
            { icon: '📦', label: 'Teslimat', value: '7-10 iş günü' },
        ],
        etsy: 'https://etsy.com'
    },

    urun9: {
        id: 'urun9',
        name: 'Parseus - Kırmızı',
        subtitle: 'El Yapımı · Boho Chic Koleksiyon',
        tag: 'LİMİTED',
        images: [
            'images/modern-pileli-kumas-abajur-kapali.webp',
            'images/modern-pileli-kumas-abajur.webp',
            'images/modern-pileli-kumas-abajur-detay1.webp',
            'images/modern-pileli-kumas-abajur-detay2.webp',
            'images/modern-pileli-kumas-abajur-detay3.webp',
            'images/modern-pileli-kumas-abajur-detay4.webp',
            'images/modern-pileli-kumas-abajur-detay5.webp'
        ],
        story: `Venedik'in romantik sokaklarından ilham alan el yapımı dantel detayları, bu abajuru bir sanat eserine dönüştürür. Klasik mobilyalarınızla mükemmel bir uyum sergiler.`,
        features: [
            { icon: '🧶', label: 'Malzeme', value: 'Venedik danteli, ipek kumaş' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Abajur Ø28cm, Yükseklik 46cm' },
            { icon: '🕰', label: 'Üretim', value: 'El yapımı, sınırlı üretim' },
            { icon: '📦', label: 'Teslimat', value: '10-14 iş günü' },
        ],
        etsy: 'https://etsy.com'
    }
};
