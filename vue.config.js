module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        //内部默认的别名@ = src
        // '@' : 'src'
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}