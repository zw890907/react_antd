import React, { Component } from 'react';
import {
    Button
} from 'antd';
import Header from '@/components/header'
import './index.less';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state={

        }
        this.isNeed=false
    }

    goHome = () => {
        this.props.history.push('/home')
    }

    render() {
        return (
            <div className="P-login">
                <Header />
                <h1 className="f20 tl">Login page</h1>
                <Button type="primary" onClick={this.goHome}>跳转首页</Button>
            </div>
        )
    }
}

export default Login
