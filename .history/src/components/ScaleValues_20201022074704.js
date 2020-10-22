import React from 'react'

const ScaleValues = ({ i }) => {
    return (
        <Fragment key={i}>
            <Text key={-i - 1} text={i < chartDetails.dataSet.length ? i * Math.ceil(Math.ceil(chartDetails.topValue / 10) * 12 / Math.floor(chartDetails.dataSet.length)) : null} fontSize={chartDetails.graphHeight > 300 ? 15 : 10} x={chartDetails.padding} y={chartDetails.graphHeight - chartDetails.padding - 15 - i * ((chartDetails.graphHeight - chartDetails.padding) / (chartDetails.dataSet.length))} visible={chartDetails.dataSet.length < 5 || chartDetails.graphWidth > 200} />
            <Text key={-i - chartDetails.dataSet.length} text={chartDetails.horiArrow.label[i]} fontSize={chartDetails.graphWidth > 300 ? 15 : 10} x={30 + chartDetails.padding + i * chartDetails.xScale} y={chartDetails.graphHeight - chartDetails.padding / 1.1} visible={chartDetails.dataSet.length < 5 || chartDetails.graphWidth > 200} />
        </Fragment>
    )
}

export default ScaleValues
