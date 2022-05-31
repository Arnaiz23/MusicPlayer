const LIST_MUSIC = [
    {
        "name": "Amorfoda",
        "img": "https://i.scdn.co/image/ab67616d0000b273548f7ec52da7313de0c5e4a0",
        "author": "Bad Bunny",
        "disc": "YHLQMDLG",
        "song" : "./music/Bad Bunny – Amor Foda.mp3"
    },
    {
        "name": "Salvavidas",
        "img": "https://i.scdn.co/image/ab67616d0000b273504c8e16d1c2c1ddc1fd6ab1",
        "author": "Xenon, Droow, Jonan",
        "disc": "El epifalio de pandora",
        "song" : "./music/Salvavidas.mp3"
    }
]

const $ = selector => document.querySelector(selector)

const footer = $("footer")
let numberSong = 0

const audio = `<audio src="${LIST_MUSIC[numberSong].song}" id="song" autoplay></audio>`
footer.insertAdjacentHTML('beforeend', audio)

const img = $(".imageContainer img")
const nameSong = $(".names h1")
const author = $(".names h3")
const next = $("#next")
const previous = $("#previous")
const play = $("#play")
const pause = $("#pause")
const song = $("#song")



img.src = LIST_MUSIC[numberSong].img
nameSong.innerHTML = LIST_MUSIC[numberSong].name
author.innerHTML = LIST_MUSIC[numberSong].author
song.src = LIST_MUSIC[numberSong].song


next.addEventListener("click", () => {
    if(numberSong === LIST_MUSIC.length - 1) {
        numberSong = 0
    }else{
        numberSong++
    }
    img.src = LIST_MUSIC[numberSong].img
    nameSong.innerHTML = LIST_MUSIC[numberSong].name
    author.innerHTML = LIST_MUSIC[numberSong].author
    song.src = LIST_MUSIC[numberSong].song
})

previous.addEventListener("click", () => {
    if(numberSong === 0) {
        numberSong = LIST_MUSIC.length - 1
    }else{
        numberSong--
    }
    img.src = LIST_MUSIC[numberSong].img
    nameSong.innerHTML = LIST_MUSIC[numberSong].name
    author.innerHTML = LIST_MUSIC[numberSong].author
    song.src = LIST_MUSIC[numberSong].song
})

// const song = new Audio("./music/Salvavidas.mp3")

play.addEventListener("click", () => {
    song.play()
})

pause.addEventListener("click", () => {
    song.pause()
})