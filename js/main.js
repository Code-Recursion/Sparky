const music = document.querySelector("audio");

const img = document.getElementById("cover");
const title = document.getElementById("title");
const artist = document.getElementById("artist");

let current_time = document.getElementById("current_time");
const total_duration = document.getElementById("duration");

const play = document.getElementById("play");
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
    // play functionality
    music.play();
    isPlaying = true;
    play.classList.replace('fa-play', 'fa-pause');
    img.classList.add('animate');
    console.log("Music Playing");
}

const pauseMusic = () => {
    // pause functionality
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause', 'fa-play');
    img.classList.remove('animate');
    console.log("Music Paused");
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

// progress bar start

    let progress = document.getElementById("progress");

    music.addEventListener("timeupdate", (event) => {
        // console.log(event);
        const {currentTime, duration} = event.srcElement;
        
        // console.log("currentTime : ", currentTime);
        // console.log("duration : ", duration);

        let progress_time = Math.round((currentTime / duration ) * 100);
        // console.log("progress : ", Math.ceil(progress_time));
        
        progress.style.width = `${progress_time}%`;
        
        // updaing time start


        // Current Duration
        let current_min = Math.round(currentTime / 60);
        let current_sec = Math.round(currentTime % 60);
        
        console.log("current_min", current_min);
        console.log("current_sec", current_sec);
        if(currentTime) 
        {
            if(current_sec < 10)
                current_time.textContent = `${current_min}:0${current_sec}`;
            else current_time.textContent = `${current_min}:${current_sec}`;
        }

        // Total Duration
        let duration_min = Math.round(duration / 60);
        let duration_sec = Math.round(duration % 60);
        
        console.log("duration_min", duration_min);
        console.log("duration_sec", duration_sec);
        if(duration) 
        {
            total_duration.textContent = `${duration_min}:${duration_sec}`;
        }
    })
// progress bar end

// playing next song if current song ends
music.addEventListener("ended", nextSong);

next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);