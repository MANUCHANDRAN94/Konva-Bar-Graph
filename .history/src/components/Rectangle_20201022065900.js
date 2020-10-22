import React from 'react';
import { Rect } from 'react-konva';


const Rectangle = ({ item, i, graphWidth, graphHeight, padding, topValue,
    xScale, yScale, inputs, months, onMouseOver, onMouseOut }) => {

    console.log("rectangle printed");

    return (
        <Rect
            name={i.toString()}
            x={padding + 30 + i * xScale}
            y={graphHeight - padding - item * yScale * .8}
            width={xScale / 2}
            height={item * yScale * .8}
            fill={item > 20 ? "red" : "blue"}
            shadowBlur={10}
            onMouseOver={(e) => onMouseOver(e)}
            onMouseOut={(e) => onMouseOut(e)}

        />

    )
}

export default Rectangle
