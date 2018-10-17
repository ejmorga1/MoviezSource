// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
  
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/members");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    db.User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      favorite_genre: req.body.favorite_genre,
      location: req.body.location
    }).then(function () {
      res.redirect(307, "/api/login");
    }).catch(function (err) {
      console.log(err);
      res.json(err);
    });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        id: req.user.id,
        first_name: req.user.first_name,
        email: req.user.email,
        favorite_genre: req.user.favorite_genre,
        location: req.user.location
      });
    }
  });


  
  //-----------in Progress----------------
  //-------might not be used--------------



  //UPDATE current user's information
  app.put("/user/:id", function (req, res, err) {
    db.User.update({
        title: req.body.title,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password,
        favorite_genre: req.body.favorite_genre,
        location: req.body.location

      }, {
        where: req.params.id

      })
      .then(function ([rowsUpdate, [updated]]) {
        res.json(updated)

      })
      .catch(err)
  });

};