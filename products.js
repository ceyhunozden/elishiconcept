// =====================================================
// ÜRÜN VERİLERİ - Buradan kolayca düzenleyebilirsiniz
// =====================================================

const PRODUCTS = {
    urun1: {
        id: 'urun1',
        name: 'Vega',
        subtitle: 'El Yapımı · Timeless Koleksiyon',
        tag: '',
        images: [
            'images/klasik-zamansiz-puskullu-vintage-masa-lambasi-kapali.webp',
            'images/klasik-zamansiz-puskullu-vintage-masa-lambasi.webp',
            'images/klasik-zamansiz-puskullu-vintage-masa-lambasi-detay1.webp',
            'images/klasik-zamansiz-puskullu-vintage-masa-lambasi-detay2.webp',
            'images/klasik-zamansiz-puskullu-vintage-masa-lambasi-detay3.webp'
        ],
        story: `Zarif ve geçişli püskül detaylarıyla hareket kazanan bu özel abajur, klasik ile modern arasında kusursuz bir denge kurar. Pileli form ile elde dikilmiş şapkası ışığı sıcak bir şekilde yayarken, püsküller ortama karakter ve derinlik katar.
        Eskitme antik sarı tonlu metal gövdesi ve akıcı formu sayesinde bulunduğu her alana sofistike bir dokunuş ekler. Ne tamamen retro ne de yalnızca modern—tam anlamıyla zamansız bir tasarım.

        İster minimal bir mekânda vurgu parçası, ister daha zengin dekorasyonlarda tamamlayıcı bir obje… Bu abajur, bulunduğu her ortamda dikkat çeker ama asla yormaz.

        Tamamen özgün ve tek üretimdir. Siparişe göre kişiye özel tasarlanabilir.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Bordo kadife kumaş, el yapımı saçaklar' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 33cm, Yükseklik 71cm' },
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
    },

    urun2: {
        id: 'urun2',
        name: 'Luna',
        subtitle: 'El Yapımı · Maksimalist Koleksiyon',
        tag: '',
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
        story: `Kruvasan formunu andıran özgün siluetiyle bu abajur, Victoria döneminin o zengin ve süslü estetiğini günümüze taşıyan çarpıcı bir tasarım. Katmanlı yapısı ve detaylı el işçiliği sayesinde bulunduğu ortamda geri planda kalmaz; aksine tüm dikkatleri üzerine çeker.
        Şapkayı çevreleyen degrade püsküller, sıcak tonlardan serin renklere akarak tasarıma derinlik ve hareket kazandırır. Ortada yer alan yusufçuk figürü ise yalnızca dekoratif bir detay değil; Antik Mısır’da yeniden doğuş ve dönüşümün simgesi olarak bilinen güçlü bir anlam taşır.

        Tasarımı tamamlayan antik sarı metal ayak, genel estetiği daha da güçlü hale getirir. Modern bir mekânda bile bu kadar gösterişli bir parça, alanı tamamlayan güçlü bir odak noktası haline gelir. Üstelik bu tasarım tamamen özgün ve tek , karakter sahibi bir imza parçası.

        Tamamen özgün ve tek üretimdir. Siparişe göre kişiye özel tasarlanabilir.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Kumaş, yusufçuk figürü, antik sarı metal ayak' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 30cm, Yükseklik 56cm' },
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
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
        story: `Doğal kusurların zarafetiyle şekillenen bu özel abajur, wabi-sabi felsefesinden ilham alan kaidesiyle her mekâna sakin bir karakter katar. El yapımı dokulu yüzeyi, kusursuz olmayanın estetiğini yansıtırken; yumuşak pliseli şapkası ışığı yumuşatarak sıcak bir atmosfer oluşturur.
        Modern ve zamansız bir denge arayanlar için tasarlandı. Her detayında sadelik, her ışığında huzur var.

        Her biri elde üretildi. Siparişe göre renk ve ölçü uyarlanabilir.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Krem-beyaz pileli kumaş' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 60W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 27cm, Yükseklik 70cm' },
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
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
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
    },

    urun5: {
        id: 'urun5',
        name: 'Büyük Capella - Zeytin',
        subtitle: 'El Yapımı · Boho Chic Koleksiyon',
        tag: '',
        images: [
            'images/bohem-nakisli-ozgun-abajur-kapali.webp',
            'images/bohem-nakisli-ozgun-abajur.webp',
            'images/bohem-nakisli-ozgun-abajur-detay1.webp',
            'images/bohem-nakisli-ozgun-abajur-detay2.webp',
            'images/bohem-nakisli-ozgun-abajur-detay3.webp',
            'images/bohem-nakisli-ozgun-abajur-detay4.webp'
        ],
        story: `Stilize hayvan ve bitki figürleriyle, yüzeyi tamamen dolduran, canlı renkleriyle bir hikaye anlatan Meksika halk nakışı ile hepsi elde özenle yapılmıştır. Elde işlendiği için herbiri küçük farklılıklar içerir ve sınırlı sayıda üretilmiştir. Renkli Ponpon detayı ise bu tasarımlara ritim ekler. Her biri elde üretildi. Siparişe göre renk ve ölçü uyarlanabilir.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Zümrüt kumaş, altın aksesuar' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 60W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 25cm, Yükseklik 50cm' },
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
    },

    urun6: {
        id: 'urun6',
        name: 'Küçük Capella - Fuşya',
        subtitle: 'El Yapımı · Boho Chic Koleksiyon',
        tag: '',
        images: [
            'images/mistik-geleneksel-nakisli-kumas-abajur-kapali.webp',
            'images/mistik-geleneksel-nakisli-kumas-abajur.webp',
            'images/mistik-geleneksel-nakisli-kumas-abajur-detay1.webp',
            'images/mistik-geleneksel-nakisli-kumas-abajur-detay2.webp',
            'images/mistik-geleneksel-nakisli-kumas-abajur-detay3.webp'
        ],
        story: `Stilize hayvan ve bitki figürleriyle, yüzeyi tamamen dolduran, canlı renkleriyle bir hikaye anlatan Meksika halk nakışı ile hepsi elde özenle yapılmıştır. Elde işlendiği için herbiri küçük farklılıklar içerir ve sınırlı sayıda üretilmiştir. Renkli Ponpon detayı ise bu tasarımlara ritim ekler. Her biri elde üretildi. Siparişe göre renk ve ölçü uyarlanabilir.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Lüks kumaş, altın varak detaylar' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 25cm, Yükseklik 45cm' },
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
    },
    
    urun7: {
        id: 'urun7',
        name: 'Bella',
        subtitle: 'El Yapımı · Maksimalist Koleksiyon',
        tag: '',
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

        Işık yandığında tüm katmanlar birleşir, kumaşın içinden süzülen sıcak tonlar ve püskülün hareketi bulunduğu ortamda gizlenmeyen bir sahne etkisi yaratır. Tamamen özel tasarım ve tek üretim olmasıyla özgünlük arayanlar için güçlü bir imza niteliği taşır. Tamamen özgün ve tek üretimdir. Siparişe göre kişiye özel tasarlanabilir.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Özel kumaş, degrade püsküller' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 25cm, Yükseklik 80cm' },
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
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
        story: `Sıcak tonlu çizgilerle mekana yumuşak bir ışık yayar. Wabi sabi tarzında şapkasını tamamlayan kaidesi ile uyum içinde. Renkli Ponpon detayı ise bu tasarımlarımıza ayrı bir ritim katar. Her biri elde üretildi. Siparişe göre renk ve ölçü uyarlanabilir.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Seramik kaide, çizgili pileli kumaş' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 60W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 33cm, Yükseklik 42cm' },
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
    },

    urun9: {
        id: 'urun9',
        name: 'Parseus - Kırmızı',
        subtitle: 'El Yapımı · Boho Chic Koleksiyon',
        tag: '',
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
        story: `Sıcak tonlu çizgilerle mekana yumuşak bir ışık yayar. Wabi sabi tarzında şapkasını tamamlayan kaidesi ile uyum içinde. Renkli Ponpon detayı ise bu tasarımlarımıza ayrı bir ritim katar. Her biri elde üretildi. Siparişe göre renk ve ölçü uyarlanabilir.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Seramik kaide, kırmızı pileli kumaş' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 33cm, Yükseklik 42cm' },
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
    },

    urun10: {
        id: 'urun10',
        name: 'Electra Turuncu',
        subtitle: 'El Yapımı · Timeless Koleksiyon',
        tag: '',
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
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
    },

    urun11: {
        id: 'urun11',
        name: 'Electra Çikolata',
        subtitle: 'El Yapımı · Timeless Koleksiyon',
        tag: '',
        images: [
            'images/el-baskisi-country-pileli-rustik-cottage-sapka-kapali.webp',
            'images/el-baskisi-country-pileli-rustik-cottage-sapka.webp',
            'images/el-baskisi-country-pileli-rustik-cottage-sapka-detay1.webp',
            'images/el-baskisi-country-pileli-rustik-cottage-sapka-detay2.webp',
            'images/el-baskisi-country-pileli-rustik-cottage-sapka-detay3.webp'
        ],
        story: `Avcı takımyıldızından ilham alan Orion, güçlü hatları ve zamansız formuyla modern mekanlarda nostaljik bir köprü kuruyor. Keskin ve net duruşu, loş ışığın sıcaklığıyla dengeleniyor.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Sert keten karışımı, el dikişi' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 60W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 32cm, Yükseklik 61cm' },
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
    },

    urun12: {
        id: 'urun12',
        name: 'Vega Bej',
        subtitle: 'El Yapımı · Timeless Koleksiyon',
        tag: '',
        images: [
            'images/modern-pileli-ambiance-butik-tasarim-abajur-kapali.webp',
            'images/modern-pileli-ambiance-butik-tasarim-abajur.webp',
            'images/modern-pileli-ambiance-butik-tasarim-abajur-detay1.webp',
            'images/modern-pileli-ambiance-butik-tasarim-abajur-detay2.webp',
            'images/modern-pileli-ambiance-butik-tasarim-abajur-detay3.webp',
            'images/modern-pileli-ambiance-butik-tasarim-abajur-detay4.webp',
            'images/modern-pileli-ambiance-butik-tasarim-abajur-detay5.webp'
        ],
        story: `Zarif ve püskül detaylarıyla hareket kazanan bu özel abajur, klasik ile modern arasında kusursuz bir denge kurar. Pileli form ile elde dikilmiş şapkası ışığı sıcak bir şekilde yayarken, püsküller ortama karakter ve derinlik katar.
        Eskitme antik sarı tonlu metal gövdesi ve akıcı formu sayesinde bulunduğu her alana sofistike bir dokunuş ekler. Ne tamamen retro ne de yalnızca modern—tam anlamıyla zamansız bir tasarım.

        İster minimal bir mekânda vurgu parçası, ister daha zengin dekorasyonlarda tamamlayıcı bir obje… Bu abajur, bulunduğu her ortamda dikkat çeker ama asla yormaz.

        Tamamen özgün ve tek üretimdir. Siparişe göre kişiye özel tasarlanabilir.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'İnce ipekli kumaş, pirinç aksam' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 33cm, Yükseklik 71cm' },
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
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
        story: `Doğal kusurların zarafetiyle şekillenen bu özel abajur, wabi-sabi felsefesinden ilham alan kaidesiyle her mekâna sakin bir karakter katar. El yapımı dokulu yüzeyi, kusursuz olmayanın estetiğini yansıtırken; yumuşak pliseli şapkası ışığı yumuşatarak sıcak bir atmosfer oluşturur.
        Modern ve zamansız bir denge arayanlar için tasarlandı. Her detayında sadelik, her ışığında huzur var.

        Her biri elde üretildi. Siparişe göre renk ve ölçü uyarlanabilir.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Saf pamuklu keten, vizon renk' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 26cm, Yükseklik 60cm' },
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
    },

    urun14: {
        id: 'urun14',
        name: 'Electra Bej',
        subtitle: 'El Yapımı · Timeless Koleksiyon',
        tag: '',
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
            { icon: '🧵', label: 'Malzeme', value: 'Dantel işlemeli kumaş, altın varak' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 31cm, Yükseklik 63cm' },
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
    },

    urun15: {
        id: 'urun15',
        name: 'Rigel',
        subtitle: 'El Yapımı · Timeless Koleksiyon',
        tag: '',
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
        Amber tonlarında cam kaide, ışıkla birlikte sıcak ve derin bir parıltı oluşturur. Dikey dokulu yüzeyi, ışığı kırarak mekana yumuşak bir yayılım kazandırır.
        Desenin yoğun karakteri ile camın sade ama güçlü formu dengeli bir uyum içindedir. Bu birliktelik, ürünü sadece bir aydınlatma değil, bulunduğu ortamda kolayca fark edilen bir odak objesi haline getirir. Tamamen özgün ve tek üretimdir. Siparişe göre kişiye özel tasarlanabilir.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'William Morris Strawberry Thief kumaş, Amber cam kaide' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 45cm, Yükseklik 71cm' },
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
    },

    urun17: {
        id: 'urun17',
        name: 'Mintaka Hazeran',
        subtitle: 'El Yapımı · Retro Koleksiyon',
        tag: '',
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
        story: `Retro karakteriyle öne çıkan bu abajur, özellikle 70’lerin grafik desen anlayışını günümüze taşır. Dönemin cesur tekrarları ve geometrik ritmi, şapkadaki desenle güçlü bir görsel etki yaratır.
        İroko ağacından üretilen kaide, sıcak tonları ve akıcı formuyla tasarıma doğal bir denge kazandırır. Ahşabın kendine has dokusu, retro desenin enerjisini yumuşatarak daha rafine bir bütünlük oluşturur. Şapka ve kaide arasındaki bu uyum, ürünü sadece bir aydınlatma objesi olmaktan çıkarır; bulunduğu ortamda karakterli ve dikkat çeken bir odak noktası haline getirir.

        Tamamen özgün ve tek üretimdir. Siparişe göre kişiye özel tasarlanabilir.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Özel baskı kumaş, İroko ağacı kaide' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 60W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 40cm, Yükseklik 50cm' },
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
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
        story: `Retro karakteriyle öne çıkan bu abajur, özellikle 70’lerin grafik desen anlayışını günümüze taşır. Dönemin cesur tekrarları ve geometrik ritmi, şapkadaki desenle güçlü bir görsel etki yaratır.
        İroko ağacından üretilen kaide, sıcak tonları ve akıcı formuyla tasarıma doğal bir denge kazandırır. Ahşabın kendine has dokusu, retro desenin enerjisini yumuşatarak daha rafine bir bütünlük oluşturur. Şapka ve kaide arasındaki bu uyum, ürünü sadece bir aydınlatma objesi olmaktan çıkarır; bulunduğu ortamda karakterli ve dikkat çeken bir odak noktası haline getirir.

        Tamamen özgün ve tek üretimdir. Siparişe göre kişiye özel tasarlanabilir.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Kadife doku, toprak tonları, İroko ağacı kaide' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 40cm, Yükseklik 50cm' },
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
    },

    urun19: {
        id: 'urun19',
        name: 'Mintaka',
        subtitle: 'El Yapımı · Retro Koleksiyon',
        tag: '',
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
        story: `Retro karakteriyle öne çıkan bu abajur, özellikle 70’lerin grafik desen anlayışını günümüze taşır. Dönemin cesur tekrarları ve geometrik ritmi, şapkadaki desenle güçlü bir görsel etki yaratır.
        İroko ağacından üretilen kaide, sıcak tonları ve akıcı formuyla tasarıma doğal bir denge kazandırır. Ahşabın kendine has dokusu, retro desenin enerjisini yumuşatarak daha rafine bir bütünlük oluşturur. Şapka ve kaide arasındaki bu uyum, ürünü sadece bir aydınlatma objesi olmaktan çıkarır; bulunduğu ortamda karakterli ve dikkat çeken bir odak noktası haline getirir.

        Tamamen özgün ve tek üretimdir. Siparişe göre kişiye özel tasarlanabilir.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Doğal lifli kumaş, rustik detaylar, İroko ağacı kaide' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 40cm, Yükseklik 50cm' },
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
    },

    urun20: {
        id: 'urun20',
        name: 'Antheia',
        subtitle: 'El Yapımı · Retro Koleksiyon',
        tag: '',
        images: [
            'images/70ler-60lar-nostaljik-abajur-kapali.webp',
            'images/70ler-60lar-nostaljik-abajur.webp',
            'images/70ler-60lar-nostaljik-abajur-detay1.webp',
            'images/70ler-60lar-nostaljik-abajur-detay2.webp',
            'images/70ler-60lar-nostaljik-abajur-detay3.webp'
        ],
        story: `70’lerin cesur grafik dilinden ilham alan bu abajur, mekâna güçlü bir karakter kazandırır. 

        İroko ağacından üretilen kaide, sıcak tonları ve doğal dokusuyla tasarımı dengelerken, desenin enerjisini rafine bir estetiğe taşır. Sıradan bir aydınlatma değil; bulunduğu alanda kendini hissettiren, imza niteliğinde bir parçadır.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Desenli Retro kumaş, İroko ağacı kaide' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 40cm, Yükseklik 50cm' },
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
    }
};
