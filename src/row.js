import React from "react";
import "../src/PixelArtStyles/row.css";
import Pixel from "./pixel";

export default function Row(props) {
    const {width, selectedColor } = props;

    let pixels = [];

    for (let count = 0; count < width; count++)
        pixels.push(<Pixel key = {count} selectedColor = {selectedColor} />);

    return (<div className = "row">{pixels}</div>);
}