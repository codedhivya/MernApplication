const express = require("express");
const app = express();
const notes = require("./data/notes");
const dotenv = require('dotenv');
dotenv.config();

app.get("/", (req, res) => {
    res.send("API is running succesfully");
})
app.get("/api/notes", (req, res) => {
    res.json(notes);
})
app.get("/api/notes/:id", (req, res) => {
    const note = notes.find((n) => n._id === req.params.id);
    res.send(note);

})
const PORT = process.env.PORT || 5001;
app.listen(PORT, console.log(`Server stated on PORT number ${PORT}`));