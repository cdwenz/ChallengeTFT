const dateString = require("../dateString/dateString");

async function pair(value, primary, secondary) {
  let result = await dateString();
  result = await result.data;

  if (
    typeof primary === "string" &&
    typeof secondary === "string" &&
    typeof value === "number" &&
    value > 0
  ) {
    let convert =
      result.rates[secondary.toLocaleUpperCase()] /
      result.rates[primary.toLocaleUpperCase()];
    return convert * value;
  } else {
    return { error: { message: "Invalid currency" } };
  }
}

module.exports = pair;
