import React, { useRef } from 'react';
import { Stage, Layer, Text, Arrow, Group } from 'react-konva';
import Rectangle from './components/Rectangle';

const App = () => {
  let inputs = [12, 13, 8, 30, 11, 23, 35, 13, 9, 17, 20, 28];
  let months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jly', 'aug', 'sep', 'oct', 'nov', 'dec'];
  let topValue = Math.max(...inputs);
  var mousePos
  const onMouseOver = (e) => {
    // var mousePos = stateRef.current;
    // let tooltip = Stage.findOne('.tooltip');
    console.log("mousePos");
    // tooltip.position({
    //   x: mousePos.x + 5,
    //   y: mousePos.y + 5,
    // });
    // tooltip.text('Cyan Triangle');
    // tooltip.show();
    // Layer.batchDraw();
  }
  // const onMouseOut = () => {

  // }

  return (
    <Stage width={window.innerWidth} height={window.innerHeight} id="stage" >
      <Layer>
        <Group draggable width={100} height={100}>
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
      <Layer class="tooltipLayer">
        <Text
          class="tooltip"
          text=''
          fontFamily='Calibri'
          fontSize={12}
          padding={5}
          textFill='white'
          fill='black'
          alpha={0.75}
          visible={false}
        />
      </Layer>
    </Stage>
  );
}

export default App;