// 1. fitur sapaan berdasarkan waktu

// manipulasi halaman => DOM => ambil element html lalu manipulasi
const teksSapaan = document.getElementById("sapaan-waktu")

const jamSekarang = new Date().getHours(); //ambil waktu sekarang (jam)

// kalau sekarang pukul 5 pagi sampai 12 siang maka tampilkan "selamat pagi"
// lakukan pengkondisian (if-else)
if(jamSekarang >= 5 && jamSekarang < 12){
    // manipulasi teks sapaan
    teksSapaan.innerText = "Halo selamat pagi, selamat datang di KandaKost" 
} else if(jamSekarang >= 12 && jamSekarang < 15){
    teksSapaan.innerText = "Halo selamat siang, selamat datang di KandaKost"
} else if(jamSekarang >= 16 && jamSekarang < 19){
    teksSapaan.innerText = "Halo selamat sore, selamat datang di KandaKost"
} else if(jamSekarang >= 19 && jamSekarang <= 23){
    teksSapaan.innerText = "Halo selamat malam, selamat datang di KandaKost"
} else{
    teksSapaan.innerText = "Halo selamat subuh, selamat datang di KandaKost"
}

// 2. fitur dark mode

// element html apa yg harus kita ambil untuk manipulasi fitur ini?
const tombolTema =  document.getElementById("tombol-tema");//ambil element dengan id tombol-tema

// mengaktifkan dan menonaktifkan darkmode => pakai toggle
// toggle => berfungsi untuk menambah dan menghapus class css
const body = document.body;

// manipulasi darkmode pada body ketika tombol ditekan (event listener)
tombolTema.addEventListener('click', function(){
    //akan berisi cara untuk mengaktif dan menonaktifkan darkmode
    body.classList.toggle("dark-mode");

    //ubah teks tombol sesuai tema
    // jika lagi darkmode
    if(body.classList.contains("dark-mode")){
        // manipulasi tombol tema
        tombolTema.innerText = "Mode terang";
    }
    // jika tidak (lagi light mode)
    else{
        tombolTema.innerText = "Mode Gelap";
    }
});


// 3. fitur, mengolah data kost dengan javascript
// dengan stuktur data (Array & object), dan Function

// langkah 1 : kita siapkan struktur data (array of object) untuk menampung data kamar kost
const dataKamar = [
    {tipe: "Tipe Reguler", fasilitas: "Kipas angin", harga: "Rp800.000"},
    { tipe: "Tipe Premium", fasilitas: "AC, Kipas angin, lemari", harga: "Rp 1.200.000" },
    { tipe: "Tipe Eksklusif", fasilitas: "AC, TV, Kulkas Mini, Lemari", harga: "Rp 2.000.000" }
];

// Langkah 2 : kita buat fungsi untuk render data kost ke tabel dihalaman website
function renderTable(dataKamar){
    // element apa yg harus diambil utk dimanipulasi untuk fitur ini
    const tableBody = document.getElementById("daftar-kost"); 

    // siapkan variabel untuk menampung string baris html
    let barisHTML = "";

    // iterasi setiap data kost untuk dijadikan baris html (for each)
    dataKamar.forEach((kamar) => {
        barisHTML +=  `
            <tr>
                <td>${kamar.tipe}</td>
                <td>${kamar.fasilitas}</td>
                <td>${kamar.harga}</td>
            </tr>
        `
    });

    // masukkan barisHTML (yg sudah berisi data kost) ke dlm tableBody dihtml
    tableBody.innerHTML = barisHTML;
}

// panggil fungsinya supaya fungsinya dijalankan
renderTable(dataKamar);



// 4. fitur validasi form
//4. menghidupkan form booking kamar
// validasi booking form

//get element yg mau dimanipulasi
const formBooking = document.getElementById("form-booking");
const kotakSukses = document.getElementById("pesan-sukses");

// event listener ketika terjadi aksi submit pada form booking
formBooking.addEventListener("submit", function(event){

    // Mencegah halaman refresh otomatis
    event.preventDefault();

    //kita mau menampilkan pesan sukses ketika form sudah dikirim

    const namaUser = document.getElementById("nama").value; //ambil nilai nama dari user

    kotakSukses.innerHTML = `
        <h3 style="margin-bottom: 10px;">Booking Berhasil! 🎉</h3>
        <p>Terima kasih, <b>${namaUser}</b>. Tim KandaKost telah menerima data Anda dan akan segera menghubungi melalui email.</p>
        <button onclick="location.reload()" style="margin-top: 15px; background-color: #0f5132;">Kembali</button>
    `;

    //munculkan kotak sukses dihalaman html
    kotakSukses.style.display = "block";

    // hilangkan form supaya tidak 2 kali user kirim booking
    formBooking.style.display = "none";
});