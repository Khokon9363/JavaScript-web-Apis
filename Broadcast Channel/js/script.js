const bc = new BroadcastChannel('test')

bc.postMessage('This is a message via broadcast channel')

bc.onmessage = (e) => {
    console.log(e)
}