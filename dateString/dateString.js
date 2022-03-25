const data = require("../db");
const dataResolve = require("../db");

const dateString = async () => {
  let now = new Date();
  let year = now.getFullYear();
  let month =
    now.getMonth() < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1;
  let day = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
  let fecha = year + "-" + month + "-" + day;

  return fecha === data.date ? data : dataResolve;
};

module.exports = dateString;
