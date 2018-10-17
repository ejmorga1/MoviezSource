// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {

  //Add row to Profile table. This includes:
  // - user_id (current user, int)
  // - movie id (from api, int)
  // - movie name (from api, string)
  // - favorited (true if button clicked, boolean)
  // - user_rating (if user rated, int)
  //!!!!!!!!!!!!Needs work with associations
  app.post("/api/profile", function (req, res) {
    db.Profile.create({
      user_id: req.user.id,
      media_id: req.body.media_id,
      media_name: req.body.media_name,
      favorited: req.body.favorite,
      wish_list: request.body.wish_list,
      watched_list: request.body.watch_list,
      user_rating: request.body.user_rating

    });
  });

  app.get("/api/user/:email", function(req, res) {
    db.User.findOne({
      where: {
        email: req.params.email
      }
    }).then(function(dbUser) {
      console.log(dbUser);
      res.json(dbUser);
    });
  });

  
  //-----------in Progress----------------
  //-------might not be used--------------
  


  //GET All Movies that user has favorited
  app.get("/api/favorited/:id", function (req, res) {
    if (!req.user) {
      db.Profile.findAll({
        where: {
          id: req.params.id
        }
      }).then(function(app_db) {
        console.log(app_db);
        res.json(app_db);
      });
    } else {
      db.Profile.findAll({
        where: {
          id: req.params.id
        }
      }).then(function(app_db) {
        console.log(app_db);
        res.json(app_db);
      });
    }
  });
  
  //GET user's rating for movie
  app.get("/api/user_rating/:user_id", function (req, res) {
    if (!req.user) {
      res.json({});

    } else {
      res.json({
        favorited: req.profile.user_rating

      });
    }
  });
  
  //GET average rating for movie
  //IDK what to do with this one
  app.get("/api/user_rating/:user_id", function (req, res) {
    if (!req.user) {
      res.json({});

    } else {
      res.json({
        favorited: req.profile.user_rating

      });
    }
  });

};