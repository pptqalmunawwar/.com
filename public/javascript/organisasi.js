let data = [
    {
        jabatan: 'Muasis Pondok',
        nama: 'KH. Amien Wasthoni',
    },
    {
        jabatan: 'Muasis Pondok',
        nama: 'Nyai Hajjah Siti Zahrotun',
    },
    {
        jabatan: 'Pengasuh 1',
        nama: 'KH. Sholachuddin S.Pd ',
    },
    {
        jabatan: 'Pengasuh 2',
        nama: 'Nyai Hajjah Chotimah S. Ag Al Hafidzah',
    },
    {
        jabatan: 'Lurah Pondok',
        nama: 'Ust. Fahri Nur Sho\'ib S.H Al Hafidz',
    },
    {
        jabatan: 'Wakil Lurah Pondok',
        nama: 'Ust. Muhammad Fadhli S.Pd Al Hafidz',
    },
    {
        jabatan: 'Penanggung Jawab 1',
        nama: 'Ust. Zainun Muarif Al Hafidz',
    },
    {
        jabatan: 'Penanggung Jawab 2',
        nama: 'Ust. Zaki Syarof S.Kom Al Hafidz',
    },
    {
        jabatan: 'Bendahara 1',
        nama: 'Ustdzh. Wardatun Mustagfirah Al Hafidzah',
    },
    {
        jabatan: 'Bendahara 2',
        nama: 'Khoir Ibnu Akhsan Al Hafidz',
        foto: '/assets/png & svg/khoir.jpg'
    },
];

let place = document.querySelector('.struktur');
data.forEach(item => {
    let card = `
    <div data-aos="fade-up" data-aos-duration="700" class="card-struktur">
        <div class="text">
            <h2 data-aos="zoom-in" data-aos-duration="700">${item.jabatan}</h2>
            <p data-aos="zoom-in" data-aos-duration="700">${item.nama}</p>
            <div data-aos="fade-up" data-aos-duration="700" class="quote">
            </div>
            <div class="poin">
                <span data-aos="zoom-in" data-aos-duration="700"></span>
                <span data-aos="zoom-in" data-aos-duration="700"></span>
                <span data-aos="zoom-in" data-aos-duration="700"></span>
            </div>
        </div>
    </div>
    `;
    place.innerHTML += card;
});
