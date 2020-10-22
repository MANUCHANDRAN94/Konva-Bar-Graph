import React, { useRef, useState, useEffect } from "react";
import { Text, Arrow, Group, Transformer } from "react-konva";
import Rectangle from "./components/Rectangle";
import ScaleValues from "./components/ScaleValues";
import Tooltip from "./components/Tooltip";

const App = ({ shapeProps, isSelected, onSelect, onChange }) => {
  // ! These values should be passed as props
  /* -------------------------------------------------------------------------- */
  let inputs = [12, 13, 8, 30, 20, 28];
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
  let graphWidth = shapeProps.width;
  let graphHeight = shapeProps.height;
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

  };
  /* -------------------------------------------------------------------------- */

  // let groupRef = useRef();
  const shapeRef = useRef();
  const trRef = useRef();
  const [chartDetails, setChartDetails] = useState(initialValues);
  const [toolTip, setToolTip] = useState({
    active: false,
    x: null,
    y: null,
    msg: null,
  })

  /* --------------------------------- Methods -------------------------------- */

  useEffect(() => {
    if (isSelected) {
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
    }
    setChartDetails(prev => {
      return {
        ...prev,

      }
    })
  }, [isSelected, shapeProps]);

  const onMouseOver = (e) => {
    // groupRef.current.findOne(Layer).children[0].cache();
    // console.log(groupRef.current.getStage().getPointerPosition().x);
    setToolTip((prev) => {
      return {
        active: true,
        x: e.target.position().x,
        y: e.target.position().y,
        msg: `Month: ${chartDetails.horiArrow.label[e.target.name()]
          } \n Value:${chartDetails.dataSet[e.target.name()]}`,
      };
    });
  };
  const onMouseOut = (e) => {
    setToolTip((prev) => {
      return {
        active: false,
        x: null,
        y: null,
        msg: null,
      };
    });
  };

  /* -------------------------------------------------------------------------- */

  /* --------------------------------- Return --------------------------------- */
  return (
    <React.Fragment>
      <Group
        onClick={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={e => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y()
          });
        }}
        onTransformEnd={e => {
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY)
          });
        }}
        onDragStart={onMouseOut}
      // ref={groupRef}
      >
        <Group >
          {chartDetails.dataSet.map((rect, idx) => (
            <Rectangle
              graphHeight={chartDetails.graphHeight}
              padding={chartDetails.padding}
              xScale={chartDetails.xScale}
              yScale={chartDetails.yScale}
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
            text={chartDetails.graphHeight > 100 ? chartDetails.horiArrow.desc : null}
            fontSize={chartDetails.horiArrow.fontSize}
            x={chartDetails.horiArrow.xAxis}
            y={chartDetails.horiArrow.yAxis}
            rotation={chartDetails.horiArrow.direction}
          />
          <Text
            text={chartDetails.graphWidth > 100 ? chartDetails.vertArrow.desc : null}
            fontSize={chartDetails.vertArrow.fontSize}
            x={chartDetails.vertArrow.xAxis}
            y={chartDetails.vertArrow.yAxis}
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


        {/* ---------------  Tooltip Group  --------------- */}
        {toolTip.active && (
          <Tooltip
            x={toolTip.x}
            y={toolTip.y}
            msg={toolTip.msg}
          />
        )}
      </Group>
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 150 || newBox.height < 150) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </React.Fragment>
  );
};

export default App;
