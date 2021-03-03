import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import { Face } from './Face';
import { range } from 'd3';

const width = 200;
const height = 200;

const array = range(5 * 3);

const App = () => array.map((item, index) => (
        <Face
        key={index}
        width={width}
        height={height}
        centerX={width / 2}
        centerY={height / 2}
        strokeWidth={10}
        eyeOffsetX={30}
        eyeOffsetY={40}
        eyeRadius={5 + Math.random() * 10}
        mouthWidth={0}
        mouthRadius={50}
    />
));
const rootEl = document.getElementById('root');

ReactDOM.render(<App />, rootEl);