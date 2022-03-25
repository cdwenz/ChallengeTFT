const dateString = require("../dateString/dateString");

async function pair(value, primary, secondary) {
  let result = await dateString();
  result = await result.data;
  let convert = result.rates[secondary] / result.rates[primary];
  return convert * value;
}

module.exports = pair;