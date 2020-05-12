$("#submit").on("click", function(event) {
    event.preventDefault();
    var id = "id" + Math.random().toString(16).slice(5);
    // make a newUser obj
    var newUser = {
      User_ID: id,
      First_Name: $("#firstName").val().trim(),
      Last_Name: $("#lastName").val().trim(),
      City: $("#city").val().trim(),
      Zip_Code: $("#zipCode").val().trim(),
      Skill_1: $("#skill_1").val().trim(),
      Skill_2: $("#skill_2").val().trim(),
      Contact: $("#bio").val().trim()
    };
  
    // send an AJAX POST-request with jQuery
    $.post("/api/user/new", newUser)  
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
        // tell the user we're adding a character with an alert window
        alert("Adding user...");
      });
    // empty each input box by replacing the value with an empty string
    $("#firstName").val("");
    $("#lastName").val("");
    $("#city").val("");
    $("#zipCode").val("");
    $("#skill_1").val("");
    $("#skill_2").val("");
    $("#bio").val("");
  });