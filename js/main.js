// const img = document.querySelector("img");
const img = document.getElementById("banner");
const music = document.querySelector("audio");
const play = document.getElementById("play");

const title = document.getElementById("title");
const artist = document.getElementById("artist");

const next = document.getElementById("next");
const prev  = document.getElementById("prev");

const songs = [
    { 
        name:"music-1",
        title:"Believer",
        artist:"Imagine Dragons"
    },
    { 
        name:"music-2",
        title:"Fight Song",
        artist:"Demi Lovato"
    },    
    {
        name:"music-3",
        title:"Some Say",
        artist:"Nea!"
    },
]

let isPlaying = false;

const playMusic = () => {
    // for play functionality
    music.play();
    isPlaying = true;
    play.classList.replace('fa-play', 'fa-pause');
    img.classList.add('animate');
}

const pauseMusic = () => {
    // for pasuse functionality
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause', 'fa-play');
    img.classList.remove('animate');
};

play.addEventListener('click', () =>{
   isPlaying ? pauseMusic() : playMusic();
});


// changing music
const loadSongs = (songs) => {
    artist.textContent = songs.artist; 
    title.textContent = songs.title;
    music.src="music/" + songs.name + ".mp3";
    img.src="images/" + songs.name + ".jpg";

};

if(music.ended) {
    img.classList.remove("animate");
}

let songIndex = 0;
const nextSong = () => { 
    songIndex = (songIndex + 1) % songs.length;
    loadSongs(songs[songIndex]);
    playMusic();
};

const prevSong = () => { 
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSongs(songs[songIndex]);
    playMusic();
};

next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);