var mymap = L.map('mapid').setView([lat, lng], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic3RhcmR1c3QxOTEiLCJhIjoiY2thNjMzZzdlMDNtdTJ6bWptaTFqa3Y2MSJ9.VIX2KRmemtC5qDAMyL9Jug'
}).addTo(mymap);

var marker = L.marker([40.8075, 73.9626]).addTo(mymap);

var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);


var lat = '';
var lng = '';
var address = "12398";
geocoder.geocode({ 'address': address }, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
        lat = results[0].geometry.location.lat();
        lng = results[0].geometry.location.lng();
        alert('Latitude: ' + lat + ' Logitude: ' + lng);
    } else {
        alert("Geocode was not successful for the following reason: " + status);
    }
});

// 40.8075° N, 73.9626° W