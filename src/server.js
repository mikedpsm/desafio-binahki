require("dotenv").config();

const cors = require("cors");
const express = require("express");
const router = require("./routes/router");

const server = express();

server.use(cors());
server.use(express.json());
server.use("/api", router);

console.log(process.env.DB_PASSWORD);

module.exports = server;
