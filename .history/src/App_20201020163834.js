import React from 'react';
import { Stage, Layer, Rect, Text, Arrow, Group } from 'react-konva';

const App = () => {
  let inputs = [12, 13, 8, 30, 11, 23, 35, 13, 9, 17, 20, 28];
  let months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jly', 'aug', 'sep', 'oct', 'nov', 'dec'];
  let topValue = Math.max(...inputs);

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Group draggable>

          {inputs.map((item, i) => [<Rect
            key={i}
            name={i.toString()}
            x={220 + i * 40}
            y={500 - item * 10}
            width={20}
            height={item * 10}
            fill={item > 20 ? "red" : "blue"}
            shadowBlur={10}

          />, <Text text={i * 5} fontSize={15} x={160} y={500 - i * 20} rotation={-90} />])}

          <Arrow
            x={200}
            y={500}
            points={[0, 0, 200 + inputs.length * 28, 0]}
            stroke="black"
          />
          <Arrow
            x={200}
            y={500}
            points={[0, 0, 0, topValue * -10 - 80]}
            stroke="black"
          />
          <Text text="Months of a year --->" fontSize={15} x={400} y={520} />
          <Text text="Expenditure per month  --->" fontSize={15} x={160} y={350} rotation={-90} />

        </Group>
      </Layer>
    </Stage>
  );
}

export default App;