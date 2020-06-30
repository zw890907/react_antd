import * as contants from './contants';
// import request from '@/utils/request';
import axios from 'axios';

export const getData = data => ({
    type: contants.GET_DATA,
    data
})

export const getAppList = (data) => {
    return (dispatch) => {
        // request.get('/api/api/tab/2?start=0').then((res)=>{
        axios({
            method: 'get',
            url: '/v2/tab/2?start=0',
            // url: '/v2/web/application/getAppList',
            // data: data
        }).then((res)=>{
            // debugger
            const action = {
                type: contants.GET_APP_LIST,
                data: res.data
            }
            dispatch(action)
            // return action
        }).catch((err)=>{
            console.log(err)
        })
    }
}