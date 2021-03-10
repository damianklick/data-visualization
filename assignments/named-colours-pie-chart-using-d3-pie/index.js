import React, { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
import './style.scss';

const csvUrl = "https://gist.githubusercontent.com/damianklick/c0386afa2fe349606c406fc4c09d1cc6/raw/cssNamedColurs.csv";
const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;

const pieArc = d3.arc()
  .innerRadius(0)
  .outerRadius(width)
    
const App = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      d3.csv(csvUrl).then(setData);
    }, []);

    if(!data) {
      return <pre>Loading...</pre>
    }

    const colorPie = d3.pie().value(1);

    return (
      <svg width={width} height={height}>
        <g transform={`translate(${centerX},${centerY})`}>
          {colorPie(data).map(d => (
            <path fill={d.data['RGB hex value']} d={pieArc(d)} />
          ))}
        </g>
      </svg>
    )

    // return (
    //   <svg width={width} height={height}>
    //     <g transform={`translate(${centerX},${centerY})`}>
    //       {data.map((d, i) => (
    //         <path fill={d['RGB hex value']} d={pieArc({
    //           startAngle: i / data.length * 2 * Math.PI,
    //           endAngle: (i + 1) / data.length * 2 * Math.PI
    //         })} />
    //       ))}
    //     </g>
    //   </svg>
    // )
};
const rootEl = document.getElementById('root');

ReactDOM.render(<App />, rootEl);