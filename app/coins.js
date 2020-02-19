var btc = require("./coins/btc.js");
var ltc = require("./coins/ltc.js");
var ring = require("./coins/ring.js");

module.exports = {
	"BTC": btc,
	"LTC": ltc,
	"RING": ring,

	"coins":["BTC", "LTC", "RNG"]
};