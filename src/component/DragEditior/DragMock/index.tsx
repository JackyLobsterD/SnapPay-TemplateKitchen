import * as React from 'react'

import withDragDropContext from './withDragDropContext';


interface PageProps {
}

interface PageStates {
}

class DragEditor extends React.Component<PageProps, PageStates> {
    constructor(props: Readonly<PageProps>) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div>21312312</div>
            </React.Fragment>
        )
    }
}

export default withDragDropContext(DragEditor)
