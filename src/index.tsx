import * as React from 'react'
import JEditor from './component/JsonEditor'
import DragEditor from './component/DragEditior'
import { Dropdown, Icon, Menu } from "antd";

interface PageProps {
    inputJson: any,
    handleValue: any,
}

interface PageStates {
    viewNum: number
}

class Index extends React.Component <PageProps, PageStates> {
    constructor(props: Readonly<PageProps>) {
        super(props)
        this.state = {
            viewNum: 1
        }
    }

    switchView(val: number) {
        this.setState({
            viewNum: val
        })
    }

    render() {
        const {inputJson} = this.props;
        const {Fragment} = React;
        const menu = (
            <Menu>
                <Menu.Item>
                    <a onClick={() => this.switchView(1)}>111</a>
                </Menu.Item>
                <Menu.Item>
                    <a onClick={() => this.switchView(2)}>222</a>
                </Menu.Item>
            </Menu>
        )
        return (
            <Fragment>
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" href="#">
                        Change View <Icon type="down"/>
                    </a>
                </Dropdown>
                {
                    this.state.viewNum === 1 && (
                        <DragEditor inputJson={inputJson} onChange={this.props.handleValue.bind(this)}/>
                    )
                }
                {
                    this.state.viewNum === 2 && (
                        <JEditor inputJson={inputJson} onChange={this.props.handleValue.bind(this)}/>
                    )
                }
                起始值(InputJson):{JSON.stringify(this.props.inputJson)}
            </Fragment>
        );
    }
}

export default Index;
