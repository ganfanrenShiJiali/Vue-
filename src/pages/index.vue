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
            <div class="ads-box">
                <a v-bind:href="'/#/product/'+item.id" v-for="(item,index) in adsList" v-bind:key="index">
                    <img v-lazy="item.img" alt="">
                </a>
            </div>
            <div class="banner">
                <a href="/#/product/30">
                    <!-- v-lazy里面不是字符串是一个变量，因此加单引号 -->
                    <img v-lazy="'/imgs/banner-1.png'" alt="">
                </a>
            </div>
        </div>
        <div class="product-box">
            <div class="container">
                <h2>手机</h2>
                <div class="wrapper">
                    <div class="banner-left">
                            <a href="/#/product/35"><img v-lazy="'/imgs/mix-alpha.jpg'" alt=""></a>
                    </div>
                    <div class="list-box">
                        <div class="list" v-for="(arr,i) in phoneList" v-bind:key="i">
                            <div class="item" v-for="(item,j) in arr" v-bind:key="j">
                                <!-- 如果是偶数就是新品 -->
                                <span v-bind:class="{'new-pro':j%2==0}">新品</span>
                                <div class="item-img">
                                    <img v-lazy="'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0d4b362431de4bdda03315ffdbc7b32a.jpg?thumb=1&w=260&h=260&f=webp&q=90'" alt="">
                                    <!-- <img v-lazy="item.mainImage" alt=""> -->
                                </div>
                                <div class="item-info">
                                    <h3>Xiaomi 11 青春活力版</h3>
                                    <!-- <h3>{{item.name}}</h3> -->
                                    <p>骁龙855，索尼4800万超广角微距</p>
                                    <!-- <p>{{item.subtitle}}</p> -->
                                    <p class="price" @click="addCart(item.id)">2999元</p>
                                    <!-- <p class="price">{{item.price}}元</p> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <service-bar></service-bar>
        <!-- 因为modal不是一个标签而是一个组件，用子组件定义的@名称，而不是v-on:click -->
        <modal 
            modalType="middle" 
            title="提示" 
            sureText="查看购物车" 
            btnType="3" v-bind:showModal="showModal"
            v-on:submit="goToCart"
            v-on:cancel="showModal=false"
        >
            <!-- //插槽首先定义一个template模板，然后用v-slot:插槽名称 -->
            <template v-slot:body>
                <p>商品添加成功！</p>
            </template>
        </modal>
    </div>
</template>
<script>
    import ServiceBar from './../components/ServiceBar'
    import Modal from './../components/Modal'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import "swiper/dist/css/swiper.css"   
    
    export default {
        name: 'index', //组件名称或者页面名称，加载组件引用的值
        components: { //加载多个组件
            swiper,
            swiperSlide,
            Modal,
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
                ],
                adsList: [
                    {
                        id: 33,
                        img: '/imgs/ads/ads-1.png'
                    },{
                        id: 48,
                        img: '/imgs/ads/ads-2.jpg'
                    },{
                        id: 45,
                        img: '/imgs/ads/ads-3.png'
                    },{
                        id: 47,
                        img: '/imgs/ads/ads-4.jpg'
                    }
                ],
                phoneList: [
                    [0,0,0,0],[0,0,0,0]
                ],
                showModal: false
            }
        },/*
        mounted() {
            this.init();
        },*/
        methods: {
            init() {
               this.axios.get('/products',{
                        params: {
                            categoryId:100012,
                            pageSize:14
                        }
                   }).then((res)=>{
                       //slice不会改变原数组，splice改变原数组
                       this.list = res.list.slice(6,14);
                       this.phoneList = [res.list.slice(0,4),res.list.slice(4,8)];
               }) 
            },
            addCart(){
                this.showModal = true;
                
                // this.axios.post('/carts',{
                //     productId: id,
                //     // 加入购物车之后默认选中状态
                //     selected: true 
                // }).then(()=>{

                // }).catch(()=>{
                //     this.showModal = true;
                // })
            },
            goToCart() {
                this.$router.push('/cart');
            }
        }
    }
</script>
<style lang="scss">
    @import './../assets/scss/mixin.scss';
    @import './../assets/scss/config.scss';
    // @import './../assets/scss/modal.scss';
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
        .ads-box {
            margin-top: 14px;
            margin-bottom: 31px;
            @include flex();
            a {
                width: 296px;
                height: 167px;

            }
        }
        .banner {
            margin-bottom: 50px;
        }
        .product-box {
            background-color: $colorJ;
            padding: 30px 0 50px;
            h2 {
                font-size: $fontF;
                height: 21px;
                line-height: 21px;
                color: $colorB;
                margin-bottom: 20px;
            }
            .wrapper {
                display: flex;//弹性布局，里面的元素自动排列
                .banner-left {
                    margin-right: 16px;
                    img {
                        width: 224px;
                        height: 619px;
                    }
                }
                .list-box {
                    .list {
                        @include flex();
                        width: 986px;
                        margin-bottom: 14px;
                        &:last-child {
                            margin-bottom: 0;
                        }
                        .item {
                            width: 236px;
                            height: 302px;
                            background-color: $colorG;
                            text-align: center;
                            span {
                                text-align: center;
                                // position: absolute;
                                display: inline-block;
                                width: 67px;
                                height: 24px;
                                line-height: 24px;
                                font-size: 14px;
                                color: #fff;
                                //新品
                                &.new-pro {
                                    background-color: #7ECF68;
                                }
                                //秒杀
                                &.kill-pro {
                                    background-color: #E82626;
                                }
                            }
                            .item-img {
                                img {
                                    // width: 100%;
                                    height: 195px;
                                }
                            }
                            .item-info {
                                h3 {
                                    font-size: $fontJ;
                                    color: $colorB;
                                    line-height: 14px;
                                    font-weight: bold; 
                                }
                                p {
                                    color: $colorD;
                                    line-height: 13px;
                                    margin: 6px 0 13px;
                                }
                                .price {
                                    color: #F20A0A;
                                    font-size: $fontJ;
                                    font-weight: bold;
                                    cursor: pointer;
                                    &:after {
                                        content:' ';
                                        @include bgImg(22px, 22px, '/imgs/icon-cart-hover.png');
                                        margin-left: 5px;
                                        vertical-align: text-bottom;
                                        
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        
    }
</style>