import React from "react";
import { Stage, Layer, Text, Group } from "react-konva";
import BarGraph from './BarGraph';


const App = () => {
    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                <Text x={window.innerWidth / 3} y={10} text="Graph Canvas" fontSize={26} stroke="black" />
                <Group>
                    <Rect />
                </Group>
                <BarGraph />
            </Layer>
        </Stage>
    )
}

export default App
