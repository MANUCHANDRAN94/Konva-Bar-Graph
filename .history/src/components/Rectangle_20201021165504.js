import React from 'react';
import { Rect, Text } from 'react-konva';


const Rectangle = ({ graphWidth, graphHeight, inputs, months, onMouseOver, onMouseOut }) => {

    console.log("rectangle printed");
    let padding = 60;
    let scale = (graphHeight - 2 * padding) / inputs.length
    return (
        inputs.map((item, i) => [<Rect
            key={i}
            name={i.toString()}
            x={60 + i * ((graphWidth - 120) / inputs.length)}
            y={graphHeight - 60 - item * 10}
            width={20}
            height={item * 10}
            fill={item > 20 ? "red" : "blue"}
            shadowBlur={10}
            onMouseOver={(e) => onMouseOver(e)}
            onMouseOut={(e) => onMouseOut(e)}

        />, <Text key={-i - 1} text={i * 5} fontSize={15} x={180} y={490 - i * 35} />,
        <Text key={-i - 100} text={months[i]} fontSize={15} x={225 + i * 40} y={505} rotation={30} />])

    )
}

export default Rectangle
