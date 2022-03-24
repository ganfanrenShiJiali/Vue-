//登录界面
<template>
    <div class="login">
        <div class="container">
            <a href="/#/index"><img src="/imgs/login-logo.png" alt=""></a>
        </div>
        <div class="wrapper">
            <div class="container">
                <div class="login-form">
                    <h3><span class="checked">账号登录</span><span class="sep">|</span><span>扫码登录</span></h3>
                    <!-- 为什么必须用div盒子包起来？ -->
                    <div class="input">
                        <!-- 双向数据绑定用v-model实现 -->
                        <input type="text" placeholder="请输入帐号" v-model="username">
                    </div>
                    <div class="input">
                        <input type="password" placeholder="请输入密码" v-model="password">
                    </div>
                    <div class="btn-box">
                        <!-- v-on:click -->
                        <a href="javascript:;" class="btn" @click="login">登录</a>
                    </div>
                    <div class="tips">
                        <div class="sms" @click="register">手机短信登录<span>/</span>注册</div>
                        <div class="reg">忘记密码？</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="footer-link">
                <a href="" target="_blank">小米商城</a><span class="sep">|</span>
                <a href="//www.miui.com/" target="_blank">MIUI</a><span class="sep">|</span>
                <a href="//home.mi.com/index.html" target="_blank">米家</a><span class="sep">|</span>
                <a href="" target="_blank">米聊</a><span class="sep">|</span>
                <a href="" target="_blank">多看</a><span class="sep">|</span>
                <a href="" target="_blank">游戏</a><span class="sep">|</span>
                <a href="" target="_blank">政企服务</a><span class="sep">|</span>
                <a href="" target="_blank">小米天猫店</a><span class="sep">|</span>
                <a href="" target="_blank">小米集团隐私政策</a><span class="sep">|</span>
                <a href="" target="_blank">小米公司儿童信息保护规则</a><span class="sep">|</span>
                <a href="" target="_blank">小米商城用户协议</a><span class="sep">|</span>
                <a href="" target="_blank">问题反馈</a><span class="sep">|</span>
                <a href="" target="_blank">Select Location</a>
            </div>
            <div class="copyright">
                © mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号
            </div>
        </div>
    </div>
</template>
<script>
    import { mapActions} from 'vuex';
    export default {
        name: 'login', //组件名称或者页面名称，加载组件引用的值
        // 不用：{},不然会变成全局变量，各个页面之间串用，应该声明成局部变量用data() {}
        data() {
            return {
                username: '',
                password: '',
                // 前端和后端通信需要cookie，把userId当做cookie
                userId: ''
                // res: {}
            }
        },
        // methods对象，里面写方法
        methods: {
            login() {
                //使用Vuecookie插件，main.js加载插件，插件不会用npm.js查

                //es6新语法，解码
                let { username, password } = this;
                this.axios.post('/user/login', {
                    username,
                    password
                }).then((res)=>{
                    // this.res = res;
                    //通过expires设置一个月过期
                    this.$cookie.set('userId',res.id,{expires: '1M'});
                    //用$store.dispatch方法激活一个方法saveUserName
                    // this.$store.dispatch('saveUserName', res.username);
                    this.saveUserName(res.username);
                    this.$router.push('/index');
                })
            },
            ...mapActions(['saveUserName']),
            register() {
                this.axios.post('/user/register', {
                    username: 'admin',
                    password: 'admin',
                    email: 'admin@163.com'
                }).then(()=>{
                    alert('注册成功');
                })
            }
        }
    }
</script>
<style lang="scss">
    @import '../assets/scss/mixin.scss';
    .login {
        &>.container {
            height: 113px;
            img {
                width: auto;
                height: 113px;
            }
        }
        .wrapper {
            background:url('/imgs/login-bg.jpg') no-repeat center;
            height: 576px;
            .container {
                .login-form {
                    position: absolute;
                    right: 0;
                    // bottom: 29px;
                    top: 37px;
                    width: 410px;
                    height: 510px;
                    background-color: #fff;
                    box-sizing: border-box;
                    padding: 0 31px;
                    box-sizing: border-box;
                    h3 {
                        line-height: 23px;
                        font-size: 24px;
                        text-align: center;
                        margin: 40px auto 49px;
                        .checked {
                            color: #f60;
                        }
                        .sep {
                            margin: 0 32px;
                        }
                    }
                    // 为什么直接给input设置高度无效，必须用div盒子包起来？
                    .input {
                        display: inline-block;
                        width: 348px;
                        height: 50px;
                        border: 1px solid #E5E5E5;
                        margin-bottom: 20px;
                        input {
                            width: 100%;
                            height: 100%;
                            padding: 18px;
                            border: none;
                        }
                    }
                    .btn {
                        width: 100%;
                        height: 50px;
                        line-height: 50px;
                        margin-top: 10px;
                        font-size: 16px;
                    }
                    .tips {
                        @include flex();
                        margin-top: 14px;
                        font-size: 14px;
                        cursor: pointer;
                        .sms {
                            color:#FF6600;
                            &:hover {
                                color: #ff6600c2;
                            }
                        }
                        .reg {
                            color:#999999;
                            &:hover {
                                color: #ff6600;
                            }
                        }
                    }
                }
            }
        }
        .footer {
            height: 160px;
            background-color: #fff;
            color: #999;
            border: none;
            text-align: center;
            padding-top: 60px;
            box-sizing: border-box;
        }
    }
</style>