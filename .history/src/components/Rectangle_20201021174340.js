import React from 'react';
import { Rect, Text } from 'react-konva';


const Rectangle = ({ graphWidth, graphHeight, padding, topValue,
    xScale, yScale, inputs, months, onMouseOver, onMouseOut }) => {

    console.log("rectangle printed");
    console.log(xScale + " " + yScale)
    return (
        inputs.map((item, i) => [<Rect
            key={i}
            name={i.toString()}
            x={padding + 30 + i * xScale}
            y={graphHeight - padding - item * yScale}
            width={xScale / 2}
            height={item * yScale}
            fill={item > 20 ? "red" : "blue"}
            shadowBlur={10}
            onMouseOver={(e) => onMouseOver(e)}
            onMouseOut={(e) => onMouseOut(e)}

        />, <Text key={-i - 1} text={i * Math.round(yScale)} fontSize={15} x={180} y={490 - i * 35} />,
        <Text key={-i - inputs.length} text={months[i]} fontSize={15} x={225 + i * 40} y={505} rotation={30} />])

    )
}

export default Rectangle
