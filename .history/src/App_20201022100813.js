import React, { useState } from "react";
import { Stage, Layer, Text, Group, Rect } from "react-konva";
import BarGraph from './BarGraph';

const initialGraph = [
    {
        x: 100,
        y: 100,
        width: 300,
        height: 200,
        id: "bar1"
    },
    {
        x: 200,
        y: 200,
        width: 200,
        height: 200,
        id: "bar1"
    }
];


const App = () => {
    const [bars, setBars] = useState(initialGraph);
    const [selectedId, selectShape] = useState(null);

    const dragEnd = e => {
        setBars(prev => [...prev, {
            x: 200,
            y: 200,
            width: 200,
            height: 200,
            id: "bar1"
        }])
    }
    return (
        <Stage width={window.innerWidth} height={window.innerHeight}
            onMouseDown={e => {
                const clickedOnEmpty = e.target === e.target.getStage();
                if (clickedOnEmpty) {
                    selectShape(null);
                }
            }}>
            <Layer>
                <Text x={window.innerWidth / 3} y={10} text="Graph Canvas" fontSize={26} stroke="black" />
                <Group x={window.innerWidth - 120} y={window.innerHeight / 3} >
                    <Rect height={100} width={120} fill="red" />
                    <Text text="BAR" fontSize={20} stroke="black" height={100} width={120} align="center" verticalAlign="middle" onDragEnd={dragEnd} />
                </Group>
                {bars.map((bar, i) => {
                    return (
                        <BarGraph
                            key={i}
                            shapeProps={bar}
                            isSelected={bar.id === selectedId}
                            onSelect={() => {
                                selectShape(bar.id);
                            }}
                            onChange={newAttrs => {
                                const bargraphs = bars.slice();
                                bargraphs[i] = newAttrs;
                                setBars(bargraphs);
                            }}
                        />
                    );
                })}
                {/* <BarGraph /> */}
            </Layer>
        </Stage>
    )
}

export default App
