module.exports = {
  outputDir: './docs',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/my-blog-vue3-ts/'
    : '/'
};
