let songs = []
    let currentSong = 0;

    const title = document.querySelector('h1');
    const input = document.querySelector('input');
    const preview = document.querySelector('#preview');
    const play = document.querySelector('#play');
    const next = document.querySelector('#next');
    const player = document.querySelector('audio');
    

    input.onchange = getSongs;
    next.onclick = nextSong;
    preview.onclick = prevSong;

    function getSongs (event) {
        songs = event.target.files;
        label.innerText = songs[currentSong].name.slice(0, -4);
        title.innerText = "spotifake player";
    }

    function playSong() {
        let song = URL.createObjectURL(songs[currentSong])
        lable.innerText = songs[currentSong].name.slice(0, -4)
        player.setAttribute('src', song);
        player.play();
        play.innerText = 'pause'
        play.onclick = pause;
           }

    function pause() {
        play.innerText = 'play'
        player.pause();
        play.onclick = playCurrent

    }

    function playCurrent() {
        play.innerText = 'pause'
        player.play();
        play.onclick = pause

    }

    function nextSong() {
        currentSong++;
        playSong();
    }

    function prevSong() {
        currentSong--;
        playSong();
    }