import React from "react";
import ReactDOM from 'react-dom';
import { ImageComponent } from "./components/imageComponent";
import { TitleComponent } from "./components/titleComponent";
import img from './content/husqvarna-logo.png';

ReactDOM.render(
    <div>
        <TitleComponent text='Hola mundo' />
        <ImageComponent image={img} />
    </div>,
    document.getElementById('root')
)