import withDragDropContext from './withDragDropContext';
import JsonDragEditor from './JsonDragEditor'
import React, { Fragment } from 'react'
import SourceBox from './SourceBox'
import TargetBox from './TargetBox'
import DdTypes from './DdTypes'

interface PageProps {
}

interface PageStates {
}

class DragEditor extends React.Component<PageProps, PageStates> {
    constructor(props: Readonly<PageProps>) {
        super(props);
    }

    render() {
        const kk = {JSOx: 1};
        const kk2 = {JSOx: 2};
        const kk3 = {MNx:3};

        return (
            <Fragment>
                <div style={{overflow: 'hidden', clear: 'both', margin: '-.5rem'}}>
                    <div style={{float: 'left', width: '50%'}}>
                        <TargetBox/>
                    </div>
                    <div style={{float: 'left'}}>
                        <SourceBox ddtype={DdTypes.TEXT} json={kk}>this is TEXT</SourceBox>
                        <SourceBox ddtype={DdTypes.PIC} json={kk2}>this is PIC</SourceBox>
                        <SourceBox ddtype={DdTypes.LABEL} json={kk3}>this is LABEL</SourceBox>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default withDragDropContext(DragEditor)
