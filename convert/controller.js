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
    let primaryValue = primary.toLocaleUpperCase();
    let secondaryValue = secondary.toLocaleUpperCase();
    let convert =
      (result.rates[secondaryValue] / result.rates[primaryValue]) * value;
    let response = {};
    response[primaryValue] = value;
    response[secondaryValue] = convert;
    return response;
  } else {
    return { error: { message: "Invalid currency" } };
  }
}

module.exports = pair;
