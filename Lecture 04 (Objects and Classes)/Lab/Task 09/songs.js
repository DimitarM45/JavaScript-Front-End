function printSongs(songsInfo) {
    class Song {
      constructor(type, name, time) {
        this.type = type;
        this.name = name;
        this.time = time;
      }
  
      type;
  
      name;
  
      time;
    }
  
    let songArr = [];
  
    let typeToPrint = songsInfo[songsInfo.length - 1];
  
    for (let i = 1; i < songsInfo.length - 1; i++) {
      let [songType, songName, songTime] = songsInfo[i].split("_");
  
      songArr.push(new Song(songType, songName, songTime));
    }
  
    if (typeToPrint === "all") {
      songArr.forEach((song) => {
        console.log(song.name);
        
      });
    } else {
      songArr
        .filter((song) => song.type === typeToPrint)
        .forEach((song) => {
          console.log(song.name);
        });
    }
  }