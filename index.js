import React from 'react';
import ReactDOM from 'react-dom';
import { arc } from 'd3';
import './style.scss'

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 20;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 40;
const mouthWidth = 0;
const mouthRadius = 140;
const glassesInnerRadius = 60;
const glassesouterRadius = 70;
const glassesBridge = {
    strokeWidth: 10,
    initialX: -20,
    endX: 20,
    initialY: -eyeOffsetY,
    endY: -eyeOffsetY
}
const glassesArms = {
    strokeWidth: glassesBridge.strokeWidth,
    initialX: -210,
    endX: -155,
    initialY: -eyeOffsetY - 30,
    endY: -eyeOffsetY
}
const teethInnerRadius = 40;

const mouthArc = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle(Math.PI * 3/2);

const glasses = arc()
    .innerRadius(glassesInnerRadius)
    .outerRadius(glassesouterRadius)
    .startAngle(0)
    .endAngle(Math.PI * 2);

const teethArc = arc()
    .innerRadius(teethInnerRadius)
    .outerRadius(0)
    .startAngle(Math.PI / 2)
    .endAngle(Math.PI * 3/2)

const teethPartition = {
    strokeWidth: 5,
    initialX: 0,
    endX: 0,
    initialY: 0,
    endY: teethInnerRadius + 5
}

const App = () => (
    <svg width={width} height={height}>
        <g transform={`translate(${centerX}, ${centerY})`}>
            <circle
                r={centerY - strokeWidth / 2}
                fill="yellow"
                stroke="black"
                strokeWidth={strokeWidth}
            />
            <circle
                cx={-eyeOffsetX}
                cy={-eyeOffsetY}
                r={eyeRadius}
            />
            <circle
                cx={eyeOffsetX}
                cy={-eyeOffsetY}
                r={eyeRadius}
            />
            <path className="mouth" d={mouthArc()} />
            <path className="teeth" transform={`translate(0, ${teethPartition.strokeWidth})`} strokeWidth={teethPartition.strokeWidth} d={teethArc()} />
            <line className="teethPartition" 
                x1={teethPartition.initialX}
                y1={teethPartition.initialY}
                x2={teethPartition.endX}
                y2={teethPartition.endY}
                strokeWidth={teethPartition.strokeWidth}
            />
            <path className="glasses" transform={`translate(${-eyeOffsetX}, ${-eyeOffsetY})`} d={glasses()} />
            <path className="glasses" transform={`translate(${eyeOffsetX}, ${-eyeOffsetY})`} d={glasses()} />
            <line className="glasses"
                x1={glassesBridge.initialX}
                y1={glassesBridge.initialY}
                x2={glassesBridge.endX}
                y2={glassesBridge.endY}
                strokeWidth={glassesBridge.strokeWidth}
            />
            <line className="glasses"
                x1={glassesArms.initialX}
                y1={glassesArms.initialY}
                x2={glassesArms.endX}
                y2={glassesArms.endY}
                strokeWidth={glassesBridge.strokeWidth}
            />
            <line className="glasses"
                x1={-glassesArms.initialX}
                y1={glassesArms.initialY}
                x2={-glassesArms.endX}
                y2={glassesArms.endY}
                strokeWidth={glassesBridge.strokeWidth}
            />
        </g>
    </svg>
);
const rootEl = document.getElementById('root');

ReactDOM.render(<App />, rootEl);