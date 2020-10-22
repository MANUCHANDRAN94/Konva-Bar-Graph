import React, { useRef, useState } from 'react';
import { Stage, Layer, Text, Arrow, Group } from 'react-konva';
import Rectangle from './components/Rectangle';
import Tooltip from './components/Tooltip';

const App = () => {
  let inputs = [12, 13, 8, 30, 11, 23, 35, 13, 9, 17, 20, 28];
  let months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jly', 'aug', 'sep', 'oct', 'nov', 'dec'];
  let topValue = Math.max(...inputs);
  let graphWidth = 300;
  let graphHeight = 200;
  let padding = graphWidth / 25;
  let xScale = (graphWidth - 2 * padding) / inputs.length;
  let yScale = (graphHeight - 2 * padding) / Math.floor(topValue);

  let stageRef = useRef();

  let initialValues = {
    graphCoordX: 0,
    graphCoordY: 0,
    graphWidth,
    graphHeight,
    padding,
    backgroundColor: "yellow",
    line: {
      x: padding + 20,
      y: graphHeight - padding,
      stroke: "black"
    },
    vertArrow: {
      linePoints: [0, 0, 0, -topValue * yScale - padding],
      desc: "Months of a year --->",
      fontSize: (graphWidth > 300 ? 15 : 12),
      xAxis: graphWidth / 3,
      yAxis: graphHeight,
      label: null
    },
    horiArrow: {
      linePoints: [0, 0, graphWidth - padding / 4, 0],
      desc: "Expenditure per month  --->",
      fontSize: (graphHeight > 300 ? 15 : 12),
      xAxis: 0,
      yAxis: (graphWidth > 300 ? graphHeight / 1.7 : graphHeight / 1.3),
      direction: -90,
      label: months
    },
    dataSet: inputs,
    topValue,
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
        <Group draggable height={chartDetails.graphHeight} width={chartDetails.graphWidth} x={chartDetails.graphCoordX} y={chartDetails.graphCoordY} onDragStart={onMouseOut}>
          <Rectangle graphWidth={chartDetails.graphWidth} graphHeight={chartDetails.graphHeight}
            padding={chartDetails.padding} inputs={chartDetails.dataSet} topValue={topValue} xScale={xScale} yScale={yScale}
            months={chartDetails.horiArrow.label} onMouseOver={onMouseOver}
            onMouseOut={onMouseOut} />
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
          <Text text={chartDetails.vertArrow.desc} fontSize={chartDetails.vertArrow.fontSize} x={chartDetails.vertArrow.xAxis} y={chartDetails.vertArrow.yAxis} align="center" />
        </Group>
        {chartDetails.toolTip.active && <Tooltip x={chartDetails.toolTip.x} y={chartDetails.toolTip.y} msg={chartDetails.toolTip.msg} />}
      </Layer>
    </Stage>
  );
}

export default App;