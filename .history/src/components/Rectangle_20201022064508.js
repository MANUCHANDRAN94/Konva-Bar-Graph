import React from 'react';
import { Rect, Text } from 'react-konva';


const Rectangle = ({ item, i graphWidth, graphHeight, padding, topValue,
    xScale, yScale, inputs, months, onMouseOver, onMouseOut }) => {

    console.log("rectangle printed");

    return (
        inputs.map((item, i) => [<Rect
            key={i}
            name={i.toString()}
            x={padding + 30 + i * xScale}
            y={graphHeight - padding - item * yScale * .8}
            width={xScale / 2}
            height={item * yScale * .8}
            fill={item > 20 ? "red" : "blue"}
            shadowBlur={10}
            onMouseOver={(e) => onMouseOver(e)}
            onMouseOut={(e) => onMouseOut(e)}

        />, <Text key={-i - 1} text={i < inputs.length ? i * Math.ceil(Math.ceil(topValue / 10) * 12 / Math.floor(inputs.length)) : null} fontSize={graphHeight > 300 ? 15 : 10} x={padding} y={graphHeight - padding - 15 - i * ((graphHeight - padding) / (inputs.length))} visible={inputs.length < 5 || graphWidth > 200} />,
        <Text key={-i - inputs.length} text={months[i]} fontSize={graphWidth > 300 ? 15 : 10} x={30 + padding + i * xScale} y={graphHeight - padding / 1.1} visible={inputs.length < 5 || graphWidth > 200} />])

    )
}

export default Rectangle
