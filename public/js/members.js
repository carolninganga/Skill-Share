$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });


  $.get("/api/profile", function(data) {
    for (var i = 0; i < data.length; i++) {
      var wellSection = $("<div>");
      // add a class to this div: 'well'
      wellSection.addClass("card mt-3");
      // add an id to the well to mark which well it is
      wellSection.attr("style", "width: 18rem;");
      // append the well to the well section
      $("#member_cards").append(wellSection);
      wellSection.append("<div><h5 class='card-title'>" + data[i].First_Name + " " + data[i].Last_Name + "</h5> <br> </div>");
      wellSection.append("<ul class=‘list-group list-group-flush’> <li class=‘list-group-item’>" + data[i].City + " " + data[i].Zip_Code + "</li> <li class=‘list-group-item’>" + data[i].Skill_1 + " " + data[i].Skill_2 + "</li> </ul>");
      wellSection.append("<p class='card-text'>" + data[i].Bio + "</p>") 
    }
});
})

