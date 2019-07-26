import Vue from 'vue';
import Router from 'vue-router';
import {isLogin} from '@/utils/auth';
Vue.use(Router);

const layout = r => require.ensure([], ()=>r(require('@/components/layout')), 'layout');
const home = r => require.ensure([], ()=>r(require('@/page/home')), 'home');
const userlist = r => require.ensure([], ()=>r(require('@/page/userlist')), 'userlist');
const userdetail = r => require.ensure([], ()=>r(require('@/page/userDetail')), 'userdetail');
const custom = r => require.ensure([], ()=>r(require('@/page/custom')), 'custom');
const chart = r => require.ensure([], ()=>r(require('@/page/chart')), 'chart');
const device = r => require.ensure([], ()=>r(require('@/page/device/index')), 'device');
const deviceDetail = r => require.ensure([], ()=>r(require('@/page/device/detail')), 'deviceDetail');



const router = new Router({
    routes:[
        {path: '/login', name: 'login', component: resolve => require(['@/page/login.vue'],resolve)},

        {
            path: '/',
            component : layout,
            redirect: '/home',
            meta : {title : '首页'},
            children:[
             {
                 path:'home',
                 name : 'home',
                 component: home,
                 meta : {title : '首页'},
             },
             {
                path:'chart',
                name : 'chart',
                component: chart,
                meta : {title : '绘图'},
             },
             {
                path:'userlist',
                name: 'userlist',
                component: userlist,
                meta:{title: '用户列表'}
            },
            {
                path:'userdetail',
                name: 'userdetail',
                component: userdetail,
                meta:{title: '用户详情'}
            },
            {
                path:'custom',
                name:'Custom',
                component: custom,
                meta:{title: '自定义组件'}
            },
            {
                path:'device',
                name:'Device',
                component: device,
                meta:{title: '设备列表'}
            },
            {
                path:'detail',
                name:'Detail',
                component: deviceDetail,
                meta:{title: '设备详情'}
            },
           
         ]
        }
    ]
})





// router.beforeEach((to, from, next) => {
//     // to and from are both route objects. must call `next`.
//     if(to.name === 'login'){
//         if(isLogin()){
//             router.push({name : 'home'})
//         }
//     }else{
//         if(!isLogin()){
//             router.push({name: 'login'})
//         }
//     }
//     next();
// })

export default router;