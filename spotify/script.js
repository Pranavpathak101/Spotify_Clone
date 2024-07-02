console.log("Welcome To Spotify");
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));


let song = [
    {songName: "The Less I Know The Better", filePath: "song/1.mp3", coverPath: "cover.jpeg"},
    {songName: "Borderline", filePath: "song/2.mp3", coverPath: "2.jpeg"},
    {songName: "Hit 'Em Up", filePath: "song/3.mp3", coverPath: "3.jpeg"},
    {songName: "Too Many Nights", filePath: "song/4.mp3", coverPath: "4.jpeg"},
    {songName: "Staying Alive", filePath: "song/5.mp3", coverPath: "5.jpeg"},
    {songName: "The Night We Met", filePath: "song/6.mp3", coverPath: "6.jpeg"},
    {songName: "Hypnotize", filePath: "song/7.mp3", coverPath: "7.jpg"},
    {songName: "505", filePath: "song/8.mp3", coverPath: "8.jpeg"},
    {songName: "Kiska Rasta Dekhe", filePath: "song/9.mp3", coverPath: "9.jpg"},
    {songName: "Chaska", filePath: "song/10.mp3", coverPath: "10.jpg"},
]
songItem.forEach((element, i )=> {
    element.getElementsByTagName('img')[0].src = song[i].coverPath;;
    element.getElementsByClassName('songName')[0].innerText = song[i].songName;
});

//let audioElement = new Audio('music.mp3');
//audioElement.play();
//handel play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
//listen to events 
audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress ;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100 ;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `song/${songIndex}.mp3`;
        masterSongName.innerText = song[songIndex-1].songName;
        audioElement.currentTime = 0 ;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=10){
        songIndex = 1;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex}.mp3`;
    masterSongName.innerText = song[songIndex-1].songName;
    audioElement.currentTime = 0 ;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=1){
        songIndex = 10;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex}.mp3`;
    masterSongName.innerText = song[songIndex-1].songName;
    audioElement.currentTime = 0 ;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})