const { default: jsPDF } = require("jspdf");

require("jspdf");

module.exports = {
  createPDF(data) {
    let doc = new jsPDF();
  },
};
