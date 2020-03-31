const express = require("express");
const logger = require("morgan");
const mongoose = require ("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3300;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

// import { Mongoose } from "mongoose";

// If deployed, use the deployed database. Otherwise use local "mongoHeadlines" database. THIS IS FROM THE VIDEO GUIDE?
mongoose.connect(process.env.MONGODB_URI || "mongodb://Amy:test123@ds113746.mlab.com:13746/heroku_pm6jt3wm"), 
// {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }

// Connect to the MongoDB

// ROUTES

// 1. GET route for displaying home page at Fitness Tracker link
app.get("/", (req, res) =>{
    res.render('public/index.html', {});

});

// 2. GET route for displaying stats page at Fitness Dashboard link
app.get("/stats", (req, res) =>{
  res.render('public/stats.html', {});
})

// 3. GET route for showing exercises

// app.get("/api/search/:skill", function(req, res) {
//     console.log(req.params.skill);
//     db.Accounts.findAll({
//       where: {
//         skills: req.params.skill
//       }
//     })
//       .then(function(showSkills) {
//         // console.log(showSkills);
//         res.json(showSkills);
//       });
//   });


// 4. POST route for adding a workout



// 5. POST route for updating a workout


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });