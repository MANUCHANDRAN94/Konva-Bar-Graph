import React from 'react';
import { Stage, Layer, Rect, Text, Arrow, Line } from 'react-konva';

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

        <Arrow
          x={200}
          y={500}
          points={[0, 0, 500, 0]}
          stroke="black"
        />
        <Arrow
          x={200}
          y={500}
          points={[0, 0, 0, -400]}
          stroke="black"
        />
        <Text text="Some text on canvas" fontSize={15} x={400} y={520} />
        <Text text="Some text on canvas" fontSize={15} x={160} y={520} rotation={-90} />
      </Layer>
    </Stage>
  );
}

export default App;