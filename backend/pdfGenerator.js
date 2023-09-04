const PDFDocument = require('pdfkit');
function generatePDF(data) {
  const doc = new PDFDocument();
  // Customize the PDF content based on the 'data' parameter
  doc.text(`Name: ${data.fullName}`);
  doc.text(`Email: ${data.email}`);
  doc.text(`Age: ${data.age}`);
  // Add more content as needed
  doc.end(); // End the PDF document
  return Buffer.from(doc);
//   return doc;
}
module.exports = generatePDF;