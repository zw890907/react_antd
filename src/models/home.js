import { getAppList } from '@/api';
// import { message } from 'antd';
import { saveDataCommon } from '@/utils';

export default {
    state: {
        appListData: {},  //app应用列表数据
    },
    reducers: {
        // setAppListData(state, payload) {
        //     state = JSON.parse(JSON.stringify(state));
        //     state.appListData = payload
        //     return state
        // }
        saveData: saveDataCommon
    },
    effects: {
        // 获取app应用列表
        async loadAppListData(data) {
            try {
                const res = await getAppList(data);
                if(res.status === 200){
                    if(res.data.code === 200) {
                        this.saveData({
                            appListData: res.data.data
                        })
                        // this.setAppListData(res.data.data)
                    }
                    
                }
                return res
            } catch (error) {
                console.error(error);
            }
        },
    }
}