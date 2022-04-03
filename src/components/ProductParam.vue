<template>
    <!-- 动态绑定一个class样式 -->
    <div class="nav-bar" v-bind:class="{'is-fixed':isFixed}">
         <div class="container">
             <div class="pro-title">
                 小米cc9
             </div>
             <div class="pro-param">
                 <a href="javascript:;">概述</a><span>|</span>
                 <a href="javascript:;">参数</a><span>|</span>
                 <a href="javascript:;">用户评价</a>
                 <!-- 插槽 -->
                 <slot name="buy">

                 </slot>
             </div>
         </div>
    </div>
</template>
<script>
    export default{
        name: 'nav-bar',
        data() {
            return  {
                isFixed: false
            }
        },
        //钩子函数，操控DOM节点
        mounted() {
            // 如果是window.addEventListener('scroll',function(){})，组件无法通过事件销毁
            window.addEventListener('scroll',this.initHeight);
        },
        methods: {
            initHeight() {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                this.isFixed = scrollTop>152?true:false;
            }
        },
        //组建的销毁，页面消失的时候组件也销毁
        destroyed() {
            // 处理方式：true:捕获 false：冒泡
            window.removeEventListener('scroll',this.initHeight,);
        }
    }
</script>
<style lang="scss">
    @import './../assets/scss/mixin.scss';
    @import './../assets/scss/config.scss';
    .nav-bar {
        height: 70px;
        line-height: 70px;
        border-top: 1px solid $colorH;
        background-color: &colorG;
        &.is-fixed {
            position: fixed;
            top: 0;
            box-shadow: 0 5px 5px $colorE;
            width: 100%; //改变宽度，原来只有1226px，现在改成通栏
        }
        .container {
            @include flex();
            .pro-title {
                font-size: $fontH;
                color: $colorB;
                font-weight: bold;
            }
            .pro-param {
                font-size: $fontJ;
                span {
                    margin: 0 10px;
                }
                a {
                    color: $colorC;
                }
            }
        }
    }
</style>