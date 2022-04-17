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
                <div class="item-price">2599元</div>
                <div class="line"></div>
                <div class="item-addr">
                    <i class="icon-loc"></i>
                    <div class="addr">北京 北京市 朝阳区 安定门街道</div>
                    <div class="stock">有现货</div>
                </div>
                <div class="item-version">
                    <h2>选择版本</h2>
                    <div class="phone checked">6GB+64GB 全网通</div>
                    <div class="phone">4GB+54GB 移动4G</div>
                </div>
                <div class="item-color">
                    <h2>选择颜色</h2>
                    <div class="phone checked">深空灰</div>
                </div>
                <div class="item-total">
                    <div class="phone-info">
                        <div class="fl">小米9 6GB+64GB 全网通 深灰色</div>
                        <div class="fr">2599元</div>
                    </div>
                    <div class="phone-total">
                        总计：2599元
                    </div>
                </div>
                <div class="btn-group">
                    <a href="javasript:;" class="btn btn-huge">加入购物车</a>
                </div>
            </div>
        </div>
        <div class="price-info">
            <div class="container">
                <h2>价格说明</h2>
                <div class="desc">
                    <img src="/imgs/detail/item-price.jpeg" alt="">
                </div>
            </div>
        </div>
        <service-bar>
        </service-bar>
    </div>
</template>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    import ProductParam from './../components/ProductParam';
    import ServiceBar from './../components/ServiceBar';
    export default {
        name: 'detail' ,//组件名称或者页面名称，加载组件引用的值
        components: {
            ServiceBar,
            ProductParam,
            swiper,
            swiperSlide
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
                productInfoList: [
                    {
                        id: '42',
                        name: '小米CC9',
                        info: '3200万自拍，4800万三摄',
                        price: '1799'
                    },
                    {                        
                        id: '33',
                        name: '小米9',
                        info: '小米9 战斗天使',
                        price: '2599'
                    },
                    {
                        id: '48',
                        name: 'Redmi K20 Pro 尊享版',
                        info: '真旗舰、敢K.O.',
                        price: '2699'
                    },
                    {
                        id: '45',
                        name: '红米Note 7',
                        info: '4800万拍照千元机 / 品质“小金刚',
                        price: '999'
                    },
                    {
                        id: '47',
                        name: '小米MIX 3',
                        info: '一面科技，一面艺术',
                        price: '2599'
                    }
                ]
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
            overflow: hidden;
            product-param {
                background-color: #fff;
                z-index: 100;
            }
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
            .content {
                width: 584px;
                height: 870px;
                float: right;
                .item-title {
                    font-size: 28px;
                    padding-top: 30px;
                    padding-bottom: 16px;
                    height: 28px;
                }
                .item-info {
                    font-size: 14px;
                    height: 36px;
                }
                .delivery {
                    font-size: 16px;
                    color: $colorA;
                    height: 15px;
                    margin-top: 26px;
                    margin-bottom: 14px;
                }
                .item-price {
                    height: 19px;
                    font-size: 20px;
                    color: $colorA;
                }
                .line {
                    height: 0;
                    margin: 25px 0 28px;
                    border-top: 1px solid #e5e5e5;
                }
                .item-addr {
                    position: relative;
                    height: 108px;
                    background-color: #fafafa;
                    font-size: 14px;
                    line-height: 14px;
                    border: 1px solid $colorH;
                    padding: 31px 0 0  64px;
                    box-sizing: border-box;
                    .icon-loc {
                        position: absolute;
                        top: 27px;
                        left: 34px;
                        width: 20px;
                        height: 20px;
                        background: url('/imgs/detail/icon-loc.png') no-repeat 50%;
                        background-size: contain;
                    }
                    .stock {
                        margin-top: 15px;
                    }
                }
                .item-version,
                .item-color {
                    overflow: hidden;
                    margin-top: 30px;
                    h2 {
                        font-size: 18px;
                        margin-bottom: 20px;
                    }
                    .phone {
                        float: right;
                        width: 287px;
                        height: 50px;
                        line-height: 50px;
                        font-size: 16px;
                        color: #333;
                        border: 1px solid #e5e5e5;
                        box-sizing: border-box;
                        text-align: center;
                        cursor: pointer;
                    }
                    .checked {
                        float: left;
                        border: 1px solid #f60;
                        color: $colorA;
                    }
                }
                .item-total {
                    height: 108px;
                    background-color: #fafafa;
                    padding: 24px 33px 29px 30px;
                    font-size: 14px;
                    margin: 50px 0 30px;
                    box-sizing: border-box;
                    .phone-info {
                        overflow: hidden;
                        .fl {
                            float: left;
                        }
                        .fr {
                            float: right;
                        }
                    }
                    .phone-total {
                        font-size: 24px;
                        color: $colorA;
                        margin-top: 18px;
                    }
                }
            }
        }
        .price-info {
            height: 340px;
            background-color: #f3f3f3;
            h2 {
                padding-top: 38px;
                margin-bottom: 30px;
                font-size: 24px;
                color: #333;
            }
        }
    }
</style>