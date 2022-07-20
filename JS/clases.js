class Song {
  constructor(songName, author, link, image, color) {
    this.songName = songName;
    this.author = author;
    this.link = link;
    this.image = image;
    this.color = color;
  }
}

class MusicPlayer {
  constructor(songs = [], songsFolder) {
    this.songs = [...songs];
    this.indexSong = localStorage.getItem("IndexCancion");
    this.playingStatus = "paused";
    this.songsFolder = songsFolder;
    this.audioPlayer = new Audio(
      this.songsFolder + this.songs[this.indexSong].link
    );
  }
  nextSong() {
    this.indexSong = this.indexSong + 1;
    if (this.indexSong >= this.songs.length) {
      this.indexSong = 0;
    }
    this.pause();
    this.audioPlayer = new Audio(
      this.songsFolder + this.songs[this.indexSong].link
    );
    this.play();

    localStorage.setItem("IndexCancion", this.indexSong);
  }

  prevSong() {
    this.indexSong = this.indexSong - 1;
    if (this.indexSong < 0) {
      this.indexSong = this.songs.length - 1;
    }
    this.pause();
    this.audioPlayer = new Audio(
      this.songsFolder + this.songs[this.indexSong].link //this.songs[this.indexSong] nos dice que cancion esta en curso
    );
    localStorage.setItem("IndexCancion", this.indexSong);
    this.play();
  }

  pause() {
    this.audioPlayer.pause();
  }

  play() {
    this.audioPlayer.play();
    /* (() => {
      const index = localStorage.getItem("IndexCancion");
      console.log(index);
    })(); */
  }

  getCurrentSong() {
    return this.songs[this.indexSong];
  }
}

//song = []    musicPlayer pregunta a la clase de arriba que cancion esta reproduciendo
//options = textQuerySelector, imagequerySelector,imagesFolder,
//textQuerySelector, imageQuerySelector,
class MusicGallery {
  constructor(songs = [], musicPlayer, options) {
    this.songs = [...songs];
    this.musicPlayer = musicPlayer;
    this.options = { ...options };
  }
  updatePlayingSongInfo() {
    this.setCurrentSongText();
    this.setCurrentSongImage();
    this.setCurrentBgGradient();
  }
  setCurrentSongText() {
    const elements = document.querySelectorAll(this.options.textQuerySelector);
    elements.forEach((element) => {
      element.innerHTML = this.musicPlayer.getCurrentSong().songName;
    });
  }
  setCurrentSongImage() {
    const elements = document.querySelectorAll(this.options.imgQuerySelector);
    elements.forEach((element) => {
      element.style.backgroundImage = `url('${this.options.imgFolder}${
        this.musicPlayer.getCurrentSong().image
      }')`;
    });
  }
  setCurrentBgGradient() {
    const elements = document.querySelectorAll(this.options.bgQuerySelector);
    elements.forEach((element) => {
      element.style.background = `radial-gradient(${
        this.musicPlayer.getCurrentSong().color
      }, #9198e5)`;
    });
  }
}
