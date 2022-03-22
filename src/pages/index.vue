<template>
    <div>
        <service-bar></service-bar>
    </div>
</template>
<script>
    import ServiceBar from './../components/ServiceBar'
    export default {
        name: 'index', //组件名称或者页面名称，加载组件引用的值
        components: { //加载多个组件
            ServiceBar
        }
    }
</script>