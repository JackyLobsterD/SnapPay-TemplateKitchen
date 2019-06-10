import * as React from 'react'
import JEditor from './component/JsonEditor'


interface PageProps {
    inputJson:any,
    handleValue:any
}

interface PageStates {
}

class Index extends React.Component <PageProps, PageStates>{
    constructor(props: Readonly<PageProps>) {
        super(props)
        this.state={
        }
    }
    render() {
        const {inputJson}=this.props;

        return (
            <React.Fragment>
                <JEditor inputJson={inputJson} onChange={this.props.handleValue.bind(this)}/>
                起始值(InputJson):{JSON.stringify(this.props.inputJson)}
            </React.Fragment>
        );
    }
}

export default Index;
