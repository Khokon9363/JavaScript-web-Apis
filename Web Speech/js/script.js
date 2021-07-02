onload = () => {
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
    var sp = new SpeechRecognition()
    
    sp.start()
    sp.onresult = (e) => {
        if(e.results[0][0].transcript){
            document.body.style.backgroundColor = e.results[0][0].transcript
            document.querySelector('.said-color').textContent = e.results[0][0].transcript
        }
    }
    sp.onspeechend = () => {
        sp.stop()
    }
    sp.onnomatch = () => {
        sp.start()
    }
    sp.onerror = () => {
        location.reload()
    }
    document.querySelector('.change-color').onclick = () => {
        sp.start()
    }
}