import {printToFileAsync} from 'expo-print';
import { shareAsync } from 'expo-sharing';
import Chart from 'chart.js';



const generatePDF = async (issue, open, closed, username, repository) => {
  const data = [
    { issue: issue, open: open, closed: closed }
  ];

  const user = username.charAt(0).toUpperCase() + username.slice(1);
  const repo = repository.charAt(0).toUpperCase() + repository.slice(1);

let creds = () => {
 if (repo == "") {
  `<h2>User = ${user}</h2>`
  }
  else {
    `<h2>User: ${user}</h2> 
    <h2>Repository: ${repo}</h2>`
  }
}

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
        
        h2 {
          font-size: 18px;
          margin: 0;
          padding: 5px;
        }

        table {
          border-collapse: collapse;
          width: 100%;
          margin-top: 10px;
          margin-bottom: 10px;
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
        

        text {
          font-size: 14px;
          margin: 0;
        }

        text2 {
          font-size: 14px;
          color: blue;
          margin: 0;
        }

        .container {
          postion: relative
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        .bottomcontainer {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        
        
        </style>

    </head>

        <header>

              <h1>Issues Report</h1>

        </header>

    <body>
        

          <div class="container">

          ${repo == "" ? `<h2>User = ${user}</h2>` :
          `<h2>User: ${user}</h2> 
           <h2>Repository: ${repo}</h2>`}


           <table>
           <thead>
           <tr>
               <th>Issues</th>
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

            
          <p> ${repo == "" ? 
            `<text>This is a report that shows the total number of issues that the user <strong>${user}</strong> has submitted into different repositories</text>` :
            `<text>This is a report that shows the total number of issues found within the repository <strong>${repo}</strong></text>`}
          </p>

          <p style="position: absolute; bottom: 0; right: 0; direction: rtl; padding-right: 20px;">
            <text2>
            Designed by <strong>David Njagah</strong><br>
            As a Final year project in KeMU<br>
            Github Issue Tracker
            </text2>
          </p>

          </div>
     
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