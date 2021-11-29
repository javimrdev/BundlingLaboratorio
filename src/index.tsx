import React from "react";
import ReactDOM from 'react-dom';
import './mystyles.css';
import img from './content/husqvarna-logo.png';

ReactDOM.render(
    <div>
        <img src={img} height="100px" />
    </div>,
    document.getElementById('root')
)