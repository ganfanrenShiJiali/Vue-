<template>
    <div class="nav-bar">
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
        name: 'nav-bar'
    }
</script>
<style lang="scss">
    @import './../assets/scss/mixin.scss';
    @import './../assets/scss/config.scss';
    .nav-bar {
        height: 70px;
        line-height: 70px;
        border: 1px solid $colorH;
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