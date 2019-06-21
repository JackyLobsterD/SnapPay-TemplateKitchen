import * as React from 'react'
import '../../index.css'
import './index.css'
import DragDemo from './DragDemo'
import DragMock from './DragMock'


import { Col, Row } from "antd";
interface PageProps {
    inputJson: any,
    onChange: any
}

interface PageStates {
    jsonData: object
}

export default class DragEditor extends React.Component<PageProps, PageStates> {
    constructor(props: Readonly<PageProps>) {
        super(props);
        const jsonData = this.props.inputJson;
        this.state = {
            jsonData: jsonData
        }
        this.props.onChange(this.state.jsonData)
    }

    render() {
        const {jsonData} = this.state;
        return (
            <React.Fragment>
                <p>this is drag editor</p>
                <p>{JSON.stringify(jsonData)}</p>
                <div>
                    {/*<DragDemo/>*/}
                </div>
                <div>
                    <DragMock/>
                </div>
            </React.Fragment>
        )
    }
}

