const graduationSlides = [
  "Maaf ya ini aku bilangnya kecepatan sebelum kamu wisuda soalnya aku ngira kamu wisuda dulu hehehehe",
  "Btw Selamat ya atas kelulusanmu! Lulus bukan tentang siapa yang paling cepat, tapi tentang siapa yang tetap bertahan sampai akhir. Hari ini adalah bukti nyata dari kerja keras dan keteguhan hatimu.",
  "Meski perjalananmu tak secepat yang lain, kamu telah membuktikan bahwa ketekunan dan tanggung jawab bisa berjalan beriringan. Di tengah segala kesibukan dan tantangan, kamu tetap memilih untuk menyelesaikan apa yang kamu mulai dan itu sungguh luar biasa. 🌟",
  "Banggalah pada dirimu sendiri. Ini adalah akhir dari satu bab, dan awal dari perjalanan yang lebih besar lagi. Semoga setiap langkahmu ke depan selalu penuh semangat, keberanian, serta dikelilingi oleh orang-orang yang mendukungmu. Selamat menempuh petualangan baru ya!! ❤️✨"
];

const birthdaySlides = [
  "Maaf juga yang ini karna aku ga tepat waktu ngucapin ulang tahun kamu karna banyak sekali urusan yang perlu aku selesaiin :' ",
  "Aku masih inget banget tanggal cantik itu ~ 19 September 2001 ~ hari dimana kamu dilahirkan dan sekarang hari itu datang di tahun 2025 inii",
  "Maaf ya aku telat ngucapinnya paling sekarang ini nyampe di kamu tanggal 20 September 2025, selisih sehari :( tapi gaapa kan?",
  "Oiya Happy Birthday ya bebb (huh kangennya manggil kek gitu tpi uda ga lagi wkwkw), Di umur 24 tahun dan tahun ini, semoga tahun ini penuh dengan tawa dan kebahagiaan",
  "Lancar rezekinya, sehat selalu, dikelilingi orang-orang yang kamu sayangi, apa yang kamu doain terkabul dan Semoga semua impianmu menjadi kenyataan, dan harimu selalu indah 💖",
  "Selamat ulang tahun ya bebebbnya... (bukan aku jg si tpi :')"
];

const graduationName = "Piji Dewi Antikasari S.Tr.Ak";
const birthdayName = "Piji Dewi Antikasari";

let mode = "graduation"; 
let slides = graduationSlides;
let currentSlide = 0;

const titleElement = document.getElementById("title");
const nameElement = document.getElementById("name");
const textElement = document.getElementById("text");
const dotsContainer = document.getElementById("dots");

function renderDots() {
  dotsContainer.innerHTML = "";
  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.onclick = () => goToSlide(i);
    if (i === currentSlide) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  });
}

function showSlide(n) {
  textElement.innerText = slides[n];
  renderDots();
}

function changeSlide(step) {
  currentSlide = (currentSlide + step + slides.length) % slides.length;
  showSlide(currentSlide);
}

function goToSlide(n) {
  currentSlide = n;
  showSlide(currentSlide);
}

function switchMode() {
  if (mode === "graduation") {
    mode = "birthday";
    slides = birthdaySlides;
    titleElement.innerText = "🎂 Happy Birthday 🎉";
    nameElement.innerText = birthdayName;

    document.body.classList.remove("graduation");
    document.body.classList.add("birthday");
  } else {
    mode = "graduation";
    slides = graduationSlides;
    titleElement.innerText = "🎓 Happy Graduation 🎉";
    nameElement.innerText = graduationName;

    document.body.classList.remove("birthday");
    document.body.classList.add("graduation");
  }
  currentSlide = 0;
  showSlide(currentSlide);
}

// tampilkan pertama kali
nameElement.innerText = graduationName;
showSlide(currentSlide);

function launchConfetti() {
  const confettiContainer = document.getElementById("confetti");
  const emojis = ["🤗","🎉", "✨", "🎊", "💫", "😍"];
  
  for (let i = 0; i < 20; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.fontSize = 20 + Math.random() * 30 + "px";
    confetti.style.animationDuration = 3 + Math.random() * 2 + "s";
    confettiContainer.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
}

// Panggil confetti otomatis saat slide terakhir
function showSlide(n) {
  textElement.innerText = slides[n];
  renderDots();
  
  // jika slide terakhir, munculkan confetti
  if (n === slides.length - 1) {
    launchConfetti();
  }
}

const imageList = [
  "images/Foto1.png", "images/Foto2.png", "images/Foto3.png", "images/Foto4.png", "images/Foto5.png",
  "images/Foto6.png", "images/Foto7.png", "images/Foto8.png", "images/Foto9.png", "images/Foto10.png",
  "images/Foto11.png", "images/Foto12.png", "images/Foto13.png", "images/Foto14.png", "images/Foto15.png",
  "images/Foto16.png", "images/Foto17.png", "images/Foto18.png", "images/Foto19.png", "images/Foto20.png",
  "images/Foto21.png", "images/Foto22.png", "images/Foto23.png", "images/Foto24.png", "images/Foto25.png",
  "images/Foto26.png", "images/Foto27.png", "images/Foto28.png", "images/Foto29.png", "images/Foto30.png",
  "images/Foto31.png", "images/Foto32.png", "images/Foto33.png", "images/Foto34.png", "images/Foto35.png",
  "images/Foto36.png", "images/Foto37.png", "images/Foto38.png", "images/Foto39.png", "images/Foto40.png",
  "images/Foto41.png", "images/Foto42.png", "images/Foto43.png", "images/Foto44.png", "images/Foto45.png",
  "images/Foto46.png", "images/Foto47.png", "images/Foto48.png"
];

let imageInterval;

function showRandomImages() {
  // sembunyikan halaman utama
  document.querySelector("header").style.display = "none";
  document.querySelector(".card").style.display = "none";
  document.querySelector(".dots").style.display = "none";
  document.querySelector(".switch").style.display = "none";
  document.querySelector(".random-img-btn").style.display = "none";
  
  const page = document.getElementById("random-image-page");
  const container = document.getElementById("random-images");
  
  container.innerHTML = ""; // bersihkan

  // buat element <img> pertama
  const img = document.createElement("img");
  img.src = imageList[Math.floor(Math.random() * imageList.length)];
  container.appendChild(img);
  
  // ganti foto setiap 5 detik
  imageInterval = setInterval(() => {
    img.style.opacity = 0;
    setTimeout(() => {
      img.src = imageList[Math.floor(Math.random() * imageList.length)];
      img.style.opacity = 1;
    }, 500);
  }, 5000);
  
  page.style.display = "flex"; // tampilkan halaman random image
}

function backToMain() {
  clearInterval(imageInterval);

  document.querySelector("header").style.display = "block"; // ⬅️ tambahin ini
  document.querySelector(".card").style.display = "flex";
  document.querySelector(".dots").style.display = "block";
  document.querySelector(".switch").style.display = "inline-block";
  document.querySelector(".random-img-btn").style.display = "inline-block";
  document.getElementById("random-image-page").style.display = "none";
  document.getElementById("journey").innerHTML = "";

  currentSlide = 0;   // optional, biar balik ke slide awal
  showSlide(currentSlide);
}