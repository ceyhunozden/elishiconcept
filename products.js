// =====================================================
// ÜRÜN VERİLERİ - Buradan kolayca düzenleyebilirsiniz
// =====================================================

const PRODUCTS = {
    urun1: {
        id: 'urun1',
        name: 'Vega',
        subtitle: 'El Yapımı · Timeless Koleksiyon',
        subtitle_en: 'Handmade · Timeless Collection',
        tag: '',
        images: [
            'images/klasik-zamansiz-puskullu-vintage-masa-lambasi-kapali.webp',
            'images/klasik-zamansiz-puskullu-vintage-masa-lambasi.webp',
            'images/klasik-zamansiz-puskullu-vintage-masa-lambasi-detay1.webp',
            'images/klasik-zamansiz-puskullu-vintage-masa-lambasi-detay2.webp',
            'images/klasik-zamansiz-puskullu-vintage-masa-lambasi-detay3.webp',
            'images/klasik-zamansiz-puskullu-vintage-masa-lambasi-detay4.webp'
        ],
        story: `Zarif ve geçişli püskül detaylarıyla hareket kazanan bu özel abajur, klasik ile modern arasında kusursuz bir denge kurar. Pileli form ile elde dikilmiş şapkası ışığı sıcak bir şekilde yayarken, püsküller ortama karakter ve derinlik katar.
        Eskitme antik sarı tonlu metal gövdesi ve akıcı formu sayesinde bulunduğu her alana sofistike bir dokunuş ekler. Ne tamamen retro ne de yalnızca modern, tam anlamıyla zamansız bir tasarım.

        İster minimal bir mekânda vurgu parçası, ister daha zengin dekorasyonlarda tamamlayıcı bir obje… Bu abajur, bulunduğu her ortamda dikkat çeker ama asla yormaz.

        Siparişe göre kişiye özel tasarlanabilir.`,
        story_en: `Gaining movement with elegant and transitional tassel details, this special lampshade strikes a perfect balance between classic and modern. While its hand-stitched pleated hat spreads the light warmly, the tassels add character and depth to the environment.
        Thanks to its distressed antique yellow toned metal body and fluid form, it adds a sophisticated touch to any space it is in. Neither entirely retro nor purely modern, it is a truly timeless design.

        Whether as an accent piece in a minimal space or a complementary object in richer decorations... This lampshade attracts attention in any environment but never tires the eyes.

        Can be custom designed to order.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Kumaş, antik sarı metal ayak.', label_en: 'Material', value_en: 'Fabric, antique yellow metal base.' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W', label_en: 'Socket Type', value_en: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 33cm, Yükseklik 71cm', label_en: 'Size', value_en: 'Width 33cm, Height 71cm' },
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
    },

    urun2: {
        id: 'urun2',
        name: 'Luna',
        subtitle: 'El Yapımı · Maksimalist Koleksiyon',
        subtitle_en: 'Handmade · Maximalist Collection',
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
            'images/antik-retro-kruvasan-maximalist-abajur-detay7.webp',
            'images/antik-retro-kruvasan-maximalist-abajur-detay8.webp'
        ],
        story: `Kruvasan formunu andıran özgün siluetiyle bu abajur, Victoria döneminin o zengin ve süslü estetiğini günümüze taşıyan çarpıcı bir tasarım. Katmanlı yapısı ve detaylı el işçiliği sayesinde bulunduğu ortamda geri planda kalmaz; aksine tüm dikkatleri üzerine çeker.
        Şapkayı çevreleyen degrade püsküller, sıcak tonlardan serin renklere akarak tasarıma derinlik ve hareket kazandırır. Ortada yer alan yusufçuk figürü ise yalnızca dekoratif bir detay değil; Antik Mısır’da yeniden doğuş ve dönüşümün simgesi olarak bilinen güçlü bir anlam taşır.

        Tasarımı tamamlayan antik sarı metal ayak, genel estetiği daha da güçlü hale getirir. Modern bir mekânda bile bu kadar gösterişli bir parça, alanı tamamlayan güçlü bir odak noktası haline gelir. Üstelik bu tasarım tamamen özgün ve tek , karakter sahibi bir imza parçası.

        Tamamen özgün ve tek üretimdir. Siparişe göre kişiye özel tasarlanabilir.`,
        story_en: `With its unique silhouette resembling a croissant form, this lampshade is a striking design that brings the rich and ornate aesthetic of the Victorian era to the present day. Thanks to its layered structure and detailed hand craftsmanship, it does not stay in the background; on the contrary, it draws all attention.
        The gradient tassels surrounding the hat flow from warm tones to cool colors, adding depth and movement to the design. The dragonfly figure in the middle is not just a decorative detail; it carries a powerful meaning known as the symbol of rebirth and transformation in Ancient Egypt.

        The antique yellow metal base completing the design makes the overall aesthetic even stronger. Even in a modern space, such a flamboyant piece becomes a powerful focal point that completes the area. Moreover, this design is completely original and unique, a signature piece with character.

        It is a completely original and single production. Can be custom designed to order.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Kumaş, antik sarı pirinç ayak.', label_en: 'Material', value_en: 'Fabric, antique yellow brass base.' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W', label_en: 'Socket Type', value_en: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 30cm, Yükseklik 56cm', label_en: 'Size', value_en: 'Width 30cm, Height 56cm' },
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
    },

    urun3: {
        id: 'urun3',
        name: 'Maia',
        subtitle: 'El Yapımı · Minimalist Koleksiyon',
        subtitle_en: 'Handmade · Minimalist Collection',
        tag: '',
        images: [
            'images/elegance-soft-minimalist-seramik-abajur-kapali.webp',
            'images/elegance-soft-minimalist-seramik-abajur.webp',
            'images/elegance-soft-minimalist-seramik-abajur-detay1.webp',
            'images/elegance-soft-minimalist-seramik-abajur-detay2.webp',
            'images/elegance-soft-minimalist-seramik-abajur-detay3.webp',
            'images/elegance-soft-minimalist-seramik-abajur-detay4.webp',
            'images/elegance-soft-minimalist-seramik-abajur-detay5.webp'
        ],
        story: `Doğal kusurların zarafetiyle şekillenen bu özel abajur, wabi-sabi felsefesinden ilham alan kaidesiyle her mekâna sakin bir karakter katar. El yapımı dokulu yüzeyi, kusursuz olmayanın estetiğini yansıtırken; yumuşak pliseli şapkası ışığı yumuşatarak sıcak bir atmosfer oluşturur.
        Modern ve zamansız bir denge arayanlar için tasarlandı. Her detayında sadelik, her ışığında huzur var.

        Her biri elde üretildi. Siparişe göre renk ve ölçü uyarlanabilir.`,
        story_en: `Shaped by the elegance of natural flaws, this special lampshade adds a calm character to any space with its base inspired by the wabi-sabi philosophy. Its handmade textured surface reflects the aesthetic of the imperfect; while its soft pleated hat creates a warm atmosphere by softening the light.
        Designed for those seeking a modern and timeless balance. There is simplicity in every detail, peace in every light.

        Each one is handmade. Color and size can be adapted to order.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Krem/Beyaz kumaş, seramik ayak.', label_en: 'Material', value_en: 'Cream/White fabric, ceramic base.' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 60W', label_en: 'Socket Type', value_en: 'E27, max 60W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 27cm, Yükseklik 70cm', label_en: 'Size', value_en: 'Width 27cm, Height 70cm' },
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
    },

    urun4: {
        id: 'urun4',
        name: 'Spica',
        subtitle: 'El Yapımı · Minimalist Koleksiyon',
        subtitle_en: 'Handmade · Minimalist Collection',
        tag: '',
        images: [
            'images/boho-zarif-pileli-cozy-abajur-kapali.webp',
            'images/boho-zarif-pileli-cozy-abajur.webp',
            'images/boho-zarif-pileli-cozy-abajur-detay1.webp',
            'images/boho-zarif-pileli-cozy-abajur-detay2.webp'
        ],
        story: `Pileli abajur şapkası, ışığı yumuşatarak ortama dengeli ve sakin bir aydınlatma sunar. Katmanlı yapısı sayesinde ışık doğrudan değil, süzülerek yayılır ve mekanda huzurlu bir atmosfer oluşturur.
        Kaide tasarımı, Japon estetik anlayışı olan Wabi-Sabi felsefesinden ilham alır. Kusursuzluk yerine doğallığı, pürüzsüzlük yerine dokuyu ön plana çıkarır. El işçiligi hissi veren yüzeyi, her ürünü kendine özgü kılar.

        Minimal formu ve nötr tonlarıyla hem modern hem de zamansız bir karakter taşır. Mekana sadece bir ışık kaynağı değil, aynı zamanda dingin bir obje olarak dahil olur. Siparişe göre kişiye özel tasarlanabilir.`,
        story_en: `The pleated lampshade hat softens the light, offering a balanced and calm illumination to the environment. Thanks to its layered structure, the light spreads not directly but by filtering through, creating a peaceful atmosphere in the space.
        The base design is inspired by the Wabi-Sabi philosophy, a Japanese aesthetic understanding. It highlights naturalness instead of perfection, and texture instead of smoothness. Its surface, giving a handcrafted feel, makes each product unique.

        With its minimal form and neutral tones, it carries both a modern and timeless character. It is included in the space not just as a light source, but also as a serene object. Can be custom designed to order.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Pvc, seramik ayak.', label_en: 'Material', value_en: 'PVC, ceramic base.' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W', label_en: 'Socket Type', value_en: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 35cm, Yükseklik 65cm', label_en: 'Size', value_en: 'Width 35cm, Height 65cm' },
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
    },

    urun5: {
        id: 'urun5',
        name: 'Büyük Capella - Zeytin',
        subtitle: 'El Yapımı · Boho Chic Koleksiyon',
        subtitle_en: 'Handmade · Boho Chic Collection',
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
        story_en: `They are all carefully handmade with Mexican folk embroidery that tells a story with vibrant colors, completely filling the surface with stylized animal and plant figures. Since they are hand-embroidered, each contains minor differences and is produced in limited numbers. The colorful Pompon detail adds rhythm to these designs. Each one is handmade. Color and size can be adapted to order.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Otantik el nakışı, seramik ayak.', label_en: 'Material', value_en: 'Authentic hand embroidery, ceramic base.' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 60W', label_en: 'Socket Type', value_en: 'E27, max 60W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 25cm, Yükseklik 50cm', label_en: 'Size', value_en: 'Width 25cm, Height 50cm' },
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
    },

    urun6: {
        id: 'urun6',
        name: 'Küçük Capella - Fuşya',
        subtitle: 'El Yapımı · Boho Chic Koleksiyon',
        subtitle_en: 'Handmade · Boho Chic Collection',
        tag: '',
        images: [
            'images/mistik-geleneksel-nakisli-kumas-abajur-kapali.webp',
            'images/mistik-geleneksel-nakisli-kumas-abajur.webp',
            'images/mistik-geleneksel-nakisli-kumas-abajur-detay1.webp',
            'images/mistik-geleneksel-nakisli-kumas-abajur-detay2.webp',
            'images/mistik-geleneksel-nakisli-kumas-abajur-detay3.webp',
            'images/mistik-geleneksel-nakisli-kumas-abajur-detay4.webp',
            'images/mistik-geleneksel-nakisli-kumas-abajur-detay5.webp'
        ],
        story: `Stilize hayvan ve bitki figürleriyle, yüzeyi tamamen dolduran, canlı renkleriyle bir hikaye anlatan Meksika halk nakışı ile hepsi elde özenle yapılmıştır. Elde işlendiği için herbiri küçük farklılıklar içerir ve sınırlı sayıda üretilmiştir. Renkli Ponpon detayı ise bu tasarımlara ritim ekler. Her biri elde üretildi. Siparişe göre renk ve ölçü uyarlanabilir.`,
        story_en: `They are all carefully handmade with Mexican folk embroidery that tells a story with vibrant colors, completely filling the surface with stylized animal and plant figures. Since they are hand-embroidered, each contains minor differences and is produced in limited numbers. The colorful Pompon detail adds rhythm to these designs. Each one is handmade. Color and size can be adapted to order.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Otantik el nakışı, seramik ayak.', label_en: 'Material', value_en: 'Authentic hand embroidery, ceramic base.' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W', label_en: 'Socket Type', value_en: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 25cm, Yükseklik 45cm', label_en: 'Size', value_en: 'Width 25cm, Height 45cm' },
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
    },
    
    urun7: {
        id: 'urun7',
        name: 'Bella',
        subtitle: 'El Yapımı · Maksimalist Koleksiyon',
        subtitle_en: 'Handmade · Maximalist Collection',
        tag: '',
        images: [
            'images/timeless-ozel-tasarim-elisi-puskullu-vintage-abajur-kapali.webp',
            'images/timeless-ozel-tasarim-elisi-puskullu-vintage-abajur.webp',
            'images/timeless-ozel-tasarim-elisi-puskullu-vintage-abajur-detay1.webp',
            'images/timeless-ozel-tasarim-elisi-puskullu-vintage-abajur-detay2.webp',
            'images/timeless-ozel-tasarim-elisi-puskullu-vintage-abajur-detay3.webp',
            'images/timeless-ozel-tasarim-elisi-puskullu-vintage-abajur-detay4.webp',
            'images/timeless-ozel-tasarim-elisi-puskullu-vintage-abajur-detay5.webp'
        ],
        story: `Victoria döneminin gösterişli estetiğini günümüze taşıyan bu özel tasarım abajur, sıradan bir aydınlatma objesinin ötesindedir. Açılmamış lale formu, ışıkla birlikte yeniden yorumlanır.

        Degrade püsküller mor ve sıcak tonlar arasında akarak tasarıma hareket ve derinlik ekler. Kumaş, renk ve aksesuarlar rastlantısal değil, bütüncül bir uyumla seçilmiştir.

        Işık yandığında tüm katmanlar birleşir, kumaşın içinden süzülen sıcak tonlar ve püskülün hareketi bulunduğu ortamda gizlenmeyen bir sahne etkisi yaratır. Tamamen özel tasarım ve tek üretim olmasıyla özgünlük arayanlar için güçlü bir imza niteliği taşır. Tamamen özgün ve tek üretimdir. Siparişe göre kişiye özel tasarlanabilir.`,
        story_en: `Bringing the flamboyant aesthetic of the Victorian era to the present day, this special design lampshade goes beyond an ordinary lighting object. The unopened tulip form is reinterpreted with light.

        Gradient tassels flow between purple and warm tones, adding movement and depth to the design. Fabric, color, and accessories are not random but chosen with holistic harmony.

        When the light turns on, all layers combine, the warm tones filtering through the fabric and the movement of the tassel create an undeniable stage effect in its environment. Being a completely special design and single production, it carries a strong signature quality for those seeking originality. It is completely original and a single production. Can be custom designed to order.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Özel kumaş, degrade püsküller, metal ayak.', label_en: 'Material', value_en: 'Custom fabric, gradient tassels, metal base.' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W', label_en: 'Socket Type', value_en: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 25cm, Yükseklik 80cm', label_en: 'Size', value_en: 'Width 25cm, Height 80cm' },
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
    },

    urun8: {
        id: 'urun8',
        name: 'Parseus - Sarı',
        subtitle: 'El Yapımı · Boho Chic Koleksiyon',
        subtitle_en: 'Handmade · Boho Chic Collection',
        tag: '',
        images: [
            'images/piliseli-modern-abajur-kapali.webp',
            'images/piliseli-modern-abajur.webp',
            'images/piliseli-modern-abajur-detay1.webp',
            'images/piliseli-modern-abajur-detay2.webp',
            'images/piliseli-modern-abajur-detay3.webp',
            'images/piliseli-modern-abajur-detay4.webp',
            'images/piliseli-modern-abajur-detay5.webp',
            'images/piliseli-modern-abajur-detay6.webp'
        ],
        story: `Sıcak tonlu çizgilerle mekana yumuşak bir ışık yayar. Wabi sabi tarzında şapkasını tamamlayan kaidesi ile uyum içinde. Renkli Ponpon detayı ise bu tasarımlarımıza ayrı bir ritim katar. Her biri elde üretildi. Siparişe göre renk ve ölçü uyarlanabilir.`,
        story_en: `It emits a soft light into the space with its warm-toned lines. In harmony with its base that complements its wabi-sabi style hat. The colorful Pompon detail adds a distinct rhythm to these designs. Each one is handmade. Color and size can be adapted to order.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Kumaş, seramik ayak.', label_en: 'Material', value_en: 'Fabric, ceramic base.' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 60W', label_en: 'Socket Type', value_en: 'E27, max 60W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 33cm, Yükseklik 42cm', label_en: 'Size', value_en: 'Width 33cm, Height 42cm' },
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
    },

    urun9: {
        id: 'urun9',
        name: 'Parseus - Kırmızı',
        subtitle: 'El Yapımı · Boho Chic Koleksiyon',
        subtitle_en: 'Handmade · Boho Chic Collection',
        tag: '',
        images: [
            'images/modern-pileli-kumas-abajur-kapali.webp',
            'images/modern-pileli-kumas-abajur.webp',
            'images/modern-pileli-kumas-abajur-detay1.webp',
            'images/modern-pileli-kumas-abajur-detay2.webp',
            'images/modern-pileli-kumas-abajur-detay3.webp',
            'images/modern-pileli-kumas-abajur-detay4.webp',
            'images/modern-pileli-kumas-abajur-detay5.webp',
            'images/modern-pileli-kumas-abajur-detay6.webp',
            'images/modern-pileli-kumas-abajur-detay7.webp'
        ],
        story: `Sıcak tonlu çizgilerle mekana yumuşak bir ışık yayar. Wabi sabi tarzında şapkasını tamamlayan kaidesi ile uyum içinde. Renkli Ponpon detayı ise bu tasarımlarımıza ayrı bir ritim katar. Her biri elde üretildi. Siparişe göre renk ve ölçü uyarlanabilir.`,
        story_en: `It emits a soft light into the space with its warm-toned lines. In harmony with its base that complements its wabi-sabi style hat. The colorful Pompon detail adds a distinct rhythm to these designs. Each one is handmade. Color and size can be adapted to order.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Kumaş, seramik ayak.', label_en: 'Material', value_en: 'Fabric, ceramic base.' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W', label_en: 'Socket Type', value_en: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 33cm, Yükseklik 42cm', label_en: 'Size', value_en: 'Width 33cm, Height 42cm' },
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
    },

    urun10: {
        id: 'urun10',
        name: 'Electra Turuncu',
        subtitle: 'El Yapımı · Timeless Koleksiyon',
        subtitle_en: 'Handmade · Timeless Collection',
        tag: '',
        images: [
            'images/el-baskisi-kumas-pileli-yatak-odasi-abajur-kapali.webp',
            'images/el-baskisi-kumas-pileli-yatak-odasi-abajur.webp',
            'images/el-baskisi-kumas-pileli-yatak-odasi-abajur-detay1.webp',
            'images/el-baskisi-kumas-pileli-yatak-odasi-abajur-detay2.webp',
            'images/el-baskisi-kumas-pileli-yatak-odasi-abajur-detay3.webp',
            'images/el-baskisi-kumas-pileli-yatak-odasi-abajur-detay4.webp',
            'images/el-baskisi-kumas-pileli-yatak-odasi-abajur-detay5.webp'
        ],
        story: `Canlı turuncu tonlarıyla dikkat çeken bu abajur, el baskısı otantik hint kumaşı sayesinde her yüzeyinde karakter taşır. Pileli formu elde dikilerek şekillendirilmiş, ve biyeleri ile işçiliğin dokusu gözle görülür bir ritim yaratır.
        Yeşil tonlarda boyanmış ahşap ayağı, klasik formu modern bir yalınlıkla dengeler. İnce silueti ve dengeli oranlarıyla hem dekoratif hem de sıcak bir aydınlatma objesi olarak mekana sakin ama iddialı bir kimlik kazandırır.

        Siparişe göre kişiye özel tasarlanabilir.`,
        story_en: `Drawing attention with its vibrant orange tones, this lampshade carries character on every surface thanks to its hand-printed authentic Indian fabric. Its pleated form is shaped by hand-stitching, and the texture of the craftsmanship creates a visible rhythm with its pipings.
        Its wooden base painted in green tones balances the classic form with modern simplicity. With its slim silhouette and balanced proportions, it gives the space a calm yet assertive identity as both a decorative and warm lighting object.

        Can be custom designed to order.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Kumaş, ahşap.', label_en: 'Material', value_en: 'Fabric, wood.' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W', label_en: 'Socket Type', value_en: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 32cm, Yükseklik 56cm', label_en: 'Size', value_en: 'Width 32cm, Height 56cm' },
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
    },

    urun11: {
        id: 'urun11',
        name: 'Electra Çikolata',
        subtitle: 'El Yapımı · Timeless Koleksiyon',
        subtitle_en: 'Handmade · Timeless Collection',
        tag: '',
        images: [
            'images/el-baskisi-country-pileli-rustik-cottage-sapka-kapali.webp',
            'images/el-baskisi-country-pileli-rustik-cottage-sapka.webp',
            'images/el-baskisi-country-pileli-rustik-cottage-sapka-detay1.webp',
            'images/el-baskisi-country-pileli-rustik-cottage-sapka-detay2.webp',
            'images/el-baskisi-country-pileli-rustik-cottage-sapka-detay3.webp',
            'images/el-baskisi-country-pileli-rustik-cottage-sapka-detay4.webp'
        ],
        story: `Avcı takımyıldızından ilham alan Orion, güçlü hatları ve zamansız formuyla modern mekanlarda nostaljik bir köprü kuruyor. Keskin ve net duruşu, loş ışığın sıcaklığıyla dengeleniyor.`,
        story_en: `Inspired by the Orion constellation, Orion builds a nostalgic bridge in modern spaces with its strong lines and timeless form. Its sharp and clear stance is balanced by the warmth of dim light.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Kumaş, ahşap.', label_en: 'Material', value_en: 'Fabric, wood.' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 60W', label_en: 'Socket Type', value_en: 'E27, max 60W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 32cm, Yükseklik 61cm', label_en: 'Size', value_en: 'Width 32cm, Height 61cm' },
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
    },

    urun12: {
        id: 'urun12',
        name: 'Vega Bej',
        subtitle: 'El Yapımı · Timeless Koleksiyon',
        subtitle_en: 'Handmade · Timeless Collection',
        tag: '',
        images: [
            'images/modern-pileli-ambiance-butik-tasarim-abajur-kapali.webp',
            'images/modern-pileli-ambiance-butik-tasarim-abajur.webp',
            'images/modern-pileli-ambiance-butik-tasarim-abajur-detay1.webp',
            'images/modern-pileli-ambiance-butik-tasarim-abajur-detay2.webp',
            'images/modern-pileli-ambiance-butik-tasarim-abajur-detay3.webp',
            'images/modern-pileli-ambiance-butik-tasarim-abajur-detay4.webp',
            'images/modern-pileli-ambiance-butik-tasarim-abajur-detay5.webp',
            'images/modern-pileli-ambiance-butik-tasarim-abajur-detay6.webp'
        ],
        story: `Zarif ve püskül detaylarıyla hareket kazanan bu özel abajur, klasik ile modern arasında kusursuz bir denge kurar. Pileli form ile elde dikilmiş şapkası ışığı sıcak bir şekilde yayarken, püsküller ortama karakter ve derinlik katar.
        Eskitme antik sarı tonlu metal gövdesi ve akıcı formu sayesinde bulunduğu her alana sofistike bir dokunuş ekler. Ne tamamen retro ne de yalnızca modern, tam anlamıyla zamansız bir tasarım.

        İster minimal bir mekânda vurgu parçası, ister daha zengin dekorasyonlarda tamamlayıcı bir obje… Bu abajur, bulunduğu her ortamda dikkat çeker ama asla yormaz.

        Siparişe göre kişiye özel tasarlanabilir.`,
        story_en: `Gaining movement with elegant and tassel details, this special lampshade strikes a perfect balance between classic and modern. While its hand-stitched pleated hat spreads the light warmly, the tassels add character and depth to the environment.
        Thanks to its distressed antique yellow toned metal body and fluid form, it adds a sophisticated touch to any space it is in. Neither entirely retro nor purely modern, it is a truly timeless design.

        Whether as an accent piece in a minimal space or a complementary object in richer decorations... This lampshade attracts attention in any environment but never tires the eyes.

        Can be custom designed to order.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'İpek kumaş, antik sarı metal ayak.', label_en: 'Material', value_en: 'Silk fabric, antique yellow metal base.' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W', label_en: 'Socket Type', value_en: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 33cm, Yükseklik 70cm', label_en: 'Size', value_en: 'Width 33cm, Height 70cm' },
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
    },

    urun13: {
        id: 'urun13',
        name: 'Maia Cam',
        subtitle: 'El Yapımı · Minimalist Koleksiyon',
        subtitle_en: 'Handmade · Minimalist Collection',
        tag: '',
        images: [
            'images/minimalist-modern-cam-ozel-seri-abajur-kapali.webp',
            'images/minimalist-modern-cam-ozel-seri-abajur.webp',
            'images/minimalist-modern-cam-ozel-seri-abajur-detay1.webp',
            'images/minimalist-modern-cam-ozel-seri-abajur-detay2.webp',
            'images/minimalist-modern-cam-ozel-seri-abajur-detay3.webp',
            'images/minimalist-modern-cam-ozel-seri-abajur-detay4.webp',
            'images/minimalist-modern-cam-ozel-seri-abajur-detay5.webp'
        ],
        story: `Doğal kusurların zarafetiyle şekillenen bu özel abajur, wabi-sabi felsefesinden ilham alan kaidesiyle her mekâna sakin bir karakter katar. El yapımı dokulu yüzeyi, kusursuz olmayanın estetiğini yansıtırken; yumuşak pliseli şapkası ışığı yumuşatarak sıcak bir atmosfer oluşturur.
        Modern ve zamansız bir denge arayanlar için tasarlandı. Her detayında sadelik, her ışığında huzur var.

        Her biri elde üretildi. Siparişe göre renk ve ölçü uyarlanabilir.`,
        story_en: `Shaped by the elegance of natural flaws, this special lampshade adds a calm character to any space with its base inspired by the wabi-sabi philosophy. Its handmade textured surface reflects the aesthetic of the imperfect; while its soft pleated hat creates a warm atmosphere by softening the light.
        Designed for those seeking a modern and timeless balance. There is simplicity in every detail, peace in every light.

        Each one is handmade. Color and size can be adapted to order.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Krem/Beyaz kumaş, üfleme cam kaide, sarı metal ayak.', label_en: 'Material', value_en: 'Cream/White fabric, blown glass base, yellow metal base.' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W', label_en: 'Socket Type', value_en: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 26cm, Yükseklik 60cm', label_en: 'Size', value_en: 'Width 26cm, Height 60cm' },
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
    },

    urun14: {
        id: 'urun14',
        name: 'Electra Bej',
        subtitle: 'El Yapımı · Timeless Koleksiyon',
        subtitle_en: 'Handmade · Timeless Collection',
        tag: '',
        images: [
            'images/el-baskisi-country-pileli-rustik-gece-lambasi-kapali.webp',
            'images/el-baskisi-country-pileli-rustik-gece-lambasi.webp',
            'images/el-baskisi-country-pileli-rustik-gece-lambasi-detay1.webp',
            'images/el-baskisi-country-pileli-rustik-gece-lambasi-detay2.webp',
            'images/el-baskisi-country-pileli-rustik-gece-lambasi-detay3.webp',
            'images/el-baskisi-country-pileli-rustik-gece-lambasi-detay4.webp',
            'images/el-baskisi-country-pileli-rustik-gece-lambasi-detay5.webp'
        ],
        story: `Doğal dokular ve zarif detaylarla öne çıkan bu cottage stil abajur, yaşam alanına yumuşak ve samimi bir atmosfer kazandırır. Açık ton zemin üzerine uygulanan otantik Hint el baskısı kumaş, her parçaya karakter ve hikâye katar.

        El işçiliğiyle hazırlanmış pileli şapka, ışığı nazikçe süzerken; çevresini saran bordo şerit biye ve ince yeşil biye detayı tasarıma incelikli bir kontrast verir. Gövdedeki ahşap torna ayak, sıcak ve doğal bir duruş sunarken; yanındaki püskül detayı klasik dokunuşu tamamlar.

        El dikişiyle şekillenen bu özel parça, hem dekoratif bir vurgu hem de huzurlu bir aydınlatma sunar. Siparişe göre kişiye özel tasarlanabilir.`,
        story_en: `Standing out with natural textures and elegant details, this cottage style lampshade brings a soft and intimate atmosphere to the living space. The authentic Indian hand-printed fabric applied on a light-toned background adds character and story to each piece.

        While the handcrafted pleated hat gently filters the light; the burgundy ribbon piping surrounding it and the fine green piping detail give the design a subtle contrast. The wooden turned base on the body offers a warm and natural stance; the tassel detail next to it completes the classic touch.

        Shaped by hand stitching, this special piece offers both a decorative accent and peaceful lighting. Can be custom designed to order.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Kumaş, ahşap.', label_en: 'Material', value_en: 'Fabric, wood.' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W', label_en: 'Socket Type', value_en: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 31cm, Yükseklik 63cm', label_en: 'Size', value_en: 'Width 31cm, Height 63cm' },
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
    },

    urun15: {
        id: 'urun15',
        name: 'Rigel',
        subtitle: 'El Yapımı · Timeless Koleksiyon',
        subtitle_en: 'Handmade · Timeless Collection',
        tag: '',
        images: [
            'images/artisan-kraft-aydinlatma-koleksiyon-william-morris-abajur-kapali.webp',
            'images/artisan-kraft-aydinlatma-koleksiyon-william-morris-abajur.webp',
            'images/artisan-kraft-aydinlatma-koleksiyon-william-morris-abajur-detay1.webp',
            'images/artisan-kraft-aydinlatma-koleksiyon-william-morris-abajur-detay2.webp',
            'images/artisan-kraft-aydinlatma-koleksiyon-william-morris-abajur-detay3.webp',
            'images/artisan-kraft-aydinlatma-koleksiyon-william-morris-abajur-detay4.webp',
            'images/artisan-kraft-aydinlatma-koleksiyon-william-morris-abajur-detay5.webp',
            'images/artisan-kraft-aydinlatma-koleksiyon-william-morris-abajur-detay6.webp',
            'images/artisan-kraft-aydinlatma-koleksiyon-william-morris-abajur-detay7.webp'
        ],
        story: `Abajur şapkası, William Morris’in ikonik deseni Strawberry Thief (Çilek Hırsızı) ile tasarlanmıştır. Doğadan ilham alan bu zengin kompozisyon, kuşlar ve bitkisel motiflerle yüzeyde adeta canlı bir hikaye kurar.
        Amber tonlarında cam kaide, ışıkla birlikte sıcak ve derin bir parıltı oluşturur. Dikey dokulu yüzeyi, ışığı kırarak mekana yumuşak bir yayılım kazandırır.
        Desenin yoğun karakteri ile camın sade ama güçlü formu dengeli bir uyum içindedir. Bu birliktelik, ürünü sadece bir aydınlatma değil, bulunduğu ortamda kolayca fark edilen bir odak objesi haline getirir. Siparişe göre kişiye özel tasarlanabilir.`,
        story_en: `The lampshade hat is designed with William Morris's iconic pattern Strawberry Thief. This rich composition inspired by nature creates almost a living story on the surface with birds and floral motifs.
        The amber-toned glass base creates a warm and deep glow along with the light. Its vertically textured surface refracts the light, giving the space a soft diffusion.
        The intense character of the pattern and the simple yet strong form of the glass are in balanced harmony. This togetherness makes the product not just a lighting fixture, but an easily noticed focal object in its environment. Can be custom designed to order.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'William Morris Strawberry Thief kumaş, üfleme amber cam kaide, sarı metal ayak.', label_en: 'Material', value_en: 'William Morris Strawberry Thief fabric, blown amber glass base, yellow metal base.' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W', label_en: 'Socket Type', value_en: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 45cm, Yükseklik 70cm', label_en: 'Size', value_en: 'Width 45cm, Height 70cm' },
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
    },

    urun17: {
        id: 'urun17',
        name: 'Mintaka Hazeran',
        subtitle: 'El Yapımı · Retro Koleksiyon',
        subtitle_en: 'Handmade · Retro Collection',
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

        Siparişe göre kişiye özel tasarlanabilir.`,
        story_en: `Standing out with its retro character, this lampshade particularly brings the graphic pattern understanding of the 70s to the present day. The bold repetitions and geometric rhythm of the era create a strong visual impact with the pattern on the hat.
        The base made of Iroko wood gives the design a natural balance with its warm tones and fluid form. The unique texture of the wood softens the energy of the retro pattern, creating a more refined wholeness. This harmony between the hat and the base elevates the product from just being a lighting object; it turns it into a focal point with character that draws attention in its environment.

        Can be custom designed to order.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Kumaş, iroko ağaç.', label_en: 'Material', value_en: 'Fabric, iroko wood.' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 60W', label_en: 'Socket Type', value_en: 'E27, max 60W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 40cm, Yükseklik 50cm', label_en: 'Size', value_en: 'Width 40cm, Height 50cm' },
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
    },

    urun18: {
        id: 'urun18',
        name: 'Mintaka',
        subtitle: 'El Yapımı · Retro Koleksiyon',
        subtitle_en: 'Handmade · Retro Collection',
        tag: '',
        images: [
            'images/dekorasyon-abajur-modelleri-zanaat-ortam-kapali.webp',
            'images/dekorasyon-abajur-modelleri-zanaat-ortam.webp',
            'images/dekorasyon-abajur-modelleri-zanaat-ortam-detay1.webp',
            'images/dekorasyon-abajur-modelleri-zanaat-ortam-detay2.webp',
            'images/dekorasyon-abajur-modelleri-zanaat-ortam-detay3.webp',
            'images/dekorasyon-abajur-modelleri-zanaat-ortam-detay4.webp',
            'images/dekorasyon-abajur-modelleri-zanaat-ortam-detay5webp.webp'
        ],
        story: `Retro karakteriyle öne çıkan bu abajur, özellikle 70’lerin grafik desen anlayışını günümüze taşır. Dönemin cesur tekrarları ve geometrik ritmi, şapkadaki desenle güçlü bir görsel etki yaratır.
        İroko ağacından üretilen kaide, sıcak tonları ve akıcı formuyla tasarıma doğal bir denge kazandırır. Ahşabın kendine has dokusu, retro desenin enerjisini yumuşatarak daha rafine bir bütünlük oluşturur. Şapka ve kaide arasındaki bu uyum, ürünü sadece bir aydınlatma objesi olmaktan çıkarır; bulunduğu ortamda karakterli ve dikkat çeken bir odak noktası haline getirir.

        Siparişe göre kişiye özel tasarlanabilir.`,
        story_en: `Standing out with its retro character, this lampshade particularly brings the graphic pattern understanding of the 70s to the present day. The bold repetitions and geometric rhythm of the era create a strong visual impact with the pattern on the hat.
        The base made of Iroko wood gives the design a natural balance with its warm tones and fluid form. The unique texture of the wood softens the energy of the retro pattern, creating a more refined wholeness. This harmony between the hat and the base elevates the product from just being a lighting object; it turns it into a focal point with character that draws attention in its environment.

        Can be custom designed to order.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Kumaş, iroko ağaç.', label_en: 'Material', value_en: 'Fabric, iroko wood.' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W', label_en: 'Socket Type', value_en: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 40cm, Yükseklik 50cm', label_en: 'Size', value_en: 'Width 40cm, Height 50cm' },
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
    },

    urun19: {
        id: 'urun19',
        name: 'Mintaka',
        subtitle: 'El Yapımı · Retro Koleksiyon',
        subtitle_en: 'Handmade · Retro Collection',
        tag: '',
        images: [
            'images/atmosfer-rahatlatici-nostaljik-antika-abajur-kapali.webp',
            'images/atmosfer-rahatlatici-nostaljik-antika-abajur.webp',
            'images/atmosfer-rahatlatici-nostaljik-antika-abajur-detay1.webp',
            'images/atmosfer-rahatlatici-nostaljik-antika-abajur-detay2.webp',
            'images/atmosfer-rahatlatici-nostaljik-antika-abajur-detay3.webp',
            'images/atmosfer-rahatlatici-nostaljik-antika-abajur-detay4.webp',
            'images/atmosfer-rahatlatici-nostaljik-antika-abajur-detay5.webp',
            'images/atmosfer-rahatlatici-nostaljik-antika-abajur-detay6.webp',
            'images/atmosfer-rahatlatici-nostaljik-antika-abajur-detay7.webp'
        ],
        story: `Retro karakteriyle öne çıkan bu abajur, özellikle 70’lerin grafik desen anlayışını günümüze taşır. Dönemin cesur tekrarları ve geometrik ritmi, şapkadaki desenle güçlü bir görsel etki yaratır.
        İroko ağacından üretilen kaide, sıcak tonları ve akıcı formuyla tasarıma doğal bir denge kazandırır. Ahşabın kendine has dokusu, retro desenin enerjisini yumuşatarak daha rafine bir bütünlük oluşturur. Şapka ve kaide arasındaki bu uyum, ürünü sadece bir aydınlatma objesi olmaktan çıkarır; bulunduğu ortamda karakterli ve dikkat çeken bir odak noktası haline getirir.

        Siparişe göre kişiye özel tasarlanabilir.`,
        story_en: `Standing out with its retro character, this lampshade particularly brings the graphic pattern understanding of the 70s to the present day. The bold repetitions and geometric rhythm of the era create a strong visual impact with the pattern on the hat.
        The base made of Iroko wood gives the design a natural balance with its warm tones and fluid form. The unique texture of the wood softens the energy of the retro pattern, creating a more refined wholeness. This harmony between the hat and the base elevates the product from just being a lighting object; it turns it into a focal point with character that draws attention in its environment.

        Can be custom designed to order.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Kumaş, iroko ağaç.', label_en: 'Material', value_en: 'Fabric, iroko wood.' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W', label_en: 'Socket Type', value_en: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 40cm, Yükseklik 50cm', label_en: 'Size', value_en: 'Width 40cm, Height 50cm' },
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
    },

    urun20: {
        id: 'urun20',
        name: 'Antheia',
        subtitle: 'El Yapımı · Retro Koleksiyon',
        subtitle_en: 'Handmade · Retro Collection',
        tag: '',
        images: [
            'images/70ler-60lar-nostaljik-abajur-kapali.webp',
            'images/70ler-60lar-nostaljik-abajur.webp',
            'images/70ler-60lar-nostaljik-abajur-detay1.webp',
            'images/70ler-60lar-nostaljik-abajur-detay2.webp',
            'images/70ler-60lar-nostaljik-abajur-detay3.webp',
            'images/70ler-60lar-nostaljik-abajur-detay4.webp'
        ],
        story: `Retro karakteriyle öne çıkan bu abajur, özellikle 70’lerin grafik desen anlayışını günümüze taşır. Dönemin cesur tekrarları ve geometrik ritmi, şapkadaki desenle güçlü bir görsel etki yaratır.
        İroko ağacından üretilen kaide, sıcak tonları ve akıcı formuyla tasarıma doğal bir denge kazandırır. Ahşabın kendine has dokusu, retro desenin enerjisini yumuşatarak daha rafine bir bütünlük oluşturur. Şapka ve kaide arasındaki bu uyum, ürünü sadece bir aydınlatma objesi olmaktan çıkarır; bulunduğu ortamda karakterli ve dikkat çeken bir odak noktası haline getirir.

        Siparişe göre kişiye özel tasarlanabilir.`,
        story_en: `Standing out with its retro character, this lampshade particularly brings the graphic pattern understanding of the 70s to the present day. The bold repetitions and geometric rhythm of the era create a strong visual impact with the pattern on the hat.
        The base made of Iroko wood gives the design a natural balance with its warm tones and fluid form. The unique texture of the wood softens the energy of the retro pattern, creating a more refined wholeness. This harmony between the hat and the base elevates the product from just being a lighting object; it turns it into a focal point with character that draws attention in its environment.

        Can be custom designed to order.`,
        features: [
            { icon: '🧵', label: 'Malzeme', value: 'Desenli Retro kumaş, İroko ağacı kaide', label_en: 'Material', value_en: 'Patterned Retro fabric, Iroko wood base' },
            { icon: '💡', label: 'Duy Tipi', value: 'E27, max 40W', label_en: 'Socket Type', value_en: 'E27, max 40W' },
            { icon: '📐', label: 'Boyut', value: 'Genişlik 40cm, Yükseklik 50cm', label_en: 'Size', value_en: 'Width 40cm, Height 50cm' },
        ],
        shopier: 'https://www.shopier.com/elishiconcept'
    }
};
