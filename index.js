const LIST_MUSIC = [
    {
        "name": "Amorfoda",
        "img": "https://i.scdn.co/image/ab67616d0000b273548f7ec52da7313de0c5e4a0",
        "author": "Bad Bunny",
        "disc": "YHLQMDLG",
        "song": "./music/Bad Bunny – Amor Foda.mp3"
    },
    {
        "name": "Salvavidas",
        "img": "https://i.scdn.co/image/ab67616d0000b273504c8e16d1c2c1ddc1fd6ab1",
        "author": "Xenon, Droow, Jonan",
        "disc": "El epifalio de pandora",
        "song": "./music/Salvavidas.mp3"
    }
]

const $ = selector => document.querySelector(selector)

const footer = $("footer")
let numberSong = 0

const audio = `<audio src="${LIST_MUSIC[numberSong].song}" id="song" autoplay="autoplay" preload="metadata"></audio>`
footer.insertAdjacentHTML('beforeend', audio)

const img = $(".imageContainer img")
const nameSong = $(".names h1")
const author = $(".names h3")
const next = $("#next")
const previous = $("#previous")
const play = $("#play")
const pause = $("#pause")
const song = $("#song")
const duration = $("#duration")
const currentDuration = $("#currentDuration")
const btnChangeTheme = $(".changeTheme")
const lessTime = $("#less")
const moreTime = $("#more")

img.src = LIST_MUSIC[numberSong].img
nameSong.innerHTML = LIST_MUSIC[numberSong].name
author.innerHTML = LIST_MUSIC[numberSong].author
song.src = LIST_MUSIC[numberSong].song
song.onloadedmetadata = () => {
    duration.innerHTML = ((song.duration / 60).toFixed(2)).replace(".", ":")
    currentDuration.innerHTML = "0.00"
}


next.addEventListener("click", changeNextSong)

previous.addEventListener("click", () => {
    if (numberSong === 0) {
        numberSong = LIST_MUSIC.length - 1
    } else {
        numberSong--
    }
    img.src = LIST_MUSIC[numberSong].img
    nameSong.innerHTML = LIST_MUSIC[numberSong].name
    author.innerHTML = LIST_MUSIC[numberSong].author
    song.src = LIST_MUSIC[numberSong].song
    duration.innerHTML = ((song.duration / 60).toFixed(2)).replace(".", ":")
    pause.classList.remove("btnHidden")
    play.classList.add("btnHidden")
})

// const song = new Audio("./music/Salvavidas.mp3")

play.addEventListener("click", () => {
    song.play()
    pause.classList.remove("btnHidden")
    play.classList.add("btnHidden")
    duration.innerHTML = ((song.duration / 60).toFixed(2)).replace(".", ":")
})

pause.addEventListener("click", () => {
    song.pause()
    play.classList.remove("btnHidden")
    pause.classList.add("btnHidden")
})

/* window.setInterval(() => {
    currentDuration.innerHTML = (song.currentTime / 60).toFixed(2)
},1) */

song.ontimeupdate = () => {
    currentDuration.innerHTML = ((song.currentTime / 60).toFixed(2)).replace(".", ":")
    setProgress();
}

function setProgress() {
    let percentage = (song.currentTime / song.duration) * 100
    $(".progress").style.width = percentage + "%"
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", 'dark')
        localStorage.setItem("theme", "dark")
        $(".toggle-circle").classList.replace("fa-sun", "fa-moon")
    } else {
        document.documentElement.setAttribute("data-theme", 'light')
        localStorage.setItem("theme", "light")
        $(".toggle-circle").classList.replace("fa-moon", "fa-sun")
    }
}

const toggleSwitch = $("#toggle-input")

toggleSwitch.addEventListener("change", switchTheme, false)

song.addEventListener("play", () => {
    pause.classList.remove("btnHidden")
    play.classList.add("btnHidden")
})

song.addEventListener("ended", changeNextSong)

function changeNextSong() {
    if (numberSong === LIST_MUSIC.length - 1) {
        numberSong = 0
    } else {
        numberSong++
    }
    img.src = LIST_MUSIC[numberSong].img
    nameSong.innerHTML = LIST_MUSIC[numberSong].name
    author.innerHTML = LIST_MUSIC[numberSong].author
    song.src = LIST_MUSIC[numberSong].song
    duration.innerHTML = ((song.duration / 60).toFixed(2)).replace(".", ":")
    pause.classList.remove("btnHidden")
    play.classList.add("btnHidden")
}

moreTime.addEventListener("click", () => {
    song.currentTime = song.currentTime + 18
})

lessTime.addEventListener("click", () => {
    song.currentTime = song.currentTime - 18
})