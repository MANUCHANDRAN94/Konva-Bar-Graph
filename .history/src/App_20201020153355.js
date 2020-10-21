import React from 'react';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';

const App = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect
          x={20}
          y={50}
          width={100}
          height={100}
          fill="red"
          shadowBlur={10}
        />

        <Line
          x={200}
          y={500}
          points={[0, 0, 700, 0]}
          stroke="black"
        />
        <Line
          x={200}
          y={500}
          points={[0, 0, 0, -500]}
          stroke="black"
        />
      </Layer>
    </Stage>
  );
}

export default App;