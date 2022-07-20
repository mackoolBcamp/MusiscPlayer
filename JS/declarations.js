//DECLARO LAS CANCIONES
const mySongs = [
  new Song(
    "So you Don't",
    "Alejandro Sierra",
    "Alejandro Sierra - So You Dont.mp3",
    "Alejandro Sierra - So You Dont.png",
    "#fafa6e"
  ),
  new Song(
    "FRIENDS",
    "Anne-Marie",
    "Anne-Marie - FRIENDS.mp3",
    "Anne-Marie - FRIENDS.png",
    "#089f8f"
  ),
  new Song(
    "ROXANNE",
    "Arizona Zervas",
    "Arizona Zervas - ROXANNE.mp3",
    "Arizona Zervas - ROXANNE.png",
    "##fafa6e"
  ),
  new Song(
    "Sweet but Psycho",
    "Ava Max",
    "Ava Max - Sweet but Psycho.mp3",
    "Ava Max - Sweet but Psycho.png",
    "#215d6e"
  ),
  new Song(
    "The World Is Mine",
    "David Guetta",
    "David Guetta - The World Is Mine.mp3",
    "David Guetta - The World Is Mine.png",
    "#000000"
  ),
  new Song(
    "Cold",
    "DJ Mo Fleeks",
    "2017 DJ Mo Fleeks - Cold.mp3",
    "2017 DJ Mo Fleeks - Cold.jpg",
    "#2a4858"
  ),
];
//(mySongs, '#gallery-container', './assets/img',myMusic Player)
const myMusicPlayer = new MusicPlayer(mySongs, "../Assets/mp3/");
const myMusicGallery = new MusicGallery(mySongs, myMusicPlayer, {
  textQuerySelector: ".text-gallery",
  imgQuerySelector: ".img-gallery",
  bgQuerySelector: ".bg-gallery",
  imgFolder: "../Assets/img/",
});
