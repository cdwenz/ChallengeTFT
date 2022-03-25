const dateString = require("../dateString/dateString");

async function pair(value, primary, secondary) {
  let result = await dateString();
  result = await result.data;

  if (
    typeof primary === "string" &&
    typeof secondary === "string" &&
    result.hasOwnProperty(primary.toUpperCase()) &&
    result.hasOwnProperty(secondary.toUpperCase()) &&
    typeof value === "number"
  ) {
    let convert = result.rates[secondaryValue] / result.rates[primaryValue];
    return convert * value;
  } else {
    return { error: { message: "Invalid currency" } };
  }
}

module.exports = pair;
