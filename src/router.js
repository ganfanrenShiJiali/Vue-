//承载路由
import Vue from 'vue'
import Router from 'vue-router' //引入组件，组件首字母大写
import Home from './pages/home'
import Login from './pages/login'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderConfirm from './pages/orderConfirm'
import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'
import AliPay from './pages/aliPay'


Vue.use(Router); //通过vue的方式加载插件

export default new Router({ //导出
    routes: [ //路由列表
        {
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/index', //重定向
            children: [{
                path: '/index',
                name: 'index',
                component: Index,
            }, {
                path: '/product/:id', //动态定义路由
                name: 'product',
                component: Product,
            }, {
                path: '/detail/:id',
                name: 'detail',
                component: Detail,
            }]
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/order',
            name: 'order',
            component: Order,
            children: [{
                    path: 'list',
                    name: 'order-list',
                    component: OrderList,
                },
                {
                    path: 'confirm',
                    name: 'order-confirm',
                    component: OrderConfirm,
                },
                {
                    path: 'pay',
                    name: 'order-pay',
                    component: OrderPay,
                },
                {
                    path: 'alipay',
                    name: 'alipay',
                    component: AliPay,
                }
            ]
        }
    ]
});