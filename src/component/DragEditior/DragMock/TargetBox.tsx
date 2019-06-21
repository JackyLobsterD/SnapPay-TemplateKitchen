import React, { useCallback, useState } from 'react'
import { useDrop } from 'react-dnd'
import DdTypes from './DdTypes'
import { DragItem } from './interfaces'

const style: React.CSSProperties = {
    border: '1px solid gray',
    height: 'auto',
    width: '100%',
    padding: '2rem',
    textAlign: 'center',
    clear:'both'

};

export interface TargetBoxProps {
    onDrop: (item: any, item2: any) => void,
    content?: string | null,
    jsonComponentArray: Array<object>
}


const TargetBox: React.FC<TargetBoxProps> = ({onDrop, content, jsonComponentArray}) => {
    const [{isOver}, drop] = useDrop({
        accept: [DdTypes.TEXT, DdTypes.PIC, DdTypes.LABEL],
        drop(item: DragItem, monitor) {
            // const didDrop = monitor.didDrop()
            onDrop(item.type, item.json);
            return undefined
        },
        collect: monitor => ({
            isOver: monitor.isOver(),
            // canDrop: monitor.canDrop(),
            draggingColor: monitor.getItemType() as string,
        }),
    });
    let backgroundColor = isOver? 'blue':'#fff';

    return (
        <div ref={drop} style={{...style, backgroundColor}}>
            <p>Drop here. {content}</p>
            {jsonComponentArray.map((item, key)=>{
                return (
                    <p key={key}>{JSON.stringify(item)}</p>
                )
            })}
        </div>
    )
};


const StatefulTargetBox: React.FC = props => {
    const [content, setContent] = useState<string | null>(null);
    const [jsonComponentArray=[], setJsonComponentArray] = useState<Array<object>>([]);
    const handleDrop = useCallback(
        (color: string, jsonComponent:object) => {
            setContent(color);
            let jsonComponentArrayTemp= jsonComponentArray
            jsonComponentArrayTemp.push(jsonComponent)
            setJsonComponentArray(jsonComponentArrayTemp)

        },
        [],
    );

    return (
        <TargetBox
            {...props}
            onDrop={handleDrop}
            content={content}
            jsonComponentArray={jsonComponentArray}
        />
    )
};

export default StatefulTargetBox
