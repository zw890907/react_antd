import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { Provider } from 'react-redux'
import store from './store'
import '@/common/style/frame.less'

const Apps = (
    <ConfigProvider locale={zhCN}>
        <Provider store={store}>
            <App />
        </Provider>
    </ConfigProvider>
)

ReactDOM.render(
    Apps,
    document.getElementById('root')
);
