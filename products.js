// =====================================================
// ÜRÜN VERİLERİ - Buradan kolayca düzenleyebilirsiniz
// =====================================================

const PRODUCTS = {
    urun1: {
        id: 'urun1',
        name: 'Klasik Bordo Saçaklı Masa Lambası',
        subtitle: 'El Yapımı · Vintage Koleksiyon',
        price: '₺2.800',
        tag: 'BESTSELLER',
        images: [
            'urun1-kapali.webp',
            'urun1.webp',
            'urun1-detay1.webp',
            'urun1-detay2.webp',
            'urun1-detay3.webp'
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
        name: 'Mistik Yusufçuk Bohem Şaheser',
        subtitle: 'El Yapımı · Bohem Koleksiyon',
        price: '₺4.950',
        tag: 'YENİ',
        images: [
            'urun2-kapali.webp',
            'urun2.webp',
            'urun2-detay1.webp',
            'urun2-detay2.webp',
            'urun2-detay3.webp',
            'urun2-detay4.webp',
            'urun2-detay5.webp',
            'urun2-detay6.webp',
            'urun2-detay7.webp'
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
        name: 'Zarif Pileli Konik Abajur',
        subtitle: 'El Yapımı · Klasik Koleksiyon',
        price: '₺3.200',
        tag: '',
        images: [
            'urun3-kapali.webp',
            'urun3.webp',
            'urun3-detay1.webp',
            'urun3-detay2.webp',
            'urun3-detay3.webp',
            'urun3-detay4.webp'
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
        name: 'Zarafet İncisi Lamba',
        subtitle: 'El Yapımı · Vintage Koleksiyon',
        price: '₺3.450',
        tag: '',
        images: [
            'urun4-kapali.webp',
            'urun4.webp',
            'urun4-detay1.webp'
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
        name: 'Kraliyet Zümrüt Abajur',
        subtitle: 'El Yapımı · Premium Koleksiyon',
        price: '₺5.200',
        tag: 'PREMİUM',
        images: [
            'urun5-kapali.webp',
            'urun5.webp',
            'urun5-detay1.webp',
            'urun5-detay2.webp',
            'urun5-detay3.webp',
            'urun5-detay4.webp'
        ],
        story: `Zümrüt yeşilinin derinliği ile işlenmiş bu abajur, kraliyet saraylarından ilham alan bir tasarıma sahip. Altın rengi detaylar ve el nakışları bu eseri eşsiz kılar.`,
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
        name: 'Altın Varaklı Klasik Şaheser',
        subtitle: 'El Yapımı · Lüks Koleksiyon',
        price: '₺4.100',
        tag: 'LİMİTED',
        images: [
            'urun6-kapali.webp',
            'urun6.webp',
            'urun6-detay1.webp',
            'urun6-detay2.webp',
            'urun6-detay3.webp'
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
        name: 'Natura Ahşap Dokunuş',
        subtitle: 'El Yapımı · Natura Koleksiyonu',
        price: '₺3.150',
        tag: 'YENİ',
        images: [
            'urun7-kapali.webp',
            'urun7.webp',
            'urun7-detay1.webp',
            'urun7-detay2.webp'
        ],
        story: `Doğanın kalbinden gelen ahşap detaylarla bezeli bu özel tasarım, evinize doğal bir sıcaklık katar. Sürdürülebilir malzemelerle el işçiliğiyle üretilmiştir.`,
        features: [
            { icon: '🌿', label: 'Malzeme', value: 'Doğal ahşap, keten kumaş' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Abajur Ø26cm, Yükseklik 40cm' },
            { icon: '🕰', label: 'Üretim', value: 'El yapımı, sipariş üzerine' },
            { icon: '📦', label: 'Teslimat', value: '7-10 iş günü' },
        ],
        etsy: 'https://etsy.com'
    },

    urun8: {
        id: 'urun8',
        name: 'Gümüş Işıltılı Modern',
        subtitle: 'El Yapımı · Modern Koleksiyon',
        price: '₺3.600',
        tag: '',
        images: [
            'urun8-kapali.webp',
            'urun8.webp',
            'urun8-detay1.webp',
            'urun8-detay2.webp',
            'urun8-detay3.webp',
            'urun8-detay4.webp',
            'urun8-detay5.webp'
        ],
        story: `Modern mekanların vazgeçilmezi olacak gümüş ışıltılı bu abajur, minimalist tasarımıyla dikkat çeker. Işığı soğuk ve berrak bir şekilde dağıtarak elegant bir hava yaratır.`,
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
        name: 'Venedik Dantelli Abajur',
        subtitle: 'El Yapımı · Vintage Koleksiyon',
        price: '₺4.250',
        tag: 'LİMİTED',
        images: [
            'urun9-kapali.webp',
            'urun9.webp',
            'urun9-detay1.webp',
            'urun9-detay2.webp',
            'urun9-detay3.webp',
            'urun9-detay4.webp',
            'urun9-detay5.webp'
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
