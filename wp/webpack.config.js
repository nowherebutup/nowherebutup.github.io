const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const history = require('connect-history-api-fallback')
const convert = require('koa-connect')
const webpack = require('webpack')
// 因为配置文件运行在node环境下,故只能只用 require,module.export关键字
const dev = Boolean(process.env.WEBPACK_SERVE)

module.exports = {
  mode: dev ? 'development' : 'production',
  // 环境不同,可以将代码进行压缩优化,以及一些开发的提示去掉了
  devtool: dev ? 'cheap-module-eval-source-map' : 'hidden-source-map',
  // 生产环境下,利用cheap-module-eval-source-map生成的source-map能和每行源码对应,在js文件中插入source-map的位置,用于在 error report 工具中查看
  // 注:source-map作用:压缩后代码和源代码对应的位置信息文件,参考链接: https://zhuanlan.zhihu.com/p/44729691
  // 生产模式下,生成独立的source-map文件,并且不再js中留下source map 路径

  entry: './src/main.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: dev ? '[name].js' : '[chunkhash].js',
    // 因为配置了chunkFilename防止浏览器读取缓存,那么在output文件名同样要用hash的方式
    // 但是,在使用webpack-serve时,是没有chunkhash,用了会报错,所以在执行webpack-cli时使用hash
    chunkFilename: '[chunkhash].js'
    // 代码中引入的图片,css,js会根据配置分成一个或多个包,我们称包为chunk
    // chunkFilename用来配置chunk的文件名,使用chunkhash防止浏览器读取缓存的文件

  },
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src')
    }
  },
  module: {
    // 这里配置各种类型文件的加载器,称为loader
    // 在js中使用import的时候,webpack解析,会调用这里配置的loader对import的文件进行解析;
    rules: [
      {
        test: /\.js$/, // 使用正则匹配对应的文件
        exclude: /node_modules/, // 排除npm包中的js,这里面不需要解析
        use: ['babel-loader', 'eslint-loader']
        // 此处可以为字符串或数组形式,
        // 数组形式,loader从后往前解析,这里使用eslint-loader处理,返回的结果交给babel-loader解析
        // eslint-loader判断代码对否,babel-loader将代码转为ES5的版本
      },
      {
        test: /\.html$/, // 匹配HTML文件
        use: [
          {
            loader: 'html-loader', // 将HTML文件转为js字符串,合并到js文件中
            options: {
              // options接受attrs参数,表示标签的什么属性需要调用webpack的loader打包
              // 默认为img:src,webpack会把img中标签打包,然后src属性值也被替换成打包后的路径
              // webpack找到了href中的favicon图片,需要用什么loader处理,同样在下面的file-loader的test定义
              attrs: ['img:src', 'link:href']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
        // css-loader会将css转为js字符串,并且将background引用的图片交给url-loader打包
      },
      {
        test: /favicon\.png$/,
        // 上面的html-loader会把favicon解析出来,
        // 此处用test匹配到了,则用file-loader进行解析
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]' // hash为源文件的hash值,ext为保持原来的后缀格式
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        // html-loader会把img标签的图片解析出来,文件名匹配这里的正则表达式
        // css-loader也是会将ackground引用的图片匹配这里的正则表达式
        exclude: /favicon\.png$/,
        // 这里排除favicon是因为favicon在上面file-loader处理过了,
        // 若不排除,会再次处理一遍;
        use: [
          {
            loader: 'url-loader',
            // url-loader参数limit作用
            // 当文件小于limit,会将文件转为datauri格式内联到代码中
            // 当文件大于limit时,会调用file-loader,将文件存储到输出目录,并将引用的文件路径改为编译打包后的图片路径
            // 例如: 源码: <img src="smallpic.png">
            // 小于: <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA...">
            // 大于: <img src="/f78661bef717cf2cc2c2e5158f196384.png">
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  performance: {
    hints: dev ? false : 'warning'
  },
  plugins: [
    new HtmlWebpackPlugin({
      // webpack的入口文件是js文件,从这个入口文件开始,后续的js文件都没有importindex.html文件
      // 但是我们项目的浏览器打开的是index.html文件,然而整个的webpack打包过程都在index.html之外
      // 所以，需要这个plugin来和入口文件建立联系
      // 通过html-loader处理index.html有html-webpack-plugin储存为index.html到输出目录；
      template: './src/index.html',
      chunksSortMode: 'none' // 因为webpack4的兼容性问题,故在此设置这个参数为none;
    }),
    new webpack.HashedModuleIdsPlugin()
  ],
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all'
    }
  }
}

if (dev) {
  module.exports.serve = {
    port: '8080',
    add: app => {
      app.use(convert(history()))
    }
  }
}