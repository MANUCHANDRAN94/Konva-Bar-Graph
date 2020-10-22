import React, { Fragment } from "react";
import { Text } from "react-konva";

const ScaleValues = ({
    i,
    dataSet,
    graphWidth,
    graphHeight,
    topValue,
    padding,
    months,
    xScale,
}) => {


    return (
        <Fragment key={i}>
            <Text
                key={-i - 1}
                text={
                    i < dataSet.length
                        ? i *
                        Math.ceil(
                            (Math.ceil(topValue / 10) * 12) / Math.floor(dataSet.length)
                        )
                        : null
                }
                fontSize={graphHeight > 300 ? 15 : 10}
                x={padding}
                y={
                    graphHeight -
                    padding -
                    15 -
                    i * ((graphHeight - padding) / dataSet.length)
                }
                visible={dataSet.length < 5 || graphWidth > 100}
            />
            <Text
                key={-i - dataSet.length}
                text={months[i]}
                fontSize={graphWidth > 300 ? 15 : 10}
                x={30 + padding + i * xScale}
                y={graphHeight - padding / 1.1}
                visible={dataSet.length < 5 || graphWidth > 100}
            />
        </Fragment>
    );
};

export default ScaleValues;
