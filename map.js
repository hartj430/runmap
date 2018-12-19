'use strict'

console.log('Loaded map.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiaGFydGo0MzAiLCJhIjoiY2puZjc3c3BrMGJuYjN3bmJnZnNjNjJ0dSJ9.dvHzfzL7lwR6Xul3ukLqPA'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/hartj430/cjpvmqk5v0d292smkxnw8lfyv',
    center: [-73.96216,40.80779],
    zoom: 16
})

let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})
map.addControl(navigation, 'top-left')

let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})
map.addControl(scale, 'bottom-right')

let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserLocation: true,
    fitBoundsOptions: {
    }
})
map.addControl(geolocate, 'top-left')

geolocate.on('geolocate', function(event) {

})