'use strict'

const files = [
    'text.docx',
    'index.html',
    'document.pdf',
    'script.js',
    'style.css',
    'summary.pdf',
    'Harry_Potter.pdf',
    'report.pdf',
  ];
  
  let pdfFiles = files.reduce((acc, file) => {
    const [, ext]= file.split('.');
    if (ext === 'pdf') {
      acc.push(file)
    }
    return acc;
  }, [])
  
  console.log(pdfFiles);