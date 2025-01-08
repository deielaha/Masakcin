const searchIcon = document.getElementById("search-icon");
const searchBar = document.getElementById("search-bar");
const searchBox = document.querySelector(".search-box");
const banner = document.querySelector(".banner");
const categories = document.querySelectorAll(".kategori, .resep");

searchIcon.addEventListener("click", () => {
    searchBar.style.display = searchBar.style.display === "flex" ? "none" : "flex";

    if (searchBar.style.display === "flex") {
        searchBox.focus(); // Fokuskan ke kolom pencarian
    }

    if (searchBar.style.display === "none") {
        banner.style.display = "block";
        searchBox.value = "";
        categories.forEach(category => category.style.display = "block");  // Tampilkan semua kategori
    }
});

searchBox.addEventListener("input", () => {
    const searchTerm = searchBox.value.toLowerCase();

    banner.style.display = searchTerm ? "none" : "block";

    categories.forEach((category) => {
        const title = category.querySelector(".gambar-caption").textContent.toLowerCase();
        category.style.display = title.includes(searchTerm) ? "block" : "none";
    });
});

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
