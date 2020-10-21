import React from 'react';
import { Layer, Rect, Text } from 'react-konva';


const Tooltip = ({ x, y, msg }) => {
    return (
        <Layer>
            <Rect>

                <Text
                    x={x}
                    y={y}
                    width={100}
                    text={msg}
                    fontSize={14}
                    stroke="black"
                    strokeWidth={1}
                />
            </Rect>
        </Layer>
    )
}

export default Tooltip
