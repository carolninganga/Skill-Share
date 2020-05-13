$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });


  $.get("/api/profile", function(data) {
    console.log(data[0]);
    for (var i = 0; i < data.length; i++) {
      var wellSection = $("<div>");
      // add a class to this div: 'well'
      wellSection.addClass("portfolio-container");
    
      $("#member_cards").append(wellSection);
      wellSection.append("<div class='portfolio-card'> <div class='portfolioContent'><h5 class='cardCategory'>" + data[i].City + " " + data[i].Zip_Code + "</h5> <h2 class='portfolioTitle'>" + data[i].First_Name + " " + data[i].Last_Name + "</h2> <p>" + data[i].Bio + " <br> </p> <h5 class='tags'> " + data[i].Skill_1 + "</h5> <h5 class='tags'> " + data[i].Skill_2 + "</h5> </div> </div>");
   
    }
});
})

