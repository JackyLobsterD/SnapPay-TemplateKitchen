import * as React from 'react'

import Example from './example'
import withDragDropContext from './withDragDropContext';

import { useState } from 'react';

function Example2() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

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
                <Example2/>
            </React.Fragment>
        )
    }
}

export default withDragDropContext(DragEditor)
