import * as actions from './action'
import * as mutations from './mutations'

const state = {
    _username: 'Adminester', // 用户名
    _examList: [
        {
            name: '18-19学年第一学期期末考试 ',
            grade: '高二',
            time: '2019-01-23',
        },
        {
            name: ' 18-19学年第一学期期中考试',
            grade: '高二',
            time: '2018-11-8',
        }, {
            name: ' 17-18学年第二学期期末考试 ',
            grade: '高一',
            time: '2018-07-05',
        },
        {
            name: ' 17-18学年第二学期期中考试 ',
            grade: '高一',
            time: '2018-05-02',
        }
    ]// 考试列表
};


export default {
    namespaced: true,
    state,
    mutations,
    actions
}
