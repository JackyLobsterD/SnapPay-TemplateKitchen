import * as React from 'react'

import Example from './example'
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
                <Example/>
            </React.Fragment>
        )
    }
}

export default withDragDropContext(DragEditor)
