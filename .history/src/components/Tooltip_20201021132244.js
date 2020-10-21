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
                fontFamily='Calibri'
                fontSize={12}
                padding={5}
                textFill='green'
                fill='black'
                alpha={0.75}
                visible={true}
            />
        </Layer>
    )
}

export default Tooltip
