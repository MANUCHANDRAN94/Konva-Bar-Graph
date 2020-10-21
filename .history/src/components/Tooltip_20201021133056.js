import React from 'react';
import { Layer, Text } from 'react-konva';


const Tooltip = ({ x, y, msg }) => {
    return (
        <Layer>
            <Text
                x={x}
                y={y}
                width={100}
                text={msg}
                fontSize={14}
                stroke="black"
                strokeWidth={1}

            />
        </Layer>
    )
}

export default Tooltip
