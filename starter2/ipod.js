  // Create your global variables below:
  var tracklist = ["Above The Radio", "Hallelujah", "Doesn't Mean Goodbye", "Anybody Else", "Oh Jesus", "Broken Hearted", "Fire Away", "Oh!", "Imaginary Tea", "The Truth"];
  var volLevels = [];
  //start from middl
  var current_v_level = 2;
  var current_song_list = 7;

  function init() {
    for (let i = 0; i <= 5; i++) {
      volLevels.push(document.getElementById('vl' + i));
    }
    for (let i = 0; i <= 2; i++) {
      //init for the middle
      volLevels[i].style.background = "#f37021";
    }
  };

  function volUp() {
    if (current_v_level < 5) {
      current_v_level++;
      volLevels[current_v_level].style.background = "#f37021";
    }
  }

  function volDown() {
    if (current_v_level >= 0) {
      volLevels[current_v_level].style.background = "white";
      current_v_level--;
    }
  }

  function switchPlay() {
    //if its now playing, onclick pause
    if (document.getElementById("switch_play_pause").innerHTML == '<i class="material-icons">play_arrow</i>') {
      document.getElementById("switch_play_pause").innerHTML = '<i class="material-icons">pause</i>';
      current_time = setInterval(function() {
        //for every second do
        document.getElementById("player-time").stepUp();
        document.getElementById("time-elapsed").innerHTML = secondsToMs(document.getElementById("player-time").value);
        if (document.getElementById("player-time").value == '180') {
          //play the next song when finished
          nextSong();
        }
      }, 1000);

    } else {
      //if its now pausing, onclick play
      document.getElementById("switch_play_pause").innerHTML = '<i class="material-icons">play_arrow</i>';
      //stop
      clearInterval(current_time);
    }
  }

  function nextSong() {
    document.getElementById("player-song-name").innerHTML = tracklist[current_song_list + 1];
    document.getElementById("player-time").value = 0;
    document.getElementById("time-elapsed").innerHTML = 0;
    current_song_list++;
    if (current_song_list > tracklist.length - 1) {
      //back to the first one
      current_song_list = 0;
      document.getElementById("player-song-name").innerHTML = tracklist[current_song_list];
    }

  }

  function prevSong() {
    document.getElementById("player-song-name").innerHTML = tracklist[current_song_list - 1];
    document.getElementById("player-time").value = 0;
    document.getElementById("time-elapsed").innerHTML = 0;
    current_song_list--;
    if (current_song_list < 0) {
      //go to the last one;
      current_song_list = tracklist.length - 1;
      document.getElementById("player-song-name").innerHTML = tracklist[current_song_list];
    }
  }

  function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
  }

  init();
