const songs = [
  { title: "Wada Karle Sajna", artist: "Mohammed Rafi and Lata Mangeshkar", src: "002. Haath Ki Safai - Wada Karle Sajna.mp3" },
  { title: "Kora Kagaz Tha Yeh Mann", artist: "Kishore Kumar and Lata Mangeshkar", src: "007. Aaradhna - Kora Kagaz Tha Yeh Mann.mp3" },
  { title: "Kya Khoob Lagti Ho", artist: "Mukesh", src: "001. Dharmatma - Kya Khoob Lagti Ho.mp3" },
  { title: "Naino Mein Sapna", artist: "Amit Kumar", src: "003. Himmatwala - Naino Mein Sapna.mp3" },
  { title: "Tumhari Nazar Kyon", artist: "Mohammed Rafi and Lata Mangeshkar", src: "004. Do Kaliyan - Tumhari Nazar Kyon.mp3" },
  { title: "Hum To Tere Aashiq Hai", artist: "Lata Mangeshkar and Mukesh", src: "005. Farz - Hum To Tere Aashiq Hai.mp3" },
  { title: "Bekhudi Mein Sanam", artist: "Lata Mangeshkar and Mohammed Rafi", src: "006. Haseena Maan Jayegi - Bekhudi Mein Sanam.mp3" },
  { title: "Yeh Reshmi Zulfein", artist: "Mohammed Rafi", src: "008. Do Raaste - Yeh Reshmi Zulfein.mp3" },
  { title: "Tujh Sang Preet Lagayee", artist: "Kishore Kumar and Lata Mangeshkar", src: "009. Kaamchor - Tujh Sang Preet Lagayee.mp3" },
  { title: "Dillagi Ne Di Hawa", artist: "Asha Bhosle and Kishore Kumar", src: "010. Dostana - Dillagi Ne Di Hawa.mp3" },
  { title: "Ek Raasta Hai Zindagi", artist: "Kishore Kumar, Lata Mangehskar and Rakesh Roshan", src: "011. Kala Patthar - Ek Raasta Hai Zindagi.mp3" },
  { title: "Are Jane Kaise", artist: "Kishore Kumar and Lata Mangeshkar", src: "012. Shakti - Are Jane Kaise.mp3" },
  { title: "Dekha Ek Khwaab To Yeh", artist: "Amitabh Bachchan, Kishore Kumar and Lata Mangeshkar", src: "013. Silsila - Dekha Ek Khwaab To Yeh.mp3" },
  { title: "Saathiya Nahin Jana", artist: "Lata Mangeshkar and Mohammed Rafi", src: "014. Aaya Sawan Jhoom Ke - Saathiya Nahin Jana.mp3" },
  { title: "Teri Shokh Nazar Ka", artist: "Lata Mangeshkar and Mukesh", src: "015. Patanga - Teri Shokh Nazar Ka.mp3" },
  { title: "Mere Pyar Ki Aawaz Pe", artist: "Lata Mangeshkar", src: "016. Raj Mahal - Mere Pyar Ki Aawaz Pe.mp3" },
  { title: "Hum Tum Chori Se", artist: "Lata Mangeshkar and Mukesh", src: "017. Dharti Kahe Pukar Ke - Hum Tum Chori Se.mp3" },
  { title: "Yeh Mausam Bhiga Bhiga Hai", artist: "Lata Mangeshkar and Mohammed Rafi", src: "018. Dharti - Yeh Mausam Bhiga Bhiga Hai.mp3" },
  { title: "Do Kadam Tum Chalo", artist: "Lata Mangeshkar and Mukesh", src: "019. Ek Haseena Do Deewane - Do Kadam Tum Chalo.mp3" },
  { title: "Hai Re Hai Neend Nahin Aaye", artist: "Mohammed rafi and Lata Mangeshkar", src: "020. Humjoli - Hai Re Hai Neend Nahin Aaye.mp3" },
  { title: "Ruby O Ruby", artist: "Mukesh and Lata Mangeshkar", src: "021. Chahat - Ruby O Ruby.mp3" },
  { title: "Jo Wada Kiya Woh", artist: "Lata Mangeshkar and Mohammed Rafi", src: "022. Taj Mahal - Jo Wada Kiya Woh.mp3" },
  { title: "Pardesiyo Se", artist: "Mohammed Rafi", src: "023. Jab Jab Phool Khile - Pardesiyo Se.mp3" },
  { title: "Aasmaan Ke Neeche", artist: "Kishore Kumar and Lata Mangeshkar", src: "024. Jewel Thief - Aasmaan Ke Neeche.mp3" },
  { title: "O Mere Sanam", artist: "Lata Mangeshkar and Mugesh", src: "025. Sangam - O Mere Sanam.mp3" },
  { title: "Rut Hai Milan Ki", artist: "Lata Mangeshkar and Mohammed Rafi", src: "026. Mela - Rut Hai Milan Ki.mp3" },
  { title: "Dil Ki Baatein", artist: "Lata Mangeshkar and Kishore Kumar", src: "027. Roop Tera Mastana - Dil Ki Baatein.mp3" },
  { title: "Dil Tadap Tadap Ke", artist: "Mukesh and Lata Mangeshkar", src: "028. Madhumati - Dil Tadap Tadap Ke.mp3" },
  { title: "Mehboob Mere", artist: "Lata Mangeshkar and Mugesh", src: "029. Patthar Ke Sanam - Mehboob Mere.mp3" },
  { title: "Jhilmil Sitaron Ka", artist: "Lata Mangeshkar and Mohammed Rafi", src: "030. Jivan Mrityu - Jhilmil Sitaron Ka.mp3" },
  { title: "Tum Ruthi Raho", artist: "Lata Mangeshkar and Mugesh", src: "031. Aas Ka Panchee - Tum Ruthi Raho.mp3" },
  { title: "Duniya Walon Se Door", artist: "Lata Mangeshkar and Mukesh", src: "032. Ujala - Duniya Walon Se Door.mp3" },
];

let songIndex = 0;
let isPlaying = false;

const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const volumeControl = document.getElementById("volume");
const playlistEl = document.getElementById("playlist");

// Load playlist
songs.forEach((song, index) => {
  const li = document.createElement("li");
  li.textContent = `${song.title} - ${song.artist}`;
  li.addEventListener("click", () => {
    songIndex = index;
    loadSong(songs[songIndex]);
    playSong();
  });
  playlistEl.appendChild(li);
});

function loadSong(song) {
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = song.src;

  document.querySelectorAll(".playlist li").forEach(li => li.classList.remove("active"));
  playlistEl.children[songIndex].classList.add("active");
}

function playSong() {
  isPlaying = true;
  audio.play();
  playBtn.textContent = "⏸";
}

function pauseSong() {
  isPlaying = false;
  audio.pause();
  playBtn.textContent = "▶";
}

playBtn.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});

prevBtn.addEventListener("click", () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
});

nextBtn.addEventListener("click", () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
});

// Progress bar update
audio.addEventListener("timeupdate", (e) => {
  const { currentTime, duration } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;

  let min = Math.floor(currentTime / 60);
  let sec = Math.floor(currentTime % 60);
  if (sec < 10) sec = `0${sec}`;
  currentTimeEl.textContent = `${min}:${sec}`;

  if (duration) {
    let dmin = Math.floor(duration / 60);
    let dsec = Math.floor(duration % 60);
    if (dsec < 10) dsec = `0${dsec}`;
    durationEl.textContent = `${dmin}:${dsec}`;
  }
});

// Seek
progressContainer.addEventListener("click", (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
});

// Volume control
volumeControl.addEventListener("input", (e) => {
  audio.volume = e.target.value;
});

// Autoplay next song
audio.addEventListener("ended", () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
});

// Initialize
loadSong(songs[songIndex]);
volumeControl.value = 0.5;
audio.volume = 0.5;
