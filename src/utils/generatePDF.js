import {printToFileAsync} from 'expo-print';
import { shareAsync } from 'expo-sharing';
import Chart from 'chart.js';



const generatePDF = async (issue, open, closed) => {
  const data = [
    { issue: issue, open: open, closed: closed }
  ];


const htmlTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Issue Report</title>
        <style>
        body {
          font-family: sans-serif;
          background-color: #f2f2f2;
          margin: 0;
          padding: 0;
        }
        
        header {
          background-color: #3949AB;
          color: white;
          padding: 20px;
          text-align: center;
        }
        
        h1 {
          font-size: 36px;
          margin: 0;
          padding: 20px;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        
        table {
          border-collapse: collapse;
          width: 100%;
          margin-top: 50px;
          margin-bottom: 50px;
        }
        
        th, td {
          border: 1px solid black;
          padding: 10px;
          text-align: left;
        }
        
        th {
          background-color: #2196F3;
          color: white;
        }
        
        </style>
    </head>
    <body>
        <header>
        <h1>Issues Report</h1>
        </header>
        <div class="container">
        <table>
            <thead>
            <tr>
                <th>Total Issues</th>
                <th>Open</th>
                <th>Closed</th>
            </tr>
            </thead>
            <tbody>
            ${data.map(item => `
            <tr>
                <td>${item.issue}</td>
                <td>${item.open}</td>
                <td>${item.closed}</td>
            </tr>
            `).join('')}
            </tbody>
        </table>
    </body>
    </html>
  `;

  const options = {
    html: htmlTemplate,
  };

  const pdfFile = await printToFileAsync(options);
  const pdfUri = pdfFile.uri;
  console.log("PDF file generated:", pdfUri);
  
  await shareAsync(pdfUri);
};

export default generatePDF;