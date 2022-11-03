module.exports = {
  outputDir: './docs',
  assetsDir: './',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/my-blog-vue3-ts/'
    : '/'
};
