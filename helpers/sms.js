const keys = require("../config/keys");
var request = require("request-json");
var url = require("url");

module.exports = async function sendTextMessage(phoneNumbers, message) {
  var TILL_URL = url.parse(keys.TILL_URL);
  var TILL_BASE = TILL_URL.protocol + "//" + TILL_URL.host;
  var TILL_PATH = TILL_URL.pathname;

  if (TILL_URL.query != null) {
    TILL_PATH += "?" + TILL_URL.query;
  }

  request.createClient(TILL_BASE).post(
    TILL_PATH,
    {
      phone: phoneNumbers,
      text: message,
    },
    function (err, res, body) {
      return console.log(res.statusCode);
    }
  );
};
