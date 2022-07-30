require("dotenv").config();
const express = require("express");
const cors = require("cors");
const EmailController = require("./controllers/email.controller");
const multer = require("multer");
const upload = multer();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({origin: process.env.CLIENT_URL}));

app.post("/api/email", upload.none(), EmailController.send);

app.listen(PORT, () => {
	console.log("Server is running.");
});
