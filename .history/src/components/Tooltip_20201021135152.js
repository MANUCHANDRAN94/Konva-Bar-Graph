import React from 'react';
import { Layer, Rect, Text, Group } from 'react-konva';


const Tooltip = ({ x, y, msg }) => {
    return (
        <Group
            x={x - 50}
            y={y - 50}>

            <Rect
                width={100}
                height={100}
                fill="#00D2FF"
                stroke="black"
                strokeWidth={4}
            />
            <Text
                x={x}
                y={y}
                width={100}
                text={msg}
                fontSize={14}
                stroke="black"
                strokeWidth={1}
            />
        </Group>
    )
}

export default Tooltip
