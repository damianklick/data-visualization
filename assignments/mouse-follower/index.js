import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import './style.scss'

const width = 900;
const height = 500;
const circleRadius = 20;
const initialMousePosition = {x: width / 2, y: height / 2};
    
const App = () => {
    const [mousePosition, setMousePosition] = useState(initialMousePosition);

    const handleMouseMove = useCallback(event => {
        const { clientX, clientY } = event;
        setMousePosition({x: clientX, y: clientY});
    }, [setMousePosition]);
    return (
        <svg width={width} height={height} onMouseMove={handleMouseMove}>
            <circle
                cx={mousePosition.x}
                cy={mousePosition.y}
                r={circleRadius}
            />
        </svg>
    );
};
const rootEl = document.getElementById('root');

ReactDOM.render(<App />, rootEl);