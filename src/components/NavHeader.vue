<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javasript:;">小米商城</a>
                    <a href="javasript:;">MIUI</a>
                    <a href="javasript:;">云服务</a>
                    <a href="javasript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javasript:;" v-if="username">{{username}}</a>
                    <a href="javasript:;" v-if="!username" @click="login">登录</a>
                    <a href="javasript:;" v-if="username">我的订单</a>
                    <a href="javasript:;" class="my-cart" @click="goToCart"><span class="icon-cart"></span>购物车</a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <!-- 有下拉区域 为了留子区域 不用a 用div div下装子元素 -->
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product" v-for="(item,index) in phoneList" :key="index">
                                    <!-- a行内可以嵌套div -->
                                    <a v-bind:href="'/#/product/'+item.id" target="_blank">
                                        <div class="pro-img">
                                            <img :src="item.mainImage" :alt="item.subtitle">
                                        </div>
                                        <div class="pro-name">{{item.name}}</div>
                                        <div class="pro-price">{{item.price | currency}}</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <!-- a行内可以嵌套div -->
                                    <a href="#" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-1.png" alt="">
                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <!-- a行内可以嵌套div -->
                                    <a href="#" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-2.png" alt="">
                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>                           
                                <li class="product">
                                    <!-- a行内可以嵌套div -->
                                    <a href="#" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3.png" alt="">
                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <!-- a行内可以嵌套div -->
                                    <a href="#" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-4.png" alt="">
                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <!-- a行内可以嵌套div -->
                                    <a href="#" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-5.png" alt="">
                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <!-- a行内可以嵌套div -->
                                    <a href="#" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-6.png" alt="">
                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li> 
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>RedMi红米</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <!-- a行内可以嵌套div -->
                                    <a href="#" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-1.jpg" alt="">
                                        </div>
                                        <div class="pro-name">RedMi智能电视X55 2022</div>
                                        <div class="pro-price">2669元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <!-- a行内可以嵌套div -->
                                    <a href="#" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-2.jpg" alt="">
                                        </div>
                                        <div class="pro-name">RedMi智能电视X55 2022</div>
                                        <div class="pro-price">2669元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <!-- a行内可以嵌套div -->
                                    <a href="#" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-3.png" alt="">
                                        </div>
                                        <div class="pro-name">RedMi智能电视X55 2022</div>
                                        <div class="pro-price">2669元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <!-- a行内可以嵌套div -->
                                    <a href="#" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-4.jpg" alt="">
                                        </div>
                                        <div class="pro-name">RedMi智能电视X55 2022</div>
                                        <div class="pro-price">2669元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <!-- a行内可以嵌套div -->
                                    <a href="#" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-5.jpg" alt="">
                                        </div>
                                        <div class="pro-name">RedMi智能电视X55 2022</div>
                                        <div class="pro-price">2669元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <!-- a行内可以嵌套div -->
                                    <a href="#" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-6.png" alt="">
                                        </div>
                                        <div class="pro-name">RedMi智能电视X55 2022</div>
                                        <div class="pro-price">2669元</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'nav-header', //组件名称或者页面名称，加载组件引用的值
        data() {
            return {
                username:'jack',//默认用户名
                phoneList:[]
            }
        },
        //过滤器：金额格式化 日期格式化
        filters:{
            currency(val){
                if(!val) return '0.00';
                return '￥' + val.toFixed(2) + '元';
            }
        },
        mounted() {
            this.getProductList();
        },
        methods:{
            login() {
                this.$router.push('/login');
            },
            getProductList() {
                //如果是get请求，用params传参，如果是post请求，传参直接写
                this.axios.get('/products', {
                    params: {
                        categoryId:'100012',//产品类型
                        pageSize:6
                    }
                }).then((res)=>{
                    //如果产品数量大于6，就截取前6个
                    if(res.list.length>=6) {
                        this.phoneList = res.list.slice(0,6);
                    }
                })
            },
            goToCart(){
                this.$router.push('/cart');
            }
        }
    }
</script>
<style lang="scss">
    @import './../assets/scss/base.scss';
    @import './../assets/scss/mixin.scss';
    @import './../assets/scss/config.scss';
    .header {
        .nav-topbar {
            height: 39px;
            line-height: 39px;
            background-color: #333333;
            color: #B0B0B0;
            .container {
                @include flex();//调用方法
                a {
                    display: inline-block;
                    color: #B0B0B0;
                    margin-right: 17px;
                }
                .my-cart {
                    width: 100px;
                    background-color: #F60;
                    text-align: center;
                    color: #fff;
                    .icon-cart {
                        @include bgImg(16px,12px,'/imgs/icon-cart-checked.png');
                        margin-right:4px;
                        vertical-align: text-top;
                    }
                }
            }
        }
        .nav-header {
            // height: 112px;
            .container{//为什么嵌套container
                position: relative;
                height: 112px;//为什么不加到nav-header上？
                @include flex();
                .header-logo {
                    display: inline-block;//为什么div设成行内块
                    width: 55px;
                    height: 55px;
                    background-color: #F60;
                    //通过before after伪类的方式设置两张图片
                    a {
                        display: inline-block;
                        width: 110px;
                        height: 55px;
                        &:before {//before伪类，在元素之前插入内容
                            content: ' ';//占位 定义为空 为什么？
                            @include bgImg(55px,55px,'/imgs/mi-logo.png',55px);
                            transition: margin .2s;
                        }
                        &:after {
                            content: ' ';//占位 定义为空 为什么？
                            @include bgImg(55px,55px,'/imgs/mi-home.png',55px);
                        }
                        &:hover:before{
                            margin-left: -55px;
                            //transition transform event-banmermartion
                            transition: margin .2s;
                        }
                    }
                }
                .header-menu {
                    display: inline-block;//因为不是整个的块级元素
                    width: 643px;
                    padding-left: 209px;
                    .item-menu {
                        display: inline-block;
                        color: #333333;
                        font-weight: 700;
                        font-size: 16px;
                        line-height: 112px;
                        margin-right: 20px;
                        span {
                            cursor: pointer;
                        }
                        &:hover {
                            color: $colorA;
                            .children {
                                height: 220px;
                                opacity: 1;
                            }
                        }
                        .children {
                            position:absolute;
                            top:112px;
                            left:0;
                            width:1226px;
                            height: 0;
                            opacity: 0;//透明度
                            overflow: hidden;
                            border-top: 1px solid #E5E5E5;
                            background-color: #fff;
                            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.1);
                            z-index: 10;
                            transition: all .5s;
                            .product {
                                position: relative;
                                float:left;
                                width: 16.6%;
                                height: 220px;
                                font-size:12px;
                                line-height: 12px;
                                text-align: center;
                                a {
                                    display: inline-block;
                                }
                                .pro-img {
                                    height: 137px;
                                }
                                img {
                                    width: auto;
                                    height: 111px;
                                    margin-top:26px;
                                }
                                .pro-name {
                                    font-weight: bold;
                                    margin-top: 19px;
                                    margin-bottom: 8px;
                                    color: $colorB;
                                }
                                .pro-price {
                                    color: $colorA;
                                }
                                //小竖线 用before伪类
                                &:before {
                                    content: ' ';//一定要占位
                                    position: absolute;
                                    top: 28px;
                                    right: 0;
                                    border-left: 1px solid $colorF;
                                    height: 100px;
                                    width: 1px;
                                }
                                &:last-child:before {//特殊处理最后一个元素
                                    display: none;
                                }
                            }
                        }
                    }
                }
                .header-search {
                    width: 319px;
                    .wrapper {
                        height: 50px;
                        border: 1px solid #E0E0E0;
                        display: flex;
                        align-items: center;
                    }
                    input {
                        border: none;
                        border-right: 1px solid #E0E0E0;
                        box-sizing: border-box;
                        width: 264px;
                        height: 50px;
                        padding-left: 14px;
                        
                    }
                    a{
                        @include bgImg(18px,18px,'/imgs/icon-search.png');
                        margin-left: 17px;
                    }
                }
            }
        }
    }
</style>