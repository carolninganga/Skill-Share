var x = window.location.href.split("/");
var id = x[x.length - 1];
$.get("/api/profile/" + id, function (data) {
    console.log(data);
    $(".userName").text(data.First_Name +" "+ data.Last_Name);
    $(".lead").text(data.Skill_1 + " " + data.Skill_2);
    $("#location").text(data.City + " " + data.Zip_Code);
    $("#bio").text(data.Bio);


    var apiKey = "HbAqyAns3LoXacb0KaH60uoNyxmampoE"
    var zipcode = data.Zip_Code;
    
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
    



})