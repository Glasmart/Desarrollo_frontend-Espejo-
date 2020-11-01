
var colors = require("colors/safe");

var Utils = {
	colors: {
		warn: colors.yellow,
		error: colors.red,
		info: colors.blue,
		pass: colors.green
	}
};

if (typeof module !== "undefined") {
	module.exports = Utils;
}
