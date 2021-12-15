'use strict'

const files = [
    'text.docx',
    'index.html',
    'document.pdf',
    'script.js',
    'style.css',
    'summary.pdf',
    'Harry.Potter.pdf',
    'report.pdf',
  ];
  
  let pdfFiles = files.reduce((acc, file) => {
    const arr = file.split('.');
    if (arr[arr.length - 1] === 'pdf') {
      acc.push(file)
    }
    return acc;
  }, [])
  
  console.log(pdfFiles);