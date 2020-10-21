import React from 'react';
import { Layer, Text } from 'react-konva';


const Tooltip = ({ x, y, msg }) => {
    return (
        <Layer>
            <Text
                text={msg}
                fontFamily='Calibri'
                fontSize={12}
                padding={5}
                textFill='white'
                fill='black'
                alpha={0.75}
                visible={false}
            />
        </Layer>
    )
}

export default Tooltip
