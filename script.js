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
  "https://github.com/user-attachments/assets/9565934f-1e58-453e-83b0-8149a4b69519", 
  "https://github.com/user-attachments/assets/ac4d87e2-9e87-4716-bd11-458211902119",
  "https://github.com/user-attachments/assets/9d47bbb8-f622-40b1-88f0-a11ced5f6baa",
  "https://github.com/user-attachments/assets/ff309247-03b2-4466-8241-ed06da0491c4",
  "https://github.com/user-attachments/assets/b1e99399-a2e5-4a15-b67f-ba3beb6bea4d",
  "https://github.com/user-attachments/assets/ae3c58ba-84fc-4964-b66d-8b981897d8b9",
  "https://github.com/user-attachments/assets/715ec89a-6628-4c6d-a17b-cfe7715af5b2",
  "https://github.com/user-attachments/assets/f14047c5-ff2d-417b-b179-4b58330c2ba5",
  "https://github.com/user-attachments/assets/38a903a5-d11f-4ff5-94d3-dc4cf5bc83a3",
  "https://github.com/user-attachments/assets/c208112f-1c7e-4986-ae44-b6cbd14ad6e9",
  "https://github.com/user-attachments/assets/dc4b7f38-ceb0-4a00-9be8-c72b16531340",
  "https://github.com/user-attachments/assets/637d95ce-2928-4cd2-9ff4-3d95dd629b9d",
  "https://github.com/user-attachments/assets/57a88feb-41e1-45db-9730-79ca5429dcdf",
  "https://github.com/user-attachments/assets/ec749fc4-7b5b-49fd-95f9-d7ebe5fe8e73",
  "https://github.com/user-attachments/assets/a196bfa8-d758-4d2c-8dc6-689718bda381",
  "https://github.com/user-attachments/assets/a6062dab-735b-44ca-8a07-977b76a67736",
  "https://github.com/user-attachments/assets/45228435-849c-4d17-adae-ac1494544283",
  "https://github.com/user-attachments/assets/aa2e9cb5-b4a6-4aed-b025-e06e6bb063cd",
  "https://github.com/user-attachments/assets/2e52d106-c949-4715-98da-85adad7ef3bc",
  "https://github.com/user-attachments/assets/554526bb-8527-48a0-8d6e-088dff42eda2",
  "https://github.com/user-attachments/assets/924c2538-4f64-40fe-a37f-93630b62a1a8",
  "https://github.com/user-attachments/assets/14510577-ed23-4802-8946-c9ab8785ced6",
  "https://github.com/user-attachments/assets/92062a76-413b-4911-971c-1a7c72ea5979",
  "https://github.com/user-attachments/assets/733713db-3250-4253-af89-f2e3db5d7bf9",
  "https://github.com/user-attachments/assets/cfc948d1-e0c7-4b6a-a4e3-3cee150c1617",
  "https://github.com/user-attachments/assets/28b8826a-3ed9-4993-bde9-8111c8e105f2",
  "https://github.com/user-attachments/assets/d3ecfb9b-4c38-489d-bcef-16198d80307d",
  "https://github.com/user-attachments/assets/0d7a4b54-d90b-4a41-a77a-71b3bdc0e676",
  "https://github.com/user-attachments/assets/96cc38ee-2212-4de2-94b3-e6a1ba2dd1f5",
  "https://github.com/user-attachments/assets/d49c3512-0b7e-468b-933d-025cd1ba4120",
  "https://github.com/user-attachments/assets/016d9091-00ea-4621-932d-11cec086bb9a",
  "https://github.com/user-attachments/assets/1d79b826-de7e-49de-be40-a96ba455b23b",
  "https://github.com/user-attachments/assets/3ae55a7a-dbf4-4f5e-a650-c6ea1ad6b69d",
  "https://github.com/user-attachments/assets/a3188c60-0c3e-4ed4-8e9d-b6e001fef4db",
  "https://github.com/user-attachments/assets/e06a3a68-7890-494c-82a2-bbddbc0659fa",
  "https://github.com/user-attachments/assets/a21c9953-9de2-4c02-b205-b25cb2ea65e7",
  "https://github.com/user-attachments/assets/47eef478-2fa7-4c61-8874-69e0c77a081f",
  "https://github.com/user-attachments/assets/a1317b60-daf7-4b90-97df-78fd6d21580d",
  "https://github.com/user-attachments/assets/36ff6d96-64c2-42c5-996e-57a7686acf8a",
  "https://github.com/user-attachments/assets/6c61eb14-77b9-40d2-9560-1b9ee188b2e5",
  "https://github.com/user-attachments/assets/ec5043fe-2df3-42e4-9e46-7d476a6948e4",
  "https://github.com/user-attachments/assets/d56ceac9-4fa0-41c0-898b-b09a8497a6f4",
  "https://github.com/user-attachments/assets/0e0134ae-5e0d-41f8-adcf-e5738628374a",
  "https://github.com/user-attachments/assets/a8fe5b12-8425-4c8a-b186-7a655d46afc9",
  "https://github.com/user-attachments/assets/43a2b25c-38b1-421d-b478-e6c101a1daf1",
  "https://github.com/user-attachments/assets/f554d4ed-0404-4e22-b015-cd4df5fb3f0a",
  "https://github.com/user-attachments/assets/0daf9927-adbb-4c71-8d10-4aa5573050a5",
  "https://github.com/user-attachments/assets/a3cd54fc-36d1-4325-ac55-3f8f176c9cb1"
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
  let lastIndex = -1; // simpan index gambar terakhir

  imageInterval = setInterval(() => {
    let newIndex;
    // ulangi random sampai beda dari sebelumnya
    do {
      newIndex = Math.floor(Math.random() * imageList.length);
    } while (newIndex === lastIndex);

    lastIndex = newIndex; // update index terakhir
    img.style.opacity = 0;
    setTimeout(() => {
      img.src = imageList[newIndex];
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