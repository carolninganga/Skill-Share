$("#randomBtn").on("click", function (event) {
event.preventDefault();
$("#member_cards").empty();

$.get("/api/profile", function (data) {
    for (var i = 0; i < data.length; i++) {
      var wellSection = $("<div>");
      var avatar = i;
      // var avatar = "https://api.adorable.io/avatars/100/"
      // add a class to this div: 'well'
      wellSection.addClass("portfolio-container hide");
      wellSection.attr("data-id", i);

      $("#member_cards").append(wellSection);
      wellSection.append(`<div class='portfolio-card'> <div class='portfolioContent'><img class='rounded-circle avatarImg' src='https://api.adorable.io/avatars/100/${avatar}'><h2 class='portfolioTitle'>${data[i].First_Name} ${data[i].Last_Name}</h2><p class='cardCategory'> ${data[i].City} ${data[i].Zip_Code} </p><h5 class='tags'> ${data[i].Skill_1}</h5> <h5 class='tages'>${data[i].Skill_2}</h5><a class='btn btn-secondary btn-lg btn-block' href='/detail'>Read More</a></div></div>`);
    //   console.log(data.length);
    //     var random = Math.floor(Math.random() * data.length) - 1;
    //     //var random = Math.floor(Math.random() * 1000) + 1;
    //   if(random){
    //     wellSection.style.display = "block";
    //   } else {
    //     wellSection.style.display = "none";
    //   }

    } 

    var random = Math.floor(Math.random() * data.length) + 1;
    console.log(random);
    var randomEl = $("[data-id='" + random + "']");
    randomEl[0].removeAttribute("class","hide");

      
  });
});
