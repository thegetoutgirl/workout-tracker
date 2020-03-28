import { Mongoose } from "mongoose";

// If deployed, use the deployed database. Otherwise use local "mongoHeadlines" database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://mongodb://Amy:test123@ds113746.mlab.com:13746/heroku_pm6jt3wm";

// Connect to the MongoDB
Mongoose.connect(MONGODB_URI);