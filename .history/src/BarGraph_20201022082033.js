import React, { useRef, useState } from "react";
import { Stage, Layer, Text, Arrow, Group } from "react-konva";
import Rectangle from "./components/Rectangle";
import ScaleValues from "./components/ScaleValues";
import Tooltip from "./components/Tooltip";

const App = () => {

  // ! These values should be passed as props
  /* -------------------------------------------------------------------------- */
  let inputs = [12, 13, 8, 30, 11, 23, 35, 13, 9, 17, 20, 28];
  let months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jly",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  let topValue = Math.max(...inputs);
  let graphWidth = 800;
  let graphHeight = 500;
  let padding = graphWidth / 25;
  let xScale = (graphWidth - 2 * padding) / inputs.length;
  let yScale = (graphHeight - 2 * padding) / Math.floor(topValue);

  /* -------------------------------------------------------------------------- */


  /*  ------------------------------ InitialValues ----------------------------- */
  let initialValues = {
    graphCoordX: 0,
    graphCoordY: 0,
    graphWidth,
    graphHeight,
    padding,
    xScale,
    yScale,
    backgroundColor: "yellow",
    line: {
      x: padding + 20,
      y: graphHeight - padding,
      stroke: "black",
    },
    vertArrow: {
      linePoints: [0, 0, 0, -topValue * yScale - padding],
      desc: "Months of a year --->",
      fontSize: graphWidth > 300 ? 15 : 12,
      xAxis: graphWidth / 3,
      yAxis: graphHeight,
      label: null,
    },
    horiArrow: {
      linePoints: [0, 0, graphWidth - padding / 4, 0],
      desc: "Expenditure per month  --->",
      fontSize: graphHeight > 300 ? 15 : 12,
      xAxis: 0,
      yAxis: graphWidth > 300 ? graphHeight / 1.7 : graphHeight / 1.3,
      direction: -90,
      label: months,
    },
    dataSet: inputs,
    topValue,
    toolTip: {
      active: false,
      x: null,
      y: null,
      msg: null,
    },
  };
  /* -------------------------------------------------------------------------- */

  let groupRef = useRef();
  const [chartDetails, setChartDetails] = useState(initialValues);

  /* --------------------------------- Methods -------------------------------- */

  const onMouseOver = (e) => {
    // groupRef.current.findOne(Layer).children[0].cache();
    // console.log(groupRef.current.getStage().getPointerPosition().x);
    setChartDetails((prev) => {
      return {
        ...prev,
        toolTip: {
          active: true,
          x: groupRef.current.getStage().getPointerPosition().x,
          y: groupRef.current.getStage().getPointerPosition().y,
          msg: `Month: ${chartDetails.horiArrow.label[e.target.name()]
            } \n Value:${chartDetails.dataSet[e.target.name()]}`,
        },
      };
    });
  };
  const onMouseOut = (e) => {
    setChartDetails((prev) => {
      return {
        ...prev,
        toolTip: {
          active: false,
          x: null,
          y: null,
          msg: null,
        },
      };
    });
  };
  /* -------------------------------------------------------------------------- */

  /* --------------------------------- Return --------------------------------- */
  return (

    <Group
      draggable
      height={chartDetails.graphHeight}
      width={chartDetails.graphWidth}
      x={chartDetails.graphCoordX}
      y={chartDetails.graphCoordY}
      onDragStart={onMouseOut}
      ref={groupRef}
    >
      {chartDetails.dataSet.map((rect, idx) => (
        <Rectangle
          graphHeight={chartDetails.graphHeight}
          padding={chartDetails.padding}
          xScale={xScale}
          yScale={yScale}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          item={rect}
          i={idx}
          key={idx}
        />
      ))}
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
      <Text
        text={chartDetails.horiArrow.desc}
        fontSize={chartDetails.horiArrow.fontSize}
        x={chartDetails.horiArrow.xAxis}
        y={chartDetails.horiArrow.yAxis}
        rotation={chartDetails.horiArrow.direction}
      />
      <Text
        text={chartDetails.vertArrow.desc}
        fontSize={chartDetails.vertArrow.fontSize}
        x={chartDetails.vertArrow.xAxis}
        y={chartDetails.vertArrow.yAxis}
        align='center'
      />
      {chartDetails.dataSet.map((rect, idx) => (
        <ScaleValues
          key={idx}
          i={idx}
          graphWidth={chartDetails.graphWidth}
          graphHeight={chartDetails.graphHeight}
          dataSet={chartDetails.dataSet}
          topValue={chartDetails.topValue}
          padding={chartDetails.padding}
          months={chartDetails.horiArrow.label}
          xScale={chartDetails.xScale}
        />
      ))}
    </Group>

  {
    chartDetails.toolTip.active && (
      <Tooltip
        x={chartDetails.toolTip.x}
        y={chartDetails.toolTip.y}
        msg={chartDetails.toolTip.msg}
      />
    )
  }

  );
};

export default App;
