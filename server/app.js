require("dotenv").config();
const express = require("express");
const connectdb = require("./config/database");
const cors = require("cors");


//connectdb
connectdb();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

//routes
app.use("/user", require("./routes/userRoutes"));



module.exports = app;