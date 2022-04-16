<template>
    <div class="detail">
        <product-param v-bind:title="product.name">
        </product-param>
        <div class="container">
            <div class="swiper">
                <swiper v-bind:options="swiperOption">
                    <swiperSlide v-for="(item,index) in sliderList" v-bind:key="index">
                        <img v-bind:src="item.img">
                    </swiperSlide>
                    <div class="swiper-pagination" slot="pagination"></div>

                </swiper>
            </div>
            <div class="content">
                <h2 class="item-title">小米9</h2>
                <p class="item-info">
                    相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红
                    <br>
                    外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏
                </p>
                <div class="delivery">小米自营</div>
                <div class="item-price"></div>
                <div class="line"></div>
                <div class="item-addr"></div>
                <div class="item-version"></div>
                <div class="item-color"></div>
                <div class="item-total"></div>
                <div class="btn-group"></div>
            </div>
        </div>
        <service-bar>
        </service-bar>
    </div>
</template>
<script>
    // import { swiper, swiperSlide } from 'vue-awesome-swiper';
    import ProductParam from './../components/ProductParam';
    import ServiceBar from './../components/ServiceBar';
    export default {
        name: 'detail' ,//组件名称或者页面名称，加载组件引用的值
        components: {
            ServiceBar,
            ProductParam,
            // swiper,
            // swiperSlide
        },
        data() {
            return {
                product: {
                    name: '小米CC9'
                },
                swiperOption: {
                    autoplay:true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable :true,
                    }
                },
                sliderList: [
                    {
                        // id: '45',
                        img: '/imgs/detail/phone-1.jpg'
                    },
                    {
                        // id: '46',
                        img: '/imgs/detail/phone-2.jpg'
                    },
                    {
                        // id: '',
                        img: '/imgs/detail/phone-3.jpg'
                    },
                    {
                        // id: '42',
                        img: '/imgs/detail/phone-4.jpg'
                    }
                ],

            }
        },
        mounted() {

        },
        methods: {

        }
    }
</script>
<style lang="scss">
    @import './../assets/scss/mixin.scss';
    @import './../assets/scss/config.scss';
    .detail {
        .container {
            .swiper {
                float: left;
                width: 642px;
                height: 617px;
                margin-top: 5px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>