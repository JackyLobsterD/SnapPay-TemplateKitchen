import * as React from 'react'
import '../../index.css'
import './index.css'
import { Col, Row } from "antd";
// @ts-ignore
import { JsonEditor } from 'jsoneditor-react'
import 'jsoneditor-react/es/editor.min.css'

interface PageProps {
    inputJson:any,
    onChange:any
}

interface PageStates {
    jsonData: object
}

export default class JEditor extends React.Component<PageProps, PageStates> {
    private editor1: any;
    private editor2: any;

    constructor(props: Readonly<PageProps>) {
        super(props);
        const jsonData= this.props.inputJson;
        this.state = {
            jsonData: jsonData
        }
        this.props.onChange(this.state.jsonData)
    }

    set1EditorRef = (instance: any) => this.editor1 = instance;
    set2EditorRef = (instance: any) => this.editor2 = instance;
    editorChangeHandler1 = (jsonData: any) => {
        this.setState({jsonData});
        this.editor2.jsonEditor.set(jsonData);
        this.props.onChange(this.state.jsonData)
    };

    editorChangeHandler2 = (jsonData: any) => {
        this.setState({jsonData});
        this.editor1.jsonEditor.set(jsonData);
        this.props.onChange(this.state.jsonData)
    };

    render() {
        const {jsonData} = this.state;
        const {Fragment}=React;
        return (
            <Fragment>
                <Row gutter={10}>
                    <Col span={12}>
                        <JsonEditor
                            ref={this.set1EditorRef}
                            mode={'tree'} value={jsonData}
                            onChange={this.editorChangeHandler1}/>
                    </Col>
                    <Col span={12} style={{height: '500px'}}>
                        <JsonEditor
                            ref={this.set2EditorRef}
                            mode={'code'} value={jsonData}
                            onChange={this.editorChangeHandler2}
                            style={{height: '100%'}}/>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}

