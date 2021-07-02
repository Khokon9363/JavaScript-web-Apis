onload = () => {
    getLocation()
}

function getLocation() {
    if(!navigator.geolocation) console.log('Geolocation is not supported by your browser')
    else navigator.geolocation.getCurrentPosition(success, error)
}

function success(position) {
    console.log('latitude', position.coords.latitude)
    console.log('longitude', position.coords.longitude)
    console.log('position', position)
}

function error() {
    alert(`Unable to retrieve your location`)
    location.reload()
}