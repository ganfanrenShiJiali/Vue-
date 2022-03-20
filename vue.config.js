// 就是WebAPI的配置表，传送给node.js服务器，实现服务的设置
module.exports = { //导出一个object对象
    devServer: {
        host: 'localhost',
        port: 8080, //通过这里修改vue.config.js端口
        proxy: {
            '/api': {
                target: '', //拦截到api代理到哪里去
                changeOrigin: false, //是否将主机头的源点更改为目标点的url地址
                //访问-a实际上是访问的-b。访问的是一个网址，看起来是访问自己的接口
                pathReWrite: {
                    'api': ''
                }
            },
            '/foo': {
                target: "<other_url>"
            }
        }
    }
}