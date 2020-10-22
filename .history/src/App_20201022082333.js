import React from "react";
import { Stage, Layer, Text, Group } from "react-konva";
import BarGraph from './BarGraph';


const App = () => {
    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                <BarGraph />
            </Layer>
        </Stage>
    )
}

export default App
