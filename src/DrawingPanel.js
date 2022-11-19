import React, {useRef} from "react";
import "../src/PixelArtStyles/drawingPanel.css";
import Row from "./row";
import {exportComponentAsPNG} from "react-component-export-image";
import {exportComponentAsJPEG} from "react-component-export-image";

export default function DrawingPanel(props) {
    const {width, height, selectedColor} = props;

    const panelRef = useRef();

    let rows = [];

    for (let count = 0; count < height; count++)
    {
        rows.push(<Row key = {count} width = {width} 
            selectedColor = {selectedColor} />);
    }

    return (<div id = "drawingPanel">
        <div id = "pixels" ref = {panelRef}>{rows}</div>
        <button onClick = {() => exportComponentAsPNG(panelRef)}
        className = "button">Export as PNG</button>
        <button onClick = {() => exportComponentAsJPEG(panelRef)}
        className = "button">Export as JPEG</button>
    </div>
    );
}