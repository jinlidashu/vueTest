/**
 * Created by liweiliang 406320591@QQ.com on 2019/10/22 0022 17:03.
 */

const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
    configureWebpack: config => {
        config.externals = {
            vue: 'Vue',
            'element-ui': 'ELEMENT',
            'vue-router': 'VueRouter',
            vuex: 'Vuex',
            axios: 'axios',
            echarts: 'echarts'
        }
    },
    chainWebpack: config => {
        const cdn = {
            css: ['https://cdn.staticfile.org/element-ui/2.12.0/theme-chalk/index.css'],
            js: [
                'https://cdn.staticfile.org/vue/2.6.10/vue.min.js',
                'https://cdn.staticfile.org/vue-router/3.1.3/vue-router.min.js',
                'https://cdn.staticfile.org/vuex/3.1.1/vuex.min.js',
                'https://cdn.staticfile.org/axios/0.19.0-beta.1/axios.min.js',
                'https://cdn.staticfile.org/element-ui/2.12.0/index.js',
                'https://cdn.staticfile.org/echarts/4.4.0-rc.1/echarts.min.js'
            ]
        };
        // html中添加cdn
        config.plugin('html').tap(args => {
            args[0].cdn = cdn;
            return args;
        })

        // 添加别名
        config.resolve.alias
            .set("vue$", "vue/dist/vue.esm.js")
            .set("@", resolve("src"))
            .set("@assets", resolve("src/assets"))
        // .set("@scss", resolve("src/assets/scss"))
        // .set("@components", resolve("src/components"))
        // .set("@plugins", resolve("src/plugins"))
        // .set("@views", resolve("src/views"))
        // .set("@router", resolve("src/router"))
        // .set("@store", resolve("src/store"))
        // .set("@layouts", resolve("src/layouts"))
        // .set("@static", resolve("src/static"));
    },

    lintOnSave: false,   // 取消 eslint 验证
    runtimeCompiler: true,
    publicPath: '/', // 设置打包文件相对路径
    devServer: {
        // overlay: { // 让浏览器 overlay 同时显示警告和错误
        //   warnings: true,
        //   errors: true
        // },
        open: true, //配置是否自动启动浏览器
        // host: "localhost",
        port: "8080", // 代理端口
        // https: false,
        // hotOnly: false, // 热更新
        proxy: {
            '/v1': {
                // target: 'http://104.42.45.101:9002/v1/', //对应自己的接口
                target: 'http://aischool.meezao.com/v1/', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/v1': ''
                }
            },
            '/api': {
                target: 'https://meezaoanalysis.file.core.windows.net', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
}
