let maintenance = false; // Ganti ke false jika ingin menampilkan agenda

let agenda = [
    {
        id: 1,
        title: 'Haflah Khotmil Quran Ke-9',
        tanggal: '22/04/2025',
        author: 'Admin Pondok IT',
        photo: '01.jpg'
    },
    {
        id: 2,
        title: 'Pendaftaran Santri Baru 2025/2026',
        tanggal: '22/02/2025',
        author: 'Admin Pondok IT',
        photo: '02.png'
    },
];

let dataset = document.querySelector('.place-agenda-m');

if (maintenance) {
    dataset.innerHTML = `
        <div class="maintenance-message" style="text-align:center; padding:40px;">
            <h2>Halaman Agenda Sedang Dalam Pemeliharaan</h2>
            <p>Silakan kembali beberapa saat lagi.</p>
        </div>
    `;
} else {
    agenda.map(item => {
        let card = `
            <div data-aos="fade-up" data-aos-duration="700" class="image-agenda">
                <img data-aos="zoom-in" data-aos-duration="700" src="../../../assets/agenda/${item.photo}" alt="">
                <span data-aos="zoom-in" data-aos-duration="700">${item.title}</span>
            </div>
            
        `;
        dataset.innerHTML += card;
        
    });
}
