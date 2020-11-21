const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/user.js"); 
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://briana-martin123:briana562314@cluster0.4ae09.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.json({ message: "API Working" });
});

app.use("/user", user);

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);