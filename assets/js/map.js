var mymap = L.map('map').setView([0.7893, 113.9213], 5);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiamFnZ2VyMSIsImEiOiJjanQweXo0aGswM21kM3lwZ3o0cTA1cmhwIn0.XU8QEZGtPZ5GdA4kzJUrvw'
}).addTo(mymap);