const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = reqquire("cors");
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true
}));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());



module.exports = app;