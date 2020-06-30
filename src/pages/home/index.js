import React, { Component } from 'react';
import {
    Button
} from 'antd';
import { connect } from 'react-redux';
// import * as actionCreators from './store/actionCreators'
import './index.less';
class Home extends Component {

    goLogin = () => {
        this.props.history.push('/login')
    }

    getData(data) {
        this.props.getData(data)
    }

    getAppList = () => {
        this.props.getAppList({type: 10})
    }
    render() {
        return (
            <div className="P-home">
                <h1>Home page</h1>
                <Button type="primary" onClick={this.goLogin}>跳转登录</Button>
                <Button type="primary" onClick={this.getData.bind(this, '999')} danger>获取数据</Button>
                <p>home: myData = {this.props.myData}</p>
                <Button type="primary" onClick={this.getAppList} shape="round">列表</Button>
                <p>{this.props.appList.categoryValue}</p>
            </div>
        )
    }
}

// 把store中的数据映射到组件的props
// const mapStateToProps = (state) => ({
//     myData: state.getIn(['home', 'myData']),
//     appList: state.getIn(['home', 'appList']),
// })

// 把store的Dispatch映射到组件的props
// const mapDispatchToProps = (dispatch) => ({
//     getData(data) {
//         const action = actionCreators.getData(data)
//         dispatch(action)
//     },
//     getAppList(data) {
//         const action = actionCreators.getAppList(data)
//         dispatch(action)
//     }
// })

const mapStateToProps = (state) => ({
    appList: state.home.appListData,
})

const mapDispatchToProps = (dispatch) => {
    const { home } = dispatch
    return {
        getAppList: home.loadAppListData
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
