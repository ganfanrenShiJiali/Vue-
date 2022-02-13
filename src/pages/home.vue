//头部组件、底部组件
<template>
    <div>
        <nav-header></nav-header>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
    export default {
        name: 'nav-header' //组件名称或者页面名称，加载组件引用的值
    }
</script>