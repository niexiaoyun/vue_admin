module.exports = {
    publicPath : this.process.env.VUE_APP_BaseUrl || '/',
    //构建好的文件输出到哪里
    outputDir : 'dist',
    //放置静态资源的文件夹
    assetsDir : 'asset',
    //保存时不校验参数
    lintOnSave: false, 
    devServer:{
        proxy: 'http://www.baidu.com'
    }
}