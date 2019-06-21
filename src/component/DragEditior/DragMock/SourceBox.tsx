import React, { useState, useCallback, useMemo } from 'react'
import { useDrag, DragSourceMonitor } from 'react-dnd'
import DdTypes from './DdTypes'

const style: React.CSSProperties = {
    border: '1px dashed gray',
    padding: '0.5rem',
    margin: '0.5rem',
}

export interface SourceBoxProps {
    ddtype?: string,
    json:any
}

const SourceBox: React.FC<SourceBoxProps> = ({ddtype, json, children}) => {
    // console.log(json)
    const [{isDragging}, drag] = useDrag({
        item: {type: `${ddtype}`, json: json},
        collect: (monitor: DragSourceMonitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    console.log({isDragging})
    const containerStyle = useMemo(
        () => ({
            ...style,
            opacity: isDragging ? 0.4 : 1,
            cursor: 'move',
        }),
        [isDragging],
    )

    return (
        <div ref={drag} style={containerStyle}>
            {children}
        </div>
    )
}

export default SourceBox
