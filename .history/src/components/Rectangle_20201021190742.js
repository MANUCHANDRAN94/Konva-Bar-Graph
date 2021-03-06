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

        />, <Text key={-i - 1} text={i < 10 ? i * Math.ceil(Math.floor(topValue * 1.2 / 10) * 10 / inputs.length) : null} fontSize={15} x={padding / 2} y={graphHeight - padding - i * ((graphHeight - padding) / (inputs.length - 3))} />,
        <Text key={-i - inputs.length} text={months[i]} fontSize={15} x={30 + padding + i * xScale} y={graphHeight - .9 * padding} visible={inputs.length < 6 || graphWidth > 600} />])

    )
}

export default Rectangle
