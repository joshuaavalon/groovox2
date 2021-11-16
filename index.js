require("dotenv").config();

const { createApp } = require("@groovox/app");

const server = createApp();
server.listen(3000);
