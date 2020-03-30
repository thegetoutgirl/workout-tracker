const express = require("express");
const logger = require("morgan");
const mongoose = require ("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

import { Mongoose } from "mongoose";

// If deployed, use the deployed database. Otherwise use local "mongoHeadlines" database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://mongodb://Amy:test123@ds113746.mlab.com:13746/heroku_pm6jt3wm";

// Connect to the MongoDB
Mongoose.connect(MONGODB_URI);