const express = require("express");
const dbConfig = require("./app/config/db.config");

const app = express();
// ADD THIS
var cors = require("cors");
app.use(cors());
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

const routes = require("./app/routes/crudRoutes");
const routesuserget = require("./app/routes/userGetRoutes");
const routesCourseManagement = require("./app/routes/courseManagementRoutes");
const routesCourseOrder = require("./app/routes/courseOrder");
const transactionIdOrder = require("./app/routes/transactionIdRoutes");
const quiz = require("./app/routes/quizManagementRoutes");

app.use("/api", routes);
app.use("/api", routesuserget);
app.use("/api/course", routesCourseManagement);
app.use("/api/course-order", routesCourseOrder);
app.use("/api/transaction-id", transactionIdOrder);
app.use("/api/quiz-manage", quiz);

//http://localhost:8080/api/auth/signup

//http://localhost:8080/api/auth/signin
