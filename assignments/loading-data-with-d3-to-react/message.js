import * as d3 from 'd3';

export const message = (data) => {
    let message = '';
    message = message + data.length + ' rows\n';
    message = message + data.columns.length + ' columns\n';
    message = message + d3.csvFormat(data).length / 1024 + ' kB\n';
    return message;
  }