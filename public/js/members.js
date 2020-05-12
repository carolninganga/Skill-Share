$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });


  $.get("/api/profile", function(data) {
    for (var i = 0; i < data.length; i++) {
      var wellSection = $("<tr>");
      // add a class to this div: 'well'
      wellSection.addClass("well");
      // add an id to the well to mark which well it is
      wellSection.attr("id", "character-well-" + i);
      // append the well to the well section
      $("#well-section").append(wellSection);
      $("#character-well-" + i).append("<td>" + data[i].First_Name + "</td>");
      $("#character-well-" + i).append("<td>" + data[i].Last_Name + "</td>");
      $("#character-well-" + i).append("<td>" + data[i].City + "</td>");
      $("#character-well-" + i).append("<td>" + data[i].Zip_Code + "</td>");
      $("#character-well-" + i).append("<td>" + data[i].Skill_1 + "</td>");
      $("#character-well-" + i).append("<td>" + data[i].Skill_2 + "</td>");
      $("#character-well-" + i).append("<td>" + data[i].Bio + "</td>");
    }
    $("#well-section").prepend("<tr><th>First Name</th><th>Last Name</th><th>City</th><th>Zip Code</th><th>Skill One</th><th>Skill Two</th><th>Bio</th></tr>");
  });

});
