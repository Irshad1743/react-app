const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors")
const app = express();

app.use(cors());
app.use(bodyParser.json());
mongoose.connect("mongodb://127.0.0.1/reactconnect");

const UserSchema = new mongoose.Schema({
    username: String,
})
const User = mongoose.model("User", UserSchema)
app.post("/signup", async (req, res) => {
    const {username} = req.body;
    const data = User({ username });
    const result = await data.save();
    console.log(result);
})

app.listen(5000, () => {
    console.log("RUN");
})