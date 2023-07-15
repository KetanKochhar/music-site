// clearing the local storage
window.onbeforeunload = function (e) {
    localStorage.clear();
}

// declaring the variables 
let bar = document.getElementById("bar")
let play = document.getElementById("play")
let pause = document.getElementById("pause")
let next = document.getElementById("next")
let back = document.getElementById("back")
let masterName = document.getElementById("SongName")
let history = document.getElementById("songs")
let audio = new Audio("songs/Bolo Har Har Har.mp3")


// making array of songs
let songs = [
    { id: "1", SongName: "Bolo Har Har", filePath: "songs/Bolo Har Har Har.mp3", covrePath: "img/s/Bolo Har Har Har.jpg" },
    { id: "2", SongName: "Ek Tarrfa", filePath: "songs/Ek Tarfa.mp3", covrePath: "img/s/Ek tarfa.jpg" },
    { id: "3", SongName: "Har Har Gange", filePath: "songs/Har Har Gange.mp3", covrePath: "img/s/Har Har Gange.jpg" },
    { id: "4", SongName: "Khairiyat", filePath: "songs/Khairiyat.mp3", covrePath: "img/s/Khairiyat.jpg" },
    { id: "5", SongName: "Man Meri Jaan", filePath: "songs/Maan Meri Jaan.mp3", covrePath: "img/s/man meri jaan.jpg" },
    { id: "6", SongName: "Namo Namo", filePath: "songs/Namo Namo.mp3", covrePath: "img/s/namo namo.jpg" },
    { id: "7", SongName: "Sanak", filePath: "songs/Sanak.mp3", covrePath: "img/s/sanak.jpg" },
    { id: "8", SongName: "Tanhai", filePath: "songs/Tanhaai.mp3", covrePath: "img/s/tanhaai.jpg" },
    { id: "9", SongName: "Toxic", filePath: "songs/toxic.mp3", covrePath: "img/s/toxic.jpg" },
    { id: "10", SongName: "Tum Hi Aana", filePath: "songs/Tum Hi Aana.mp3", covrePath: "img/s/tum hi aana.jpg" },
]

// making an empty arry to append the songs to the local storage

Stack = []


// getting ID of the song using onclick
function GetName(btn) {
    var IdOfTheElement = btn.id;
    ID = IdOfTheElement;
    alert(ID)
    for (let i = 0; i < songs.length; i++) {
        // console.log(songs[i]);
        if (songs[i].id == ID) {
            alert(songs[i].SongName)
            masterName.innerHTML = songs[i].SongName
            src = songs[i].filePath
            audio.src = src
            audio.play()
            Stack.push(songs[i].id)
            Stack.push(songs[i].covrePath)
            Stack.push(songs[i].SongName)
            localStorage.setItem("id", (Stack[1]))
            localStorage.setItem("img", (Stack[2]))
            localStorage.setItem("SongName", (Stack[3]))
        }

    }
}
// Play and pause the song
play.addEventListener("click", () => {
    if (audio.paused || audio.currentTime == 0) {
        audio.play();
        pause.style.display = "inline";
        play.style.display = "none";
    }
    else {
        audio.pause();
        play.style.display = "inline";
        pause.style.display = "none";
    }
})
pause.addEventListener("click", () => {
    if (audio.paused || audio.currentTime == 0) {
        audio.play();
        pause.style.display = "inline";
        play.style.display = "none";
    }
    else {
        audio.pause();
        play.style.display = "inline";
        pause.style.display = "none";
    }
})
if (audio.play) {
    play.style.display = "inline"
    pause.style.display = "none"
}
if (audio.pause) {
    play.style.display = "none"
    pause.style.display = "inline"
}

// updating the side bar of history
function Queue() {
    history.innerHTML = ""
    if (Stack.length >= 2) {
        let one = 0
        let number1 = Stack[one]
        let img1 = Stack[one + 1]
        let name1 = Stack[one + 2]
        console.log("Id of the songs is " + number1)
        console.log("PAth to image of song is" + img1)
        console.log("Name of the is " + name1)
        let History1 = history.innerHTML += `<div class="SCard" id="${number1}" onclick="GetName(this);Queue()"><img class="short" src="${img1}" alt="Error loading Image"><h2>${name1}</h2><div class="play"><img src="img/play.jpg" alt=""></div>`
    }
    if (Stack.length >= 5) {
        let q = 3
        let number = Stack[q]
        let img = Stack[q + 1]
        let name = Stack[q + 2]
        console.log("Id of the songs is " + number)
        console.log("PAth to image of song is" + img)
        console.log("Name of the is " + name)
        let History2 = history.innerHTML += `<div class="SCard" id="${number}" onclick="GetName(this);Queue()"><img class="short" src="${img}" alt="Error loading Image"><h2>${name}</h2><div class="play"><img src="img/play.jpg" alt=""></div>`
    }
    if (Stack.length >= 8) {
        let q = 6
        let number = Stack[q]
        let img = Stack[q + 1]
        let name = Stack[q + 2]
        console.log("Id of the songs is " + number)
        console.log("PAth to image of song is" + img)
        console.log("Name of the is " + name)
        let History2 = history.innerHTML += `<div class="SCard" id="${number}" onclick="GetName(this);Queue()"><img class="short" src="${img}" alt="Error loading Image"><h2>${name}</h2><div class="play"><img src="img/play.jpg" alt=""></div>`
    }
    if (Stack.length >= 11) {
        let q = 9
        let number = Stack[q]
        let img = Stack[q + 1]
        let name = Stack[q + 2]
        console.log("Id of the songs is " + number)
        console.log("PAth to image of song is" + img)
        console.log("Name of the is " + name)
        let History2 = history.innerHTML += `<div class="SCard" id="${number}" onclick="GetName(this);Queue()"><img class="short" src="${img}" alt="Error loading Image"><h2>${name}</h2><div class="play"><img src="img/play.jpg" alt=""></div>`
    }
    if (Stack.length >= 14) {
        let q = 12
        let number = Stack[q]
        let img = Stack[q + 1]
        let name = Stack[q + 2]
        console.log("Id of the songs is " + number)
        console.log("PAth to image of song is" + img)
        console.log("Name of the is " + name)
        let History2 = history.innerHTML += `<div class="SCard" id="${number}" onclick="GetName(this);Queue()"><img class="short" src="${img}" alt="Error loading Image"><h2>${name}</h2><div class="play"><img src="img/play.jpg" alt=""></div>`
    }
    if (Stack.length >= 17) {
        let q = 15
        let number = Stack[q]
        let img = Stack[q + 1]
        let name = Stack[q + 2]
        console.log("Id of the songs is " + number)
        console.log("PAth to image of song is" + img)
        console.log("Name of the is " + name)
        let History2 = history.innerHTML += `<div class="SCard" id="${number}" onclick="GetName(this);Queue()"><img class="short" src="${img}" alt="Error loading Image"><h2>${name}</h2><div class="play"><img src="img/play.jpg" alt=""></div>`
    }
    if (Stack.length >= 20) {
        let q = 18
        let number = Stack[q]
        let img = Stack[q + 1]
        let name = Stack[q + 2]
        console.log("Id of the songs is " + number)
        console.log("PAth to image of song is" + img)
        console.log("Name of the is " + name)
        let History2 = history.innerHTML += `<div class="SCard" id="${number}" onclick="GetName(this);Queue()"><img class="short" src="${img}" alt="Error loading Image"><h2>${name}</h2><div class="play"><img src="img/play.jpg" alt=""></div>`
    }
    if (Stack.length >= 23) {
        let q = 21
        let number = Stack[q]
        let img = Stack[q + 1]
        let name = Stack[q + 2]
        console.log("Id of the songs is " + number)
        console.log("PAth to image of song is" + img)
        console.log("Name of the is " + name)
        let History2 = history.innerHTML += `<div class="SCard" id="${number}" onclick="GetName(this);Queue()"><img class="short" src="${img}" alt="Error loading Image"><h2>${name}</h2><div class="play"><img src="img/play.jpg" alt=""></div>`
    }
    if (Stack.length >= 26) {
        let q = 24
        let number = Stack[q]
        let img = Stack[q + 1]
        let name = Stack[q + 2]
        console.log("Id of the songs is " + number)
        console.log("PAth to image of song is" + img)
        console.log("Name of the is " + name)
        let History2 = history.innerHTML += `<div class="SCard" id="${number}" onclick="GetName(this);Queue()"><img class="short" src="${img}" alt="Error loading Image"><h2>${name}</h2><div class="play"><img src="img/play.jpg" alt=""></div>`
    }
    if (Stack.length >= 29) {
        let q = 27
        let number = Stack[q]
        let img = Stack[q + 1]
        let name = Stack[q + 2]
        console.log("Id of the songs is " + number)
        console.log("PAth to image of song is" + img)
        console.log("Name of the is " + name)
        let History2 = history.innerHTML += `<div class="SCard" id="${number}" onclick="GetName(this);Queue()"><img class="short" src="${img}" alt="Error loading Image"><h2>${name}</h2><div class="play"><img src="img/play.jpg" alt=""></div>`
    }
    if (Stack.length >= 30) {
        Stack.shift()
        Stack.shift()
        Stack.shift()
    }

}

// updating the bar when song is played
audio.addEventListener("timeupdate", () => {
    console.log('timeupdate');
    let progress = parseInt((audio.currentTime / audio.duration) * 100)
    console.log(progress)
    bar.value = progress
})

// updating the bar when progress bar is changed
bar.addEventListener("click", () => {
    audio.currentTime = bar.value * audio.duration / 100;
})
