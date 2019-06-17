import React from 'react'
import SourceBox from './SourceBox'
// import TargetBox from './TargetBox'
import DdTypes from './DdTypes'

export default function Container() {
    return (
        <>
            <div style={{overflow: 'hidden', clear: 'both', margin: '-.5rem'}}>

                {/*<div style={{float: 'left', width: '50%'}}>*/}
                {/*    <TargetBox/>*/}
                {/*</div>*/}
                <div style={{float: 'left'}}>
                    <SourceBox color={DdTypes.TEXT}/>
                    <SourceBox color={DdTypes.PIC}/>
                    <SourceBox color={DdTypes.LABEL}/>
                </div>

            </div>
        </>
    )
}
