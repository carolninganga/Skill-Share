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
      wellSection.addClass("portfolio-container");
    
      $("#member_cards").append(wellSection);
      wellSection.append("<div class='portfolio-card'> <div class='portfolioContent'><h5 class='cardCategory'>" + data[i].City + " " + data[i].Zip_Code + "</h5> <h2 class='portfolioTitle'>" + data[i].First_Name + " " + data[i].Last_Name + "</h2> <p>" + data[i].Bio + " <br> </p> <h5 class='tags'> " + data[i].Skill_1 + "</h5> <h5 class='tags'> " + data[i].Skill_2 + "</h5> </div> </div>");
   
    }
});


function searchFunction() {
  var input, filter, ul, li, a, ap, i, txtValue, txtValuep;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("member_cards");
  li = ul.getElementsByClassName("portfolio-container");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByClassName("tags")[0];
      ap = li[i].getElementsByClassName("tags")[1];
      txtValue = a.textContent || a.innerText;
      txtValuep = ap.textContent || ap.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValuep.toUpperCase().indexOf(filter) > -1) {
          document.getElementsByClassName("portfolio-container")[i].style.display="inline-block";
      } else {
          document.getElementsByClassName("portfolio-container")[i].style.display="none";
      }
  }
}

$("#searchBtn").on("click", function (event) {
  event.preventDefault();
  searchFunction();
});


})

