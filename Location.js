function getLocation() {
        navigator.geolocation.getCurrentPosition(showPosition);
}
function showPosition(position) {
    print("Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude)
}
