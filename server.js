var express = require("express");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

app.post("/api/burger-data", (req, res) => {
//   var set = mnist.set(1, 1);

//   for (let i = 0; i < 10; i++) {
//     let newData = {
//       input: set.training[i].input,
//       output: set.training[i].output
//     }
//     console.log("hello")
//   }
    console.log("got here")
});

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("app/public"));

// Routes
// =============================================================
require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});