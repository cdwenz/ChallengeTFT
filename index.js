const server = require("./app.js");
require("dotenv").config();
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`listening at ${port}`);
});
