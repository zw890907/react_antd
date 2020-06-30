/** 
 * 路由懒加载
*/
import React from 'react';
import Loadable from 'react-loadable';

export default (loader) => {
    return Loadable({
        loader,
        loading() {
            return <div>正在加载...</div>
        },
    });
}