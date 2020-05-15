// http://www.mapquestapi.com/geocoding/v1/address?key=KEY&location=Washington,DC
// var apiKey = "HbAqyAns3LoXacb0KaH60uoNyxmampoE"
var zipcode = "11416"

fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=${apiKey}&location=${zipcode}`)
  .then(response => response.json())
  .then(data => { 
     var {lat, lng} = data.results[0].locations[0].latLng    
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
    });

// 40.8075° N, 73.9626° W

$(document).ready(function () {
    $.get("/api/profile", function (data) {
      for (var i = 0; i < data.length; i++) {
        var wellSection = $("<div>");
        var avatar = i;
        wellSection.addClass("detailContainer");
        $(".card-img-top").append(wellSection);
        wellSection.append(`<div class="text-center">
        <img class="img-avatar rounded-circle" src="https://api.adorable.io/avatars/100/${avatar}" />
        <h1>${data[i].First_Name} ${data[i].Last_Name}</h1>
        <p class="lead">${data[i].City} ${data[i].Zip_Code}</p>
      </div> 
      <ul class="list-unstyled text-muted">
      <li><i class="fas fa-map-marker-alt" aria-hidden="true"></i> ${data[i].Skill_1}</li>
      <li><i class="fas fa-link" aria-hidden="true"></i> <a href="#">${data[i].Skill_2}</a></li>
    </ul> 
      <p>${data[i].Bio}</p>`);
      }
    });
});