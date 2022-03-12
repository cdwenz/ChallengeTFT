const server = require('./app.js');

server.listen(3001, () => {
    console.log('listening at 3001'); // eslint-disable-line no-console
  });

const data = {
    "success": true,
    "timestamp": 1647100983,
    "base": "EUR",
    "date": "2022-03-12",
    "rates": {
    "AED": 4.0081,
    "AFN": 94.393348,
    "ALL": 123.360852,
    "AMD": 562.067032,
    "ANG": 1.963363,
    "AOA": 512.769065,
    "ARS": 118.716376,
    "AUD": 1.49627,
    "AWG": 1.964437,
    "AZN": 1.859376,
    "BAM": 1.934788,
    "BBD": 2.19952,
    "BDT": 93.741183,
    "BGN": 1.95067,
    "BHD": 0.411165,
    "BIF": 2198.772484,
    "BMD": 1.091202,
    "BND": 1.481092,
    "BOB": 7.499468,
    "BRL": 5.537896,
    "BSD": 1.089372,
    "BTC": 0.000027959147,
    "BTN": 83.169361,
    "BWP": 12.614407,
    "BYN": 3.584219,
    "BYR": 21387.56362,
    "BZD": 2.195621,
    "CAD": 1.392724,
    "CDF": 2198.231161,
    "CHF": 1.019864,
    "CLF": 0.031873,
    "CLP": 879.465778,
    "CNY": 6.918008,
    "COP": 4167.672308,
    "CRC": 707.344796,
    "CUC": 1.091202,
    "CUP": 28.916859,
    "CVE": 110.543037,
    "CZK": 25.115551,
    "DJF": 193.928889,
    "DKK": 7.439435,
    "DOP": 59.940167,
    "DZD": 156.135807,
    "EGP": 17.113389,
    "ERN": 16.368055,
    "ETB": 55.514957,
    "EUR": 1,
    "FJD": 2.310119,
    "FKP": 0.794308,
    "GBP": 0.836908,
    "GEL": 3.514098,
    "GGP": 0.794308,
    "GHS": 7.751746,
    "GIP": 0.794308,
    "GMD": 58.297523,
    "GNF": 9766.260306,
    "GTQ": 8.396306,
    "GYD": 227.889416,
    "HKD": 8.543572,
    "HNL": 26.713054,
    "HRK": 7.569129,
    "HTG": 116.113929,
    "HUF": 382.259475,
    "IDR": 15633.654285,
    "ILS": 3.547335,
    "IMP": 0.794308,
    "INR": 83.759814,
    "IQD": 1593.70085,
    "IRR": 46157.854524,
    "ISK": 144.922989,
    "JEP": 0.794308,
    "JMD": 166.919545,
    "JOD": 0.773706,
    "JPY": 128.022578,
    "KES": 124.619445,
    "KGS": 114.551359,
    "KHR": 4424.825407,
    "KMF": 492.285391,
    "KPW": 982.082174,
    "KRW": 1349.931772,
    "KWD": 0.331475,
    "KYD": 0.907748,
    "KZT": 572.017162,
    "LAK": 12516.089908,
    "LBP": 1648.486788,
    "LKR": 277.754784,
    "LRD": 167.881879,
    "LSL": 16.455746,
    "LTL": 3.222037,
    "LVL": 0.660058,
    "LYD": 5.057765,
    "MAD": 10.625586,
    "MDL": 20.042223,
    "MGA": 4386.633325,
    "MKD": 60.967208,
    "MMK": 1936.821184,
    "MNT": 3119.562929,
    "MOP": 8.780504,
    "MRO": 389.559007,
    "MUR": 48.534087,
    "MVR": 16.859487,
    "MWK": 877.87627,
    "MXN": 22.829861,
    "MYR": 4.577052,
    "MZN": 69.65185,
    "NAD": 16.455741,
    "NGN": 453.765945,
    "NIO": 43.332052,
    "NOK": 9.829037,
    "NPR": 133.068327,
    "NZD": 1.602897,
    "OMR": 0.419952,
    "PAB": 1.089372,
    "PEN": 4.040181,
    "PGK": 3.830529,
    "PHP": 57.16427,
    "PKR": 195.001879,
    "PLN": 4.786504,
    "PYG": 7595.725179,
    "QAR": 3.973109,
    "RON": 4.949043,
    "RSD": 117.664744,
    "RUB": 146.22147,
    "RWF": 1107.777587,
    "SAR": 4.093671,
    "SBD": 8.782381,
    "SCR": 15.722845,
    "SDG": 487.767765,
    "SEK": 10.636554,
    "SGD": 1.469942,
    "SHP": 1.503026,
    "SLL": 12783.434441,
    "SOS": 637.262469,
    "SRD": 22.455892,
    "STD": 22585.68294,
    "SVC": 9.531338,
    "SYP": 2741.099746,
    "SZL": 16.455733,
    "THB": 36.376359,
    "TJS": 14.220694,
    "TMT": 3.819208,
    "TND": 3.210358,
    "TOP": 2.468573,
    "TRY": 16.111059,
    "TTD": 7.399142,
    "TWD": 31.003787,
    "TZS": 2527.22472,
    "UAH": 32.024011,
    "UGX": 3937.674362,
    "USD": 1.091202,
    "UYU": 46.358808,
    "UZS": 12008.680857,
    "VEF": 233332014497.56464,
    "VND": 24964.524515,
    "VUV": 124.0385,
    "WST": 2.850594,
    "XAF": 648.899651,
    "XAG": 0.042196,
    "XAU": 0.000549,
    "XCD": 2.949029,
    "XDR": 0.785853,
    "XOF": 647.632451,
    "XPF": 119.432481,
    "YER": 273.073754,
    "ZAR": 16.418269,
    "ZMK": 9822.133393,
    "ZMW": 19.8789,
    "ZWL": 351.366671
    }
}

module.exports = data;