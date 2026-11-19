// 1. Ganti tema Dark Mode / Light Mode
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.textContent = "Dark Mode";
    } else {
        themeBtn.textContent = "Light Mode";
    }
});

// 2. Game Tebak Angka (1 - 5)
let angkaRahasia = Math.floor(Math.random() * 5) + 1;

const tebakanInput = document.getElementById("tebakan-input");
const tebakBtn = document.getElementById("tebak-btn");
const hasilTebak = document.getElementById("hasil-tebak");

tebakBtn.addEventListener("click", function () {
    const tebakanUser = Number(tebakanInput.value);

    if (tebakanUser < 1 || tebakanUser > 5) {
        hasilTebak.textContent = "Masukkan angka 1 sampai 5 ya!";
    } else if (tebakanUser === angkaRahasia) {
        hasilTebak.textContent = "Benar! Angkanya memang " + angkaRahasia + ". Angka baru dibuat!";
        angkaRahasia = Math.floor(Math.random() * 5) + 1; // Acak ulang angka
        tebakanInput.value = "";
    } else {
        hasilTebak.textContent = "Salah, coba lagi!";
    }
});

// 3. Tombol Copy Email
const copyEmailBtn = document.getElementById("copy-email-btn");
const emailLink = document.getElementById("email-link");
const copyStatus = document.getElementById("copy-status");

copyEmailBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(emailLink.textContent);
    copyStatus.textContent = "Email berhasil disalin!";
});