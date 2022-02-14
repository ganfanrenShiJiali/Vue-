//头部组件、底部组件
<template>
    <div>
        <order-header></order-header>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
    import OrderHeader from './../components/OrderHeader'
    import NavFooter from './../components/NavFooter'
    export default {
        name: 'order', //组件名称或者页面名称，加载组件引用的值
        components: {
            OrderHeader,
            NavFooter
        }
    }
</script>