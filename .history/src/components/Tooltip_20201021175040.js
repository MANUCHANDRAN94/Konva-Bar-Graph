import React from 'react';
import { Rect, Text, Group } from 'react-konva';


const Tooltip = ({ x, y, msg }) => {
    return (
        <Group
            x={x - 50}
            y={y - 50}>
            <Rect
                // width={}
                height={50}
                fill="yellow"
                stroke="black"
                strokeWidth={3}
            />
            <Text
                x={15}
                y={10}
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
