// Dapatkan elemen penting
const searchIcon = document.getElementById("search-icon");
const searchBar = document.getElementById("search-bar");
const searchBox = document.querySelector(".search-box");
const banner = document.querySelector(".banner");
const categories = document.querySelectorAll(".kategori, .resep");

if (searchIcon && searchBar && searchBox) {
    searchIcon.addEventListener("click", () => {
        
        searchBar.style.display = searchBar.style.display === "flex" ? "none" : "flex";
        
        if (searchBar.style.display === "flex") {
            searchBox.focus(); 
        }

        if (searchBar.style.display === "none") {
            if (banner) banner.style.display = "block";
            searchBox.value = ""; 
            categories.forEach(category => category.style.display = "block");
        }
    });

    searchBox.addEventListener("input", () => {
        const searchTerm = searchBox.value.toLowerCase();

        if (banner) banner.style.display = searchTerm ? "none" : "block";

        categories.forEach((category) => {
            const title = category.querySelector("h3").textContent.toLowerCase();
            category.style.display = title.includes(searchTerm) ? "block" : "none";
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
  
    // Ambil elemen-elemen yang diperlukan
    const loginLink = document.getElementById('loginLink');  // Link Login
    const loginLinkSide = document.getElementById('loginLinkSide'); // Link Login di Sidebar
    const loginModal = document.getElementById('loginModal');  // Modal itu sendiri
    const closeModalBtn = document.getElementById('closeModal');  // Tombol Close Modal (Login)
    const closeModalRegisterBtn = document.getElementById('closeModalRegister'); // Tombol Close Modal (Register)
    const registerLink = document.getElementById('registerLink');  // Link Register di dalam Form Login
    const loginForm = document.getElementById('loginForm');  // Form Login
    const registerForm = document.getElementById('registerForm');  // Form Register
  
    // Tampilkan modal login saat link login diklik
    loginLink.addEventListener('click', function(e) {
      e.preventDefault();  // Mencegah perilaku default anchor link
      loginModal.style.display = 'block';  // Tampilkan modal login
    });
  
    // Tampilkan modal login saat link login di sidebar diklik
    loginLinkSide.addEventListener('click', function(e) {
      e.preventDefault();  // Mencegah perilaku default anchor link
      loginModal.style.display = 'block';  // Tampilkan modal login
    });
  
    // Tutup modal login saat tombol close modal diklik
    closeModalBtn.addEventListener('click', function() {
      loginModal.style.display = 'none';  // Menutup modal login
    });
  
    // Tutup modal login atau register saat tombol close modal register diklik
    closeModalRegisterBtn.addEventListener('click', function() {
      loginModal.style.display = 'none';  // Menutup modal login atau register
    });
  
    // Tampilkan form register saat link register diklik
    registerLink.addEventListener('click', function(e) {
      e.preventDefault();  // Mencegah perilaku default anchor link
      loginForm.style.display = 'none';  // Sembunyikan form login
      registerForm.style.display = 'block';  // Tampilkan form register
    });
  
    // Tampilkan form login saat link login diklik di form register
    document.getElementById('loginLinkFromRegister').addEventListener('click', function(e) {
      e.preventDefault();  // Mencegah perilaku default anchor link
      registerForm.style.display = 'none';  // Sembunyikan form register
      loginForm.style.display = 'block';  // Tampilkan form login
    });
  });
  

document.addEventListener('DOMContentLoaded', function() {
    const resepID = new URLSearchParams(window.location.search).get('id');  
    // Data resep berdasarkan ID
    const resep = {
        "daifuku": {
            name: 'Resep Daifuku',
            image: './Images/Makanan Jepang/daifuku.png', // Gambar resep
            ingredients: [
                '150g tepung ketan',
                '100ml air',
                '50g gula pasir',
                '50g pasta kacang merah (anko)',
                'Maizena secukupnya'
            ],
            steps: [
                'Campurkan tepung ketan, gula, dan air, aduk rata.',
                'Kukus adonan tepung ketan selama 20 menit.',
                'Ambil sejumput adonan, pipihkan, beri pasta kacang merah, lalu bulatkan.',
                'Taburi daifuku dengan maizena agar tidak lengket, sajikan.'
            ]
        },
        "chicken-karagae": {
            name: 'Chicken Karagae',
            image: './Images/Makanan Jepang/karagae.jpg', // Gambar resep
            ingredients: [
                '500g ayam fillet, potong kecil-kecil',
                '2 siung bawang putih, haluskan',
                '2 sendok makan kecap asin',
                '1 sendok makan mirin',
                '1 sendok teh jahe parut',
                'Tepung maizena secukupnya',
                'Minyak untuk menggoreng'
            ],
            steps: [
                'Campurkan ayam dengan bawang putih, kecap asin, mirin, dan jahe, diamkan selama 30 menit.',
                'Balurkan ayam dengan tepung maizena hingga rata.',
                'Panaskan minyak, goreng ayam hingga kecokelatan dan matang.',
                'Sajikan dengan nasi dan saus sambal.'
            ]
        },
        "sushi": {
            name: 'Sushi Simple Sederhana',
            image: './Images/Makanan Jepang/sushi.jpeg', // Gambar resep (sesuaikan dengan lokasi gambar)
            ingredients: [
                '8 centong nasi',
                '1 buah sosis bratwurst panjang',
                '1 buah wortel yang agak besar dan panjang',
                'Beberapa helai sawi hijau',
                '1/2 mentimun sedang',
                '2 butir telur ayam kampung',
                '4 lembar nori',
                '2 sdt kecap asin',
                '2 sdm minyak wijen',
                'Secukupnya wijen'
            ],
            steps: [
                'Siapkan semua bahan. Masak sosis dengan sedikit minyak di teflon hingga matang. Dadar telur dengan bumbu garam dan lada. Rebus sawi dan wortel hingga matang.',
                'Taruh nasi panas ke dalam mangkuk besar. Beri kecap asin dan minyak wijen. Aduk hingga merata.',
                'Ambil talenan atau alas yang lebar. Letakkan 1 lembar nori, beri nasi, lalu tata sayur, sosis, dan telur dadar. Gulung perlahan dengan plastik.',
                'Potong menjadi 8 bagian dan sajikan dengan saus sambal dan mayones.'
            ]
        },

        "takoyaki": {
            name: 'Takoyaki',
            image: './Images/Makanan Jepang/takoyaki.jpeg', // Gambar resep
            ingredients: [
                '200 gr Tepung Terigu',
                '2 butir Telur',
                '2 sdm Kecap Ikan',
                '1/2 sdt Kaldu Jamur',
                '1/2 sdt Garam',
                '1 1/2 sdt Gula Pasir',
                '100 ml Susu UHT Full Cream',
                '500 ml Air',
                '2 sdm Saus Tomat',
                '2 sdm Kecap Inggris',
                '1 sdm Saus Tiram',
                '1 sdm Madu',
                '2 sdt Gula Pasir',
                '1 batang Daun Bawang',
                '1 buah Sosis, Potong Kotak',
                'Secukupnya Mayonese',
                'Secukupnya Katsuobushi'
            ],
            steps: [
                'Campur semua bahan adonan, lalu saring.',
                'Panaskan cetakan takoyaki, beri minyak, lalu tuang adonan.',
                'Tambahkan irisan daun bawang dan sosis, bolak-balik hingga matang.',
                'Untuk saus, campurkan semua bahan saus dan masak hingga shimmer.',
                'Sajikan takoyaki dengan saus dan mayonese, taburi dengan katsuobushi.'
            ]
        },
        "dorayaki": {
            name: 'Dorayaki',
            image: './Images/Makanan Jepang/dorayaki.jpg', // Gambar resep
            ingredients: [
                '2 butir telur',
                '80 gr gula',
                '1 sdm madu',
                '130 gr tepung terigu',
                '1/2 sdt soda kue',
                '50 ml air'
            ],
            steps: [
                'Kocok telur, gula, dan madu hingga kental. Masukkan tepung dan soda kue, aduk rata.',
                'Tambahkan air, diamkan 10 menit, aduk lagi.',
                'Tuang adonan ke wajan datar, masak hingga berpori, balik dan panggang sebentar.',
                'Isi dengan isian favorit, seperti pasta kacang merah. Tekan pinggiran untuk menutup.'
            ]
        },

        "gyoza": {
            name: 'Gyoza',
            image: './Images/Makanan Jepang/gyoza.jpeg', // Gambar resep
            ingredients: [
                '250 gram dada ayam tanpa tulang',
                '6 buah udang',
                '3 siung bawang putih',
                '1 sdt kaldu jamur',
                '1/2 sdt merica bubuk',
                '1 sdt kecap asin',
                '1 sdt saus tiram',
                '1 sdt kecap ikan',
                '1/2 sdt minyak wijen',
                '100 gram sawi putih',
                '1 batang daun bawang',
                '2 sdt tepung maizena',
                '1 sdm air jahe',
                '28 lembar kulit gyoza'
            ],
            steps: [
                'Cincang sawi dan daun bawang, sisihkan.',
                'Giling dada ayam, udang, dan bawang putih. Campurkan sawi, daun bawang, bumbu, dan tepung maizena.',
                'Ambil kulit gyoza, isi dengan adonan, rapatkan pinggirannya.',
                'Kukus gyoza selama 8-10 menit atau pan-fry hingga bagian bawah garing.',
                'Untuk sambal cocolan, campurkan air cuka, kecap asin, potongan jahe, dan saos sambal.'
            ]
        },
        "ramen": {
            name: 'Ramen',
            image: './Images/Makanan Jepang/ramen2.jpeg',
            ingredients: [
                '1 pak mie ramen',
                '200g daging ayam fillet, iris tipis',
                '2 butir telur rebus',
                '1 batang daun bawang, iris tipis',
                '2 siung bawang putih, cincang halus',
                '1 sendok makan kecap asin',
                '1 sendok teh minyak wijen',
                '800 ml kaldu ayam',
                '1 sdt minyak sambal (opsional)',
                '1 sdt garam',
                '1 sdt merica'
            ],
            steps: [
                'Rebus mie ramen sesuai petunjuk pada kemasan. Tiriskan.',
                'Panaskan minyak wijen, tumis bawang putih hingga harum, tambahkan ayam dan masak hingga matang.',
                'Tuang kaldu ayam ke dalam panci, didihkan, kemudian tambahkan kecap asin, garam, dan merica.',
                'Pilih mangkuk besar, letakkan mie ramen, tuangkan kaldu panas beserta ayam dan telur rebus di atasnya.',
                'Hiasi dengan daun bawang dan minyak sambal. Sajikan.'
            ]
        },
        "dango": {
            name: 'Dango',
            image: './Images/Makanan Jepang/dango.jpeg',
            ingredients: [
                '200 gr tepung ketan',
                '150 ml air',
                '50 gr gula pasir',
                '1 sendok makan air daun pandan suji',
                '1 sdt garam',
                'Gula merah cair untuk topping'
            ],
            steps: [
                'Campurkan tepung ketan, air, gula pasir, garam, dan air daun pandan, aduk hingga rata.',
                'Bentuk adonan menjadi bola-bola kecil, rebus dalam air mendidih hingga bola-bola mengapung.',
                'Angkat bola-bola dango, tiriskan dan susun di tusuk sate.',
                'Panggang dango sebentar di atas api hingga sedikit kecokelatan.',
                'Sajikan dengan siraman gula merah cair.'
            ]
        },
        "tiramisu-dessert-box": {
            name: 'Tiramisu Dessert Box',
            image: './Images/resep dessert/tiramisu-desert.png',
            ingredients: [
                '1 bungkus lady finger',
                '1 sachet kopi nescafe',
                '150 ml air panas utk menyeduh kopi',
                '100 gr whipped cream bubuk',
                '250 gr mascarpone',
                '200 ml air super dingin utk mengocok whipped cream',
                'Secukupnya coklat bubuk'
            ],
            steps: [
                'Siapkan bahan-bahannya. Seduh kopi, sisihkan. Mixer whipped cream dengan air dingin, kemudian masukan mascarpone aduk rata. Sisihkan.',
                'Celupkan lady finger pada air kopi kemudian masukan satu persatu lady finger pada wadah.',
                'Oleskan krim diatas lady finger sampai tidak terlihat, kemudian masukan lagi lady finger diatas krim sampai krim 2 lapis.',
                'Ayak coklat bubuk diatas krim sampai merata.',
                'Dinginkan tiramisu dalam kulkas kurang lebih 2 jam.',
                'Tiramisu Dessert Box siap dinikmati 😊.'
            ]
        },

        "dessert-box-oreo": {
            name: 'Dessert Box Oreo',
            image: './Images/resep dessert/oreo.jpg',
            ingredients: [
                '20 keping biskuit oreo',
                '500 ml susu UHT',
                '4 sdm kental manis putih',
                '1/2 kotak keju cheddar',
                '4 sdm tepung maizena',
                '5 sdm air'
            ],
            steps: [
                'Pisahkan keping hitam oreo dengan krimnya. Ambil keping hitamnya saja, hancurkan. Campurkan krim putih dengan sedikit susu UHT hingga cair.',
                'Larutkan maizena dengan 5 sdm air, campurkan dengan krim putih dan sisa susu UHT. Tuang kental manis, aduk hingga tercampur rata lagi.',
                'Panaskan adonan susu hingga mendidih, masukkan keju, aduk rata hingga mengental. Angkat dan tunggu hingga dingin. Siapkan kotak untuk dessert.',
                'Tata oreo yang sudah dihancurkan ke dasar kotak lalu tuang krim susu. Ulangi selang-seling isian hingga penuh.',
                'Diamkan hingga benar-benar dingin. Simpan di kulkas dan nikmati dessert box oreo setelah dingin.'
            ]
        },

        "stup-roti-tawar-keju": {
            name: 'Stup Roti Tawar Keju',
            image: './Images/resep dessert/stup-roti.jpg',
            ingredients: [
                '4 lembar roti tawar',
                '250 ml susu UHT full cream',
                '1 SDM tepung maizena',
                '2 sdm gula pasir',
                '1 sachet Skm gold',
                'Secukupnya Keju parut untuk adonan dan taburan'
            ],
            steps: [
                'Potong-potong pinggiran roti. Tata dalam wadah.',
                'Buat flanya. Masukkan susu cair, SKM, dan gula pasir. Masak dengan api kecil sambil diaduk-aduk. Masukkan keju parut, aduk rata. Terakhir, masukkan larutan tepung maizena (maizena yang sudah dilarutkan dengan 3 sdm susu UHT). Setelah meletup-letup, angkat.',
                'Tuang di atas roti tawar yang sudah ditata dalam wadah dan beri topping keju parut.'
            ]
        },

        "fudge-brownies": {
            name: 'Fudge Brownies',
            image: './Images/resep dessert/fudge.jpg',
            ingredients: [
                '120 gram butter',
                '225 gram coklat batang (dark cooking chocolate)',
                '3 sdm coklat bubuk',
                '200 gram gula pasir (caster sugar)',
                '3 butir telur ukuran besar',
                '1/4 sdm garam (garam halus)',
                '130 gram tepung terigu',
                '1 sdt vanilla cair',
                'Secukupnya chocolate chip'
            ],
            steps: [
                'Panaskan oven dengan suhu 180℃. Lelehkan butter dan coklat batang dengan cara di tim.',
                'Kocok telur bersama gula sampai pucat dan mengembang. Tambahkan vanilla cair, kocok rata.',
                'Masukkan coklat dan butter leleh, aduk rata. Tambahkan terigu, garam, dan coklat bubuk. Aduk rata, jangan over mix.',
                'Tuang ke loyang yang telah dioles margarin dan dialasi dengan kertas baking. Panggang selama 50-60 menit.',
                'Setelah matang, angkat dan dinginkan. Potong-potong setelah benar-benar dingin.'
            ]
        },

        "banoffe-pie-dessert-box": {
            name: 'Banoffe Pie Dessert Box',
            image: './Images/resep dessert/banofee.jpg',
            ingredients: [
                '1 bungkus Biskuit Regal',
                '3 sdm Margarin',
                '3 buah Pisang Ambon, potong bentuk koin',
                '75 gr Gula pasir',
                '40 ml Air',
                '120 gr Kental manis rasa vanilla',
                '30 gr Margarin',
                'Sejumput Garam halus',
                '100 gr bubuk Whipped Cream Haan',
                '250 ml Air es'
            ],
            steps: [
                'Campurkan air dan susu kental manis. Iris Pisang dengan bentuk koin.',
                'Lelehkan margarin. Hancurkan biskuit dengan menggunakan blender. Campurkan lelehan margarin dengan biskuit. Sisihkan.',
                'Panaskan teflon dengan api kecil, lelehkan gula pasir sampai mencair. Masukkan campuran susu, masak sampai bergelembung dan rata.',
                'Masukkan margarin, beri garam, lalu aduk pelan sampai rata.',
                'Kocok bubuk whipped cream dan air dingin hingga kaku dan mengembang.',
                'Siapkan Box dessert. Masukkan biskuit, pisang, dan saus karamel. Semprotkan whipped cream, lalu masukkan biskuit, pisang, dan saus karamel lagi.',
                'Simpan dalam kulkas sampai dingin baru dinikmati.'
            ]
        },

        "rainbow-cake": {
            name: 'Rainbow Cake',
            image: './Images/resep dessert/rainbow.jpg',
            ingredients: [
                '200 gram tepung terigu',
                '5 butir telur ayam',
                '100 gram margarin, lelehkan',
                '20 gram susu bubuk putih',
                '2 sdt ovalet',
                '1 sachet vanili',
                '150 gram gula pasir',
                'Pewarna makanan (merah, kuning, hijau, biru, dan ungu)',
                'Butter cream secukupnya'
            ],
            steps: [
                'Kocok telur, gula, vanili, dan ovalet sampai kental berjejak.',
                'Tambahkan tepung dan susu bubuk ke dalam kocokan telur sedikit demi sedikit. Aduk rata.',
                'Tuang mentega cair. Aduk rata.',
                'Bagi adonan jadi lima bagian sesuai dengan pewarna makanan.',
                'Siapkan loyang yang telah diolesi margarin. Tuang adonan, dan panggang hingga matang.',
                'Setelah semua lapisan adonan matang, lapisi dan olesi dengan butter cream. Rapikan, lalu potong sesuai selera.'
            ]
        },

        "red-velvet-cake": {
            name: 'Red Velvet Cake',
            image: './Images/resep dessert/redvelvet.jpg',
            ingredients: [
                '3 butir telur',
                '100 gr gula pasir',
                '1 sdt sp',
                '100 gr tepung terigu',
                '1 sdm maizena',
                '1 sdm susu bubuk',
                '1 sdm coklat bubuk',
                '1/2 sdt vanili',
                'Sejumput garam',
                '50 gram minyak goreng',
                '1 sdt pewarna merah',
                '1 sdt air jeruk lemon',
                'Butter cream mix dengan cream cheese',
                'Keju parut'
            ],
            steps: [
                'Mixcer bahan A sampai kental putih berjejak.',
                'Siapkan bahan B lalu ayak sisihkan.',
                'Setelah adonan A mengembang, masukkan bahan B bertahap dengan bahan C sampai adonan menyatu.',
                'Bagi adonan menjadi 3 bagian sama banyaknya. Kukus setiap bagian selama 10 menit.',
                'Setelah cake dingin, oles dengan butter cream dan tambah keju oles.',
                'Tumpuk dengan cake lainnya, oles lagi butter cream sampai 3 lapis, beri taburan keju di lapisan atas, dan masukkan ke kulkas.'
            ]
        },

        "es-cendol-dawet": {
            name: 'Es Cendol Dawet',
            image: './Images/resep dessert/cendol.jpeg',
            ingredients: [
                '300 gr tepung sagu',
                '200 gr tepung beras',
                '40 gr tepung tapioka',
                '3 Liter air (2 L didikan dahulu, 1 L untuk melarutkan adonan tepung)',
                '1/2 botol pasta pandan',
                'Sedikit pewarna kuning telur',
                '1/4 sdm garam'
            ],
            steps: [
                'Campur tepung jadi satu, aduk rata. Masukkan garam, pasta pandan, pewarna, dan 1 liter air, aduk rata.',
                'Didihkan 2L air. Setelah mendidih, masukkan adonan tepung sambil terus diaduk.',
                'Cetak adonan menggunakan cetakan cendol.',
                'Sajikan bersama santan dan gula merah cair.'
            ]
        },
        "spicy-chicken-wings": {
            name: 'Spicy Chicken Wings',
            image: './Images/Resep Ayam/spicy.jpg',
            ingredients: [
                '1 kg sayap ayam, potong-potong dan cuci bersih',
                '4 siung bawang putih',
                '1 cm kunyit',
                '1 sdt ketumbar',
                'Garam secukupnya',
                '2 siung bawang putih, cincang',
                '2 siung bawang merah, cincang',
                '5 buah cabai rawit, potong-potong (sesuai selera)',
                '2 sdm saus sambal',
                '1 sdm saus tomat',
                '1/2 sdt merica',
                'Kecap manis secukupnya',
                'Air secukupnya'
            ],
            steps: [
                'Haluskan bumbu bawang putih, ketumbar, kunyit dan garam.',
                'Campurkan sayap ayam dengan bumbu. Masukkan ke panci dan campur dengan air secukupnya. Ungkep ayam hingga matang.',
                'Tumis bawang putih, bawang merah dan cabai rawit hingga harum.',
                'Masukkan saus sambal, saus tomat, lada dan kecap manis. Aduk sebentar, tuang sedikit air. Biarkan hingga agak mengental.',
                'Masukkan sayap ayam, aduk rata dengan bumbu. Masak hingga saus agak kering.',
                'Spicy chicken wings siap sajikan jadi camilan atau lauk makan.'
            ]
        },

        "ayam-asam-manis": {
            name: 'Ayam Asam Manis',
            image: './Images/Resep Ayam/Ayam-Asam-Manis.jpg',
            ingredients: [
                '500 g ayam potong',
                '1 buah jeruk nipis',
                '1 sdt garam',
                '1 sdt lada bubuk',
                '5 sdm tepung maizena',
                '2 sdm tepung terigu',
                '2 sdm tepung beras',
                '1 butir telur',
                '2 siung bawang putih',
                '2 sdm gula pasir',
                '3 sdm saus sambal',
                '3 sdm saus tomat',
                '1 sdm saus tiram',
                '1 sdt perasan jeruk nipis',
                '1/4 sdt garam',
                '1/4 sdt lada',
                '1/2 sdt cabai bubuk'
            ],
            steps: [
                'Cuci bersih daging ayam lalu lumuri dengan jeruk nipis. Diamkan selama 15 menit, bilas bersih setelahnya.',
                'Kocok telur lepas, tambahkan garam dan lada bubuk. Masukkan ayam ke dalamnya, marinasi selama 30 menit, sisihkan.',
                'Campurkan semua bahan tepung. Gulung ayam dengan tepung sambil diremas-remas agar hasil gorengan krispi.',
                'Panaskan minyak goreng secukupnya, goreng ayam hingga matang. Angkat dan tiriskan. Setelah 15 menit, goreng lagi hingga krispi kecoklatan.',
                'Tumis bawang putih hingga harum, lalu masukkan semua bahan saus. Aduk hingga mengental.',
                'Masukkan ayam, aduk rata dengan saus. Sajikan dengan taburan wijen sangrai.'
            ]
        },

        "ayam-rica-rica-kemangi": {
            name: 'Ayam Rica-Rica Kemangi',
            image: './Images/Resep Ayam/resep-ayam-rica-rica-kemangi.jpg',
            ingredients: [
                '1 batang serai, memarkan',
                '1 ruas lengkuas, memarkan',
                '7 lembar daun jeruk',
                '1 batang daun bawang, potong-potong',
                '2 genggam daun kemangi',
                'Garam dan kaldu ayam secukupnya',
                '3 siung bawang putih',
                '6 siung bawang merah',
                '6 buah cabai merah keriting',
                '15 buah cabai rawit',
                '2 butir kemiri',
                '2 sdm gula merah',
                '1 ruas jahe',
                '1 ruas kunyit',
                '3 sdm minyak'
            ],
            steps: [
                'Masukkan ayam yang sudah direbus terlebih dahulu untuk menghilangkan bau tak sedap, tiriskan dan bilas bersih.',
                'Tumis bumbu halus dengan minyak hingga matang merata dan harum.',
                'Masukkan serai, lengkuas, daun jeruk, dan daun bawang. Masak hingga bumbu matang.',
                'Tambahkan garam dan kaldu ayam secukupnya, tumis lagi hingga terasa sedap.',
                'Masukkan ayam dan air secukupnya. Masak hingga ayam empuk dan bumbu meresap.',
                'Tes rasa, jika air sudah hampir habis, angkat.'
            ]
        },

        "ayam-sambal-matah": {
            name: 'Ayam Sambal Matah',
            image: './Images/Resep Ayam/matah.jpg',
            ingredients: [
                '1 ekor ayam',
                '3 buah serai',
                '1/4 kg cabe rawit setan',
                '20 buah bawang merah',
                '10 buah bawang putih',
                '10 lembar daun jeruk',
                '1 buah jeruk limau',
                '1 sdt gula pasir',
                '1/2 sdt merica bubuk',
                '1 sdt bubuk jamur (totole)',
                'Secukupnya Garam',
                'Minyak untuk menggoreng'
            ],
            steps: [
                'Potong ayam sesuai selera, balur dengan garam, perasan air jeruk limau, dan merica. Diamkan sebentar.',
                'Potong halus semua bumbu dan kelompokkan berdasarkan jenisnya.',
                'Panaskan minyak dan goreng ayam hingga matang. Tiriskan.',
                'Tumis bumbu sambal matah (bawang putih, serai, daun jeruk, cabai rawit) hingga setengah layu. Tambahkan bawang merah, beri garam, merica, dan bumbu jamur. Aduk rata.',
                'Masukkan ayam goreng, aduk hingga rata, angkat dan sajikan.'
            ]
        },

        "ayam-geprek": {
            name: 'Ayam Geprek',
            image: './Images/Resep Ayam/geprek 4.jpg',
            ingredients: [
                '2 potong ayam (paha dan dada ayam)',
                '1 butir telur',
                '5 sdm tepung terigu',
                '3 sdm tepung maizena',
                '3 siung bawang putih',
                'Secukupnya merica',
                'Secukupnya garam',
                'Secukupnya minyak goreng',
                '1 batang daun kemangi',
                '22 buah cabe rawit',
                '2 siung bawang putih (digoreng)',
                'Secukupnya garam'
            ],
            steps: [
                'Masukkan ayam, bawang putih halus, merica, dan garam. Remas-remas ayam hingga bumbu tercampur rata. Diamkan selama 2 jam.',
                'Kocok telur dan lumuri ayam dengan telur. Campurkan tepung terigu dan tepung maizena, lalu balurkan ke ayam.',
                'Panaskan minyak dan goreng ayam dengan api kecil agar ayam matang hingga ke dalamnya. Goreng hingga kuning keemasan, balik perlahan.',
                'Goreng bawang putih dan cabe rawit, ulek halus dengan garam. Tambahkan minyak goreng panas bekas menggoreng ayam.',
                'Geprek ayam di atas sambal, beri daun kemangi jika suka. Sajikan.'
            ]
        },

        "ayam-suwir-kemangi": {
            name: 'Ayam Suwir Kemangi',
            image: './Images/Resep Ayam/suwir 2.jpg',
            ingredients: [
                '250 gr ayam dada',
                '1 ikat daun kemangi',
                '3 siung bawang putih',
                '5 siung bawang merah',
                '5 buah cabe rawit',
                '5 buah cabe merah keriting',
                'Secukupnya gula, garam, dan kaldu bubuk'
            ],
            steps: [
                'Rebus ayam dengan 1/2 sdm garam hingga empuk. Tiriskan dan suwir-suwir.',
                'Tumis bumbu ulek hingga harum, masukkan suwiran ayam dan aduk rata.',
                'Masukkan daun kemangi, aduk sebentar, angkat dan sajikan dengan nasi hangat.'
            ]
        },

        "ayam-saos-teriyaki": {
            name: 'Ayam Saos Teriyaki',
            image: './Images/Resep Ayam/ayam teriyaki 3.jpg',
            ingredients: [
                '2 potong ayam fillet',
                '2 bungkus bumbu saori teriyaki',
                '1 buah bawang bombay',
                '2 siung bawang putih',
                '2 sdm kecap manis',
                '1 sdt minyak wijen',
                'Air secukupnya',
                'Minyak goreng secukupnya',
                'Garam secukupnya (optional)'
            ],
            steps: [
                'Potong-potong ayam fillet dan iris tipis bawang bombay. Geprek bawang putih.',
                'Rendam ayam dengan bumbu teriyaki selama 30 menit. Goreng ayam hingga kecoklatan, tiriskan.',
                'Tumis bawang bombay hingga harum, masukkan bawang putih, lanjutkan menumis hingga matang.',
                'Masukkan ayam fillet, tumis bersama hingga ayam matang.',
                'Campurkan bumbu teriyaki, kecap manis, dan air. Tuang ke dalam ayam dan masak hingga bumbu meresap.',
                'Tambahkan minyak wijen, aduk rata. Tes rasa, angkat dan sajikan.'
            ]
        },

        "soto-ayam-lamongan": {
            name: 'Soto Ayam Lamongan',
            image: './Images/Resep Ayam/soto2.jpg',
            ingredients: [
                '250 gr Ayam Dada',
                '2 batang serai',
                '2 lembar daun salam',
                '4 lembar daun jeruk',
                '1 batang seledri',
                '2 batang daun bawang',
                '1 sdt garam',
                '1 sdt gula pasir',
                '1/2 sdt kaldu bubuk',
                '1 liter air',
                '7 siung bawang putih',
                '5 siung bawang merah',
                '2 butir kemiri',
                '1 ruas kunyit',
                '1 ruas lengkuas',
                '1 ruas jahe',
                '1 sdt ketumbar',
                '1 sdt merica',
                '5 buah cabe rawit setan',
                '200 ml air untuk merebus',
                'Secukupnya garam, gula, kaldu bubuk',
                'Pelengkap: telur rebus, kol, taoge, jeruk nipis, seledri, bawang goreng'
            ],
            steps: [
                'Tumis bumbu halus, masukkan serai, daun salam, dan daun jeruk. Tumis kembali hingga harum.',
                'Masukkan ayam dan tumis sebentar, tuang air, masak hingga ayam empuk.',
                'Tambahkan gula, garam, kaldu bubuk, koreksi rasa.',
                'Rebus pelengkap seperti kol dan tauge. Rebus telur hingga matang, belah dua.',
                'Rebus sambal dan haluskan. Tambahkan sedikit kuah soto.',
                'Sajikan soto dengan telur rebus, kol, taoge, dan sambal.'
            ]
        },
        "oseng-mercong-daging-sapi": {
            name: 'Oseng Mercong Daging Sapi',
            image: './Images/Resep Daging/oseng-oseng-mercon.jpg',
            ingredients: [
                '1/4 kg Daging sapi, potong dadu',
                'Bumbu Halus (A):',
                '5 siung Bawang Merah',
                '2 siung Bawang Putih',
                '2 cm Jahe',
                '5 buah Cabe Keriting',
                '10 buah Cabe Rawit Merah',
                'Bumbu Utuh (B):',
                '10 buah Cabe Rawit Merah',
                '2 Lembar Daun Salam',
                '2 Lembar Daun Jeruk',
                '2 sdm Kecap Manis',
                '2 cm Lengkuas (geprek)',
                '1/4 sdt Merica',
                '1/2 sdm Gula Merah',
                '1/4 sdt Garam',
                '1/4 sdt Kaldu Bubuk',
                '200 ml Air'
            ],
            steps: [
                'Potong dadu daging sapi yang telah direbus sampai empuk, sisihkan.',
                'Haluskan bumbu A (boleh di uleg/blender disesuaikan dengan selera) sisihkan.',
                'Tumis bumbu yang telah dihaluskan (Bumbu A) sampai bumbu matang (harum/berubah warna menjadi lebih gelap).',
                'Lalu masukkan bumbu B, masak hingga gula merah mencair/tercampur rata.',
                'Masukkan daging, kaldu bubuk, dan air, masak hingga bumbu meresap.',
                'Koreksi rasa, angkat dan sajikan dengan nasi hangat.'
            ]
        },

        "empal-daging-sapi": {
            name: 'Empal Daging Sapi',
            image: './Images/Resep Daging/empal.jpg',
            ingredients: [
                'Secukupnya daging sapi, iris sesuai selera',
                'Secukupnya air (untuk merebus)',
                '4 siung bawang putih',
                'Secukupnya ketumbar',
                '1/2 sdm kaldu jamur',
                'Secukupnya penyedap rasa',
                'Secukupnya lada bubuk',
                'Secukupnya minyak goreng'
            ],
            steps: [
                'Cuci bersih daging sapi, rebus hingga matang. Setelah matang, tiriskan dan iris sesuai ketebalan yang diinginkan.',
                'Masukkan bawang putih yang sudah dikupas ke dalam cobek, secukupnya ketumbar, lada bubuk, kaldu jamur, dan penyedap rasa, kemudian ulek kasar.',
                'Apabila sudah dirasa cukup, masukkan irisan daging sapi tadi ke dalam cobek. Pukul-pukul hingga daging pipih bersamaan dengan bumbu tadi supaya bumbunya meresap.',
                'Masukkan daging yang sudah dibumbui tadi ke dalam minyak panas. Perlu diperhatikan saat memasak supaya serpihan-serpihan bawang putih dan kemiri tidak gosong.',
                'Jika sudah dirasa matang, angkat dan tiriskan. Empal daging sapi siap dihidangkan!'
            ]
        },

        "daging-cincang": {
            name: 'Daging Cincang',
            image: './Images/Resep Daging/cincang.jpg',
            ingredients: [
                '250 gram daging cincang',
                '2 butir telur',
                '8 butir kemiri',
                '5 siung bawang merah',
                '1 siung bawang putih',
                'Merica secukupnya (opsional)',
                '300 ml air',
                'Secukupnya Kecap',
                '1.5 sdt garam'
            ],
            steps: [
                'Goreng kemiri, bawang merah, dan bawang putih.',
                'Haluskan dengan garam dan merica.',
                'Kocok telur dengan bumbu. Kemudian masukkan daging cincang.',
                'Siapkan teflon dengan sedikit minyak. Cetak dengan sendok. Angkat jika dirasa daging sudah agak kokoh. Ulangi sampai habis.',
                'Didihkan air dan masukkan kecap.',
                'Masukkan daging yang sudah digoreng dan masukkan bawang goreng. Tunggu sampai benar-benar asat.',
                'Semur daging siap disajikan. Jika ingin pedas, bisa ditambah cabe utuh saat proses memasak.'
            ]
        },

        "gulai-sapi": {
            name: 'Gulai Sapi',
            image: './Images/Resep Daging/gulai3.jpg',
            ingredients: [
                '1 kg daging sapi, potong sesuai selera',
                '1.5 L air',
                'Bumbu halus:',
                '6 siung bawang merah',
                '4 siung bawang putih',
                '4 butir kemiri sangrai',
                '2 ruas kunyit',
                '1 ruas jahe',
                '1/4 butir pala atau 1 sdt pala bubuk',
                '10 buah cabe merah keriting',
                '1/2 sdt merica bubuk',
                '1/2 sdt jintan',
                'Bumbu lainnya:',
                '2 lembar daun salam',
                '2 batang sereh',
                '1 ruas lengkuas',
                '6 lembar daun jeruk',
                '200 ml santan instan',
                '3 butir kembang lawang',
                '3 butir kapulaga',
                '3 cm kayu manis',
                'Secukupnya gula dan garam'
            ],
            steps: [
                'Siapkan panci, masukkan air dan didihkan.',
                'Rebus daging sapi dengan metode 5:30:7. Rebus di air mendidih selama 5 menit dengan api besar. Lalu matikan kompor, tutup panci, dan diamkan selama 30 menit. Rebus kembali selama 7 menit.',
                'Haluskan semua bahan bumbu halus. Lalu tumis hingga bumbu harum.',
                'Masukkan bahan lainnya, kecuali santan dan gula merah. Masak hingga layu.',
                'Masukkan bumbu yang sudah ditumis ke dalam rebusan daging. Masak hingga mendidih.',
                'Setelah mendidih, tambahkan santan, garam, dan gula. Didihkan kembali.',
                'Taburi dengan bawang goreng. Sajikan dengan sambal rebus dan jeruk nipis.',
                'Gulai daging sapi siap dinikmati.'
            ]
        },

        "rendang-daging-sapi": {
            name: 'Rendang Daging Sapi',
            image: './Images/Resep Daging/rendang.jpeg',
            ingredients: [
                '1 kg daging sapi, potong dadu',
                '2 sdm minyak goreng',
                'Bumbu halus:',
                '10 siung bawang merah',
                '5 siung bawang putih',
                '5 buah cabai merah keriting',
                '2 cm jahe',
                '2 cm kunyit',
                '2 batang serai, memarkan',
                '2 daun jeruk purut',
                '1 liter santan',
                '1 sdt garam',
                '1 sdt gula merah'
            ],
            steps: [
                'Tumis bumbu halus hingga harum.',
                'Masukkan daging sapi, aduk hingga berubah warna.',
                'Masukkan santan, daun jeruk, serai, garam, dan gula merah. Masak dengan api kecil hingga daging empuk dan bumbu meresap.',
                'Masak hingga santan mengental dan berwarna kecoklatan, sajikan dengan nasi.'
            ]
        },

        "sapi-lada-hitam": {
            name: 'Sapi Lada Hitam',
            image: './Images/Resep Daging/lada hitam.jpeg',
            ingredients: [
                '500 gram daging sapi, iris tipis',
                '1 sdt lada hitam kasar',
                '2 sdm kecap asin',
                '1 sdm kecap manis',
                '2 siung bawang putih, cincang',
                '1 siung bawang bombay, iris tipis',
                '1 batang daun bawang, potong-potong',
                '1 sdm minyak untuk menumis',
                '1 sdt gula'
            ],
            steps: [
                'Tumis bawang putih dan bawang bombay hingga harum.',
                'Masukkan daging sapi, aduk hingga daging berubah warna.',
                'Tambahkan lada hitam, kecap asin, kecap manis, dan gula. Masak hingga daging matang dan bumbu meresap.',
                'Tambahkan daun bawang, aduk sebentar, dan sajikan.'
            ]
        },

        "tumis-daging-sapi-broccoli": {
            name: 'Tumis Daging Sapi Broccoli',
            image: './Images/Resep Daging/sapi-brocolli.jpg',
            ingredients: [
                '200 gram daging sapi, iris tipis',
                '1 batang brokoli, potong per kuntum',
                '1 sdm kecap asin',
                '1 sdm kecap manis',
                '2 siung bawang putih, cincang',
                '1 sdt merica',
                '1 sdt garam',
                '1 sdm minyak wijen',
                '1 sdm minyak untuk menumis'
            ],
            steps: [
                'Tumis bawang putih dengan minyak hingga harum.',
                'Masukkan daging sapi dan tumis hingga berubah warna.',
                'Tambahkan brokoli, kecap asin, kecap manis, garam, dan merica. Masak hingga brokoli matang tapi tetap renyah.',
                'Tambahkan minyak wijen, aduk rata, dan sajikan.'
            ]
        },

        "daging-sapi-teriyaki": {
            name: 'Daging Sapi Teriyaki',
            image: './Images/Resep Daging/teriyaki.jpeg',
            ingredients: [
                '300 gram daging sapi, iris tipis',
                '2 sdm kecap manis',
                '1 sdm kecap asin',
                '1 sdt minyak wijen',
                '2 siung bawang putih, cincang',
                '1 sdt jahe parut',
                '1 sdm madu'
            ],
            steps: [
                'Campurkan kecap manis, kecap asin, minyak wijen, bawang putih, jahe, dan madu. Aduk rata.',
                'Marinasi daging sapi dalam campuran bumbu selama 30 menit.',
                'Tumis daging dengan sedikit minyak hingga matang dan bumbu meresap.',
                'Angkat dan sajikan.'
            ]
        },
    };

    const resepDetail = resep[resepID];

    if (resepDetail) {
        
        document.getElementById('recipe-detail').innerText = resepDetail.name;

        const recipeImage = document.getElementById('recipe-image');
        if (recipeImage) {
            recipeImage.src = resepDetail.image;
        }

        const ingredientsList = document.getElementById('ingredients-list');
        if (ingredientsList) {
            resepDetail.ingredients.forEach(ingredient => {
                const li = document.createElement('li');
                li.textContent = ingredient;
                ingredientsList.appendChild(li);
            });
        } else {
            console.error('Elemen ingredients-list tidak ditemukan');
        }

        const stepsList = document.getElementById('steps-list');
        if (stepsList) {
            resepDetail.steps.forEach(step => {
                const li = document.createElement('li');
                li.textContent = step;
                stepsList.appendChild(li);
            });
        } else {
            console.error('Elemen steps-list tidak ditemukan');
        }
    } else {
        console.error('Resep tidak ditemukan');
    }


});