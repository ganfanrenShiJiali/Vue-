//头部组件、底部组件
<template>
    <div>
        <nav-header></nav-header>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
    import NavHeader from './../components/NavHeader'
    import NavFooter from './../components/NavFooter'
    export default {
        name: 'nav-home', //组件名称或者页面名称，加载组件引用的值
        components: { //加载多个组件
            NavHeader,
            NavFooter
        }
    }
</script>