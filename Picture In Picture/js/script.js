const video = document.querySelector('video')
let btn = document.querySelector('.btn')

btn.onclick = () => {
    if(document.pictureInPictureEnabled){
        if(document.pictureInPictureElement) exit()
        else start()
    }
}

function start() {
    video.requestPictureInPicture()
    btn.textContent = 'Remove picture in picture'
}
function exit() {
    document.exitPictureInPicture()
    btn.textContent = 'Picture in picture'
}