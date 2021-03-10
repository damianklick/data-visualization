import React, { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
import './style.scss';

const csvUrl = "https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv";

const width = 960;
const height = 500;
const margin = {
  top: 50,
  right: 50,
  bottom: 50,
  left: 200
}

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

  if (!data) {
    return <pre>Loading...</pre>
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const yScale = d3.scaleBand()
    .domain(data.map(d => d.Country))
    .range([0, innerHeight])

  const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.Population)])
    .range([0, innerWidth]);


  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        {xScale.ticks().map(tickValue => (
          <g key={tickValue} transform={`translate(${xScale(tickValue)},0)`}>
            <line 
              x1={0} 
              y1={0} 
              x2={0} 
              y2={innerHeight} stroke="black" 
            />
            <text dy='0.71em' y={innerHeight + 3} style={{ textAnchor: 'middle' }}>{tickValue}</text>
          </g>)
          )}

        {yScale.domain().map(tickValue => (
            <text key={tickValue} dy='0.32em' x='-3' y={yScale(tickValue) + yScale.bandwidth() / 2} style={{textAnchor:'end'}}>{tickValue}</text>
            )
          )}
        {data.map(d => <rect key={d.Country} x={0} y={yScale(d.Country)} width={xScale(d.Population)} height={yScale.bandwidth()}></rect>)}
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