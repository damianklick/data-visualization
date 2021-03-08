import React, { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
import './style.scss';
import {message} from './message';

const csvUrl = "https://gist.githubusercontent.com/damianklick/c0386afa2fe349606c406fc4c09d1cc6/raw/cssNamedColurs.csv";
    
const App = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      d3.csv(csvUrl).then(setData);
    }, []);

    return (
      <div>Data is: {data ? message(data) : 'Loading...'}</div>
    );
};
const rootEl = document.getElementById('root');

ReactDOM.render(<App />, rootEl);