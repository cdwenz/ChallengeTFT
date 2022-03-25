const server = require('./app.js');
require("dotenv").config();
const port = process.env.PORT || 3001;

server.listen(3001, () => {
    console.log(`listening at ${port}`); // eslint-disable-line no-console
  });



