//购物车界面
<template>
    <div>
        <order-header></order-header>
        cart
        <nav-footer></nav-footer>
    </div>
</template>
<script>
    import OrderHeader from './../components/OrderHeader'
    import NavFooter from './../components/NavFooter'
    export default {
        name: 'cart', //组件名称或者页面名称，加载组件引用的值
        components: {
            OrderHeader,
            NavFooter
        }
    }
</script>