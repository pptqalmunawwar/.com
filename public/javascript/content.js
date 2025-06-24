// artikel data...
let artikel = [
    {
        id: 1,
        tanggal: '12/03/2025',
        author: 'Admin PPTQ Al Munawwar',
        title: 'Tahfidz 300 Hari',
        photo: '01.jfif',
        deskripsi: 'Program intensif menghafal 30 juz Al-Qur\'an dalam 300 hari dengan bimbingan langsung dari para ustadz berpengalaman.'
    },
    {
        id: 2,
        tanggal: '12/03/2025',
        author: 'Admin PPTQ Al Munawwar',
        title: 'Program Kitab Kuing',
        photo: '02.jpg',
        deskripsi: 'Program pengajaran kitab kuning di Pondok Pesantren Tahfidzul Qur’an Al-Munawwar untuk mendalami ilmu agama dengan pendekatan tradisional yang mendalam dan sesuai dengan syariat Islam.'
    },
    {
        id: 3,
        tanggal: '17/03/2025',
        author: 'Admin PPTQ Al Munawwar',
        title: 'Pelatihan Penguatan Hafalan Al\'Quran',
        photo: '03.jpg',
        deskripsi: 'Pelatihan intensif untuk meningkatkan kualitas hafalan Al-Qur\'an dengan metode yang terbukti efektif. Bimbingan langsung dari para penghafal Al-Qur\'an yang berpengalaman.'
    },
];

let placeBerita = document.querySelector('.place-berita');

// card ...
artikel.map(item => {
    let card = `
        <div data-aos="fade-up" data-aos-duration="700" class="card">
            <!-- photo -->
            <div class="photo-card">
                <img data-aos="zoom-in" data-aos-duration="700" src="../../assets/artikel/${item.photo}" alt="${item.title}">
            </div>
            <!-- title -->
            <div class="text-card">
                <div class="item-text">
                    <h3 data-aos="zoom-in" data-aos-duration="700">${item.title}</h3>
                    <p data-aos="zoom-in" data-aos-duration="700">${item.tanggal}</p>
                </div>
                <a data-aos="zoom-in" data-aos-duration="700" href="#" class="author-card">
                    <i class="bi bi-person"></i>
                    <span>${item.author}</span>
                </a>
            </div>
            <!-- deskripsi -->
            <div data-aos="fade-up" data-aos-duration="700" class="deskripsi-card">
                ${item.deskripsi?.substring(0, 150) || "Lorem ipsum dolor sit amet, consectetur adipisicing elit..."}.....
            </div>
            <a data-aos="zoom-in" data-aos-duration="700" href="view-artikel/${item.link}" class="link-card">
                <span>Baca selengkapnya</span>
                <i class="bi bi-arrow-right"></i>
            </a>
        </div>`;
    
    placeBerita.innerHTML += card;
});

