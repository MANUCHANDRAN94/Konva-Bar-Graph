import React from 'react';
import { Rect, Text } from 'react-konva';


const Rectangle = (props) => {
    return (
        props.inputs.map((item, i) => [<Rect
            key={i}
            name={i.toString()}
            x={220 + i * 40}
            y={500 - item * 10}
            width={20}
            height={item * 10}
            fill={item > 20 ? "red" : "blue"}
            shadowBlur={10}
        // onMouseOver={props.onMouseOver}

        />, <Text key={-i - 1} text={i * 5} fontSize={15} x={180} y={500 - i * 35} />,
        <Text key={-i - 100} text={props.months[i]} fontSize={15} x={225 + i * 40} y={505} rotation={30} />])
    )
}

export default Rectangle
