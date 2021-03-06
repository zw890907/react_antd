import * as constants from './contants'
import { fromJS } from 'immutable'

// 初始默认的state
const defaultState = fromJS({
    myData: null,
    appList: []
})

const getData = (state, action) => {
    return state.set('myData', action.data)
}

const getAppList = (state, action) => {
    // debugger
    return state.set('appList', action.data)
}

export default (state = defaultState, action) => {
    // 由于state是引用型，不能直接修改，否则是监测不到state发生变化的。因此需要先复制一份进行修改，然后再返回新的state。
    switch(action.type) {
        case constants.GET_DATA:
            return getData(state, action)
        case constants.GET_APP_LIST:
            return getAppList(state, action)
        default:
            return state
    }
}
