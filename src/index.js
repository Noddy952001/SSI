const express = require("express");
const connect  =  require("../src/connection/connection.js")

const studentController = require("../src/crud/user_controller")

const app = express();

app.use(express.json());

app.use("", studentController);




// app.listen(2300, async function () {
//   try {
//     await connect();
//     console.log("listening on port 2300");
//   } catch (e) {
//     console.log(e.message);
//   }
// });



// -----------------------------------------------

const PORT=process.env.PORT || 2345

app.listen(PORT, async () => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port 2345");
});
