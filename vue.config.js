module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/reprint_obsidian/'
    : '/',
  css: { extract: false },
}