import React from 'react';
import { Rect, Text } from 'react-konva';


const Rectangle = ({ graphWidth, graphHeight, padding, inputs, months, onMouseOver, onMouseOut }) => {

    console.log("rectangle printed");
    let xScale = (graphWidth - 2 * padding) / inputs.length;
    let yScale = (graphHeight - 2 * padding) / Math.floor(Math.max(...inputs));
    return (
        inputs.map((item, i) => [<Rect
            key={i}
            name={i.toString()}
            x={i === 0 ? (padding + xScale / 2) : (padding + 2 * i * xScale)}
            y={graphHeight - padding - item * yScale}
            width={xScale / 2}
            height={item * yScale}
            fill={item > 20 ? "red" : "blue"}
            shadowBlur={10}
            onMouseOver={(e) => onMouseOver(e)}
            onMouseOut={(e) => onMouseOut(e)}

        />, <Text key={-i - 1} text={i * 5} fontSize={15} x={180} y={490 - i * 35} />,
        <Text key={-i - 100} text={months[i]} fontSize={15} x={225 + i * 40} y={505} rotation={30} />])

    )
}

export default Rectangle
