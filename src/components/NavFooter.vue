<template>
    <!-- //不能并列出现两个div，必须只有一个根元素 -->
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
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
</template>
<script>
    export default {
        name: 'nav-footer' //组件名称或者页面名称，加载组件引用的值
    }
</script>
<style lang="scss">
    @import './../assets/scss/config.scss';
    .footer {
        height: 234px;
        border-top: 4px solid #FF7301;
        background-color: #333;
        color: #999;
        font-size: 16px;
        text-align: center;
        .footer-logo {
            margin-top:46px;
            margin-bottom: 31px;
            img {
                width: 53px;
                height: 36px;
                margin-bottom: 13px;
            }
        }
        .footer-link {
            a {
                display: inline-block;
                color: #999;
            }
            a:hover {
                color: #ff6600;
            }
            span {
                margin: 0 10px;
            }
        }
        .copyright {
            margin-top: 10px;
        }
    }
</style>