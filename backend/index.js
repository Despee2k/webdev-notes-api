const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

const routes = require("./routes");

app.use(cors());
app.use(express.json());

app.use("/notes", routes.notesRoutes);
app.use("/users", routes.userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//any function being called once the request is received or before the response is sent

// get note
// authmiddleware -> getNoteController -> response
