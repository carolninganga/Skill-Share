$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email);
  });

  // /detail/${data[i].User_ID}
  //<h5 class='tages'>${data[i].Email}</h5>
  $.get("/api/profile", function (data) {
  
    for (var i = 0; i < data.length; i++) {
      var wellSection = $("<div data-id=" + data[i].User_ID + ">");
      var avatar = i;
      // var avatar = "https://api.adorable.io/avatars/100/"
      // add a class to this div: 'well'
      wellSection.addClass("portfolio-container");

      $("#member_cards").append(wellSection);
      wellSection.append(`<div class='portfolio-card'> <div class='portfolioContent'><img class='rounded-circle avatarImg' src='https://api.adorable.io/avatars/100/${avatar}'><h2 class='portfolioTitle'>${data[i].First_Name} ${data[i].Last_Name}</h2><p class='cardCategory'> ${data[i].City} ${data[i].Zip_Code} </p><h5 class='tags'> ${data[i].Skill_1}</h5> <h5 class='tages'>${data[i].Skill_2}</h5> <a id='readProfile' class='btn btn-secondary btn-lg btn-block' href='/detail/${data[i].User_ID}'>Read More</a></div></div>`);
    }


  });

  $('#myInput').on('keyup', function (e) {
    let zipValue = e.target.value;
    if(Number.isInteger(parseInt(zipValue))) {
       searchZip(zipValue);
    } else {
      searchSkill(zipValue);
    }
    
  })

  function searchZip(zipValue) {
    var ul, li, zip, i, txtValue_zip;
    ul = document.getElementById("member_cards");
    li = ul.getElementsByClassName("portfolio-container");
    for (i = 0; i < li.length; i++) {
      zip = li[i].getElementsByClassName("cardCategory")[0];
      txtValue_zip = zip.textContent || zip.innerText;
      if (txtValue_zip.toUpperCase().indexOf(zipValue) > -1) {
        document.getElementsByClassName("portfolio-container")[i].style.display = "inline-block";
      } else {
        document.getElementsByClassName("portfolio-container")[i].style.display = "none";
      }
    }
  }

  function searchSkill(zipValue) {
    var input, filter, ul, li, skill_a, skill_b, i, txtValue_a, txtValue_b;
    filter = zipValue.toUpperCase();
    ul = document.getElementById("member_cards");
    li = ul.getElementsByClassName("portfolio-container");
    for (i = 0; i < li.length; i++) {
      skill_a = li[i].getElementsByClassName("tags")[0];
      skill_b = li[i].getElementsByClassName("tages")[0];
      txtValue_a = skill_a.textContent || skill_a.innerText;
      txtValue_b = skill_b.textContent || skill_b.innerText;
      if (txtValue_a.toUpperCase().indexOf(filter) > -1 || txtValue_b.toUpperCase().indexOf(filter) > -1) {
        document.getElementsByClassName("portfolio-container")[i].style.display = "inline-block";
      } else {
        document.getElementsByClassName("portfolio-container")[i].style.display = "none";
      }
    }  
  }

  $("#searchBtn").on("click", function (event) {
    let zipValue = event.target.value;
    if(Number.isInteger(parseInt(zipValue))) {
       searchZip(zipValue);
    } else {
      searchSkill(zipValue);
    }
  });

});

