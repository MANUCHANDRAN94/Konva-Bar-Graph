import React from 'react';
import { Stage, Layer, Rect, Text, Arrow, Line, Group } from 'react-konva';

const App = () => {
  let inputs = [12, 13, 8, 30, 16, 23];
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {inputs.map((item, i) => <Rect
          x={220 + i * 40}
          y={500}
          width={20}
          height={item * 10}
          fill={item > 15 ? "red" : "blue"}
          shadowBlur={10}

        />)}


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
        <Text text="Some text on canvas" fontSize={15} x={160} y={350} rotation={-90} />
      </Layer>
    </Stage>
  );
}

export default App;