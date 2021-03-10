import React, { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
import './style.scss';

const csvUrl = "https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv";
const width = window.innerWidth;
const height = window.innerHeight;
    
const App = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      const row = d => {
        d.Population = parseFloat(d['2020'])
        return d;
      }
      d3.csv(csvUrl, row).then(data => {
        setData(data.slice(0, 10))
      });
    }, []);

    if(!data) {
      return <pre>Loading...</pre>
    }

    const yScale = d3.scaleBand()
      .domain(data.map(d => d.Country))
      .range([0, height])

    const xScale = d3.scaleLinear()
      .domain([0,  d3.max(data, d => d.Population)])
      .range([0, width]);

    return (
      <svg width={width} height={height}>
        {data.map(d => <rect x={0} y={yScale(d.Country)} width={xScale(d.Population)} height={yScale.bandwidth()}></rect>)}
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