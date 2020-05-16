// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
//var data = require("../api-routes.js")

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/pages/index.html"));
  });

  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/signup.html"));
  });

  app.get("/application", function(req, res) {
    // if (req.user) {
    //   res.redirect("/members");
    // }
    res.sendFile(path.join(__dirname, "../public/pages/application.html"));
  });

  app.get("/game", function(req, res) {
    // if (req.user) {
    //   res.redirect("/members");
    // }
    res.sendFile(path.join(__dirname, "../public/pages/game.html"));
  });

   app.get("/detail/*", isAuthenticated, function(req, res) {
     console.log(req.user) 
    // if (req.user) {
    //   res.redirect("/members");
    // }
     res.sendFile(path.join(__dirname, "../public/pages/profile-detail.html"));
  });

  app.get("/members/:id", function(req, res) {
    // if (req.user) {
    //   res.redirect("/members");
    // }
     res.sendFile(path.join(__dirname, "../public/pages/profile-detail.html"));
  });


  
  // app.get(`detail/${data.User_ID}`, function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/pages/profile-detail.html"));
  // })



  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/pages/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/members.html"));
  });

};
