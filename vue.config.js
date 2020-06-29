const pxtovw = require("postcss-px-to-viewport");
("use strict");
const path = require("path");
const webpack = require("webpack");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = ["js", "css"];
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  // 开发服务配置
  publicPath: process.env.NODE_ENV === "production" ? "/sw" : "/",
  devServer: {
    port: 8008, // 端口号
    host: "localhost", // 主机
    https: false, // 是否启用https
    open: false, // 配置是否自动启动浏览器
    // 配置多个代理
    proxy: {
      "/api": {
        // target: 'http://192.168.1.104:9095/', // 本地模拟数据服务器
        target: "https://www.tjsichuang.cn:1443", // 远程服务器
        changeOrigin: true,
        pathRewrite: {
          "^/api": "" // 去掉接口地址中的api字符串
        }
      }
    }
  },
  // webpack配置节点
  configureWebpack: {
    // 路径配置
    resolve: {
      extensions: [".js", ".vue", ".json", ".css"],
      // 别名配置
      alias: {
        // @ is an alias to /src
        "@": resolve("src")
      }
    },
    // 插件配置
    plugins: [
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      // 配置compression-webpack-plugin压缩
      new CompressionWebpackPlugin({
        algorithm: "gzip",
        test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
        threshold: 10240,
        minRatio: 0.8
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 5,
        minChunkSize: 100
      })
    ],
    // webpack-load配置
    module: {
      rules: []
    }
  },
  chainWebpack: config => {
    config.optimization.splitChunks({
      chunks: "all", // async表示抽取异步模块，all表示对所有模块生效，initial表示对同步模块生效
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/, // 指定是node_modules下的第三方包
          name: "chunk-vendors",
          chunks: "all",
          priority: -10 // 抽取优先级
        },
        // 抽离自定义工具库
        utilCommon: {
          name: "chunk-common",
          minSize: 1024, // 将引用模块分离成新代码文件的最小体积
          minChunks: 2, // 表示将引用模块如不同文件引用了多少次，才能分离生成新chunk
          priority: -20
        }
      }
    });
    config.optimization.runtimeChunk({
      name: entryPoint => `manifest.${entryPoint.name}`
    });
  },
  css: {
    loaderOptions: {
      sass: {
        //给sass-loader传递选项
      },
      css: {
        //给css-loader传递选项
      },
      postcss: {
        //给postcss-loader传递选项
        plugins: [
          new pxtovw({
            unitToConvert: "px", //需要转换的单位，默认为"px"；
            viewportWidth: 1920, //设计稿的视口宽度
            unitPrecision: 3, //单位转换后保留的小数位数
            propList: ["*"], //要进行转换的属性列表,*表示匹配所有,!表示不转换
            viewportUnit: "vw", //转换后的视口单位
            fontViewportUnit: "vw", //转换后字体使用的视口单位
            selectorBlackList: [], //不进行转换的css选择器，继续使用原有单位
            minPixelValue: 1, //设置最小的转换数值
            mediaQuery: false, //设置媒体查询里的单位是否需要转换单位
            replace: true, //是否直接更换属性值，而不添加备用属性
            exclude: [/node_modules/] //忽略某些文件夹下的文件
          })
        ]
      }
    }
  }
};
