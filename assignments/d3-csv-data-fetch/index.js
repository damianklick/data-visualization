import * as d3 from 'd3';
import './style.scss';
  
  const csvUrl = "https://gist.githubusercontent.com/damianklick/c0386afa2fe349606c406fc4c09d1cc6/raw/cssNamedColurs.csv";
  d3.csv(csvUrl).then(data => {
    let message = '';
    message = message + data.length + ' rows\n';
    message = message + data.columns.length + ' columns\n';
    message = message + d3.csvFormat(data).length / 1024 + ' kB\n';
    document.getElementById('messageContainer').textContent = message;
  });

//   const fetchText = async (url) => {
//     const response = await fetch(url);
//     return await response.text();
//   };

//   fetchText(csvUrl).then(text => {
//     const data = d3.csvParse(text)
//     let message = '';
//     message = message + data.length + ' rows\n';
//     message = message + data.columns.length + ' columns\n';
//     message = message + text.length / 1024 + ' kB\n';
//     document.getElementById('messageContainer').textContent = message;
//   });