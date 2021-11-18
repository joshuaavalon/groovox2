/* eslint-disable @typescript-eslint/explicit-function-return-type */
require("dotenv").config();

const { createApp } = require("@groovox/app");

const main = async () => {
  const server = await createApp();
  server.listen(3000);
};

main();
