import React from "react";
import { Stage, Layer, Text, Group, Rect } from "react-konva";
import BarGraph from './BarGraph';


const App = () => {
    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                <Text x={window.innerWidth / 3} y={10} text="Graph Canvas" fontSize={26} stroke="black" />
                <Group>
                    <Rect x={window.innerWidth - 120} y={window.innerHeight / 3} height={100} width={120} fill="red" />
                    <Text />
                </Group>
                <BarGraph />
            </Layer>
        </Stage>
    )
}

export default App
