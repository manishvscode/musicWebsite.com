// first of all select the id/class/tags 
const music = document.querySelector("audio"); 
const img = document.querySelector("img");
const artist = document.getElementById("artist");
const tittle = document.getElementById("tittle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

// song data
const songs = [
    {
        name:"manish1",
        tittle:"Jumme-E-Ki-Raat",
        artist:"Unknown1"
    },
    {
        name:"manish2",
        tittle:"Yum Hi Ho",
        artist:"Unknown2"
    },
    {
        name:"manish3",
        tittle:"Lo Safar",
        artist:"Unknown3"
    }
];

// for the play
let isPlaying = false;

// add some important event
// for play function
const playMusic  = () => {
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};
// for pause function
const pauseMusic  = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("anime");
};
play.addEventListener('click',  () => {
//    trenary operator
    // value ? ture : false;
    isPlaying ? pauseMusic() :playMusic();
});

// changing the music 
const loadSong = (songs) => {
    tittle.textContent = songs.tittle;
    artist.textContent = songs.artist;
    music.src = "./"+songs.name + ".mp3";
    img.src = "./"+songs.name + ".jpeg";
}
// loadSong(songs[2]);
songIndex = 0;

const nextSong = () => {
    songIndex = (songIndex +1)%songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};
const prevSong = () => {
    songIndex = (songIndex -1 +songs.length) %songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

nextSong 

next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);
