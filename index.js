const server = require("./app.js");
require("dotenv").config();
const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log(`listening at ${port}`);
});
