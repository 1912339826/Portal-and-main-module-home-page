import Vue from 'vue'
import Router from 'vue-router'

// 信息门户
import portalIndex from '../pages/portal/index'
// 综合管理平台
import synthesizeIndex from '../pages/synthesize/index'
// 点击综合态势
import synthesizePosture from '../pages/synthesize/posture/index'
// 这是一个三级页面的例子页面
import synthesizePostureThreeLV from '../pages/synthesize/posture/threeLV/index'
// 智慧管理
import witManageIndex from '../pages/witmanage/index'
// 智慧安防
import witsecurityIndex from '../pages/witsecurity/index'
// 智慧保障
import witsafeguardIndex from '../pages/witsafeguard/index'
// 资源管理平台
import authorityIndex from '../pages/authority/index'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/portalIndex'
    },
    {
        path: '/portalIndex',
        name: 'portalIndex',
        component: portalIndex
    },
    {
        path: '/synthesizeIndex',
        name: 'synthesizeIndex',
        component: synthesizeIndex
    },
    {
        path: '/witManageIndex',
        name: 'witManageIndex',
        component: witManageIndex
    },
    {
        path: '/witsecurityIndex',
        name: 'witsecurityIndex',
        component: witsecurityIndex
    },
    {
        path: '/witsafeguardIndex',
        name: 'witsafeguardIndex',
        component: witsafeguardIndex
    },
    {
        path: '/authorityIndex',
        name: 'authorityIndex',
        component: authorityIndex
    },
    {
        path: '/synthesizeIndex/synthesizePosture',
        name: 'synthesizePosture',
        component: synthesizePosture
    },
    {
        path: '/synthesizeIndex/synthesizePosture/synthesizePostureThreeLV',
        name: 'synthesizePostureThreeLV',
        component: synthesizePostureThreeLV
    }
    ]
})