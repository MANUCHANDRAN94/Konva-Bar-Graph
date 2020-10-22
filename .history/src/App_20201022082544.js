import React from "react";
import { Stage, Layer, Text, Group } from "react-konva";
import BarGraph from './BarGraph';


const App = () => {
    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                <Text x={10} y={window.innerWidth / 3} text="Graph Canvas" fontSize={16} />
                <BarGraph />
            </Layer>
        </Stage>
    )
}

export default App
