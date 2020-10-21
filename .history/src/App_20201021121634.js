import React, { useRef, useState } from 'react';
import { Stage, Layer, Text, Arrow, Group } from 'react-konva';
import Rectangle from './components/Rectangle';
import Tooltip from './components/Tooltip';

const App = () => {
  let inputs = [12, 13, 8, 30, 11, 23, 35, 13, 9, 17, 20, 28];
  let months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jly', 'aug', 'sep', 'oct', 'nov', 'dec'];
  let topValue = Math.max(...inputs);
  let stageRef = useRef();

  let initialValues = {
    backgroundColor: "yellow",
    vertArrow: {
      desc: "Months of a year --->",

    },
    horiArrow: {},
    dataSet: [...inputs],
    topValue: Math.max(...inputs)
  }

  const [chartDetails, setChartDetails] = useState(initialValues);


  const onMouseOver = (e) => {
    console.log(e.target);
    console.log(stageRef.current)

  }
  // const onMouseOut = () => {

  // }

  return (
    <Stage width={window.innerWidth} height={window.innerHeight} ref={stageRef} >
      <Layer>
        <Group draggable>
          <Rectangle inputs={inputs} months={months} onMouseOver={onMouseOver} />
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
          <Text text="Months of a year --->" fontSize={15} x={400} y={550} />
          <Text text="Expenditure per month  --->" fontSize={15} x={150} y={350} rotation={-90} />
        </Group>
      </Layer>
      <Tooltip />
    </Stage>
  );
}

export default App;