'use strict'

console.log('Loaded map.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiaGFydGo0MzAiLCJhIjoiY2pwdm5ubmthMDJndTQzcjE0a2NicGYyaiJ9.ZEsiCWNPrUL6jE4Q__32qg'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/hartj430/cjpvmqk5v0d292smkxnw8lfyv',
    center: [-34.32747,42.4010],
zoom: 3
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

    // create new variables to store the attributes we're interested in from the event
    let lng = event.coords.longitude
    let lat = event.coords.latitude

    // debug
    console.log('geolocated:', lng, lat)

    // format lng lat values and display them on our 'info' element
    document.getElementById('info').innerHTML = lng.toFixed(5) + "," + lat.toFixed(5)
})


map.on('click', function(event) {

    let lng = event.lngLat.lng
    let lat = event.lngLat.lat

    console.log("clicked:", lng, lat)

    document.getElementById('info').innerHTML = lng.toFixed(5) + "," + lat.toFixed(5)

})

let marker = new mapboxgl.Marker()
marker.setLngLat([-72.25937,40.93094])
marker.addTo(map)

let popup = new mapboxgl.Popup()
popup.setHTML('9/2/17 4.09 mi')
marker.setPopup(popup)

let data = [
    {
        location: [-72.28670,40.97350],
        content: '8/26/18 3.66 mi'
    },
    {
        location: [-72.01896,41.26938],
        content: '10/8/16 4.59 mi <br>7/4/18 3.03 mi <br>5/26/18 4.41 mi<br> 8/25/17 4.38 mi'
    },
    {
        location: [-73.96746,40.78409],
        content: '5/3/ 17 3.57 mi <br> 5/26/ 17 3.09 mi <br>8/10/17 2.94 mi <br>8/06/17 4.79 mi <br>8/22/17 3.45 mi '
    },
    {
        location: [-74.01088,40.73320],
        content: '4/15/17 4.00 mi <br> 11/10/16 3.13 mi <br>10/4/16 3.00 mi<br>7/7/17 3.92 mi<br>10/6/17 2.71 mi <br>9/12/17 2.88 mi<br>9/2/17 4.09 mi <br>6/7/17 3.92 mi<br>5/26/17 3.09 mi'
    },
    {
        location: [-76.63462,25.50667],
        content: '3/13/17 3.93 mi'
    },
    {
        location: [13.94323,40.74286],
        content: '7/25/17 4.83 mi'
    },
    {
        location: [14.24402,40.54960],
        content: '7/28/17 3.26 mi'
    },
    ]


    data.forEach(function(d) {

    let marker = new mapboxgl.Marker()    
    marker.setLngLat(d.location)
    marker.addTo(map)  

    let popup = new mapboxgl.Popup()
    popup.setHTML(d.content)
    marker.setPopup(popup)

})
   


