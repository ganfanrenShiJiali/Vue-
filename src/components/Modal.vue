<template>
    <transition name="slide">
        <div class="modal" v-show="showModal">
            <!-- 遮罩 -->
            <div class="mask"></div>
                <!-- 弹框 -->
            <div class="modal-dialog">
                <div class="modal-header">
                    <span>{{title}}</span>
                    <a href="javascript:;" class="icon-close" v-on:click="$emit('cancel')"></a>
                </div>
                <!-- 弹框的主体内容不确定，所以用slot -->
                <div class="modal-body">
                    <slot name="body"></slot>
                </div>
                <div class="modal-footer">
                    <!-- 调用父组件的事件用emit -->
                    <a href="javascript:;" class="btn" v-if="btnType==1" v-on:click="$emit('submit')">{{sureText}}</a>
                    <a href="javascript:;" class="btn" v-if="btnType==2" v-on:click="$emit('cancel')">{{cancelText}}</a>
                    <div class="btn-group" v-if="btnType==3">
                        <a href="javascript:;" class="btn" v-on:click="$emit('submit')">{{sureText}}</a>
                        <a href="javascript:;" class="btn btn-default" v-on:click="$emit('cancel')">{{cancelText}}</a>
                    </div>     
                </div>
            </div>
        </div>
    </transition>
    <!-- v-show做动画 -->
    
</template>
<script>
    export default {
        name: 'modal',
        props: {
            // 指定参数类型
            // 弹框类型：小框 中框 大框 表单
            modalType: {
                type: String,
                default: 'form'
            },
            //弹框标题
            title: String,
            //按钮类型：1、确定按钮 2、取消按钮 3、确定取消
            btnType: String,
            sureText: {
                type: String,
                default: '确定'
            },
            cancelText: {
                type: String,
                default: '取消'
            },
            showModal:Boolean
        }
    }
</script>
<style lang="scss">
    @import './../assets/scss/config.scss';
    @import './../assets/scss/modal.scss'; 
    @import './../assets/scss/mixin.scss'; 
    // @import './../assets/scss/mixin.scss'; 
</style>