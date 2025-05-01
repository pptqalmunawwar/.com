function showPage(pageId) {
    let pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.opacity = 0;
        setTimeout(() => {
            page.style.display = 'none';
        }, 300);
    });
    setTimeout(() => {
        let page = document.getElementById(pageId);
        page.style.display = 'block';
        setTimeout(() => {
            page.style.opacity = 1;
        }, 50);
    }, 300);
}
document.addEventListener("DOMContentLoaded", function() {
    showPage('home');
});
function showPage(pageId) {
    // Sembunyikan semua halaman
    document.querySelectorAll(".page").forEach(page => page.style.display = "none");
    
    // Tampilkan halaman yang dipilih
    document.getElementById(pageId).style.display = "block";
    
    // Kontrol tampilan home-content
    if (pageId === "home") {
        document.getElementById("home-content").style.display = "block";
    } else {
        document.getElementById("home-content").style.display = "none";
    }
}

function closeNavbar() {
    let navbar = document.querySelector(".navbar-collapse");
    if (navbar && navbar.classList.contains("show")) {
        navbar.classList.remove("show");
    }
}

function toggleHomeContent(pageId) {
    let homeContent = document.getElementById("home-content");
    if (pageId === "home") {
        homeContent.style.display = "block"; // Tampilkan di Home
    } else {
        homeContent.style.display = "none"; // Sembunyikan di halaman lain
    }
}

function showPage(pageId) {
    let pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.opacity = 0;
        setTimeout(() => {
            page.style.display = 'none';
        }, 300);
    });
    setTimeout(() => {
        let page = document.getElementById(pageId);
        page.style.display = 'block';
        setTimeout(() => {
            page.style.opacity = 1;
        }, 50);
        toggleHomeContent(pageId); // Panggil fungsi untuk sembunyikan/tampilkan #home-content
    }, 300);
}

document.addEventListener("DOMContentLoaded", function() {
    showPage('home'); // Pastikan saat pertama kali halaman dimuat, Home aktif
});

// Fungsi untuk pendaftaran tanpa alert
function daftar() {
    // Arahkan pengguna ke halaman index.html dalam subfolder 'login'
    window.location.href = "/login/login.html"; 
}
