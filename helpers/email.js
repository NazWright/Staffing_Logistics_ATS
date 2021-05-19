const mailgun = require("mailgun-js");

const DOMAIN = "sandbox7764dc35e2f043f48d275d324a3a852d.mailgun.org";
const api_key = "7f02389a23646c9543ef66d2b9032ebb-71b35d7e-67d20b72";
const mg = mailgun({ apiKey: api_key, domain: DOMAIN });

module.exports = async function mailToRecipient(to, subject, options, message) {
  const data = {
    from: "Staffing Logistics <me@samples.mailgun.org>",
    to: to,
    subject: subject,
    text: message,
  };
  mg.messages().send(data, function (error, body) {
    console.log(body);
    console.log(error);
  });
};
