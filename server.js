const express = require("express");
const path = require("path");
const routes = require("./routes");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//load stripe and keys
if (process.env.NODE_ENV !== "production") {
  require('dotenv').load()
}

const stripeSecretKey = process.env.STRIPE_SECRET_KEY

const stripe = require('stripe')(stripeSecretKey)


// Define API routes here
app.use(routes)
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
//connect to database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ample");

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
