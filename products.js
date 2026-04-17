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
            { icon: '📐', label: 'Boyut', value: 'Genişlik 33cm, Yükseklik 71cm' },
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
        story: `Kruvasan formunu andıran özgün siluetiyle bu abajur, Victoria döneminin zengin ve süslü estetiğini günümüze taşıyan çarpıcı bir tasarımdır. Katmanlı yapısı ve detaylı el işçiliğiyle bulunduğu ortamda geri planda kalmaz; güçlü bir odak noktası oluşturur.

        Şapkayı çevreleyen degrade püsküller, sıcak tonlardan serin renklere akarak tasarıma derinlik ve hareket katar. Merkezde yer alan yusufçuk figürü ise yalnızca dekoratif bir detay değil; Antik Mısır’da yeniden doğuş ve dönüşümün simgesi olarak anlam kazanır.

        Antik sarı tonlardaki metal ayak, tasarımın karakterini tamamlayarak bütüncül bir denge sağlar. Modern bir mekânda bile bu kadar iddialı bir parça, alanın atmosferini dönüştürür. 

        Tamamen özgün ve tek üretimdir.
        Siparişe göre kişiye özel tasarlanabilir.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Kumaş, metal aksesuar, püskül' },
            { icon: '🪡', label: 'Tasarım', value: 'Victoria dönemi, kruvasan form' },
            { icon: '🦋', label: 'Detay', value: 'Yusufçuk figürü (Reborn)' },
            { icon: '🧶', label: 'Aksesuar', value: 'Degrade püsküller' },
            { icon: '🏺', label: 'Kaide', value: 'Antik sarı metal ayak' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 30cm, Yükseklik 56cm' },
            { icon: '🕰', label: 'Üretim', value: 'Elde tek parça olarak üretildi' },
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
            { icon: '📐', label: 'Boyut', value: 'Genişlik 27cm, Yükseklik 70cm' },
            { icon: '🕰', label: 'Üretim', value: 'El yapımı, sipariş üzerine' },
            { icon: '📦', label: 'Teslimat', value: '7-10 iş günü' },
        ],
        etsy: 'https://etsy.com'
    },

    urun4: {
        id: 'urun4',
        name: 'Spica',
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
            { icon: '📐', label: 'Boyut', value: 'Genişlik 35cm, Yükseklik 65cm' },
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
            { icon: '📐', label: 'Boyut', value: 'Genişlik 25cm, Yükseklik 50cm' },
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
            { icon: '📐', label: 'Boyut', value: 'Genişlik 25cm, Yükseklik 45cm' },
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
        story: `Victoria döneminin gösterişli estetiğini günümüze taşıyan bu özel tasarım abajur, sıradan bir aydınlatma objesinin ötesindedir. Açılmamış lale formu, ışıkla birlikte yeniden yorumlanır. 

        Degrade püsküller mor ve sıcak tonlar arasında akarak tasarıma hareket ve derinlik ekler. Kumaş, renk ve aksesuarlar rastlantısal değil, bütüncül bir uyumla seçilmiştir. 

        Işık yandığında tüm katmanlar birleşir, kumaşın içinden süzülen sıcak tonlar ve püskülün hareketi bulunduğu ortamda gizlenmeyen bir sahne etkisi yaratır. Tamamen özel tasarım ve tek üretim olmasıyla özgünlük arayanlar için güçlü bir imza niteliği taşır.`,
        features: [
            { icon: '🌿', label: 'Malzeme', value: 'Özel kumaş, degrade püsküller' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 25cm, Yükseklik 80cm' },
            { icon: '🕰', label: 'Üretim', value: 'Elde tek parça olarak üretildi' },
            { icon: '📦', label: 'Sipariş', value: 'Kişiye özel tasarlanabilir' },
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
        story: `Pileli, sarı-krem tonlarında çizgili abajur. Sıcak ton geçişleriyle mekâna yumuşak ve dengeli bir ışık yayar. 

        Wabi-sabi estetiğinden ilham alan şapkası, doğal formdaki kaidesiyle uyum içinde tamamlanır. Renkli ponpon detayı ise tasarıma ritim ve karakter katar. Her biri elde üretilir.`,
        features: [
            { icon: '✨', label: 'Malzeme', value: 'Seramik, kumaş' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 60W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 33cm, Yükseklik 42cm' },
            { icon: '🕰', label: 'Üretim', value: 'Her biri elde üretilir' },
            { icon: '🎨', label: 'Özelleştirme', value: 'Renk ve ölçü uyarlanabilir' },
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
            'images/modern-pileli-kumas-abajur-detay5.webp',
            'images/modern-pileli-kumas-abajur-detay6.webp'
        ],
        story: `Pileli, kırmızı tonlarında abajur. Sıcak renk geçişleriyle mekâna canlı ve enerjik bir ışık yayar. 

        Wabi-sabi estetiğinden ilham alan şapkası, doğal formdaki kaidesiyle dengeli bir uyum yakalar. Renkli ponpon detayı ise tasarıma hareket ve karakter katar. Her biri elde üretilir.`,
        features: [
            { icon: '🧶', label: 'Malzeme', value: 'Seramik, kumaş' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 33cm, Yükseklik 42cm' },
            { icon: '🕰', label: 'Üretim', value: 'Her biri elde üretilir' },
            { icon: '🎨', label: 'Özelleştirme', value: 'Renk ve ölçü uyarlanabilir' },
        ],
        etsy: 'https://etsy.com'
    },

    urun10: {
        id: 'urun10',
        name: 'Electra Turuncu',
        subtitle: 'El Yapımı · Timeless Koleksiyon',
        tag: 'PREMİUM',
        images: [
            'images/el-baskisi-kumas-pileli-yatak-odasi-abajur-kapali.webp',
            'images/el-baskisi-kumas-pileli-yatak-odasi-abajur.webp',
            'images/el-baskisi-kumas-pileli-yatak-odasi-abajur-detay1.webp',
            'images/el-baskisi-kumas-pileli-yatak-odasi-abajur-detay2.webp',
            'images/el-baskisi-kumas-pileli-yatak-odasi-abajur-detay3.webp',
            'images/el-baskisi-kumas-pileli-yatak-odasi-abajur-detay4.webp'
        ],
        story: `Gökyüzünün en asil takımyıldızlarından biri olan Cassiopeia, bu tasarımda hayat buluyor. Derin dokusu ve vakur duruşuyla, mekanınıza sadece ışık değil, bir miras bırakıyor.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Ağır dokuma kumaş, vintage detaylar' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 32cm, Yükseklik 56cm' },
            { icon: '🕰', label: 'Üretim', value: 'El yapımı, sınırlı sayıda' },
            { icon: '📦', label: 'Teslimat', value: '7-10 iş günü' },
        ],
        etsy: 'https://etsy.com'
    },

    urun11: {
        id: 'urun11',
        name: 'Electra Çikolata',
        subtitle: 'El Yapımı · Timeless Koleksiyon',
        tag: 'YENİ',
        images: [
            'images/el-baskisi-country-pileli-rustik-cottage-sapka-kapali.webp',
            'images/el-baskisi-country-pileli-rustik-cottage-sapka.webp',
            'images/el-baskisi-country-pileli-rustik-cottage-sapka-detay1.webp',
            'images/el-baskisi-country-pileli-rustik-cottage-sapka-detay2.webp',
            'images/el-baskisi-country-pileli-rustik-cottage-sapka-detay3.webp'
        ],
        story: `Avcı takımyıldızından ilham alan Orion, güçlü hatları ve zamansız formuyla modern mekanlarda nostaljik bir köprü kuruyor. Keskin ve net duruşu, loş ışığın sıcaklığıyla dengeleniyor.`,
        features: [
            { icon: '🌿', label: 'Malzeme', value: 'Sert keten karışımı, el dikişi' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 60W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 32cm, Yükseklik 61cm' },
            { icon: '🕰', label: 'Üretim', value: 'El yapımı, usta işi' },
            { icon: '📦', label: 'Teslimat', value: '7-10 iş günü' },
        ],
        etsy: 'https://etsy.com'
    },

    urun12: {
        id: 'urun12',
        name: 'Vega Bej',
        subtitle: 'El Yapımı · Timeless Koleksiyon',
        tag: 'BESTSELLER',
        images: [
            'images/modern-pileli-ambiance-butik-tasarim-abajur-kapali.webp',
            'images/modern-pileli-ambiance-butik-tasarim-abajur.webp',
            'images/modern-pileli-ambiance-butik-tasarim-abajur-detay1.webp',
            'images/modern-pileli-ambiance-butik-tasarim-abajur-detay2.webp',
            'images/modern-pileli-ambiance-butik-tasarim-abajur-detay3.webp',
            'images/modern-pileli-ambiance-butik-tasarim-abajur-detay4.webp',
            'images/modern-pileli-ambiance-butik-tasarim-abajur-detay5.webp'
        ],
        story: `Bir lir gibi zarif ve ahenkli olan Lyra, ışığın en yumuşak halini odanıza taşıyor. İnce işçiliği ve hafif yapısıyla, her köşede bir sanat eseri etkisi yaratır.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'İnce ipekli kumaş, pirinç aksam' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 33cm, Yükseklik 71cm' },
            { icon: '🕰', label: 'Üretim', value: 'El yapımı, hassas işçilik' },
            { icon: '📦', label: 'Teslimat', value: '7-12 iş günü' },
        ],
        etsy: 'https://etsy.com'
    },

    urun13: {
        id: 'urun13',
        name: 'Maia Cam',
        subtitle: 'El Yapımı · Minimalist Koleksiyon',
        tag: '',
        images: [
            'images/minimalist-modern-cam-ozel-seri-abajur-kapali.webp',
            'images/minimalist-modern-cam-ozel-seri-abajur.webp',
            'images/minimalist-modern-cam-ozel-seri-abajur-detay1.webp',
            'images/minimalist-modern-cam-ozel-seri-abajur-detay2.webp',
            'images/minimalist-modern-cam-ozel-seri-abajur-detay3.webp',
            'images/minimalist-modern-cam-ozel-seri-abajur-detay4.webp'
        ],
        story: `Minimalizmin en saf hali olan Alcyone, gereksiz her detaydan arındırılmış bir huzur kaynağıdır. Modern ve sakin mekanlar için tasarlanmış duru bir ışık.`,
        features: [
            { icon: '🌿', label: 'Malzeme', value: 'Saf pamuklu keten, vizon renk' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 26cm, Yükseklik 60cm' },
            { icon: '🕰', label: 'Üretim', value: 'El yapımı' },
            { icon: '📦', label: 'Teslimat', value: '7-10 iş günü' },
        ],
        etsy: 'https://etsy.com'
    },

    urun14: {
        id: 'urun14',
        name: 'Electra Bej',
        subtitle: 'El Yapımı · Timeless Koleksiyon',
        tag: 'LİMİTED',
        images: [
            'images/el-baskisi-country-pileli-rustik-gece-lambasi-kapali.webp',
            'images/el-baskisi-country-pileli-rustik-gece-lambasi.webp',
            'images/el-baskisi-country-pileli-rustik-gece-lambasi-detay1.webp',
            'images/el-baskisi-country-pileli-rustik-gece-lambasi-detay2.webp',
            'images/el-baskisi-country-pileli-rustik-gece-lambasi-detay3.webp',
            'images/el-baskisi-country-pileli-rustik-gece-lambasi-detay4.webp'
        ],
        story: `Saray zarafetini ve altın çağların ışıltısını taşıyan Electra, enerjisiyle girdiği her mekanı aydınlatır. Klasik motiflerin modern bir yorumudur.`,
        features: [
            { icon: '🧶', label: 'Malzeme', value: 'Dantel işlemeli kumaş, altın varak' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 31cm, Yükseklik 63cm' },
            { icon: '🕰', label: 'Üretim', value: 'El yapımı, sınırlı üretim' },
            { icon: '📦', label: 'Teslimat', value: '10-14 iş günü' },
        ],
        etsy: 'https://etsy.com'
    },

    urun15: {
        id: 'urun15',
        name: 'Rigel',
        subtitle: 'El Yapımı · Timeless Koleksiyon',
        tag: 'ÖZEL',
        images: [
            'images/artisan-kraft-aydinlatma-koleksiyon-william-morris-abajur-kapali.webp',
            'images/artisan-kraft-aydinlatma-koleksiyon-william-morris-abajur.webp',
            'images/artisan-kraft-aydinlatma-koleksiyon-william-morris-abajur-detay1.webp',
            'images/artisan-kraft-aydinlatma-koleksiyon-william-morris-abajur-detay2.webp',
            'images/artisan-kraft-aydinlatma-koleksiyon-william-morris-abajur-detay3.webp',
            'images/artisan-kraft-aydinlatma-koleksiyon-william-morris-abajur-detay4.webp',
            'images/artisan-kraft-aydinlatma-koleksiyon-william-morris-abajur-detay5.webp'
        ],
        story: `Abajur şapkası, William Morris’in ikonik deseni Strawberry Thief (Çilek Hırsızı) ile tasarlanmıştır. Doğadan ilham alan bu zengin kompozisyon, kuşlar ve bitkisel motiflerle yüzeyde adeta canlı bir hikaye kurar. 

        Amber tonlarında cam kaide, ışıkla birlikte sıcak ve derin bir parıltı oluşturur. Dikey dokulu yüzeyi, ışığı kırarak mekana yumuşak bir yayılım kazandırır. Desenin yoğun karakteri ile camın sade ama güçlü formu dengeli bir uyum içindedir. Bu birliktelik, ürünü sadece bir aydınlatma değil, bulunduğu ortamda kolayca fark edilen bir odak objesi haline getirir.`,
        features: [
            { icon: '🎨', label: 'Tasarım', value: 'William Morris Strawberry Thief' },
            { icon: '🏺', label: 'Kaide', value: 'Amber tonlarında cam kaide' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 45cm, Yükseklik 71cm' },
            { icon: '🕰', label: 'Üretim', value: 'Her biri elde üretilir' },
            { icon: '✨', label: 'Özel', value: 'Renk ve ölçü uyarlanabilir' },
        ],
        etsy: 'https://etsy.com'
    },

    urun17: {
        id: 'urun17',
        name: 'Mintaka Hazeran',
        subtitle: 'El Yapımı · Retro Koleksiyon',
        tag: 'SANATSAL',
        images: [
            'images/dekoratif-ayakli-salon-aydinlatmasi-ozel-seri-kapali.webp',
            'images/dekoratif-ayakli-salon-aydinlatmasi-ozel-seri.webp',
            'images/dekoratif-ayakli-salon-aydinlatmasi-ozel-seri-detay1.webp',
            'images/dekoratif-ayakli-salon-aydinlatmasi-ozel-seri-detay2.webp',
            'images/dekoratif-ayakli-salon-aydinlatmasi-ozel-seri-detay3.webp',
            'images/dekoratif-ayakli-salon-aydinlatmasi-ozel-seri-detay4.webp',
            'images/dekoratif-ayakli-salon-aydinlatmasi-ozel-seri-detay5.webp',
            'images/dekoratif-ayakli-salon-aydinlatmasi-ozel-seri-detay6.webp'
        ],
        story: `Dalgaların ve geleneksel motiflerin dansı olan Hokusai, Uzak Doğu'nun sanatsal ruhunu retro bir dokunuşla birleştiriyor. Her açıda farklı bir hikaye anlatan bu eser, bir abajurdan çok daha fazlası.`,
        features: [
            { icon: '🧶', label: 'Malzeme', value: 'Özel baskı kumaş, ipek şeritler' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 60W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 40cm, Yükseklik 50cm' },
            { icon: '🕰', label: 'Üretim', value: 'El yapımı, limitli seri' },
            { icon: '📦', label: 'Teslimat', value: '10-15 iş günü' },
        ],
        etsy: 'https://etsy.com'
    },

    urun18: {
        id: 'urun18',
        name: 'Mintaka',
        subtitle: 'El Yapımı · Retro Koleksiyon',
        tag: '',
        images: [
            'images/dekorasyon-abajur-modelleri-zanaat-ortam-kapali.webp',
            'images/dekorasyon-abajur-modelleri-zanaat-ortam.webp',
            'images/dekorasyon-abajur-modelleri-zanaat-ortam-detay1.webp',
            'images/dekorasyon-abajur-modelleri-zanaat-ortam-detay2.webp',
            'images/dekorasyon-abajur-modelleri-zanaat-ortam-detay3.webp'
        ],
        story: `Evin ve ocağın koruyucusu Vesta'dan ismini alan bu abajur, mekanınıza sıcak bir güven duygusu katar. Retro hatları ve yumuşak renk geçişleriyle gerçek bir ev sıcaklığı.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Kadife doku, toprak tonları' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 40cm, Yükseklik 50cm' },
            { icon: '🕰', label: 'Üretim', value: 'El yapımı' },
            { icon: '📦', label: 'Teslimat', value: '7-10 iş günü' },
        ],
        etsy: 'https://etsy.com'
    },

    urun19: {
        id: 'urun19',
        name: 'Mintaka',
        subtitle: 'El Yapımı · Retro Koleksiyon',
        tag: 'KLASİK',
        images: [
            'images/atmosfer-rahatlatici-nostaljik-antika-abajur-kapali.webp',
            'images/atmosfer-rahatlatici-nostaljik-antika-abajur.webp',
            'images/atmosfer-rahatlatici-nostaljik-antika-abajur-detay1.webp',
            'images/atmosfer-rahatlatici-nostaljik-antika-abajur-detay2.webp',
            'images/atmosfer-rahatlatici-nostaljik-antika-abajur-detay3.webp',
            'images/atmosfer-rahatlatici-nostaljik-antika-abajur-detay4.webp',
            'images/atmosfer-rahatlatici-nostaljik-antika-abajur-detay5.webp',
            'images/atmosfer-rahatlatici-nostaljik-antika-abajur-detay6.webp'
        ],
        story: `Antik çağların doğal formlarından ilham alan Callisto, retro bir estetiği ham dokularla buluşturuyor. Doğadan gelen bir ışık parçasını yaşam alanınıza taşır.`,
        features: [
            { icon: '🌿', label: 'Malzeme', value: 'Doğal lifli kumaş, rustik detaylar' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 40cm, Yükseklik 50cm' },
            { icon: '🕰', label: 'Üretim', value: 'El yapımı, doğal süreçler' },
            { icon: '📦', label: 'Teslimat', value: '7-10 iş günü' },
        ],
        etsy: 'https://etsy.com'
    },

    urun20: {
        id: 'urun20',
        name: 'Antheia',
        subtitle: 'El Yapımı · Retro Koleksiyon',
        tag: 'YENİ',
        images: [
            'images/70ler-60lar-nostaljik-abajur-kapali.webp',
            'images/70ler-60lar-nostaljik-abajur.webp',
            'images/70ler-60lar-nostaljik-abajur-detay1.webp',
            'images/70ler-60lar-nostaljik-abajur-detay2.webp',
            'images/70ler-60lar-nostaljik-abajur-detay3.webp'
        ],
        story: `Çiçek tanrıçası Antheia'dan ilham alan bu tasarım, nostaljik bir bahar esintisini evinize getiriyor. Renkli ama seçkin dokusuyla geçmişin en güzel anılarını canlandırır.`,
        features: [
            { icon: '🌸', label: 'Malzeme', value: 'Desenli Retro kumaş, el oyması ayak' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 40cm, Yükseklik 50cm' },
            { icon: '🕰', label: 'Üretim', value: 'El yapımı, butik tasarım' },
            { icon: '📦', label: 'Teslimat', value: '10-14 iş günü' },
        ],
        etsy: 'https://etsy.com'
    }
};
