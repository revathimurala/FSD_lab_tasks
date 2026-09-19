const express = require("express");
const mongoose = require("mongoose");
const dns = require("dns");
require("dotenv").config();

dns.setServers(["8.8.8.8"]);

const app = express();
app.use(express.json());


// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));


// Schema
const Student = mongoose.model("Student", {
    name: String,
    rollNumber: Number,
    course: String
});


// CREATE
app.post("/students", async (req, res) => {

    const student = new Student(req.body);
    await student.save();

    res.json(student);
});


// READ
app.get("/students", async (req, res) => {

    const students = await Student.find();

    res.json(students);
});


// UPDATE
app.put("/students/:id", async (req, res) => {

    const student = await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(student);
});


// DELETE
app.delete("/students/:id", async (req, res) => {

    await Student.findByIdAndDelete(req.params.id);

    res.send("Student deleted");
});


// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});