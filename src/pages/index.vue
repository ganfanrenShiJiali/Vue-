<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <div class="nav-menu">
                    <ul class="menu-wrap">
                        <li class="menu-item">
                            <a href="javascript:;">手机 电话卡</a>
                            <div class="children">
                                <!-- ul循环6次 -->
                                <ul v-for="(item,i) in menuList" v-bind:key="i">
                                    <li v-for="(sub,j) in item" v-bind:key="j">
                                        <!-- v-bind绑定链接或图片 -->
                                        <a v-bind:href="sub?'/#/product/'+sub.id:''">
                                            <!-- 名字或者图片如果为真就加载，如果不为真就默认小米cc9 -->
                                            <img v-bind:src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                            {{sub?sub.name:'小米CC9'}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电视 盒子</a>
                            <div class="children">
                                <!-- ul循环6次 -->
                                <ul v-for="(item,i) in menuList" v-bind:key="i">
                                    <li v-for="(sub,j) in item" v-bind:key="j">
                                        <!-- v-bind绑定链接或图片 -->
                                        <a v-bind:href="sub?'/#/product/'+sub.id:''">
                                            <!-- 名字或者图片如果为真就加载，如果不为真就默认小米cc9 -->
                                            <img v-bind:src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                            {{sub?sub.name:'小米CC9'}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">笔记本 平板</a>
                            <div class="children">
                                <!-- ul循环6次 -->
                                <ul v-for="(item,i) in menuList" v-bind:key="i">
                                    <li v-for="(sub,j) in item" v-bind:key="j">
                                        <!-- v-bind绑定链接或图片 -->
                                        <a v-bind:href="sub?'/#/product/'+sub.id:''">
                                            <!-- 名字或者图片如果为真就加载，如果不为真就默认小米cc9 -->
                                            <img v-bind:src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                            {{sub?sub.name:'小米CC9'}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">家电 插线板</a>
                            <div class="children">
                                <!-- ul循环6次 -->
                                <ul v-for="(item,i) in menuList" v-bind:key="i">
                                    <li v-for="(sub,j) in item" v-bind:key="j">
                                        <!-- v-bind绑定链接或图片 -->
                                        <a v-bind:href="sub?'/#/product/'+sub.id:''">
                                            <!-- 名字或者图片如果为真就加载，如果不为真就默认小米cc9 -->
                                            <img v-bind:src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                            {{sub?sub.name:'小米CC9'}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">出行 穿戴</a>
                            <div class="children">
                                <!-- ul循环6次 -->
                                <ul v-for="(item,i) in menuList" v-bind:key="i">
                                    <li v-for="(sub,j) in item" v-bind:key="j">
                                        <!-- v-bind绑定链接或图片 -->
                                        <a v-bind:href="sub?'/#/product/'+sub.id:''">
                                            <!-- 名字或者图片如果为真就加载，如果不为真就默认小米cc9 -->
                                            <img v-bind:src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                            {{sub?sub.name:'小米CC9'}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">智能 路由器</a>
                            <div class="children">
                                <!-- ul循环6次 -->
                                <ul v-for="(item,i) in menuList" v-bind:key="i">
                                    <li v-for="(sub,j) in item" v-bind:key="j">
                                        <!-- v-bind绑定链接或图片 -->
                                        <a v-bind:href="sub?'/#/product/'+sub.id:''">
                                            <!-- 名字或者图片如果为真就加载，如果不为真就默认小米cc9 -->
                                            <img v-bind:src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                            {{sub?sub.name:'小米CC9'}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电源 配件</a>
                            <div class="children">
                                <!-- ul循环6次 -->
                                <ul v-for="(item,i) in menuList" v-bind:key="i">
                                    <li v-for="(sub,j) in item" v-bind:key="j">
                                        <!-- v-bind绑定链接或图片 -->
                                        <a v-bind:href="sub?'/#/product/'+sub.id:''">
                                            <!-- 名字或者图片如果为真就加载，如果不为真就默认小米cc9 -->
                                            <img v-bind:src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                            {{sub?sub.name:'小米CC9'}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">生活 箱包</a>
                            <div class="children">
                                <!-- ul循环6次 -->
                                <ul v-for="(item,i) in menuList" v-bind:key="i">
                                    <li v-for="(sub,j) in item" v-bind:key="j">
                                        <!-- v-bind绑定链接或图片 -->
                                        <a v-bind:href="sub?'/#/product/'+sub.id:''">
                                            <!-- 名字或者图片如果为真就加载，如果不为真就默认小米cc9 -->
                                            <img v-bind:src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                            {{sub?sub.name:'小米CC9'}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <swiper v-bind:options="swiperOption">
                    <swiper-slide v-for="(item,index) in sliderList" v-bind:key="index">
                        <a v-bind:href="'/#/product/'+ item.id"><img v-bind:src="item.img"></a>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="ads">
                
            </div>
            <div class="banner">

            </div>
            <div class="product-box">

            </div>
        </div>
        <service-bar></service-bar>
    </div>
</template>
<script>
    import ServiceBar from './../components/ServiceBar'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import "swiper/dist/css/swiper.css"   
    
    export default {
        name: 'index', //组件名称或者页面名称，加载组件引用的值
        components: { //加载多个组件
            swiper,
            swiperSlide,
            ServiceBar
        },
        data() {
            return {
                swiperOption:{
                    autoplay: true,//自动播放
                    loop: true,//循环
                    effect: 'cube',//coverflow\flip\cube\slide切换效果
                    //立方体切换效果参数
                    cubeEffect: {
                        slideshadows: true,
                        shadow: true,
                        shadowOffset: 100,
                        shadowScale: 0.6
                    },
                    //小圆点，分页
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true//小圆点点击切换
                    },
                    //左右箭头点击前进后退
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    
                },
                sliderList: [
                    {
                        id: '42',
                        img: '/imgs/slider/slide-1.jpg'
                    },
                    {
                        id: '45',
                        img: '/imgs/slider/slide-2.jpg'
                    },
                    {
                        id: '46',
                        img: '/imgs/slider/slide-3.jpg'
                    },
                    {
                        id: '',
                        img: '/imgs/slider/slide-4.jpg'
                    },
                    {
                        id: '42',
                        img: '/imgs/slider/slide-5.jpg'
                    }
                ],
                //定义一个二维数组 六行四列
                menuList: [
                    //第一行
                    [
                        //第一个对象
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name:'小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name:'小米8 青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name:'Redmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name:'移动4G专区'
                        }
                    ],
                    [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
                ]
            }
        }
    }
</script>
<style lang="scss">
    @import './../assets/scss/mixin.scss';
    @import './../assets/scss/config.scss';
    .index {
        .swiper-box {
            position: relative;
            .nav-menu {
                position: absolute;
                width: 264px;
                height: 451px;
                z-index: 9;
                padding: 26px 0;
                //不用opacity，如果用文字的颜色也会变得透明（所有元素）
                background-color: #55585a7a;
                box-sizing: border-box;
                .menu-wrap {
                    .menu-item {
                        height: 50px;
                        line-height: 50px;
                        a {
                            display: block;
                            position: relative;
                            padding-left: 30px;
                            font-size: 16px;
                            color: #fff;
                            &:after {
                                position: absolute;
                                right: 30px;
                                top: 17.5px;
                                content: ' ';
                                @include bgImg(10px, 15px, '/imgs/icon-arrow.png');
                            }
                        }
                        &:hover {
                            background-color: $colorA;
                            .children {
                                display: block;
                            }
                        }
                        .children {
                            display: none;
                            position: absolute;
                            top: 0;
                            left: 264px;
                            width: 962px;
                            height: 451px;
                            background-color: #fff;
                            border: 1px solid $colorH;
                            ul {
                                display: flex;
                                justify-content: space-between;//?这不是列？
                                height: 75px;
                                li {
                                    height: 75px;
                                    line-height: 75px;
                                    // width: 241px;
                                    flex: 1;//4个li平均分配
                                    padding-left: 23px;
                                }
                                a {
                                    color: $colorB;
                                    font-size: 14px;
                                }
                                img {
                                    width: 35px;
                                    height: 42px;
                                    vertical-align: middle;
                                    margin-right: 15px;
                                }
                            }
                        }
                    }
                }
            }   
            .swiper-container {
                height: 451px;
                .swiper-button-prev {
                    left: 274px;
                }
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }

    }
</style>