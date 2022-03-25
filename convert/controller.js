const dateString = require("../dateString/dateString");

async function pair(value, primary, secondary) {
  let result = await dateString();
  result = await result.data;
  if (
    result.hasOwnProperty(primary.toUpperCase()) &&
    result.hasOwnProperty(secondary.toUpperCase()) &&
    typeof value === "number"
  ) {
    let convert =
      result.rates[secondary.toUpperCase()] /
      result.rates[primary.toUpperCase()];
    return convert * value;
  } else {
    return { error: { message: "Invalid currency" } };
  }
}

module.exports = pair;
