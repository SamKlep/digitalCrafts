const catFacts = require('cat-facts');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const cat = require ('cat-facts')
let allFacts = cat.all;
const doc = new PDFDocument();
let randomFact = catFacts.random();


// Pipe its output somewhere, like to a file or HTTP response
// See below for browser usage
doc.pipe(fs.createWriteStream('catFacts.pdf'));

doc.text(randomFact);
doc.fontSize(58);


   // Finalize PDF file
doc.end();