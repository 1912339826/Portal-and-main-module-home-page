import Vue from 'vue'
import Router from 'vue-router'

// 信息门户
import portalIndex from '../pages/portal/index'
// 综合管理平台
import synthesizeIndex from '../pages/synthesize/index'
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
        redirect: '/authorityIndex'
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
    }
    ]
})