$("#submit").on("click", function (event) {
  if ($.trim($("#firstname").val()) === "" || $.trim($("#lastname").val()) === "" || $.trim($("#city").val()) === "" || $.trim($("#zipCode").val()) === "" || $.trim($("#skill_1").val()) === "" || $.trim($("#skill_2").val()) === "" || $.trim($("#bio").val()) === "") {
    alert('you did not fill out one of the fields');
    return false;
  } else {
    event.preventDefault();
    var id = "id" + Math.random().toString(16).slice(5);
    // make a newProfile obj
    var newProfile = {
      User_ID: id,
      First_Name: $("#firstname").val(),
      Last_Name: $("#lastname").val(),
      City: $("#city").val(),
      Zip_Code: $("#zipCode").val(),
      Skill_1: $("#skill_1 option:selected").val(),
      Skill_2: $("#skill_2 option:selected").val(),
      Bio: $("#bio").val()
    };

    function myFunction() {
      location.replace("/members")
    }

    console.log(newProfile);

    // send an AJAX POST-request with jQuery
    $.post("/api/profile", newProfile)
      // on success, run this callback
      .then(function (data) {
        // log the data we found
        console.log(data);
        alert("Adding profile...");
        myFunction();
      });
    // empty each input box by replacing the value with an empty string
    $("#firstName").val("");
    $("#lastName").val("");
    $("#city").val("");
    $("#zipCode").val("");
    $("#skill_1").val("");
    $("#skill_2").val("");
    $("#bio").val("");

  }

});


$.get("/api/profile", function (data) {
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