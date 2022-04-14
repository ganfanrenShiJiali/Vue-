<template>
    <div class="product">
        <product-param>
            <template v-slot:buy>
                <div class="btn">
                    立即购买
                </div>
            </template>
        </product-param>
        <div class="content">
            <div class="item-bg">
                <h2>Redmi K20 Pro 尊享版</h2>
                <h3>真旗舰、敢K.O.</h3>
                <div class="intro">
                    <a href="java">全球首款双频 GP</a><span>|</span>
                    <a href="">骁龙845</a><span>|</span>
                    <a href="">AI 变焦双摄</a><span>|</span>
                    <a href="">红外人脸识别</a>
                </div>
                <div class="price">
                    <span>￥<em>2999</em></span>
                </div>
            </div>
            <div class="item-bg-2">
            </div>
            <div class="item-bg-3">
            </div>
            <div class="item-swiper">
                <swiper v-bind:options="swiperOption">
                    <swiper-slide v-for="(item,index) in sliderList" v-bind:key="index">
                        <a href="javascript:;"><img v-bind:src="item.img"></a>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
                <p class="desc">小米8 AI变焦双摄拍摄</p>
            </div>
            <div class="item-video">
                <h2>
                    60帧超慢动作摄影<br/>
                    慢慢回味每一瞬间的精彩
                </h2>
                <p>
                    后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br>
                    更能AI 精准分析视频内容，15个场景智能匹配背景音效。
                </p>
                <div class="video-bg" @click="showSlide=true">
                </div>
                <div class="video-box">
                    <!-- 视频遮罩 -->
                    <div class="overlay" v-if="showSlide"></div>
                    <div class="video" v-bind:class="{'slide':showSlide}">
                        <!-- autoplay自动播放，controls进度条 muted静音输出，辅助自动播放-->
                        <span class="icon-close" @click="showSlide=false"></span>
                        <video src="/imgs/product/video.mp4" muted autoplay controls="controls"></video>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    import ProductParam from './../components/ProductParam';
    export default {
        name: 'product', //组件名称或者页面名称，加载组件引用的值
        components: {
            ProductParam,
            swiper,
            swiperSlide
        },
        data() {
            return {
                showSlide: false,
                swiperOption: {
                    autoplay: true,//自动播放
                    slidesPerView:3,//设置slider容器能够同时显示的slides数量
                    spaceBetween: 30,//默认情况下Swiper 每次滑动时只滑动一个Slide，并且会自动贴合Wrapper。开启自由模式后，Swiper 会根据惯性滑动可能不止一格且不会贴合。
                    freeMode: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true//小圆点点击切换
                    },
                },
                sliderList: [
                    {
                        // id: '45',
                        img: '/imgs/product/gallery-2.png'
                    },
                    {
                        // id: '46',
                        img: '/imgs/product/gallery-3.png'
                    },
                    {
                        // id: '',
                        img: '/imgs/product/gallery-4.png'
                    },
                    {
                        // id: '42',
                        img: '/imgs/product/gallery-5.jpg'
                    },
                    {
                        // id: '42',
                        img: '/imgs/product/gallery-6.jpg'
                    },
                ]
            }
        }
    }
</script>
<style lang="scss">
    @import './../assets/scss/mixin.scss';
    .product {
        .btn {
            margin-left: 10px;
        }
        .content {
            .item-bg {
                height: 718px;
                background: url("../../public/imgs/product/product-bg-1.png") no-repeat 50%;
                text-align: center;
                h2 {
                    font-size: 80px;
                    padding-top: 50px;
                }
                h3 {
                    font-size: 24px;
                    letter-spacing: 10px;//字间距
                }
                .intro {
                    margin: 21px 0 40px;
                    a {
                        font-size: 16px;
                        color: #333;
                    }
                    span {
                        margin: 0 15px;
                    }
                }
                .price{
                    font-size: 30px;
                    em {
                        font-style: normal;
                        font-size: 38px;
                    }
                }
            }
            .item-bg-2 {
                height: 480px;
                background: url("../../public/imgs/product/product-bg-2.png") no-repeat 50%;
                background-size: 1226px;
                // text-align: center;
            }
            .item-bg-3 {
                height: 638px;
                background: url("../../public/imgs/product/product-bg-3.png") no-repeat 50%;
                background-size: cover;
            }
            .item-swiper {
                margin:36px auto 52px;
                .desc{
                    font-size:18px;
                    color:#333333;
                    text-align:center;
                }
            }
            .item-video {
                height: 1044px;
                background-color: #070708;
                color: #fff;
                margin-bottom: 76px;
                text-align: center;
                h2 {
                    font-size: 60px;
                    padding-top: 82px;
                    margin-bottom: 47px;
                }
                p {
                    font-size: 24px;
                    margin-bottom: 58px;
                }
                .video-bg {
                    background: url(/imgs/product/gallery-1.png) no-repeat 50%;
                    background-size: cover;
                    width: 1226px;
                    height: 540px;
                    margin: 0 auto;
                    cursor: pointer;
                }
                .video-box {
                    // z-index: 100;
                    .overlay {
                        @include position(fixed);
                        background-color: #333;
                        opacity: .4;
                        z-index: 10;
                    }
                    .video {
                        position: fixed;
                        top: -50%;
                        left: 50%;
                        transform: translate(-50%,-50%);
                        z-index: 10;
                        width: 1000px;
                        height: 536px;
                        opacity: 0;
                        transition: all .6s;
                        &.slide {
                            top: 50%;
                            opacity: 1;
                        }
                        .icon-close {
                            position: absolute;
                            top: 20px;
                            right: 20px;
                            @include bgImg(20px,20px,'/imgs/icon-close.png');
                            cursor: pointer;
                            z-index: 11;
                        }
                        video {
                            width: 100%;
                            height: 100%;
                            // 改变视频组件原有样式，使得视频内容覆盖整个窗口
                            object-fit: cover;
                            outline: none;
                        }
                    }
                }
            }
        }
    }
</style>