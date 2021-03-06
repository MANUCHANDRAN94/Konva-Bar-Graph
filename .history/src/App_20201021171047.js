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
    graphCoordX: 0,
    graphCoordY: 0,
    graphWidth: window.innerWidth,
    graphHeight: window.innerHeight,
    padding: 60,
    backgroundColor: "yellow",
    line: {
      x: 60,
      y: window.innerHeight - 50,
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
      label: months
    },
    dataSet: inputs,
    topValue: Math.max(...inputs),
    toolTip: {
      active: false,
      x: null,
      y: null,
      msg: null
    }
  }

  const [chartDetails, setChartDetails] = useState(initialValues);


  const onMouseOver = (e) => {
    stageRef.current.findOne(Layer).children[0].cache();
    // console.log(stageRef.current.findOne(Layer).children[0]);
    setChartDetails(prev => {
      return {
        ...prev,
        toolTip: {
          active: true,
          x: stageRef.current.getPointerPosition().x,
          y: stageRef.current.getPointerPosition().y,
          msg: `Month: ${months[e.target.name()]} \n Value:${inputs[e.target.name()]}`
        }
      }
    })
  }
  const onMouseOut = (e) => {
    setChartDetails(prev => {
      return {
        ...prev,
        toolTip: {
          active: false,
          x: null,
          y: null,
          msg: null
        }
      }
    })

  }

  return (
    <Stage width={window.innerWidth} height={window.innerHeight} ref={stageRef} >
      <Layer class="graphLayer">
        <Group draggable height={chartDetails.graphHeight} width={chartDetails.graphWidth} x={chartDetails.graphCoordX} y={chartDetails.graphCoordY} >
          <Rectangle graphWidth={chartDetails.graphWidth} graphHeight={chartDetails.graphHeight} padding={chartDetails.padding} inputs={chartDetails.dataSet} months={chartDetails.horiArrow.label} onMouseOver={onMouseOver} onMouseOut={onMouseOut} />
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
          <Text text={chartDetails.horiArrow.desc} fontSize={chartDetails.horiArrow.fontSize} x={chartDetails.horiArrow.xAxis} y={chartDetails.horiArrow.yAxis} rotation={chartDetails.horiArrow.direction} />
          <Text text={chartDetails.vertArrow.desc} fontSize={chartDetails.vertArrow.fontSize} x={chartDetails.vertArrow.xAxis} y={chartDetails.vertArrow.yAxis} />
        </Group>
        {chartDetails.toolTip.active && <Tooltip x={chartDetails.toolTip.x} y={chartDetails.toolTip.y} msg={chartDetails.toolTip.msg} />}
      </Layer>
    </Stage>
  );
}

export default App;