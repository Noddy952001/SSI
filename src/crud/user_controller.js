
const Student = require("../../src/model/user_model")
const express = require("express");

const app = express();

app.use(express.json());

const router = express.Router();




  
router.get("/student", async (req, res) => {

  try {
    const student = await Student.find().lean().exec(); 
    return res.send(student);

  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.post("/student", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    return res.status(201).send(student);

  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;