require("dotenv").config();

const { client_encoding } = require("pg/lib/defaults");
const server = require("./server");

server.listen(5000);

console.log(process.env);
