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

