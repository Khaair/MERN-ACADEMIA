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

const studentManagementRoutes = require("./app/routes/studentManagementRoutes");
const routesuserget = require("./app/routes/userGetRoutes");
const routesCourseManagement = require("./app/routes/courseManagementRoutes");
const routesCourseOrder = require("./app/routes/courseOrder");
const transactionIdOrder = require("./app/routes/transactionIdRoutes");
const quizManagementRoutes = require("./app/routes/quizManagementRoutes");
const resultManagementRoutes = require("./app/routes/resultManagementRoutes");
const deshboardManagementRoutes = require("./app/routes/deshboardManagementRoutes");
const teacherManagementRoutes = require("./app/routes/teacherManagementRoutes");
const studentProfileRoutes = require("./app/routes/studentProfileRoutes");
const studentProfilePictureRoutes = require("./app/routes/studentProfilePictureRoutes");
const schoolAboutUsRoutes = require("./app/routes/website/school-about-us");
const slideRoutes = require("./app/routes/website/slideManagementRoutes");
const speechRoutes = require("./app/routes/website/speechManagementRoutes");
const noticesRoutes = require("./app/routes/website/noticesManagementRoutes");
const missionVissionRoutes = require("./app/routes/website/missionVissionManagement");

app.use("/api/student-manage", studentManagementRoutes);
app.use("/api/get-user", routesuserget);
app.use("/api/course-manage", routesCourseManagement);
app.use("/api/course-order", routesCourseOrder);
app.use("/api/transaction-id", transactionIdOrder);
app.use("/api/quiz-manage", quizManagementRoutes);
app.use("/api/result-manage", resultManagementRoutes);
app.use("/api/deshboard-manage", deshboardManagementRoutes);
app.use("/api/teacher-manage", teacherManagementRoutes);
app.use("/api/student-profile", studentProfileRoutes);
app.use("/api/student-profile-picture", studentProfilePictureRoutes);
app.use("/api/school-about-us", schoolAboutUsRoutes);
app.use("/api/slide", slideRoutes);
app.use("/api/speech", speechRoutes);
app.use("/api/notices", noticesRoutes);
app.use("/api/mission-vission", missionVissionRoutes);

//http://localhost:8080/api/auth/signup

//http://localhost:8080/api/auth/signin
