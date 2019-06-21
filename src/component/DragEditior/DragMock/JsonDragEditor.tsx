import React, {Fragment} from 'react'
import SourceBox from './SourceBox'
// import TargetBox from './TargetBox'
import DdTypes from './DdTypes'

export default function Container() {
    const kk={JSONdragEditorSourceBox:true}
    return (
        <Fragment>
            <div>
                9999333
            </div>
            <div style={{overflow: 'hidden', clear: 'both', margin: '-.5rem'}}>

                {/*<div style={{float: 'left', width: '50%'}}>*/}
                {/*    <TargetBox/>*/}
                {/*</div>*/}
                <div style={{float: 'left'}}>
                    <SourceBox ddtype={DdTypes.TEXT} json={kk}>this is TEXT</SourceBox>
                    {/*<SourceBox color={DdTypes.PIC}/>*/}
                    {/*<SourceBox color={DdTypes.LABEL}/>*/}
                </div>

            </div>
        </Fragment>
    )
}
