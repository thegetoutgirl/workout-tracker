import { Mongoose } from "mongoose";

// If deployed, use the deployed database. Otherwise use local "mongoHeadlines" database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Connect to the MongoDB
Mongoose.connect(MONGODB_URI);