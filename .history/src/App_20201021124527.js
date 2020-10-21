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
    line: {
      x: 200,
      y: 500,
      stroke: "black"
    },
    vertArrow: {
      linePoints: [0, 0, 0, topValue * -10 - 80],
      desc: "Months of a year --->",
      fontSize: 15,
      xAxis: 400,
      yAxis: 550,
      label: null
    },
    horiArrow: {
      linePoints: [0, 0, 200 + inputs.length * 28, 0],
      desc: "Expenditure per month  --->",
      fontSize: 15,
      xAxis: 150,
      yAxis: 350,
      direction: -90,
      label: [...months]
    },
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
          <Rectangle inputs={chartDetails.dataSet} months={chartDetails.horiArrow.label} onMouseOver={onMouseOver} />
          <Arrow
            x={chartDetails.line.x}
            y={chartDetails.line.y}
            points={chartDetails.horiArrow.linePoints}
            stroke={chartDetails.line.stroke}
          />
          <Arrow
            x={chartDetails.line.x}
            y={chartDetails.line.y}
            points={chartDetails.vertArrow.linePoints}
            stroke={chartDetails.line.stroke}
          />
          <Text text={chartDetails.horiArrow.desc} fontSize={chartDetails.horiArrow.fontSize} x={chartDetails.horiArrow.xAxis} y={chartDetails.horiArrow.yAxis} />
          <Text text={chartDetails.horiArrow.desc} fontSize={chartDetails.vertArrow.fontSize} x={chartDetails.vertArrow.xAxis} y={chartDetails.vertArrow.yAxis} rotation={-(chartDetails.vertArrow.direction)} />
        </Group>
      </Layer>
      <Tooltip />
    </Stage>
  );
}

export default App;