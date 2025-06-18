// Daftar ucapan lucu setelah sidang
const ucapanSetelahSidang = [
  "Senyumin dosennya... akhirnya lulus juga! 😁",
  "Sidang selesai, saatnya jalan menuju wisuda! 🎓",
  "Tadi kamu jawabnya keren banget, dosennya juga pura-pura makin kagum. 🤭",
  "Sidang bukan perang, tapi kamu tetap menang! 💪",
  "Pas bingung tadi, senyum kamu menyelamatkan semuanya. 😉",
  "Skripsi kamu emang drama Korea... banyak tegangnya, tapi ending-nya bahagia! 🥲"
];

// Ambil elemen tempat ucapan akan muncul
const ucapanEl = document.getElementById("ucapan");

// Pilih ucapan acak
function gantiUcapan() {
  const randomIndex = Math.floor(Math.random() * ucapanSetelahSidang.length);
  ucapanEl.textContent = ucapanSetelahSidang[randomIndex];
}

// Fungsi memutar suara
function playSound() {
  const sound = document.getElementById("sound");
  sound.play();
}

// Tampilkan ucapan pertama secara otomatis saat halaman dibuka
window.onload = () => {
  gantiUcapan();
};
