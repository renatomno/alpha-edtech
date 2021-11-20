albumName = ["Turn on the Bright Lights (2002)", "Antics (2004)", "Our Love to Admire (2007)", "Interpol (2010)", "El Pintor (2014)", "Marauder (2018)"]
albumImg = ["assets/album01.jpg", "assets/album02.jpg", "assets/album03.jpg", "assets/album04.jpg", "assets/album05.jpg", "assets/album06.jpg"]
albumFav = ["Obstacle 1", "Slow Hands", "Rest My Chemistry", "Barricade", "Tidal Wave", "The Rover"]

let i = 0


leftArrow = document.querySelector(".area2__carousel__img--arrowleft")
leftArrow.addEventListener("click", previousAlbum)
function previousAlbum() {
    i -= 1
    currentAlbumImg = document.querySelector(".area2__carousel__img--album")
    currentAlbumTitle = document.querySelector(".area2__albumname")
    currentAlbumFav = document.querySelector(".area2__favsong")

    currentAlbumImg.setAttribute("src", albumImg[i])
    currentAlbumTitle.innerHTML = albumName[i]
    currentAlbumFav.innerHTML = albumFav[i]

    if (i == 0) {
        leftArrow.classList.add("none")
    } else if (i == 4) {
        rightArrow.classList.remove("none")
    }
}

rightArrow = document.querySelector(".area2__carousel__img--arrowright")
rightArrow.addEventListener("click", nextAlbum)
function nextAlbum() {
    i += 1
    currentAlbumImg = document.querySelector(".area2__carousel__img--album")
    currentAlbumTitle = document.querySelector(".area2__albumname")
    currentAlbumFav = document.querySelector(".area2__favsong")

    currentAlbumImg.setAttribute("src", albumImg[i])
    currentAlbumTitle.innerHTML = albumName[i]
    currentAlbumFav.innerHTML = albumFav[i]

    if (i == 5) {
        rightArrow.classList.add("none")
    } else if (i == 1) {
        leftArrow.classList.remove("none")
    }
}